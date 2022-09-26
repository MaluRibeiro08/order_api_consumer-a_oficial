import { SaleController } from '../../presentation/controllers/sale'
import { Controller } from '../../presentation/protocols/controller'

export const makeSaleController = (): Controller => {
  return new SaleController()
}
