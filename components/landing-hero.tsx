'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function LandingHero() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-background via-background to-card/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Image src="/ai_icon.png" alt="AI" width={16} height={16} />
          <span className="text-sm font-medium text-primary">6 AI Tools for Career Success</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Your AI <span className="text-primary">career coach</span> in your pocket
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto">
          From resumes to LinkedIn posts, we have all the AI-powered tools you need to land your dream job, build your personal brand, and accelerate your career growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2" asChild>
            <Link href="/signup">
              Start Building
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/signin">
              Sign In
            </Link>
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ professionals worldwide</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">87%</div>
              <div className="text-xs text-muted-foreground">Land Interviews</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">6 Tools</div>
              <div className="text-xs text-muted-foreground">In One Platform</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Free Trial</div>
              <div className="text-xs text-muted-foreground">7 Days No Credit Card</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
