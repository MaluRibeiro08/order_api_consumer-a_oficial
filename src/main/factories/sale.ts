import { DbAddSale } from '../../data/usecases/add-sale/db-add-sale'
import { CustomerMySQLRepository } from '../../infra/db/mysql/customer-repository/customer'
import { ItemMySQLRepository } from '../../infra/db/mysql/item-repository/item'
import { SaleMySQLRepository } from '../../infra/db/mysql/sale-repository/sale'
import { UuidGeneratorAdapter } from '../../infra/uuid-generator/uuid-generator-adapter'
import { SaleController } from '../../presentation/controllers/sale'
import { Controller } from '../../presentation/protocols/controller'
import { RabbitMQDeliveryRegister } from '../../utils/deliveryRegister'
import { RabbitmqServer } from '../../utils/rabbitmq/rabbitmq_server'

export const makeSaleController = (rabbitmqServer: RabbitmqServer): Controller => {
  const getCustomerRepository = new CustomerMySQLRepository()
  const addSaleRepository = new SaleMySQLRepository()
  const getItemRepository = new ItemMySQLRepository()
  const uuidGenerator = new UuidGeneratorAdapter()
  const dbAddSale = new DbAddSale(getCustomerRepository, addSaleRepository, uuidGenerator, getItemRepository)
  const rabbitMQDeliveryRegister = new RabbitMQDeliveryRegister(rabbitmqServer, 'amq.direct', 'sale_delivery_register')
  return new SaleController(dbAddSale, rabbitMQDeliveryRegister)
}
