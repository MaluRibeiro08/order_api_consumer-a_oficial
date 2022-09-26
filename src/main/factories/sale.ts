import { DbAddSale } from '../../data/usecases/add-sale/db-add-sale'
import { CustomerMySQLRepository } from '../../infra/db/mysql/customer-repository/customer'
import { SaleController } from '../../presentation/controllers/sale'
import { Controller } from '../../presentation/protocols/controller'

export const makeSaleController = (): Controller => {
  const getCustomerRepository = new CustomerMySQLRepository()
  const dbAddSale = new DbAddSale(getCustomerRepository)
  return new SaleController(dbAddSale)
}
