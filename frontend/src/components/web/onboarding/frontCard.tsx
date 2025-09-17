import React from 'react'
import TitledCard from '@/components/ui/titledCard'

interface SimpleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export default function FrontCard({ title, ...props }: SimpleCardProps) {
  return <TitledCard title={title} {...props}></TitledCard>
}
