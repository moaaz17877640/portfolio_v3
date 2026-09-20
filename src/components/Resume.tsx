"use client"

import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'
import { Download, ExternalLink, FileText, Sparkles, CheckCircle2 } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Resume() {
  const id = profile.resumeId
  const driveEmbed = `https://drive.google.com/file/d/${id}/preview`
  const driveDownload = `https://drive.google.com/uc?export=download&id=${id}`
  const driveDirectView = `https://drive.google.com/file/d/${id}/view`

  return (
    <section id="resume" className="section relative">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Resume & Credentials
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Detailed breakdown of production experiences, technical toolchains, and verified certifications.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={driveDirectView}
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-xs sm:text-sm py-2.5 px-4"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in Tab</span>
          </a>
          <a
            href={driveDownload}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs sm:text-sm py-2.5 px-5"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      <SpotlightCard className="p-4 sm:p-6 border-white/10 shadow-2xl">
        <div className="flex items-center justify-between px-3 py-2 mb-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-200 font-medium">Moaaz_Saeed_Elmahi_DevOps_Resume.pdf</span>
          </div>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified & Updated
          </span>
        </div>

        <div className="aspect-[16/11] sm:aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-dark-950 shadow-inner">
          <iframe
            src={driveEmbed}
            className="w-full h-full"
            allow="autoplay"
            title="Moaaz Saeed Elmahi Resume"
          />
        </div>
      </SpotlightCard>
    </section>
  )
}

