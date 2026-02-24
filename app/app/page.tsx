'use client'

import { Sidebar } from '@/components/sidebar'
import { AppHeader } from '@/components/app-header'
import { DashboardTools } from '@/components/dashboard-tools'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function AppPage() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar activeTab="home" onTabChange={() => {}} />

      {/* Top Header */}
      <AppHeader />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 overflow-hidden">
        <div className="h-[calc(100vh-64px)] overflow-y-auto">
          <div className="p-4 md:p-8 max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back</h1>
                  <p className="text-muted-foreground">Choose a tool to get started creating amazing content</p>
                </div>
                <Button className="gap-2" size="lg">
                  <Image src="/ai_icon.png" alt="AI" width={16} height={16} />
                  Quick Start
                </Button>
              </div>
            </div>

            {/* Tools Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6">All AI Tools</h2>
              <DashboardTools />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-12 border-t border-border">
              <div className="text-center py-8">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <p className="text-sm text-muted-foreground">Resumes Created</p>
              </div>
              <div className="text-center py-8">
                <div className="text-3xl font-bold text-accent mb-2">0</div>
                <p className="text-sm text-muted-foreground">Cover Letters</p>
              </div>
              <div className="text-center py-8">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <p className="text-sm text-muted-foreground">Posts Generated</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
