import { Intro } from '@/payload-types'
import { revalidatePath } from 'next/cache'
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
  hooks: {
    afterChange: [
      async (hook) => {
        const doc = hook.doc as Intro
        revalidatePath('/', 'page')
        //TODO generate the other locales with n8n
        return doc
      },
    ],
    afterDelete: [
      async (hook) => {
        const doc = hook.doc as Intro
        revalidatePath('/', 'page')
        return doc
      },
    ],
  },
}
