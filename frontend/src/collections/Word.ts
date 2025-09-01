import { Word } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'

export const Words: CollectionConfig = {
  slug: 'words',
  labels: {
    singular: 'Word',
    plural: 'Words',
  },
  admin: {
    useAsTitle: 'word',
  },
  fields: [
    {
      name: 'word',
      type: 'text',
      label: 'Word',
      required: true,
    },
    {
      name: 'approved',
      type: 'checkbox',
      label: 'Aproved',
      required: true,
      defaultValue: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'images', // ahora apunta solo a imágenes
      label: 'Image',
      required: false,
    },
    {
      name: 'audioPronunciation',
      type: 'upload',
      relationTo: 'audios', // ahora apunta solo a audios
      label: 'Pronunciation Audio',
      required: false,
    },
  ],
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath(`/word/${(doc as Word).id}`)
        revalidatePath(`/`)
        return doc
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidatePath(`/word/${(doc as Word).id}`)
        revalidatePath(`/`)
        return doc
      },
    ],
  },
}
