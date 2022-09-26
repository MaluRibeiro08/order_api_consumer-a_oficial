import { ItemModel } from '../models/item'
import { Sale } from '../models/sale'

export interface AddSaleModel {
  customer: {
    name: string
    document: string
  }
  items: ItemModel[]
}

export interface AddSale {
  add: (saleData: AddSaleModel) => Promise<Sale>
}
