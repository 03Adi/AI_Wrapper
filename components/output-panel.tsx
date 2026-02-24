'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Copy, Download, RotateCcw, Check } from 'lucide-react'
import { useState } from 'react'

interface OutputPanelProps {
  content: string
  isLoading: boolean
  onRegenerate: () => void
}

export function OutputPanel({ content, isLoading, onRegenerate }: OutputPanelProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'resume.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <Card className="p-6 bg-card border border-border h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">Generated Resume</h3>
        {content && (
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
              title="Copy to clipboard"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span className="ml-1">{copied ? 'Copied' : 'Copy'}</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDownload}
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
              title="Download as text"
            >
              <Download size={16} />
              <span className="ml-1">Download</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={onRegenerate}
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
              title="Regenerate content"
            >
              <RotateCcw size={16} />
            </Button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-4 w-3/4 bg-muted" />
            <Skeleton className="h-4 w-full bg-muted" />
            <Skeleton className="h-4 w-5/6 bg-muted" />
            <div className="pt-4 space-y-3">
              <Skeleton className="h-3 w-1/2 bg-muted" />
              <Skeleton className="h-3 w-full bg-muted" />
              <Skeleton className="h-3 w-4/5 bg-muted" />
            </div>
            <div className="pt-4 space-y-3">
              <Skeleton className="h-3 w-1/2 bg-muted" />
              <Skeleton className="h-3 w-full bg-muted" />
              <Skeleton className="h-3 w-4/5 bg-muted" />
            </div>
          </div>
        ) : content ? (
          <div className="prose prose-sm max-w-none text-foreground space-y-4 text-sm leading-relaxed">
            {content.split('\n').map((line, i) => (
              <div key={i} className={line.startsWith('##') ? 'font-bold text-base mt-4 mb-2' : ''}>
                {line}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-muted-foreground text-lg mb-2">No resume generated yet</div>
              <p className="text-muted-foreground text-sm">Fill in the form and click "Generate Resume" to create your resume</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
