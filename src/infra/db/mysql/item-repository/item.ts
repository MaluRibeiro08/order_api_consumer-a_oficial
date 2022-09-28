import { ItemRepository } from '../../../../data/protocols/item-repository'
import database from '../../../knex/helper/knex-helper'

export class ItemMySQLRepository implements ItemRepository {
  async getItemInternalId (itemExternalId: string): Promise<number> {
    const returnedId = await database.select('id_item').table('tbl_item').where('external_id_item', itemExternalId)
    return returnedId[0].id_item
  }

  async getItemAvailableAmount (itemInternalId: string): Promise<number> {
    const returndAmount = await database.select('available_amount').table('tbl_item').where('id_item', itemInternalId)
    return returndAmount[0].available_amount
  }
}
