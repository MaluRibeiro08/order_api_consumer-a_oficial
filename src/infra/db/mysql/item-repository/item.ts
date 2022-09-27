import { GetItemRepository } from '../../../../data/protocols/get-item-repository'
import database from '../../../knex/helper/knex-helper'

export class ItemMySQLRepository implements GetItemRepository {
  async getItemInternalId (itemExternalId: string): Promise<number> {
    const returnedId = await database.select('id_item').table('tbl_item').where('external_id_item', itemExternalId)
    return returnedId[0].id_item
  }
}
