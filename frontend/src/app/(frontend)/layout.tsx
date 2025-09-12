import React from 'react'
import './globals.css'

export const metadata = {
  description: 'A language learning app',
  title: 'Langcards',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main className="min-w-xs container mx-auto">{children}</main>
      </body>
    </html>
  )
}
