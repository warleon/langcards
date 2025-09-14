import { useCallback, useMemo, useState } from 'react'

interface KV {
  key: string
  value: string
}

interface Props {
  onSelect: (key: KV, rest: KV[]) => void
  onUnselect?: (key: KV, all: KV[]) => void
  options: KV[]
  multiSelect?: boolean
  defaultSelection?: string
  canBeEmpty?: boolean
}
export const useSelection = ({
  onSelect,
  onUnselect,
  options,
  multiSelect,
  defaultSelection,
  canBeEmpty = true,
}: Props) => {
  if (!canBeEmpty && defaultSelection === undefined)
    throw new Error("No default value was provided for Selection marked as 'can't be empty'")

  const optionsMap = useMemo(() => {
    const map = new Map<string, string>()
    options.forEach(({ key, value }) => {
      map.set(key, value)
    })
    return map
  }, [options])
  const [selectedPlural, setSelectedPlural] = useState<KV[]>(
    options.filter((o) => o.key === defaultSelection),
  )
  const isSelected = useCallback(
    (key: string) => {
      return selectedPlural.find(({ key: key_ }) => key === key_)
    },
    [selectedPlural],
  )
  const select = useCallback(
    (key: string) => {
      const s = {
        key,
        value: optionsMap.get(key)!,
      }
      console.log('on select', s)
      if (multiSelect) {
        onSelect(s, selectedPlural)
        setSelectedPlural((curr) => {
          const removed = curr.filter(({ key: key_ }) => key !== key_)
          removed.push(s)
          return removed
        })
      } else {
        onSelect(s, [])
        setSelectedPlural([s])
      }
    },
    [multiSelect, onSelect, optionsMap, selectedPlural],
  )
  const unselect = useCallback(
    (key: string) => {
      if (selectedPlural.length == 1 && !canBeEmpty) return
      if (onUnselect) {
        const s = {
          key,
          value: optionsMap.get(key)!,
        }
        onUnselect(
          s,
          selectedPlural.filter(({ key: key_ }) => key !== key_),
        )
      }
      if (multiSelect) {
        setSelectedPlural((curr) => {
          return curr.filter(({ key: key_ }) => key !== key_)
        })
      }
      setSelectedPlural([])
    },
    [canBeEmpty, multiSelect, onUnselect, optionsMap, selectedPlural],
  )
  return {
    select,
    unselect,
    isSelected,
    selected: selectedPlural,
  }
}
