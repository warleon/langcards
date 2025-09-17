import { Intro } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

export const Intros: GlobalConfig = {
  slug: 'intros',
  label: {
    singular: 'Intro Section',
    plural: 'Intro Sections',
  },
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
  },
}
