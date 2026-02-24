'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ResumeFormProps {
  onGenerate: (data: FormData) => void
  isLoading: boolean
}

export interface FormData {
  jobRole: string
  experienceLevel: string
  skills: string[]
  achievements: string
  jobDescription: string
  tone: string
}

export function ResumeForm({ onGenerate, isLoading }: ResumeFormProps) {
  const [formData, setFormData] = useState<FormData>({
    jobRole: '',
    experienceLevel: 'mid',
    skills: [],
    achievements: '',
    jobDescription: '',
    tone: 'professional',
  })
  const [skillInput, setSkillInput] = useState('')

  const handleAddSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput.trim()],
      })
      setSkillInput('')
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerate(formData)
  }

  return (
    <Card className="p-6 bg-card border border-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Role */}
        <div className="space-y-2">
          <Label htmlFor="jobRole" className="text-card-foreground font-semibold">
            Job Role
          </Label>
          <Input
            id="jobRole"
            placeholder="e.g., Senior Product Manager"
            value={formData.jobRole}
            onChange={(e) =>
              setFormData({ ...formData, jobRole: e.target.value })
            }
            className="bg-background border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Experience Level */}
        <div className="space-y-2">
          <Label htmlFor="experience" className="text-card-foreground font-semibold">
            Experience Level
          </Label>
          <Select
            value={formData.experienceLevel}
            onValueChange={(value) =>
              setFormData({ ...formData, experienceLevel: value })
            }
          >
            <SelectTrigger className="bg-background border-border text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="junior">Junior (0-3 years)</SelectItem>
              <SelectItem value="mid">Mid-level (3-6 years)</SelectItem>
              <SelectItem value="senior">Senior (6-10 years)</SelectItem>
              <SelectItem value="lead">Lead (10+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <Label className="text-card-foreground font-semibold">Skills</Label>
          <div className="flex gap-2">
            <Input
              placeholder="e.g., React, Node.js, Design"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  handleAddSkill()
                }
              }}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="button"
              onClick={handleAddSkill}
              variant="outline"
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Add
            </Button>
          </div>
          {formData.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer flex items-center gap-1"
                  onClick={() => handleRemoveSkill(skill)}
                >
                  {skill}
                  <X size={14} />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Achievements */}
        <div className="space-y-2">
          <Label htmlFor="achievements" className="text-card-foreground font-semibold">
            Achievements
          </Label>
          <Textarea
            id="achievements"
            placeholder="Describe your key achievements and accomplishments..."
            value={formData.achievements}
            onChange={(e) =>
              setFormData({ ...formData, achievements: e.target.value })
            }
            className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-24 resize-none"
          />
        </div>

        {/* Job Description */}
        <div className="space-y-2">
          <Label htmlFor="jobDescription" className="text-card-foreground font-semibold">
            Job Description
          </Label>
          <Textarea
            id="jobDescription"
            placeholder="Paste the job description here to tailor your resume..."
            value={formData.jobDescription}
            onChange={(e) =>
              setFormData({ ...formData, jobDescription: e.target.value })
            }
            className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-24 resize-none"
          />
        </div>

        {/* Tone Selector */}
        <div className="space-y-2">
          <Label className="text-card-foreground font-semibold">Writing Tone</Label>
          <div className="grid grid-cols-3 gap-3">
            {['formal', 'confident', 'concise'].map((toneOption) => (
              <button
                key={toneOption}
                type="button"
                onClick={() => setFormData({ ...formData, tone: toneOption })}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 border ${
                  formData.tone === toneOption
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background border-border text-foreground hover:border-primary/50'
                }`}
              >
                {toneOption.charAt(0).toUpperCase() + toneOption.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <Button
          type="submit"
          disabled={isLoading || !formData.jobRole}
          className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Image src="/ai_icon.png" alt="AI" width={18} height={18} />
              Generate Resume
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}
