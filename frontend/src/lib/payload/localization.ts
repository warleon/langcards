import { LocalizationConfig } from 'payload'

export const localization: LocalizationConfig = {
  locales: [
    {
      code: 'en',
      label: 'English',
    },
    {
      code: 'es',
      label: 'Spanish',
    },
    {
      code: 'ru',
      label: 'Russian',
    },
    { code: 'pt', label: 'Portuguese' },
  ],
  defaultLocale: 'en',
  fallback: true,
} as const
