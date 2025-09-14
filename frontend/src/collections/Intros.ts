import { CollectionConfig } from 'payload'

export const Intros: CollectionConfig = {
  slug: 'intros',
  labels: {
    singular: 'Intro Section',
    plural: 'Intro Sections',
  },
  admin: { useAsTitle: 'title' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'selectorHeading',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'selectorNotFound',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'selectorSearchPlaceholder',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'buttonLabel',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
