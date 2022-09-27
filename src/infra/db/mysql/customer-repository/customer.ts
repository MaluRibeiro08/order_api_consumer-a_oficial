import { GetCustomerModel, GetCustomerRepository } from '../../../../data/protocols/get-customer-repository'
import { Customer } from '../../../../domain/models/customer'
import database from '../../../knex/helper/knex-helper'

export class CustomerMySQLRepository implements GetCustomerRepository {
  async findOrCreate (customerData: GetCustomerModel): Promise<Customer> {
    const customer = await database.select().table('tbl_customer').where('document_customer', customerData.document)

    if (customer.length > 1) {
      throw new Error('More than one customer found')
    } else if (!customer[0]) {
      const insertedCustomerId = await database('tbl_customer').insert({ name_customer: customerData.name, document_customer: customerData.document })
      const insertedCustomer = await database.select().table('tbl_customer').where('id_customer', insertedCustomerId)
      return insertedCustomer[0]
    }
    return customer[0]
  }
}
