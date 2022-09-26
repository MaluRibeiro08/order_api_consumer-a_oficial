import { DbAddSale } from '../../data/usecases/add-sale/db-add-sale'
import { SaleController } from '../../presentation/controllers/sale'
import { Controller } from '../../presentation/protocols/controller'

export const makeSaleController = (): Controller => {
  const dbAddSale = new DbAddSale()
  return new SaleController(dbAddSale)
}
