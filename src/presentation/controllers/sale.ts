import { AddSale } from '../../domain/usecases/add-sale'
import { Controller } from '../protocols/controller'
import { DeliveryRegister } from '../protocols/delivery-register'

export class SaleController implements Controller {
  private readonly addSale: AddSale
  private readonly deliveryRegister: DeliveryRegister

  constructor (addSale: AddSale, deliveryRegister: DeliveryRegister) {
    this.addSale = addSale
    this.deliveryRegister = deliveryRegister
  }

  async handle (receivedMessage: string): Promise<any> {
    const receivedMessageObject = JSON.parse(receivedMessage)

    const addSaleData = Object.assign({}, { customer: receivedMessageObject.customer }, { items: receivedMessageObject.items })
    const registeredSaleData = await this.addSale.add(addSaleData)

    const deliveryData = Object.assign({}, { sale: { external_id_sale: registeredSaleData.external_id_sale } }, { address: receivedMessageObject.address })
    await this.deliveryRegister.sendDeliveryRegistrationRequest(deliveryData)
  }
}
