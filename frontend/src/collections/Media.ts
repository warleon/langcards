import type { CollectionConfig } from 'payload'
import path from 'path'

export const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ['image/*'],
    staticDir: process.env.MEDIA_PATH_PREFIX
      ? path.join(process.env.MEDIA_PATH_PREFIX, 'images')
      : undefined,
  },
}

export const Audios: CollectionConfig = {
  slug: 'audios',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ['audio/*'],
    staticDir: process.env.MEDIA_PATH_PREFIX
      ? path.join(process.env.MEDIA_PATH_PREFIX, 'audios')
      : undefined,
  },
}
