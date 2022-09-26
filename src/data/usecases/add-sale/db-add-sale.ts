import { Sale } from '../../../domain/models/sale'
import { AddSale, AddSaleModel } from '../../../domain/usecases/add-sale'
import { GetCustomerRepository } from '../../protocols/get-customer-repository'

export class DbAddSale implements AddSale {
  private readonly getCustomerRepository: GetCustomerRepository

  constructor (getCustomerRepository: GetCustomerRepository) {
    this.getCustomerRepository = getCustomerRepository
  }

  async add (saleData: AddSaleModel): Promise<Sale> {
    const customer = await this.getCustomerRepository.findOrCreate(saleData.customer)

    // Create sale with returned customer
    console.log('Hello ' + customer.name_customer)
    return {
      date_time: new Date('2022-09-26'),
      external_id: 'uuid',
      id: 123,
      id_customer: customer.id_custmer
    }
  }
}
