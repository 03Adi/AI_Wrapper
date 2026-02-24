'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Copy, Check, Hash, Camera } from 'lucide-react'
import { toast } from 'sonner'
import Image from 'next/image'

export function InstagramGenerator() {
    const [topic, setTopic] = useState('')
    const [mood, setMood] = useState('aesthetic')
    const [count, setCount] = useState('3')
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
                    systemPrompt: `Act as a Social Media Manager and Creative Copywriter. Create ${count} unique Instagram caption options for the provided topic/image description.
          The mood should be ${mood}. 
          For each option, include:
          1. A catchy caption (short or medium length)
          2. A "Call to Action"
          3. 5-10 relevant and trending hashtags.
          Use emojis appropriate for ${mood} vibes. Format with clear headers for each option.`
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
                    <CardTitle>Caption Details</CardTitle>
                    <CardDescription>What is your post about?</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleGenerate} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="topic">Post Topic or Visual Description</Label>
                            <Textarea
                                id="topic"
                                placeholder="e.g., A beautiful sunset at the beach with a coffee..."
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                className="min-h-[120px] resize-none"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="mood">Mood / Vibe</Label>
                                <Select value={mood} onValueChange={setMood}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="aesthetic">Aesthetic & Minimalist</SelectItem>
                                        <SelectItem value="witty">Witty & Sarcastic</SelectItem>
                                        <SelectItem value="inspirational">Motivational</SelectItem>
                                        <SelectItem value="informative">Educational</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="count">Variants</Label>
                                <Select value={count} onValueChange={setCount}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1 Option</SelectItem>
                                        <SelectItem value="3">3 Options</SelectItem>
                                        <SelectItem value="5">5 Options</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full gap-2 bg-pink-600 hover:bg-pink-700"
                            disabled={isLoading || !topic}
                        >
                            {isLoading ? (
                                <>
                                    <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <Camera className="w-4 h-4" />
                                    Generate Captions
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card className="flex flex-col min-h-[400px] border-pink-500/20">
                <CardHeader className="flex flex-row items-center justify-between border-b bg-pink-500/5 py-4">
                    <div>
                        <CardTitle className="text-lg text-pink-700">Instagram Output</CardTitle>
                    </div>
                    {result && (
                        <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2 hover:text-pink-600">
                            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied' : 'Copy All'}
                        </Button>
                    )}
                </CardHeader>
                <CardContent className="flex-1 p-6">
                    {!result && !isLoading && (
                        <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground space-y-4">
                            <div className="p-4 rounded-full bg-pink-500/10">
                                <Hash className="w-8 h-8 text-pink-500" />
                            </div>
                            <div>
                                <p className="font-medium text-pink-900/70">Ready for the Gram?</p>
                                <p className="text-sm">Describe your post to get creative captions.</p>
                            </div>
                        </div>
                    )}

                    {isLoading && (
                        <div className="space-y-4">
                            <div className="h-4 bg-pink-500/5 animate-pulse rounded w-3/4" />
                            <div className="h-4 bg-pink-500/5 animate-pulse rounded w-1/2" />
                            <div className="h-4 bg-pink-500/5 animate-pulse rounded w-5/6" />
                            <div className="h-32 bg-pink-500/5 animate-pulse rounded w-full" />
                        </div>
                    )}

                    {result && (
                        <div className="whitespace-pre-wrap text-sm leading-relaxed prose prose-pink max-w-none">
                            {result}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
