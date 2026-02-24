'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Copy, Check, Info } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'

export function LinkedInGenerator() {
    const [topic, setTopic] = useState('')
    const [tone, setTone] = useState('professional')
    const [audience, setAudience] = useState('general professional')
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState('')
    const [copied, setCopied] = useState(false)

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!topic) return

        setIsLoading(true)
        setResult('')

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: topic,
                    systemPrompt: `Act as a LinkedIn Influencer and Personal Branding Expert. Write a high-engagement LinkedIn post about the provided topic. 
          Use a ${tone} tone and target ${audience}. 
          Include a strong hook, actionable insights, and relevant hashtags. 
          Format the output for readability with spacing and bullet points.`
                })
            })

            const data = await response.json()
            if (response.ok) {
                setResult(data.content)
            } else {
                toast.error(data.error || 'Generation failed')
            }
        } catch (error) {
            toast.error('An error occurred during generation')
        } finally {
            setIsLoading(false)
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(result)
        setCopied(true)
        toast.success('Copied to clipboard')
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="h-fit">
                <CardHeader>
                    <CardTitle>Post Requirements</CardTitle>
                    <CardDescription>Tell us what you want to post about</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleGenerate} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="topic">Topic or Main Idea</Label>
                            <Textarea
                                id="topic"
                                placeholder="e.g., Why remote work is the future of tech..."
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="min-h-[120px] resize-none"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="tone">Tone</Label>
                                <Select value={tone} onValueChange={setTone}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="professional">Professional</SelectItem>
                                        <SelectItem value="casual">Casual & Storytelling</SelectItem>
                                        <SelectItem value="authoritative">Authoritative</SelectItem>
                                        <SelectItem value="inspirational">Inspirational</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="audience">Target Audience</Label>
                                <Input
                                    id="audience"
                                    placeholder="e.g., Hiring Managers"
                                    value={audience}
                                    onChange={(e) => setAudience(e.target.value)}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full gap-2"
                            disabled={isLoading || !topic}
                        >
                            {isLoading ? (
                                <>
                                    <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Image src="/ai_icon.png" alt="AI" width={16} height={16} />
                                    Generate Post
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card className="flex flex-col min-h-[400px]">
                <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30 py-4">
                    <div>
                        <CardTitle className="text-lg">AI Generated Content</CardTitle>
                    </div>
                    {result && (
                        <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
                            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied' : 'Copy'}
                        </Button>
                    )}
                </CardHeader>
                <CardContent className="flex-1 p-6">
                    {!result && !isLoading && (
                        <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground space-y-4">
                            <div className="p-4 rounded-full bg-muted">
                                <Info className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="font-medium">Your content will appear here</p>
                                <p className="text-sm">Fill in the requirements and click generate</p>
                            </div>
                        </div>
                    )}

                    {isLoading && (
                        <div className="space-y-4">
                            <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
                            <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
                            <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
                            <div className="h-24 bg-muted animate-pulse rounded w-full" />
                        </div>
                    )}

                    {result && (
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">
                            {result}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
