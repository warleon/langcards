import { GlobalConfig } from 'payload'

export const supportedLanguages: GlobalConfig = {
  slug: 'supported_languages',
  fields: [
    {
      name: 'languages',
      label: 'Supported Languages (full English name)',
      type: 'array',
      fields: [{ name: 'language', type: 'text', required: true }],
      required: true,
    },
  ],
}
