import { Controller } from '../protocols/controller'

export class SaleController implements Controller {
  async handle (message: string): Promise<any> {
    console.log('Received message: ' + message)
  }
}
