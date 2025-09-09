// scripts/fetchLanguages.ts
import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'fs'
import path from 'path'

// Load your base countries array
import { COUNTRIES } from '@/lib/consts'

const WIKI_URL = 'https://en.wikipedia.org/wiki/List_of_official_languages_by_country_and_territory'

async function fetchLanguages() {
  const { data } = await axios.get(WIKI_URL)
  const $ = cheerio.load(data)

  const countryLangMap: Record<string, { en: string; native?: string }[]> = {}

  $('table.wikitable').each((i, e) => {
    if (i == 0) {
      $(e).each((_, row) => {
        const cols = $(row).find('tbody tr td')
        if (cols.length < 2) return
        console.log(cols.text())

        const country = $(cols[0])
          .text()
          .trim()
          .replace(/\[.*?\]/g, '')
        const langsRaw = $(cols[1]).html() || ''

        // Extract languages and possible native names (in parentheses)
        const langs: { en: string; native?: string }[] = []
        $(cols[1])
          .find('a')
          .each((_, el) => {
            const langText = $(el).text().trim()
            if (langText) {
              langs.push({ en: langText })
            }
          })

        // Add to map
        if (langs.length > 0) {
          countryLangMap[country] = langs
        }
      })
    }
  })
  return countryLangMap
}

async function main() {
  const map = await fetchLanguages()

  const enriched = COUNTRIES.map(([code, name]) => {
    const langs = map[name] || []
    return [code, name, ...langs]
  })

  fs.writeFileSync('countries_with_langs.json', JSON.stringify(map, null, 2), 'utf8')

  console.log('✅ countries_with_langs.json generated!')
}

main().catch(console.error)
