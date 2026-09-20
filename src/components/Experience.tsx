"use client"

import { motion } from 'framer-motion'
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  GraduationCap,
  Award,
  Sparkles,
  CheckCircle2,
  Building2
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { profile } from '@/data/profile'
import { SiAmazonaws, SiOracle } from 'react-icons/si'

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>CAREER & CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Professional Experience
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
          Track record in production cloud environments, developer tooling, and technical education.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column: Vertical Glowing Timeline */}
        <div className="lg:col-span-7 space-y-6 relative">
          {/* Vertical line connecting nodes */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-transparent dark:from-neon-cyan dark:via-indigo-500 pointer-events-none hidden sm:block" />

          {profile.experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative sm:pl-14"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute top-6 left-6 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-2 border-cyan-500 shadow-sm dark:bg-dark-950 dark:border-neon-cyan dark:shadow-glow hidden sm:flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-neon-cyan" />
              </div>

              <SpotlightCard className="p-6 sm:p-8 hover:border-cyan-500/40">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20 mb-2">
                      <Building2 className="w-3 h-3" />
                      <span>{item.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{item.role}</h3>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-neon-cyan shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Certifications & Education */}
        <div className="lg:col-span-5 space-y-6">
          {/* Certifications Showcase */}
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Verified Certifications</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Credly & Vendor Verified Credentials</p>
              </div>
            </div>

            <div className="mt-5 space-y-3.5">
              {profile.certifications.map((cert) => {
                const isAws = cert.name.toLowerCase().includes('aws')
                return (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 hover:bg-slate-100/90 border border-slate-200/90 hover:border-cyan-500/40 dark:bg-white/[0.02] dark:hover:bg-white/[0.06] dark:border-white/[0.06] dark:hover:border-cyan-500/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white border border-slate-200 group-hover:border-cyan-500/40 dark:bg-white/[0.04] dark:border-white/10 transition-colors shadow-sm">
                      {isAws ? (
                        <SiAmazonaws size={22} color="#FF9900" />
                      ) : (
                        <SiOracle size={22} color="#F80000" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-semibold text-slate-900 text-xs sm:text-sm group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300 transition-colors leading-snug">
                          {cert.name}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white shrink-0" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400/90 mt-1 inline-block font-semibold">
                        Verify on Credly ↗
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>
          </SpotlightCard>

          {/* Education Card */}
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-600 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Academic Education</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Computer & Information Technology</p>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">B.Sc. in Information Technology</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Tanta University · 2021 - 2025</p>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">Cumulative GPA</span>
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">3.6 (B+ Very Good)</span>
                </div>
                <div className="flex items-start justify-between text-xs gap-2">
                  <span className="text-slate-600 dark:text-slate-400">Graduation Project</span>
                  <span className="font-mono font-bold text-cyan-800 dark:text-neon-cyan text-right">
                    SPIDERS for Security (A+ Excellent)
                  </span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

