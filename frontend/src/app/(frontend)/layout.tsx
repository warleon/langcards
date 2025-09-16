import React from 'react'
import './globals.css'
import StoreProvider from '@/components/utils/storeProvider'
import { SanitizedLocalizationConfig } from 'payload'
import config from '@payload-config'
import { getUserLocale } from '@/lib/userLocale'

export const metadata = {
  description: 'A language learning app',
  title: 'Langcards',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const localizationConfig = (await config).localization as SanitizedLocalizationConfig
  const locales = localizationConfig.locales.map((val) => ({ code: val.code, label: val.label }))
  const locale = await getUserLocale(locales, localizationConfig.defaultLocale)

  return (
    <html lang="en">
      <body>
        <StoreProvider
          onboarding={{ locale, locales, detectedLocale: locale, step: 0, languages: [] }}
        >
          <main className="min-w-xs container mx-auto min-h-screen">{children}</main>
        </StoreProvider>
      </body>
    </html>
  )
}
