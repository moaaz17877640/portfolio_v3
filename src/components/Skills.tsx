"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import { profile } from '@/data/profile'
// Brand/tool icons
import {
  SiAmazonaws,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiGithubactions,
  SiJenkins,
  SiLinux,
  SiGnubash,
  SiPython,
  SiGit,
  SiPrometheus,
  SiGrafana,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

type Skill = { name: string; score: number }

type SkillsResponse = {
  aggregated: Skill[]
  source: { github: boolean; linkedin: boolean }
}

function Radial({ value, label }: { value: number; label: string }) {
  const radius = 48
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  return (
    <div className="flex flex-col items-center">
      <svg width="128" height="128" className="drop-shadow">
        <defs>
          <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="50%" stopColor="#8a2be2" />
            <stop offset="100%" stopColor="#ff2da1" />
          </linearGradient>
        </defs>
        <circle cx="64" cy="64" r={radius} stroke="#ffffff22" strokeWidth="10" fill="none" />
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          stroke={`url(#grad-${label})`}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-white text-xl font-semibold">
          {Math.round(value)}%
        </text>
      </svg>
      <div className="mt-2 text-sm text-white/80">{label}</div>
    </div>
  )
}

export default function Skills() {
  const [skills, setSkills] = useState<SkillsResponse | null>(null)

  // If CV-curated skills with logos exist, we prefer rendering them and skip fetching percentages
  const logoSkills = profile.skillsLogos ?? []

  const iconMap: Record<string, IconType> = {
    SiAmazonaws,
    SiMicrosoftazure,
    SiDocker,
    SiKubernetes,
    SiTerraform,
    SiAnsible,
    SiGithubactions,
    SiJenkins,
    SiLinux,
    SiGnubash,
    SiPython,
    SiGit,
    SiPrometheus,
    SiGrafana,
  }

  useEffect(() => {
    if (logoSkills.length > 0) return
    fetch('/api/skills')
      .then((r) => r.json())
      .then(setSkills)
      .catch(() => setSkills({ aggregated: [], source: { github: false, linkedin: false } }))
  }, [])

  const sidebarTitle = profile.skillsSidebarTitle ?? 'Highlights'
  const sidebarBody = profile.skillsSidebarBody ?? 'A curated set of tools and platforms.'

  return (
    <section id="skills" className="section">
  <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Skills</motion.h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
  <GlassCard className="p-6 md:p-8 md:col-span-2">
          {logoSkills.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {logoSkills.map((s) => {
                const Icon = iconMap[s.icon] ?? SiGit
                return (
                  <div key={s.name} className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-sky-400/20 via-violet-500/20 to-pink-500/20 p-[2px]">
                      <div className="w-full h-full rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-sm grid place-items-center">
                        <Icon size={42} color={s.color || '#9ca3af'} />
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-neutral-700 dark:text-white/80 text-center">{s.name}</div>
                  </div>
                )
              })}
            </div>
          ) : (
            <>
              {!skills && <div className="text-neutral-600 dark:text-white/60">Loading skills…</div>}
              {skills && skills.aggregated.length === 0 && (
                <div className="text-neutral-600 dark:text-white/60">No skills found yet. Provide a GitHub token in .env or edit data/skills.json.</div>
              )}
              {skills && skills.aggregated.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills.aggregated.slice(0, 8).map((s) => (
                    <Radial key={s.name} value={s.score} label={s.name} />
                  ))}
                </div>
              )}
            </>
          )}
        </GlassCard>
        <GlassCard className="p-6 md:p-8">
          <div className="text-sm text-neutral-700 dark:text-white/70">
            <div className="font-semibold text-neutral-900 dark:text-white">{sidebarTitle}</div>
            {logoSkills.length > 0 ? (
              <div className="mt-2">{sidebarBody}</div>
            ) : (
              <ul className="mt-2 space-y-1">
                <li>GitHub: <span className={skills?.source.github ? 'text-emerald-400' : 'text-white/50'}>{skills?.source.github ? 'connected' : 'not available'}</span></li>
                <li>LinkedIn: <span className={skills?.source.linkedin ? 'text-emerald-400' : 'text-white/50'}>{skills?.source.linkedin ? 'connected' : 'manual fallback'}</span></li>
              </ul>
            )}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
