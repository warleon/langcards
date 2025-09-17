import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children?: React.ReactNode
}

export default function TitledCard({ title, children, className, ...props }: SimpleCardProps) {
  return (
    <Card className={cn('w-3xs grow-0 shrink-0 min-w-3xs max-w-3xs h-full', className)} {...props}>
      <CardTitle className="text-sm md:text-base mx-2">{title}</CardTitle>
      <CardContent className="m-2 p-0">{children}</CardContent>
    </Card>
  )
}
