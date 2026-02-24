'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Briefcase, MessageCircle, Instagram, Twitter, PenTool, ArrowRight } from 'lucide-react'

const tools = [
  {
    id: 'linkedin',
    name: 'LinkedIn Post Generator',
    description: 'Craft authentic LinkedIn posts that drive engagement and build your brand',
    icon: MessageCircle,
    customIcon: '/linkedin_icon.svg',
    badge: 'Active',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    id: 'instagram',
    name: 'Instagram Bio Generator',
    description: 'Create eye-catching Instagram bios that convert visitors into followers',
    icon: Instagram,
    customIcon: '/insta_icon.svg',
    badge: 'Active',
    color: 'bg-pink-500/10 text-pink-600'
  },
  {
    id: 'resume',
    name: 'Resume Generator',
    description: 'Create professional, ATS-optimized resumes tailored to your target job',
    icon: FileText,
    badge: 'Coming Soon',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    id: 'cover-letter',
    name: 'Cover Letter Generator',
    description: 'Generate compelling cover letters that match job requirements perfectly',
    icon: Briefcase,
    badge: 'Coming Soon',
    color: 'bg-purple-500/10 text-purple-600'
  },
  {
    id: 'resume-bullets',
    name: 'Resume Bullet Improver',
    description: 'Transform job duties into powerful achievement-focused bullet points',
    icon: PenTool,
    badge: 'Coming Soon',
    color: 'bg-green-500/10 text-green-600'
  },
  {
    id: 'twitter',
    name: 'Twitter/X Post Generator',
    description: 'Generate viral-ready tweets that spark conversations and grow your audience',
    icon: Twitter,
    badge: 'Coming Soon',
    color: 'bg-gray-500/10 text-gray-600'
  }
]

export function DashboardTools() {
  const router = useRouter()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => {
        const Icon = tool.icon
        const isComingSoon = tool.badge === 'Coming Soon'
        
        return (
          <Card
            key={tool.id}
            className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${tool.color}`}>
                  {tool.customIcon ? (
                    <Image src={tool.customIcon} alt={tool.name} width={24} height={24} />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {tool.badge}
                </Badge>
              </div>
              <CardTitle className="text-xl">{tool.name}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2">{tool.description}</CardDescription>
            </CardHeader>

            <CardContent>
              {isComingSoon ? (
                <Button
                  disabled
                  className="w-full"
                  variant="outline"
                >
                  Coming Soon
                </Button>
              ) : (
                <Button 
                  onClick={() => router.push(`/app/tools/${tool.id}`)}
                  className="w-full group/btn"
                >
                  Open Tool
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
