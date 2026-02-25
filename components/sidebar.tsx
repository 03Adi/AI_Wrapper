'use client'

import { useState } from 'react'
import { Menu, X, FileText, LetterText, MessageCircle, Instagram, Twitter, PenTool, History, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = [
  { id: 'home', label: 'Dashboard', icon: Home },
  { section: 'Active Tools' },
  { id: 'linkedin', label: 'LinkedIn Post', icon: MessageCircle, customIcon: '/linkedin_icon.svg' },
  { id: 'instagram', label: 'Instagram Bio', icon: Instagram, customIcon: '/insta_icon.svg' },
  { section: 'Coming Soon' },
  { id: 'resume', label: 'Resume Generator', icon: FileText },
  { id: 'cover-letter', label: 'Cover Letter', icon: LetterText },
  { id: 'resume-bullets', label: 'Resume Bullets', icon: PenTool },
  { id: 'twitter', label: 'Twitter/X Post', icon: Twitter },
  { section: 'Account' },
  { id: 'history', label: 'History', icon: History },
]

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-in-out z-40',
          'flex flex-col',
          !isOpen && '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-sidebar-primary">
              <Image src="/ai_icon.png" alt="AI" width={24} height={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">Arexa AI</h1>
              <p className="text-xs text-muted-foreground">Powered by AI</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
          {navItems.map((item, idx) => {
            if ('section' in item) {
              return (
                <div key={`section-${idx}`} className="pt-4 first:pt-0">
                  <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {item.section}
                  </p>
                </div>
              )
            }

            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'home') window.location.href = '/app'
                  else window.location.href = `/app/tools/${item.id}`
                  setIsOpen(false)
                }}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200',
                  activeTab === item.id
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/30'
                )}
              >
                {item.customIcon ? (
                  <Image src={item.customIcon} alt={item.label} width={20} height={20} className="flex-shrink-0" />
                ) : (
                  <Icon size={20} />
                )}
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <button className="w-full py-2 px-4 text-sm rounded-lg bg-sidebar-accent/20 text-sidebar-foreground hover:bg-sidebar-accent/30 transition-colors duration-200 font-medium">
            Upgrade Plan
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
