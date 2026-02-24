'use client'

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import { Sidebar } from '@/components/sidebar'
import { AppHeader } from '@/components/app-header'
import { LinkedInGenerator } from '@/components/linkedin-generator'
import { InstagramGenerator } from '@/components/instagram-generator'
import { PlaceholderTab } from '@/components/placeholder-tab'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ToolPage() {
    const params = useParams()
    const toolId = params.toolId as string
    const [activeTab, setActiveTab] = useState(toolId)

    const renderTool = () => {
        switch (toolId) {
            case 'linkedin':
                return <LinkedInGenerator />
            case 'instagram':
                return <InstagramGenerator />
            default:
                return <PlaceholderTab title={toolId.replace('-', ' ')} description="This tool is coming soon!" />
        }
    }

    return (
        <div className="flex h-screen bg-background text-foreground">
            <Sidebar activeTab={activeTab} onTabChange={(tab) => {
                if (tab === 'home') window.location.href = '/app'
                else window.location.href = `/app/tools/${tab}`
            }} />

            <AppHeader />

            <main className="flex-1 md:ml-64 pt-16 overflow-hidden">
                <div className="h-[calc(100vh-64px)] overflow-y-auto">
                    <div className="p-4 md:p-8 max-w-5xl mx-auto">
                        <Link href="/app">
                            <Button variant="ghost" className="mb-6 gap-2 -ml-4">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Dashboard
                            </Button>
                        </Link>

                        <div className="mb-8">
                            <h1 className="text-3xl font-bold capitalize">
                                {toolId.replace('-', ' ')}
                            </h1>
                            <p className="text-muted-foreground mt-2">
                                Use AI to generate high-quality content for your audience.
                            </p>
                        </div>

                        {renderTool()}
                    </div>
                </div>
            </main>
        </div>
    )
}
