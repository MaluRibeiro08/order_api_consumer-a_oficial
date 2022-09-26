import { Sale } from '../../../domain/models/sale'
import { AddSale, AddSaleModel } from '../../../domain/usecases/add-sale'

export class DbAddSale implements AddSale {
  async add (saleData: AddSaleModel): Promise<Sale> {
    return {
      date_time: new Date('2022-09-26'),
      external_id: 'uuid',
      id: 123,
      id_customer: 123
    }
  }
}
