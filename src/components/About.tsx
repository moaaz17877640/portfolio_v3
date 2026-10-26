"use client"

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Cloud,
  Cpu,
  GraduationCap,
  Sparkles,
  MapPin,
  CheckCircle2,
  GitBranch,
  Server
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { profile } from '@/data/profile'

const engineeringPillars = [
  {
    icon: GitBranch,
    title: 'Zero-Downtime Delivery',
    description: 'Automate build and deployment pipelines with GitHub Actions and Jenkins to transform manual releases into repeatable, gated workflows.',
    tag: 'CI/CD & Release'
  },
  {
    icon: Cloud,
    title: 'Declarative Infrastructure',
    description: 'Design and provision repeatable cloud architectures across AWS and Azure using Terraform, Ansible, and Docker containers.',
    tag: 'IaC & Multi-Cloud'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Cost-Conscious',
    description: 'Integrate security gates, enforce least-privilege RBAC, and optimize resource allocation to protect uptime and eliminate cloud waste.',
    tag: 'Security & FinOps'
  },
  {
    icon: GraduationCap,
    title: 'Mentorship & Enablement',
    description: 'Lead hands-on labs and mentor 100+ aspiring engineers at the National Telecommunication Institute (NTI) in real-world cloud architectures.',
    tag: 'Teaching & Leadership'
  }
]

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Architecting Reliable Cloud Systems & Pipelines
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
          A look into my engineering principles, cloud philosophy, and hands-on track record.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left: Bio Narrative & Identity Card */}
        <div className="lg:col-span-5 space-y-6">
          <SpotlightCard className="p-6 sm:p-8">
            <div className="flex items-center gap-3.5 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-sm">
                <div className="w-full h-full rounded-[11px] bg-white dark:bg-dark-950 flex items-center justify-center text-cyan-600 dark:text-cyan-300">
                  <Server className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{profile.name}</h3>
                <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold dark:font-normal">{profile.headline}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Narrative bio */}
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                I am a <strong className="text-slate-900 dark:text-white font-semibold">Cloud / DevOps Engineer</strong> passionate about turning complex infrastructure into predictable, automated code.
              </p>
              <p>
                At <strong className="text-slate-900 dark:text-white font-semibold">Azzrk</strong>, I maintain staging and production AWS environments, engineer custom CI/CD bridges, and build tooling that simplifies deployments for engineering teams.
              </p>
              <p>
                In parallel at the <strong className="text-slate-900 dark:text-white font-semibold">National Telecommunication Institute (NTI)</strong>, I teach modern cloud architectures, guiding students through practical labs with compute, storage, databases, and containerization.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-300 font-medium">
                AWS Solutions Architect
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-300 font-medium">
                Terraform IaC
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-300 font-medium">
                Docker & K8s
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-300 font-medium">
                B.Sc. IT (GPA 3.6)
              </span>
            </div>
          </SpotlightCard>
        </div>

        {/* Right: 4 Engineering Pillars */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between hover:border-cyan-500/40">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-200 dark:bg-cyan-500/10 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-slate-400 font-medium">
                        {pillar.tag}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.04] flex items-center gap-1.5 text-xs text-cyan-700 dark:text-cyan-400/80 font-mono font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-neon-cyan" />
                    <span>Production Proven</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

