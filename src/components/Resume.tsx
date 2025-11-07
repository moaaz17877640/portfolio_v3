"use client"

import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import { Download } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Resume() {
  const id = profile.resumeId
  const driveEmbed = `https://drive.google.com/file/d/${id}/preview`
  const driveDownload = `https://drive.google.com/uc?export=download&id=${id}`

  return (
    <section id="resume" className="section">
  <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Resume</motion.h2>
      <GlassCard className="p-4 md:p-6 mt-8">
        <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/10 shadow-glow">
          <iframe src={driveEmbed} className="w-full h-full" allow="autoplay" title="Resume" />
        </div>
        <div className="mt-4 flex justify-end">
          <a href={driveDownload} className="btn-primary"><Download className="w-4 h-4" /> Download Resume</a>
        </div>
      </GlassCard>
    </section>
  )
}
