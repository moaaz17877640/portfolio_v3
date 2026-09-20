"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  GitBranch,
  Box,
  Layers,
  Cloud,
  Activity,
  Terminal,
  ChevronRight,
  ShieldCheck
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import { profile } from '@/data/profile'
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
  SiGrafana
} from 'react-icons/si'
import type { IconType } from 'react-icons'

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
  SiGrafana
}

type SkillCategory = 'all' | 'cloud' | 'automation' | 'systems'

interface SkillItem {
  name: string
  icon: string
  color: string
  category: 'cloud' | 'automation' | 'systems'
  stage: 'code' | 'build' | 'provision' | 'deploy' | 'monitor'
  proficiency: number
  description: string
}

const detailedSkills: SkillItem[] = [
  { name: 'AWS', icon: 'SiAmazonaws', color: '#FF9900', category: 'cloud', stage: 'deploy', proficiency: 95, description: 'VPC, EC2, ECS, S3, IAM, CloudFormation, CloudWatch' },
  { name: 'Microsoft Azure', icon: 'SiMicrosoftazure', color: '#0078D4', category: 'cloud', stage: 'deploy', proficiency: 85, description: 'Virtual Networks, App Services, VMs, Azure DevOps' },
  { name: 'Docker', icon: 'SiDocker', color: '#2496ED', category: 'cloud', stage: 'build', proficiency: 95, description: 'Multi-stage builds, container hardening, Docker Compose' },
  { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5', category: 'cloud', stage: 'deploy', proficiency: 88, description: 'Deployments, Services, ConfigMaps, Ingress, Pod scheduling' },
  { name: 'Terraform', icon: 'SiTerraform', color: '#7B42BC', category: 'automation', stage: 'provision', proficiency: 92, description: 'Modular IaC, state management, automated drift checks' },
  { name: 'Ansible', icon: 'SiAnsible', color: '#EE0000', category: 'automation', stage: 'provision', proficiency: 90, description: 'Server configuration, idempotency, role-based playbooks' },
  { name: 'GitHub Actions', icon: 'SiGithubactions', color: '#2088FF', category: 'automation', stage: 'code', proficiency: 95, description: 'Custom composite actions, release workflows, CI/CD matrices' },
  { name: 'Jenkins', icon: 'SiJenkins', color: '#D24939', category: 'automation', stage: 'build', proficiency: 88, description: 'Declarative pipelines, webhook triggers, gated deployments' },
  { name: 'Linux', icon: 'SiLinux', color: '#FCC624', category: 'systems', stage: 'monitor', proficiency: 94, description: 'Ubuntu, Debian, RHEL, systemd, kernel tuning, networking' },
  { name: 'Bash', icon: 'SiGnubash', color: '#4EAA25', category: 'systems', stage: 'code', proficiency: 92, description: 'Automated maintenance, CLI tools, system provisioning' },
  { name: 'Python', icon: 'SiPython', color: '#3776AB', category: 'systems', stage: 'code', proficiency: 86, description: 'Cloud automation scripts, Telegram Bot API, REST APIs' },
  { name: 'Git', icon: 'SiGit', color: '#F05032', category: 'systems', stage: 'code', proficiency: 95, description: 'GitFlow, trunk-based releases, branch protections, hooks' },
  { name: 'Prometheus', icon: 'SiPrometheus', color: '#E6522C', category: 'systems', stage: 'monitor', proficiency: 88, description: 'Metrics scraping, PromQL, alert rules, exporters' },
  { name: 'Grafana', icon: 'SiGrafana', color: '#F46800', category: 'systems', stage: 'monitor', proficiency: 90, description: 'System telemetry dashboards, SLA monitoring, alert channels' }
]

const lifecycleStages = [
  { id: 'code', title: 'Plan & Code', icon: GitBranch, description: 'Version control, developer gates & scripting' },
  { id: 'build', title: 'Build & Test', icon: Box, description: 'Docker containerization & CI pipeline gates' },
  { id: 'provision', title: 'Provision IaC', icon: Layers, description: 'Declarative infrastructure with Terraform & Ansible' },
  { id: 'deploy', title: 'Deploy & Orchestrate', icon: Cloud, description: 'AWS, Azure & Kubernetes zero-downtime releases' },
  { id: 'monitor', title: 'Monitor & Observe', icon: Activity, description: 'Prometheus, Grafana & Linux system observability' }
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all')
  const [activeStage, setActiveStage] = useState<string | null>(null)

  const filteredSkills = detailedSkills.filter((s) => {
    const matchesCategory = activeCategory === 'all' || s.category === activeCategory
    const matchesStage = activeStage === null || s.stage === activeStage
    return matchesCategory && matchesStage
  })

  return (
    <section id="skills" className="section relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          DevOps & Cloud Capabilities
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
          An end-to-end toolchain engineered for automation, infrastructure reliability, and continuous deployment.
        </p>
      </div>

      {/* DevOps Lifecycle Visualizer Bar */}
      <div className="mb-10">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2 font-medium">
          <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-neon-cyan" />
          <span>DevOps Lifecycle Flow — Select a stage to filter:</span>
          {activeStage && (
            <button
              onClick={() => setActiveStage(null)}
              className="ml-auto text-xs text-cyan-700 dark:text-neon-cyan hover:underline capitalize font-semibold"
            >
              Reset Stage Filter
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {lifecycleStages.map((stage, idx) => {
            const Icon = stage.icon
            const isSelected = activeStage === stage.id
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(isSelected ? null : stage.id)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-50 border-cyan-500 text-cyan-950 shadow-md dark:bg-neon-cyan/15 dark:border-neon-cyan dark:text-white dark:shadow-glow'
                    : 'bg-white/90 border-slate-200/90 hover:border-slate-300 text-slate-600 hover:text-slate-900 shadow-sm dark:bg-dark-900/60 dark:border-white/[0.08] dark:hover:border-white/20 dark:text-slate-400 dark:hover:text-white dark:shadow-none'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className={`p-1.5 rounded-md ${isSelected ? 'bg-cyan-100 text-cyan-800 dark:bg-neon-cyan/20 dark:text-cyan-300' : 'bg-slate-100 text-slate-600 dark:bg-white/[0.04] dark:text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-semibold">0{idx + 1}</span>
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">{stage.title}</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{stage.description}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          All Technologies ({detailedSkills.length})
        </button>
        <button
          onClick={() => setActiveCategory('cloud')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeCategory === 'cloud'
              ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          Cloud & Containers
        </button>
        <button
          onClick={() => setActiveCategory('automation')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeCategory === 'automation'
              ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          IaC & CI/CD Automation
        </button>
        <button
          onClick={() => setActiveCategory('systems')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
            activeCategory === 'systems'
              ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          Systems & Observability
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <AnimatePresence>
          {filteredSkills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] ?? SiGit
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
              >
                <SpotlightCard
                  spotlightColor={`${skill.color}25`}
                  className="p-5 h-full flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 transition-transform group-hover:scale-110 shadow-sm"
                        style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}35` }}
                      >
                        <Icon size={26} color={skill.color} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 dark:bg-white/[0.04] dark:border-white/[0.08] dark:text-slate-400 capitalize font-medium">
                        {skill.stage}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/[0.06]">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                      <span className="text-slate-500 dark:text-slate-400">Proficiency</span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-white/[0.06] rounded-full h-1 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${skill.proficiency}%`,
                          backgroundColor: skill.color
                        }}
                      />
                    </div>
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
