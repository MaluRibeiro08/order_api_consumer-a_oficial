import { Sale } from '../../domain/models/sale'
import { AddSaleModel } from '../../domain/usecases/add-sale'

export interface AddSaleRepository {
  add: (saleData: AddSaleModel) => Promise<Sale>
}
