import { Word } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'
import { getPayload } from 'payload'
import config from '@payload-config'
import axios from 'axios'
import { n8nRequest } from '@/lib/utils'

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
      name: 'maxSentences',
      type: 'number',
      label: 'Maximun number of Sentences',
      required: true,
      defaultValue: 1,
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
      async (hook) => {
        const doc = hook.doc as Word

        revalidatePath(`/word/${doc.id}`)
        revalidatePath(`/`)
        const fromN8n = await n8nRequest(hook.data)
        if (fromN8n) {
          return doc
        }
        const payload = await getPayload({ config })
        const count = await payload.count({
          collection: 'sentences',
          where: {
            word: {
              equals: doc.id,
            },
          },
        })

        if (!doc.image || !doc.audioPronunciation || count.totalDocs < doc.maxSentences) {
          const n8n = await payload.findGlobal({ slug: 'n8n' })
          if (n8n.webhook) axios.post(n8n.webhook, { collection: hook.collection.slug, doc })
        }
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
