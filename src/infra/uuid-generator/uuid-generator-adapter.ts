import { v4 } from 'uuid'
import { UuidGenerator } from '../../data/protocols/uuid-generator'

export class UuidGeneratorAdapter implements UuidGenerator {
  generate (): string {
    const generatedUuid = v4()
    return generatedUuid
  }
}
