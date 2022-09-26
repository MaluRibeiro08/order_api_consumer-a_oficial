import { AddSale } from '../../domain/usecases/add-sale'
import { Controller } from '../protocols/controller'

export class SaleController implements Controller {
  private readonly addSale: AddSale
  constructor (addSale: AddSale) {
    this.addSale = addSale
  }

  async handle (receivedMessage: string): Promise<any> {
    const receivedMessageObject = JSON.parse(receivedMessage)
    const addSaleData = Object.assign({}, { customer: receivedMessageObject.customer }, { items: receivedMessageObject.items })
    await this.addSale.add(addSaleData)
  }
}
