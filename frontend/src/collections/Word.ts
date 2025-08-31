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
      name: 'image',
      type: 'upload',
      relationTo: 'images', // ahora apunta solo a imágenes
      label: 'Image',
      required: true,
    },
    {
      name: 'audioPronunciation',
      type: 'upload',
      relationTo: 'audios', // ahora apunta solo a audios
      label: 'Pronunciation Audio',
      required: true,
    },
    {
      name: 'audioEffect',
      type: 'upload',
      relationTo: 'audios',
      label: 'Sound Effect Audio',
      required: false,
    },
  ],
}
