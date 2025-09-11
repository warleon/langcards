import React, { useState } from 'react'
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command'
import { useSelection } from '@/hooks/useSelection'
import { Pill } from '../ui/pill'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  searchPlaceholder: string
  notFound: string
  heading: string
  options: string[]
  multiSelect?: boolean
  showPills?: boolean
  onSelect?: (option: string, rest: string[]) => void
  classname?: string
}
export const Selector: React.FC<Props> = ({
  options,
  multiSelect,
  onSelect: strSelect,
  showPills = true,
  heading,
  notFound,
  searchPlaceholder,
  classname,
}) => {
  const [open, setOpen] = useState(false)

  const { select, unselect, isSelected, selected } = useSelection({
    options: options.map((o) => ({ key: o, value: o })),
    onSelect: (c, r) => {
      console.log('item selected', c)
      if (!strSelect) return
      strSelect(
        c.value,
        r.map(({ value }) => value),
      )
    },
    multiSelect,
  })
  return (
    <div className={cn(classname, 'relative')}>
      <Collapsible open={open} onOpenChange={setOpen}>
        <Command>
          <CollapsibleTrigger asChild>
            <div className="flex mb-2">
              <div className="grow">
                <CommandInput placeholder={selected[0]?.value ?? searchPlaceholder} />
              </div>
              <button className="shrink border-b">
                {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CommandList className="absolute bg-popover text-popover-foreground w-full">
              <CommandEmpty>{notFound}</CommandEmpty>
              <CommandGroup heading={heading}>
                {options.map((opt) => (
                  <CommandItem
                    key={opt}
                    onSelect={(val) => {
                      console.log('item clicked', val)
                      if (!isSelected(val)) select(val)
                      else unselect(val)
                    }}
                    className={isSelected(opt) ? 'bg-primary/10' : ''}
                  >
                    {opt}
                  </CommandItem>
                ))}{' '}
              </CommandGroup>
            </CommandList>
          </CollapsibleContent>
        </Command>
      </Collapsible>

      {showPills && (
        <div className="flex flex-wrap gap-2 mb-2">
          {selected.map(({ key, value }) => (
            <Pill key={key} id={key} value={value} onRemove={(k, _) => unselect(k)}></Pill>
          ))}
        </div>
      )}
    </div>
  )
}
