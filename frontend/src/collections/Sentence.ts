import { Sentence } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'

export const Sentences: CollectionConfig = {
  slug: 'sentences',
  labels: {
    singular: 'Sentence',
    plural: 'Sentences',
  },
  admin: {
    useAsTitle: 'sentence',
  },
  fields: [
    {
      name: 'sentence',
      type: 'text',
      label: 'Sentence',
      required: true,
    },
    {
      name: 'word',
      type: 'relationship',
      relationTo: 'words', // vincula a la colección Word
      label: 'Main Word',
      required: true,
      hasMany: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'images',
      label: 'Sentence Image',
      required: true,
    },
    {
      name: 'audioPronunciation',
      type: 'upload',
      relationTo: 'audios',
      label: 'Pronunciation Audio',
      required: true,
    },
  ],
  hooks: {
    // maybe should check if the type is number or if its Word
    afterChange: [
      ({ doc }) => {
        revalidatePath(`/word/${(doc as Sentence).word}`)
        return doc
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidatePath(`/word/${(doc as Sentence).word}`)
        return doc
      },
    ],
  },
}
