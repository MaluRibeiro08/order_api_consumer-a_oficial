export interface Controller {
  handle: (message: string) => Promise<any>
}
