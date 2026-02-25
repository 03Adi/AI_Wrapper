'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'Product Manager at TechCorp',
    content: 'Arexa AI saved me hours of writing and got me 3 interviews in one week. The AI suggestions were incredibly relevant.',
    rating: 5
  },
  {
    name: 'Marcus Johnson',
    title: 'Software Engineer',
    content: 'The job matching feature is a game-changer. It identified skills I never thought to highlight that matched perfectly with the job description.',
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    title: 'Marketing Specialist',
    content: 'After 20+ applications with no luck, Arexa AI helped me land 2 offers in my target companies. Highly recommend!',
    rating: 5
  },
  {
    name: 'David Park',
    title: 'Data Analyst',
    content: 'The ATS optimization is real. I started getting callbacks immediately after using Arexa AI. Best investment for my job search.',
    rating: 5
  }
]

export function LandingTestimonials() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Job Seekers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who landed their dream jobs with Arexa AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 text-lg">{testimonial.content}</p>

              {/* Author */}
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
