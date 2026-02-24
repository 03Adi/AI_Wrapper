'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does ResumeAI generate personalized resumes?',
    answer: 'ResumeAI uses advanced AI to analyze your background and the job description you provide. It then generates a customized resume that matches the specific requirements and keywords from the job posting, increasing your chances of getting past ATS systems.'
  },
  {
    question: 'Is my data safe and private?',
    answer: 'Yes! Your data is encrypted end-to-end and never used to train our models. We follow GDPR and CCPA compliance standards. You have complete control over your content and can delete it anytime.'
  },
  {
    question: 'Can I use ResumeAI for multiple job applications?',
    answer: 'Absolutely! One of the main benefits of ResumeAI is the ability to generate multiple customized versions of your resume for different job applications. This significantly increases your chances of getting interviews.'
  },
  {
    question: 'What if I don\'t like the generated content?',
    answer: 'You can regenerate content multiple times with different styles and tones. You also have full editing capabilities to customize any part of your resume or cover letter to match your preferences.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 7-day free trial of the Professional plan so you can experience all features without commitment. No credit card required to get started.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Of course! You can cancel your subscription at any time with no questions asked. You\'ll retain access to your generated documents even after cancellation.'
  }
]

export function LandingFAQ() {
  return (
    <section id="faq" className="py-20 px-4 md:px-8 bg-card/50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about ResumeAI.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
