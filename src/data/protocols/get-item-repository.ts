export interface GetItemRepository {
  getItemInternalId: (itemExternalId: string) => Promise<number>
}
