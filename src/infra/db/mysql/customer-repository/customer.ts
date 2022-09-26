import { GetCustomerModel, GetCustomerRepository } from '../../../../data/protocols/get-customer-repository'
import { Customer } from '../../../../domain/models/customer'
import database from '../../../knex/helper/knex-helper'

export class CustomerMySQLRepository implements GetCustomerRepository {
  async findOrCreate (customerData: GetCustomerModel): Promise<Customer> {
    const customer = await database.select().table('tbl_customer').where('document_customer', customerData.document)

    if (customer.length > 1) {
      throw new Error('More than one customer found')
    } else if (!customer[0]) {
      // Create new customer
      throw new Error('No customer found')
    }
    return customer[0]
    // {
    //   document: '156516151',
    //   id: 554564545,
    //   name: 'maria'
    // }
  }
}
