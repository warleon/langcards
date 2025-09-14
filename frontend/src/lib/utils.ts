import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function n8nRequest(data: any) {
  if (data.__n8n_nodes_payload_cms__) {
    return true
  }
  return false
}

type LocaleInfo = { code: string; label: Record<string, string> | string }

export type LocalizedDoc<T> = Omit<T, 'locale'> & {
  locale: string
}

/**
 * Flattens a Payload doc fetched with `locale: "all"`
 * into one doc per locale.
 *
 * @param doc The Payload document
 * @param locales Array of { code, label } locales (from your config)
 */
export function explodeLocales<T extends Record<string, any>>(
  doc: T,
  locales: LocaleInfo[],
): LocalizedDoc<T>[] {
  if (!doc) return []

  // Collect all locale codes that appear in any localized field
  const localeSet = new Set<string>()

  for (const key in doc) {
    const value = doc[key]
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const keys = Object.keys(value)
      // Looks like a localized field if its keys overlap with known locales
      if (keys.some((k) => locales.some((l) => l.code === k))) {
        keys.forEach((l) => localeSet.add(l))
      }
    }
  }

  // Only keep locales that are configured
  const activeLocales = locales.filter((l) => localeSet.has(l.code))

  return activeLocales.map(({ code, label }) => {
    const flat: Record<string, any> = {
      locale: label,
    }

    for (const key in doc) {
      const value = doc[key]

      if (value && typeof value === 'object' && !Array.isArray(value)) {
        // If field is localized, pick the current locale if present
        flat[key] = value[code] !== undefined ? value[code] : value
      } else {
        // Non-localized fields
        flat[key] = value
      }
    }

    return flat as LocalizedDoc<T>
  })
}
