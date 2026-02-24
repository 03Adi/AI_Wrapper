'use client'

import { Zap, Target, Users, Lock, BarChart3 } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: 'ai',
    title: 'AI-Powered Generation',
    description: 'Leverage advanced AI to create custom resumes and cover letters tailored to each job.'
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get professional, ATS-optimized documents in minutes, not hours.'
  },
  {
    icon: Target,
    title: 'Job-Matched Content',
    description: 'AI analyzes job descriptions to include relevant keywords and skills.'
  },
  {
    icon: Users,
    title: 'Multiple Variations',
    description: 'Generate multiple versions to find the perfect tone and style for each role.'
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data is encrypted and never used to train models. Complete control over your content.'
  },
  {
    icon: BarChart3,
    title: 'Success Tracking',
    description: 'Monitor which resumes and cover letters generate the most interviews.'
  }
]

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create compelling resumes and cover letters that get you interviews.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  {feature.icon === 'ai' ? (
                    <Image src="/ai_icon.png" alt="AI" width={24} height={24} />
                  ) : (
                    <Icon className="w-6 h-6 text-primary" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
