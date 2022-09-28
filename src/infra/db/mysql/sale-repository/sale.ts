import { AddSaleRepository } from '../../../../data/protocols/add-sale-repository'
import { Sale } from '../../../../domain/models/sale'
import { AddSaleModel } from '../../../../domain/usecases/add-sale'
import database from '../../../knex/helper/knex-helper'

export class SaleMySQLRepository implements AddSaleRepository {
  async add (saleData: AddSaleModel): Promise<Sale> {
    // Add sale to main table and get its ID
    const insertedSaleId = await database('tbl_sale').insert({
      date_time_sale: new Date(Date.now()),
      external_id_sale: saleData.external_id_sale,
      id_customer: saleData.customer.id_customer
    })

    // Relate items to sale in an intermediary table | Discount sold amount from total amount and update the value
    for (const item of saleData.items) {
      await database('tbl_sale_item').insert({ id_sale: insertedSaleId, id_item: item.id, amount: item.amount })
      const remainingAmount = item.available_amount - item.amount
      await database('tbl_item').update('available_amount', remainingAmount).where('id_item', item.id)
    }

    // Get sale inserted data and returns it
    const insertedSale = await database.select().table('tbl_sale').where('id_sale', insertedSaleId)
    return insertedSale[0]
  }
}
