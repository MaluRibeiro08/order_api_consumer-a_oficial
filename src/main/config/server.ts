import { Message } from 'amqplib'
import { RabbitmqServer } from '../../utils/rabbitmq/rabbitmq_server'
import { makeSaleController } from '../factories/sale'

export const startrConsumerServer = async (): Promise<void> => {
  const rabbitMQServer = new RabbitmqServer('amqp://guest:guest@localhost:5672')
  await rabbitMQServer.start()
  const controller = makeSaleController()
  void rabbitMQServer.consume('sale_register', (message: Message) => {
    void controller.handle(message.content.toString())
  })
}
