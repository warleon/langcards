import { Word } from '@/payload-types'
import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'
import { getPayload } from 'payload'
import config from '@payload-config'
import axios from 'axios'

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
      async (hook) => {
        const doc = hook.doc as Word
        revalidatePath(`/word/${doc.id}`)
        revalidatePath(`/`)
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
        revalidatePath(`/word/${(doc as Word).id}`)
        revalidatePath(`/`)
        return doc
      },
    ],
  },
}
