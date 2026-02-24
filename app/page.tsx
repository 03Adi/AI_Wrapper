import { LandingHeader } from '@/components/landing-header'
import { LandingHero } from '@/components/landing-hero'
import { LandingFeaturesShowcase } from '@/components/landing-features-showcase'
import { LandingBenefits } from '@/components/landing-benefits'
import { LandingPricing } from '@/components/landing-pricing'
import { LandingTestimonials } from '@/components/landing-testimonials'
import { LandingFAQ } from '@/components/landing-faq'
import { LandingFooter } from '@/components/landing-footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />
      <LandingHero />
      <LandingFeaturesShowcase />
      <LandingBenefits />
      <LandingPricing />
      <LandingTestimonials />
      <LandingFAQ />
      <LandingFooter />
    </div>
  )
}
