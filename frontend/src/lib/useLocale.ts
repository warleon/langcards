import { headers } from 'next/headers'
import Negotiator from 'negotiator'
export async function getUserLocale(supportedLocales: string[], fallback = 'en') {
  // Convert Next.js / Fetch API headers into a plain object
  const h = await headers()

  const headersObj = Object.fromEntries(h.entries())
  const negotiator = new Negotiator({ headers: headersObj })
  return negotiator.language(supportedLocales) || fallback
}
