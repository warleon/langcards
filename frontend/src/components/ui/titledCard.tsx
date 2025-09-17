import React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  children?: React.ReactNode
}

export default function TitledCard({ title, children, className, ...props }: SimpleCardProps) {
  return (
    <Card className={cn('w-full max-w-md', className)} {...props}>
      <CardTitle className="text-sm md:text-base mx-2">{title}</CardTitle>
      <CardContent className="m-2">{children}</CardContent>
    </Card>
  )
}
