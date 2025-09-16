import { headers } from 'next/headers'
import Negotiator from 'negotiator'
import { Locale } from 'payload'
export async function getUserLocale(supportedLocales: Locale[], fallback: string): Promise<Locale> {
  // Convert Next.js / Fetch API headers into a plain object
  const h = await headers()

  const headersObj = Object.fromEntries(h.entries())
  const negotiator = new Negotiator({ headers: headersObj })
  const codes = supportedLocales.map((l) => l.code)
  const code = negotiator.language(codes)
  return (
    supportedLocales.find((l) => l.code === code) ??
    supportedLocales.find((l) => l.code === fallback) ?? { code: 'en', label: 'English' }
  )
}
