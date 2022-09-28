export interface ItemRepository {
  getItemInternalId: (itemExternalId: string) => Promise<number>
  getItemAvailableAmount: (itemInternalId: string) => Promise<number>
}
