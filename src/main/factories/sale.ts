import { DbAddSale } from '../../data/usecases/add-sale/db-add-sale'
import { CustomerMySQLRepository } from '../../infra/db/mysql/customer-repository/customer'
import { ItemMySQLRepository } from '../../infra/db/mysql/item-repository/item'
import { SaleMySQLRepository } from '../../infra/db/mysql/sale-repository/sale'
import { UuidGeneratorAdapter } from '../../infra/uuid-generator/uuid-generator-adapter'
import { SaleController } from '../../presentation/controllers/sale'
import { Controller } from '../../presentation/protocols/controller'

export const makeSaleController = (): Controller => {
  const getCustomerRepository = new CustomerMySQLRepository()
  const addSaleRepository = new SaleMySQLRepository()
  const getItemRepository = new ItemMySQLRepository()
  const uuidGenerator = new UuidGeneratorAdapter()
  const dbAddSale = new DbAddSale(getCustomerRepository, addSaleRepository, uuidGenerator, getItemRepository)
  return new SaleController(dbAddSale)
}
