"use client"

import { useState } from 'react'
import { MessageCircle, Mail, Phone, X } from 'lucide-react'
import { profile } from '@/data/profile'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingActionButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex flex-col gap-2 p-2 rounded-2xl bg-white/95 border border-slate-200 text-slate-900 shadow-xl dark:bg-dark-900/90 dark:border-white/15 dark:shadow-black/50 backdrop-blur-xl"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-700 dark:bg-neon-cyan/10 dark:hover:bg-neon-cyan/20 dark:border-neon-cyan/30 dark:text-cyan-300 text-xs font-semibold transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
            <a
              href="https://wa.me/201017877640"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:border-emerald-500/30 dark:text-emerald-400 text-xs font-semibold transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-neon-cyan via-indigo-500 to-neon-violet text-white shadow-glow hover:shadow-glow-strong hover:scale-105 active:scale-95 transition-all"
        aria-label="Quick contact"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  )
}

