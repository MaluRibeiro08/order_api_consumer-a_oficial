import { ItemModel } from '../models/item'
import { Sale } from '../models/sale'

export interface AddSaleModel {
  external_id_sale?: string
  customer: {
    id_customer?: number
    name: string
    document: string
  }
  items: ItemModel[]
}

export interface AddSale {
  add: (saleData: AddSaleModel) => Promise<Sale>
}
