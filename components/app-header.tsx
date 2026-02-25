'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut, Home } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { ThemeToggle } from '@/components/theme-toggle'

export function AppHeader() {
  const { signOut, user } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border md:ml-64">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Left - Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
            A
          </div>
          <span className="hidden sm:inline">Arexa AI</span>
        </Link>

        {/* Center - Status */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-muted-foreground">Welcome, {user?.name || 'User'}</span>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Landing</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={signOut}>
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
