import { localization } from '@/lib/payload/localization'
import { text } from 'd3'
import { Field, GlobalConfig, Locale } from 'payload'

//TODO think about this
export const supportedLanguages: GlobalConfig = {
  slug: 'supported_languages',
  fields: [
    {
      name: 'native_wording',
      label: 'Wording',
      type: 'text',
      localized: true,
    },
    ...(localization.locales as Locale[]).map(
      (loc) =>
        ({
          name: loc.label as string,
          label: `Wording for ${loc.label as string}`,
          type: 'text',
          localized: true,
        }) satisfies Field,
    ),
  ],
}
