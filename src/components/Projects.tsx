"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Sparkles, Terminal, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { profile } from '@/data/profile'

type ProjectCategory = 'all' | 'cicd' | 'cloud'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const categorizedProjects = profile.projects.map((p) => {
    const stackLower = p.stack.toLowerCase()
    const isCicd =
      stackLower.includes('ci/cd') ||
      stackLower.includes('actions') ||
      stackLower.includes('jenkins') ||
      stackLower.includes('testing') ||
      stackLower.includes('rbac')

    return {
      ...p,
      category: isCicd ? 'cicd' : 'cloud'
    }
  })

  const filteredProjects = categorizedProjects.filter((p) => {
    if (activeCategory === 'all') return true
    return p.category === activeCategory
  })

  return (
    <section id="projects" className="section relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION ARTIFACTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects & Tooling
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Custom automation actions, cloud provisioning services, and CI/CD pipelines developed for real-world operations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl backdrop-blur-md self-start sm:self-auto shrink-0">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-neon-cyan/20 text-cyan-300 shadow-sm border border-neon-cyan/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All ({profile.projects.length})
          </button>
          <button
            onClick={() => setActiveCategory('cicd')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === 'cicd'
                ? 'bg-neon-cyan/20 text-cyan-300 shadow-sm border border-neon-cyan/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CI/CD & Automation
          </button>
          <button
            onClick={() => setActiveCategory('cloud')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === 'cloud'
                ? 'bg-neon-cyan/20 text-cyan-300 shadow-sm border border-neon-cyan/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Cloud & Operations
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            const stackArray = project.stack.split(',').map((s) => s.trim())

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between border-white/10 hover:border-cyan-500/30 group">
                  <div>
                    {/* Top Row: Title, Company badge & Github link */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {project.name}
                          </h3>
                        </div>
                        {project.company && (
                          <span className="inline-block mt-1 text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                            {project.company}
                          </span>
                        )}
                      </div>
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:text-white group-hover:border-white/20 transition-all shrink-0"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mt-3">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Pills Footer */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {stackArray.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}

