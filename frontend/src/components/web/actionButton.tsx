import * as React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  enabled?: boolean
  loadingComponent?: React.ReactNode
}

export function ActionButton({
  children,
  className,
  isLoading = false,
  enabled = true,
  loadingComponent,
  ...props
}: ActionButtonProps) {
  return (
    <Button
      className={cn(
        'px-6 py-3 rounded-2xl font-medium shadow-md transition-all',
        'bg-primary text-primary-foreground hover:bg-primary/90',
        'cursor-pointer -z-10!',
        'disabled:opacity-50 disabled:cursor-not-allowed ',
        className,
      )}
      disabled={!enabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="flex items-center gap-2">{loadingComponent}</span> : children}
    </Button>
  )
}
