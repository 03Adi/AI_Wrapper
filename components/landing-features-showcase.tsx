'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Briefcase, MessageCircle, Instagram, Twitter, PenTool } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Professional Resumes',
    description: 'Create ATS-optimized resumes that pass through screening systems and land interviews',
    icon: FileText,
    problems: [
      'Generic templates waste your potential',
      'Hard to highlight achievements effectively',
      'Unknown if resume passes ATS screening'
    ]
  },
  {
    id: 2,
    title: 'Cover Letters',
    description: 'Generate compelling cover letters that match job requirements perfectly',
    icon: Briefcase,
    problems: [
      'Starting from scratch takes hours',
      'Hard to personalize for each job',
      'Generic content gets overlooked'
    ]
  },
  {
    id: 3,
    title: 'LinkedIn Posts',
    description: 'Craft authentic LinkedIn posts in your unique voice that drive engagement',
    icon: MessageCircle,
    problems: [
      'Consistent posting requires constant ideas',
      'Generic AI sounds robotic and inauthentic',
      'Hard to maintain personal brand'
    ]
  },
  {
    id: 4,
    title: 'Instagram Bio',
    description: 'Create eye-catching Instagram bios that convert visitors into followers',
    icon: Instagram,
    problems: [
      'Limited character space to stand out',
      'Need to convey brand and personality',
      'Trends change constantly'
    ]
  },
  {
    id: 5,
    title: 'Twitter/X Posts',
    description: 'Generate viral-ready tweets that spark conversations and grow your audience',
    icon: Twitter,
    problems: [
      'Tweets must be concise yet impactful',
      'Hard to balance wit, value, and engagement',
      'Timing and frequency are crucial'
    ]
  },
  {
    id: 6,
    title: 'Resume Bullets',
    description: 'Transform job duties into powerful achievement-focused bullet points',
    icon: PenTool,
    problems: [
      'Weak bullet points lose recruiter attention',
      'Hard to quantify achievements',
      'Generic descriptions dont stand out'
    ]
  }
]

export function LandingFeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const current = features[activeFeature]
  const Icon = current.icon

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-background/95">
      <div className="px-4 md:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">AI-Powered Tools</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Every Tool You Need to Land Your Dream Job
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            From crafting the perfect resume to building your personal brand, we have all the AI-powered tools to accelerate your career growth.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {features.map((feature, idx) => {
            const FeatureIcon = feature.icon
            return (
              <button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeFeature === idx
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                <FeatureIcon className="w-4 h-4" />
                <span className="hidden sm:inline text-sm font-medium">{feature.title}</span>
              </button>
            )
          })}
        </div>

        {/* Feature Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Feature Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{current.title}</h3>
                <p className="text-lg text-muted-foreground">{current.description}</p>
              </div>
            </div>

            {/* Problems Solved */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Problems We Solve:</h4>
              {current.problems.map((problem, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>

            {/* Steps */}
            <div className="space-y-3 pt-4">
              <h4 className="font-semibold text-foreground">How It Works:</h4>
              <div className="space-y-2">
                {['Input your information', 'Choose your preferences', 'Get AI-generated content'].map(
                  (step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                        {idx + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Try {current.title}
            </Button>
          </div>

          {/* Right: Feature Card */}
          <div className="relative">
            <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-background flex flex-col items-center justify-center p-8 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
                  <div className="p-4 rounded-2xl bg-primary/10 animate-pulse">
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Feature Preview</p>
                    <p className="font-semibold text-foreground">{current.title}</p>
                  </div>
                  <Badge variant="secondary" className="mt-4">
                    Step {activeFeature + 1} of {features.length}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFeature(idx)}
              className={`h-2 rounded-full transition-all ${
                activeFeature === idx ? 'w-8 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to feature ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
