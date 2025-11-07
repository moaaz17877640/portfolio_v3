"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import GlassCard from './GlassCard'
import { profile } from '@/data/profile'
// Import the portrait from the project root (current file path: src/components)
// This works even if the image isn't under /public
import profileImg from '../../Gemini_Generated_Image_v97mqav97mqav97m.png'

export default function About() {
  return (
    <section id="about" className="section">
  <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">About</motion.h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="md:col-span-1">
          <GlassCard className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={profileImg}
                alt="Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </GlassCard>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="md:col-span-2">
          <GlassCard className="p-6 md:p-8">
            {profile.about ? (
              <div className="space-y-4">
                {profile.about.split('\n').map((para: string, i: number) => (
                  <p key={i} className="leading-relaxed text-neutral-700 dark:text-white/80">{para}</p>
                ))}
              </div>
            ) : (
              <p className="leading-relaxed text-neutral-700 dark:text-white/70">About information not loaded yet. Add an `about` field to data/profile.ts.</p>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
