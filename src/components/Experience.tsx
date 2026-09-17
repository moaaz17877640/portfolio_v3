"use client"

import { motion } from 'framer-motion'
import { ExternalLink, GraduationCap, MapPin } from 'lucide-react'
import GlassCard from './GlassCard'
import { profile } from '@/data/profile'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-500 dark:text-neon-cyan">Career snapshot</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Experience & credentials</h2>
      </motion.div>

      <div className="mt-8 grid lg:grid-cols-[1.4fr_0.6fr] gap-6">
        <div className="space-y-6">
          {profile.experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{item.role}</h3>
                    <p className="mt-1 text-cyan-700 dark:text-neon-cyan">{item.company}</p>
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-white/60 sm:text-right">
                    <div>{item.period}</div>
                    <div className="mt-1 flex items-center gap-1 sm:justify-end"><MapPin className="w-3.5 h-3.5" />{item.location}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-white/75">
                  {item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan" />{highlight}</li>)}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          <GlassCard className="p-6 md:p-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-neon-cyan" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Education</h3>
            </div>
            <p className="mt-5 font-medium text-neutral-900 dark:text-white">B.Sc. in Information Technology</p>
            <p className="mt-1 text-sm text-neutral-700 dark:text-white/70">Tanta University · 2021 - 2025</p>
            <p className="mt-3 text-sm text-neutral-700 dark:text-white/70">GPA: 3.6 (B+) · Graduation project: SPIDERS for Security (A+)</p>
          </GlassCard>
          <GlassCard className="p-6 md:p-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Certifications</h3>
            <ul className="mt-5 space-y-4">
              {profile.certifications.map((cert) => (
                <li key={cert.name}>
                  <a href={cert.url} target="_blank" rel="noreferrer" className="group flex items-start gap-2 text-sm text-neutral-700 dark:text-white/75 hover:text-neutral-950 dark:hover:text-white">
                    <span className="leading-relaxed">{cert.name}</span>
                    <ExternalLink className="mt-0.5 w-4 h-4 shrink-0 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
