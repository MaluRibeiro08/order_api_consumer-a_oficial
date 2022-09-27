import { DeliveryRegister, RegisterDeliveryModel } from '../presentation/protocols/delivery-register'
import { RabbitmqServer } from './rabbitmq/rabbitmq_server'

export class RabbitMQDeliveryRegister implements DeliveryRegister {
  private readonly rabbitmqServer: RabbitmqServer
  private readonly exchange: string
  private readonly routingKey: string

  constructor (rabbitmqServer: RabbitmqServer, exchange: string, routingKey: string) {
    this.rabbitmqServer = rabbitmqServer
    this.exchange = exchange
    this.routingKey = routingKey
  }

  async sendDeliveryRegistrationRequest (deliveryData: RegisterDeliveryModel): Promise<boolean> {
    return await this.rabbitmqServer.publishInExchange(this.exchange, this.routingKey, JSON.stringify(deliveryData))
  }
}
