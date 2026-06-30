import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'portfolio',
        title: 'Portfolio (Sorted)',
        S,
        context
      }),
      // Add all other document types except portfolio
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'portfolio'
      ),
    ])
