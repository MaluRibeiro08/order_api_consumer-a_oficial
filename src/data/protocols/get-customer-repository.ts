import { Customer } from '../../domain/models/customer'

export interface GetCustomerModel {
  name: string
  document: string
}

export interface GetCustomerRepository {
  findOrCreate: (customerData: GetCustomerModel) => Promise<Customer>
}
