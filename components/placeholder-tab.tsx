'use client'

import { Card } from '@/components/ui/card'

interface PlaceholderTabProps {
  title: string
  description: string
}

export function PlaceholderTab({ title, description }: PlaceholderTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <Card className="p-12 bg-card border border-border flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2">Coming Soon</h3>
          <p className="text-muted-foreground max-w-sm">
            This feature is under development. Stay tuned for updates!
          </p>
        </div>
      </Card>
    </div>
  )
}
