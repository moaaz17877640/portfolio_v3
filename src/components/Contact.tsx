"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpotlightCard from './SpotlightCard'
import {
  Github,
  Linkedin,
  Facebook,
  Phone,
  Mail,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react'
import { profile } from '@/data/profile'

export default function Contact() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2500)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => {
      setFormStatus('submitted')
      setTimeout(() => setFormStatus('idle'), 4000)
    }, 800)
  }

  return (
    <section id="contact" className="section relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INITIATE CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Let’s Build Something Reliable
        </h2>
        <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
          Whether you need cloud infrastructure automation, CI/CD pipeline design, or training for your team, let’s connect.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick-Copy Card */}
          <SpotlightCard className="p-5 sm:p-6 border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase">Direct Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(profile.email, 'email')}
                className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all shrink-0"
                title="Copy Email"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copiedType === 'email' && (
              <p className="text-[11px] text-emerald-400 font-mono mt-2">✓ Copied to clipboard!</p>
            )}
          </SpotlightCard>

          {/* Phone & WhatsApp Card */}
          <SpotlightCard className="p-5 sm:p-6 border-white/10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono uppercase">Phone & WhatsApp</div>
                  <a
                    href="https://wa.me/201017877640"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => copyToClipboard(profile.phone, 'phone')}
                  className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href="https://wa.me/201017877640"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition-all"
                >
                  Chat
                </a>
              </div>
            </div>
            {copiedType === 'phone' && (
              <p className="text-[11px] text-emerald-400 font-mono mt-2">✓ Copied to clipboard!</p>
            )}
          </SpotlightCard>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
            >
              <Github className="w-5 h-5 mb-1.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
            >
              <Linkedin className="w-5 h-5 mb-1.5 group-hover:scale-110 transition-transform text-[#0077B5]" />
              <span className="text-xs font-semibold">LinkedIn</span>
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
            >
              <Facebook className="w-5 h-5 mb-1.5 group-hover:scale-110 transition-transform text-[#1877F2]" />
              <span className="text-xs font-semibold">Facebook</span>
            </a>
          </div>

          {/* Location & Timezone Card */}
          <SpotlightCard className="p-5 border-white/10">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Cairo, Egypt (UTC+3)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Online & Ready</span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-6 sm:p-8 border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below to initiate an email directly to Moaaz.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:border-neon-cyan focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:border-neon-cyan focus:bg-white/[0.06] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Cloud Infrastructure / DevOps Project"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:border-neon-cyan focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your infrastructure requirements, delivery goals, or timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:border-neon-cyan focus:bg-white/[0.06] transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-primary"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {formStatus === 'submitting'
                      ? 'Sending Message...'
                      : formStatus === 'submitted'
                      ? 'Message Sent!'
                      : 'Send Message'}
                  </span>
                </button>

                {formStatus === 'submitted' && (
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Message sent successfully!
                  </span>
                )}
              </div>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

