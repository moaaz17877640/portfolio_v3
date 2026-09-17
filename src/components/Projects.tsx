"use client"

import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import { Github } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-500 dark:text-neon-cyan">Selected work</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Projects</h2>
      </motion.div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index, 5) * 0.05, duration: 0.5 }}
          >
            <GlassCard className="p-6 h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold text-neutral-900 dark:text-white">{project.name}</div>
                  {project.company && <div className="mt-1 text-xs uppercase tracking-wider text-cyan-700 dark:text-neon-cyan">{project.company}</div>}
                </div>
                <Github className="w-5 h-5 shrink-0 text-neutral-700 dark:text-white/70" />
              </div>
              <div className="mt-3 text-sm text-neutral-700 dark:text-white/70">{project.description}</div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-white/75">
                {project.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />{highlight}</li>)}
              </ul>
              <div className="mt-5 text-xs text-neutral-500 dark:text-white/50">{project.stack}</div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
