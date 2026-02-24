'use client'

const benefits = [
  {
    metric: '87%',
    title: 'Callback Rate Increase',
    company: 'TechCorp Inc.'
  },
  {
    metric: '6x',
    title: 'Faster Application Process',
    company: 'StartupXYZ'
  },
  {
    metric: '3x',
    title: 'More Interview Offers',
    company: 'GlobalTech Solutions'
  },
  {
    metric: '100%',
    title: 'ATS Compatibility Score',
    company: 'Fortune 500 Company'
  }
]

export function LandingBenefits() {
  return (
    <section id="benefits" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proven Results</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            See how ResumeAI has helped thousands of job seekers land their dream roles.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 hover:border-primary/40 transition"
            >
              <div className="text-5xl font-bold text-primary mb-2">{benefit.metric}</div>
              <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
