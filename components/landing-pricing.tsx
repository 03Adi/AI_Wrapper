'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'Perfect for first-time job seekers',
    features: [
      'Unlimited resume generation',
      '5 cover letters/month',
      'Basic customization',
      'ATS optimization',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$29',
    period: '/month',
    description: 'Ideal for active job seekers',
    features: [
      'Everything in Starter',
      'Unlimited cover letters',
      'Advanced customization',
      'Job matching AI',
      'Resume tracking',
      'Priority support',
      'Interview tips'
    ],
    cta: 'Start Free Trial',
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact us',
    description: 'For teams and organizations',
    features: [
      'Everything in Professional',
      'Team collaboration',
      'White-label options',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced analytics'
    ],
    cta: 'Contact Sales'
  }
]

export function LandingPricing() {
  return (
    <section id="pricing" className="py-20 px-4 md:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your job search. Always flexible, always fair.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition ${
                plan.featured
                  ? 'bg-primary text-primary-foreground border-2 border-primary scale-105'
                  : 'bg-background border border-border hover:border-primary/50'
              }`}
            >
              {plan.featured && (
                <div className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-xs font-semibold mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.period}
                </span>
              </div>

              <Button
                className="w-full mb-8"
                variant={plan.featured ? 'secondary' : 'outline'}
                size="lg"
                asChild
              >
                <Link href="/app">
                  {plan.cta}
                </Link>
              </Button>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
