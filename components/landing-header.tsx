'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            R
          </div>
          <span>ResumeAI</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">
            Benefits
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition">
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/app">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/app">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
