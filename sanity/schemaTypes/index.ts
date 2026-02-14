import { type SchemaTypeDefinition } from 'sanity'
import aboutMe from './aboutMe'
import services from './services'
import portfolio from './portfolio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ aboutMe, services, portfolio ],
}
