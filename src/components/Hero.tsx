"use client"

import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import Image from 'next/image'
import { profile } from '@/data/profile'
// Use the same locally committed portrait image as About.tsx
// This avoids needing a /public copy and works reliably with Next.js static import
import portrait from '../../Gemini_Generated_Image_v97mqav97mqav97m.png'

export default function Hero() {
  return (
    <section id="hero" className="relative section pt-24 md:pt-32">
  <div className="absolute inset-0 pointer-events-none bg-neon-gradient mix-blend-screen opacity-35 hidden sm:block" />
      <div className="relative grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-white"
          >
            Hi, I’m <span className="gradient-text drop-shadow">{profile.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-neutral-700 dark:text-white/70 max-w-2xl"
          >
            {profile.headline} building reliable cloud platforms, automated delivery pipelines, and developer tooling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              <Mail className="w-4 h-4" /> Hire Me
            </a>
            <a
              href="#resume"
              className="btn-outline"
            >
              <Download className="w-4 h-4" /> View Resume
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="glass-card p-4 md:p-6 rounded-3xl">
            <div className="aspect-[4/3] w-full rounded-2xl relative overflow-hidden">
              {/* Subtle background glow behind the photo */}
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_30%_20%,#00e5ff,transparent_30%),radial-gradient(circle_at_80%_20%,#8a2be2,transparent_30%),radial-gradient(circle_at_50%_80%,#ff2da1,transparent_25%)]" />
              <Image
                src={portrait}
                alt="Moaaz Elmahi portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
