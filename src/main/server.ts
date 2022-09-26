// This class is responsable for starting the server (controller + rabbitmq server). Calls a method created in another file
import { Message } from 'amqplib'
import { RabbitmqServer } from '../utils/rabbitmq/rabbitmq_server'
import { makeSaleController } from './factories/sale'

void (async () => {
  const rabbitMQServer = new RabbitmqServer('amqp://guest:guest@localhost:5672')
  await rabbitMQServer.start()
  const controller = makeSaleController()
  void rabbitMQServer.consume('sale_register', (message: Message) => {
    void controller.handle(message.content.toString())
  })
})()
