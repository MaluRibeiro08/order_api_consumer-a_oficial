export interface RegisterDeliveryModel {
  sale: {
    external_id_sale: string // Is it better send just the external id or all data?
  }
  address: {
    zip_code: string
    house_number: string
    street: string
    neighborhood: string
    city: string
    uf: string
    complement: string
    reference: string
  }
}

export interface DeliveryRegister {
  sendDeliveryRegistrationRequest: (deliveryData: RegisterDeliveryModel) => Promise<boolean>
}
