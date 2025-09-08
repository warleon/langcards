import { Sentence } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'
import { getPayload } from 'payload'
import config from '@payload-config'
import axios from 'axios'
import { n8nRequest } from '@/lib/utils'

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
      required: false,
    },
    {
      name: 'audioPronunciation',
      type: 'upload',
      relationTo: 'audios',
      label: 'Pronunciation Audio',
      required: false,
    },
  ],
  hooks: {
    // maybe should check if the type is number or if its Word
    afterChange: [
      async (hook) => {
        const doc = hook.doc as Sentence
        revalidatePath(`/word/${doc.word}`)
        const fromN8n = await n8nRequest(hook.req)
        if (fromN8n && hook.operation !== 'create') {
          return doc
        }
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
