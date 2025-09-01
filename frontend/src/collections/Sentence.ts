import { Sentence } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'
import { getPayload } from 'payload'
import config from '@payload-config'
import axios from 'axios'

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
      name: 'approved',
      type: 'checkbox',
      label: 'Aproved',
      required: true,
      defaultValue: false,
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
      async (hook) => {
        const doc = hook.doc as Sentence
        revalidatePath(`/word/${doc.word}`)
        if (!doc.image || !doc.audioPronunciation) {
          const payload = await getPayload({ config })
          const n8n = await payload.findGlobal({ slug: 'n8n' })
          if (n8n.webhook) axios.post(n8n.webhook, { collection: hook.collection.slug, doc })
        }
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
