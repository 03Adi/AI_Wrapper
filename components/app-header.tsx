'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut, Home } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border md:ml-64">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Left - Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
            R
          </div>
          <span className="hidden sm:inline">ResumeAI</span>
        </Link>

        {/* Center - Status */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-muted-foreground">Pro Account</span>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Landing</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
