"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Download,
  Mail,
  ArrowRight,
  CheckCircle2,
  Play,
  RotateCw,
  Terminal,
  ShieldCheck,
  Server,
  Cloud,
  Cpu,
  Layers
} from 'lucide-react'
import Image from 'next/image'
import { profile } from '@/data/profile'
import portrait from '../../Gemini_Generated_Image_v97mqav97mqav97m.png'
import SpotlightCard from './SpotlightCard'

const rotatingRoles = [
  'Cloud & DevOps Engineer',
  'AWS Certified Solutions Architect',
  'Terraform & IaC Specialist',
  'CI/CD Pipeline Automation'
]

const initialPipelineSteps = [
  { id: 1, name: 'Code Quality & Lint', tool: 'GitHub Actions', duration: '12s', status: 'passed' },
  { id: 2, name: 'Terraform Plan & Validate', tool: 'Terraform Cloud', duration: '28s', status: 'passed' },
  { id: 3, name: 'Container Build & CVE Scan', tool: 'Docker + Trivy', duration: '45s', status: 'passed' },
  { id: 4, name: 'Staging & E2E Validation', tool: 'Hurl + AWS ECS', duration: '34s', status: 'passed' },
  { id: 5, name: 'Production Zero-Downtime Rollout', tool: 'Kubernetes / ALB', duration: '23s', status: 'passed' }
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'pipeline' | 'portrait'>('pipeline')
  const [isRunningPipeline, setIsRunningPipeline] = useState(false)
  const [pipelineProgress, setPipelineProgress] = useState(100)

  // Rotating subtitle effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  // Interactive pipeline simulation
  const handleRerunPipeline = () => {
    if (isRunningPipeline) return
    setIsRunningPipeline(true)
    setPipelineProgress(0)

    let current = 0
    const interval = setInterval(() => {
      current += 20
      setPipelineProgress(current)
      if (current >= 100) {
        clearInterval(interval)
        setIsRunningPipeline(false)
      }
    }, 400)
  }

  return (
    <section id="hero" className="relative section pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-neon-cyan/15 via-indigo-600/10 to-neon-violet/15 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Cloud & DevOps Opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            Hi, I’m{' '}
            <span className="gradient-text drop-shadow-sm font-black">
              {profile.name}
            </span>
          </motion.h1>

          {/* Rotating Role Subtitle */}
          <div className="h-9 sm:h-10 mt-3 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="text-lg sm:text-2xl font-semibold text-cyan-300 flex items-center gap-2 font-mono"
              >
                <Terminal className="w-5 h-5 text-neon-cyan" />
                <span>{rotatingRoles[roleIndex]}</span>
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
          >
            DevOps Engineer at <span className="text-white font-semibold">Azzrk</span> and Cloud Instructor at{' '}
            <span className="text-white font-semibold">NTI</span>. I design resilient AWS architectures, automate zero-downtime CI/CD pipelines, and craft declarative Infrastructure as Code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <a href="#contact" className="btn-primary group">
              <Mail className="w-4 h-4 text-white" />
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#resume" className="btn-outline">
              <Download className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Key Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">2+</span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-neon-cyan font-mono">8+</span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Production Apps</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">3x</span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Cloud Certified</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-neon-pink font-mono">100+</span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Mentees Taught</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive DevOps Pipeline / Portrait Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <SpotlightCard className="p-0 border-white/10 shadow-2xl">
            {/* Header Tabs */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2 font-medium">moaaz@prod-runner-01</span>
              </div>
              <div className="flex items-center gap-1 bg-black/40 rounded-lg p-1 border border-white/[0.06]">
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                    activeTab === 'pipeline'
                      ? 'bg-neon-cyan/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CI/CD Pipeline
                </button>
                <button
                  onClick={() => setActiveTab('portrait')}
                  className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                    activeTab === 'portrait'
                      ? 'bg-neon-cyan/20 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Portrait
                </button>
              </div>
            </div>

            {/* Tab 1: Interactive CI/CD Pipeline Simulator */}
            {activeTab === 'pipeline' && (
              <div className="p-5 sm:p-6 font-mono text-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">main_workflow.yml</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {pipelineProgress === 100 ? 'SUCCESS' : 'RUNNING...'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Branch: <span className="text-cyan-400">main</span> · Commit: <span className="text-indigo-400">#4f91b2e</span></p>
                  </div>
                  <button
                    onClick={handleRerunPipeline}
                    disabled={isRunningPipeline}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs transition-all disabled:opacity-50"
                  >
                    <RotateCw className={`w-3.5 h-3.5 ${isRunningPipeline ? 'animate-spin' : ''}`} />
                    <span>Re-run</span>
                  </button>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-white/[0.06] rounded-full h-1.5 mb-4 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-neon-cyan via-indigo-500 to-emerald-400 h-full rounded-full"
                    animate={{ width: `${pipelineProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Pipeline Steps */}
                <div className="space-y-2.5">
                  {initialPipelineSteps.map((step, idx) => {
                    const stepThreshold = (idx + 1) * 20
                    const isDone = pipelineProgress >= stepThreshold
                    const isCurrent = pipelineProgress < stepThreshold && pipelineProgress >= stepThreshold - 20

                    return (
                      <div
                        key={step.id}
                        className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${
                          isDone
                            ? 'bg-white/[0.02] border-white/[0.06] text-slate-300'
                            : isCurrent
                            ? 'bg-neon-cyan/5 border-neon-cyan/40 text-cyan-300 shadow-sm'
                            : 'bg-transparent border-transparent text-slate-500'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : isCurrent ? (
                            <RotateCw className="w-4 h-4 text-neon-cyan animate-spin shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-600 shrink-0" />
                          )}
                          <div>
                            <div className="font-medium text-slate-200">{step.name}</div>
                            <div className="text-[10px] text-slate-400">{step.tool}</div>
                          </div>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {isDone ? step.duration : isCurrent ? 'running...' : 'queued'}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* Deployment Verification Footer */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    Security & Health: 100% Passed
                  </span>
                  <span>AWS us-east-1 · ECS</span>
                </div>
              </div>
            )}

            {/* Tab 2: Portrait with floating badge chips */}
            {activeTab === 'portrait' && (
              <div className="p-6 relative">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <Image
                    src={portrait}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to static public path if chunk URL fails
                      const target = e.currentTarget as HTMLImageElement
                      if (target.src !== '/portrait.png') {
                        target.src = '/portrait.png'
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                  
                  {/* Floating badge inside */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-dark-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">{profile.name}</p>
                      <p className="text-xs text-cyan-400 font-mono">{profile.headline}</p>
                    </div>
                    <span className="px-2 py-1 rounded bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-[11px] font-mono">
                      Cairo, EG
                    </span>
                  </div>
                </div>
              </div>
            )}
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}

