import { type SchemaTypeDefinition } from 'sanity'
import aboutMe from './aboutMe'
import services from './services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ aboutMe, services ],
}
