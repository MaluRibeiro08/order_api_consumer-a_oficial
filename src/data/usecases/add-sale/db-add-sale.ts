import { Sale } from '../../../domain/models/sale'
import { AddSale, AddSaleModel } from '../../../domain/usecases/add-sale'
import { GetCustomerRepository } from '../../protocols/get-customer-repository'
import { AddSaleRepository } from '../../protocols/add-sale-repository'
import { UuidGenerator } from '../../protocols/uuid-generator'
import { ItemRepository } from '../../protocols/item-repository'

export class DbAddSale implements AddSale {
  private readonly getCustomerRepository: GetCustomerRepository
  private readonly getItemRepository: ItemRepository
  private readonly uuidGenerator: UuidGenerator
  private readonly addSaleRepository: AddSaleRepository

  constructor (getCustomerRepository: GetCustomerRepository, addSaleRepository: AddSaleRepository, uuidGenerator: UuidGenerator, getItemRepository: ItemRepository) {
    this.getCustomerRepository = getCustomerRepository
    this.addSaleRepository = addSaleRepository
    this.uuidGenerator = uuidGenerator
    this.getItemRepository = getItemRepository
  }

  async add (saleData: AddSaleModel): Promise<Sale> {
    // Get a customer, responsable for the sale
    const returnedCustomer = await this.getCustomerRepository.findOrCreate(saleData.customer)

    // Creates an uuid to be the sale's external id
    const saleUuid = this.uuidGenerator.generate()

    // Replace items' external id to items' internal id and verify if there is enough amount
    for (const item of saleData.items) {
      item.id = await this.getItemRepository.getItemInternalId(item.id.toString())
      item.available_amount = await this.getItemRepository.getItemAvailableAmount(item.id.toString())
      const remainingAmount = item.available_amount - item.amount
      if (remainingAmount < 0) throw new Error('Excessive amount of items provided')
    }
    // Create sale (register it and relate it with its items) based on: Returned customer & Generated uuid
    return await this.addSaleRepository.add(Object.assign({}, saleData, { external_id_sale: saleUuid }, { customer: returnedCustomer }))
  }
}
