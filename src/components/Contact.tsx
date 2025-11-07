"use client"

import { motion } from 'framer-motion'
import GlassCard from './GlassCard'
import { Github, Linkedin, Facebook, Phone, Mail } from 'lucide-react'

const EMAIL = 'mstfyrb477@gmail.com'
const PHONE = '+201017877640'

export default function Contact() {
  return (
    <section id="contact" className="section">
  <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">Contact</motion.h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 md:p-8">
          <form action={`mailto:${EMAIL}`} method="post" encType="text/plain" className="space-y-4">
            <div>
              <label className="block text-sm text-neutral-700 dark:text-white/70">Name</label>
              <input name="name" required className="w-full mt-1 px-4 py-3 rounded-xl bg-white border border-black/10 text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-neutral-400 dark:bg-white/5 dark:text-white dark:border-white/10 dark:placeholder:text-white/50 dark:focus:border-neon-cyan" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 dark:text-white/70">Email</label>
              <input type="email" name="email" required className="w-full mt-1 px-4 py-3 rounded-xl bg-white border border-black/10 text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-neutral-400 dark:bg-white/5 dark:text-white dark:border-white/10 dark:placeholder:text-white/50 dark:focus:border-neon-cyan" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 dark:text-white/70">Message</label>
              <textarea name="message" rows={5} required className="w-full mt-1 px-4 py-3 rounded-xl bg-white border border-black/10 text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-neutral-400 dark:bg-white/5 dark:text-white dark:border-white/10 dark:placeholder:text-white/50 dark:focus:border-neon-cyan" />
            </div>
            <div className="pt-2">
              <button className="btn-primary"><Mail className="w-4 h-4" /> Send</button>
            </div>
          </form>
        </GlassCard>
        <GlassCard className="p-6 md:p-8">
          <div className="grid gap-3 text-neutral-800 dark:text-white/80">
            <a className="flex items-center gap-3 hover:text-black dark:hover:text-white" href={`mailto:${EMAIL}`}><Mail className="w-5 h-5" /> {EMAIL}</a>
            <a className="flex items-center gap-3 hover:text-black dark:hover:text-white" href={`tel:${PHONE}`}><Phone className="w-5 h-5" /> {PHONE}</a>
            <a className="flex items-center gap-3 hover:text-black dark:hover:text-white" href="https://github.com/moaaz17877640" target="_blank" rel="noreferrer"><Github className="w-5 h-5" /> GitHub</a>
            <a className="flex items-center gap-3 hover:text-black dark:hover:text-white" href="https://www.linkedin.com/in/moaaz-elmahi/" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5" /> LinkedIn</a>
            <a className="flex items-center gap-3 hover:text-black dark:hover:text-white" href="https://www.facebook.com/Moaaz.elmahy" target="_blank" rel="noreferrer"><Facebook className="w-5 h-5" /> Facebook</a>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
