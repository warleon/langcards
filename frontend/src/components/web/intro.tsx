'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  languages: string[]
}

export const Intro: React.FC<Props> = ({ languages }) => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <motion.div
      className="max-w-3xl mx-auto text-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Unlock Your Potential Through Language
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Start your journey today — choose your first language and open the door to new
        opportunities.
      </p>

      <div className="max-w-md mx-auto">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <Command>
              <CommandInput placeholder="Search a language..." />
              <CommandList>
                <CommandEmpty>No language found.</CommandEmpty>
                <CommandGroup heading="Languages">
                  {languages.map((lang) => (
                    <CommandItem key={lang} onSelect={() => setSelected(lang)}>
                      {lang}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
            {selected && (
              <p className="text-sm text-center mt-3 text-muted-foreground">
                You selected <span className="font-medium">{selected}</span>
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
