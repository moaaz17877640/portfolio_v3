"use client"

import { useState, useEffect } from 'react'
import { Github, Linkedin, Facebook, ArrowUp, Terminal, ShieldCheck, Clock } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Footer() {
  const [cairoTime, setCairoTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      })
      setCairoTime(timeStr)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-200 bg-white/90 dark:border-white/[0.08] dark:bg-dark-950/80 backdrop-blur-xl relative z-10">
      <div className="section py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-200 dark:border-white/[0.06]">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full rounded-[6px] bg-white dark:bg-dark-950 flex items-center justify-center text-cyan-600 dark:text-cyan-300">
                  <Terminal className="w-3.5 h-3.5" />
                </div>
              </div>
              <span className="font-bold text-slate-900 dark:text-white tracking-tight">{profile.name}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
              Cloud & DevOps Engineer · AWS & IaC Specialist
            </p>
          </div>

          {/* Operational Status & Cairo Time */}
          <div className="flex flex-col items-start sm:items-center text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500" />
              </span>
              <span>All Systems Operational</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Cairo, Egypt: {cairoTime || '02:00:00 PM'} 🇪🇬</span>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center justify-start sm:justify-end gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-cyan-500/50 dark:bg-white/[0.03] dark:border-white/[0.08] dark:text-slate-300 dark:hover:text-white dark:hover:border-cyan-500/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-cyan-500/50 dark:bg-white/[0.03] dark:border-white/[0.08] dark:text-slate-300 dark:hover:text-white dark:hover:border-cyan-500/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-cyan-500/50 dark:bg-white/[0.03] dark:border-white/[0.08] dark:text-slate-300 dark:hover:text-white dark:hover:border-cyan-500/40 transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-cyan-500/50 dark:bg-white/[0.03] dark:border-white/[0.08] dark:text-slate-300 dark:hover:text-white dark:hover:border-cyan-500/40 transition-all group"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}

