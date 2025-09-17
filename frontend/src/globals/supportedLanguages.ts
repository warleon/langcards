import { GlobalConfig } from 'payload'

export const supportedLanguages: GlobalConfig = {
  slug: 'supported_languages',
  fields: [
    {
      name: 'wording',
      label: 'Native Wording',
      type: 'text',
    },
  ],
}
