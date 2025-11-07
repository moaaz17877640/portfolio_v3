"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import { Github } from 'lucide-react'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  homepage: string | null
  language: string | null
  topics?: string[]
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[] | null>(null)

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then(setRepos)
      .catch(() => setRepos([]))
  }, [])

  return (
    <section id="projects" className="section">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Projects</motion.h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!repos && <div className="text-neutral-600 dark:text-white/60">Loading repositories…</div>}
        {repos && repos.length === 0 && <div className="text-neutral-600 dark:text-white/60">No repositories found.</div>}
        {repos && repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.homepage || repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group block"
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-start justify-between">
                <div className="text-lg font-semibold group-hover:underline">{repo.name}</div>
                <Github className="w-5 h-5 text-neutral-700 dark:text-white/70" />
              </div>
              <div className="mt-2 text-sm text-neutral-700 dark:text-white/70 min-h-[48px]">{repo.description || 'No description provided.'}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {repo.language && (
                  <span className="text-xs px-2 py-1 rounded-full border border-black/10 bg-black/5 text-neutral-700 dark:border-white/15 dark:bg-white/5 dark:text-white/80">{repo.language}</span>
                )}
                {repo.topics && repo.topics.slice(0, 3).map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-black/10 bg-black/5 text-neutral-700 dark:border-white/15 dark:bg-white/5 dark:text-white/80">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
