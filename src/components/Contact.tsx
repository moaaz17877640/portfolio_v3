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
  Sparkles,
  MapPin,
  ExternalLink,
  AlertCircle,
  RotateCw
} from 'lucide-react'
import { profile } from '@/data/profile'

export default function Contact() {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null)
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'submitted' | 'activation_sent' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=${encodeURIComponent(
    formData.subject || 'Cloud / DevOps Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Moaaz,\n\nFrom: ${formData.name || '(Your Name)'} (${
      formData.email || '(Your Email)'
    })\n\nMessage:\n${formData.message || ''}`
  )}`

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.subject || 'Cloud / DevOps Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Moaaz,\n\nFrom: ${formData.name || '(Your Name)'} (${
      formData.email || '(Your Email)'
    })\n\nMessage:\n${formData.message || ''}`
  )}`

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject:
            formData.subject ||
            `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      })

      const data = await res.json()

      if (data.success === 'true' || data.success === true) {
        setFormStatus('submitted')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setFormStatus('idle'), 7000)
      } else if (
        data.message &&
        data.message.toLowerCase().includes('activation')
      ) {
        setFormStatus('activation_sent')
      } else {
        setFormStatus('error')
        setErrorMessage(data.message || 'Failed to submit form directly.')
      }
    } catch (err: any) {
      console.error('Contact submission error:', err)
      setFormStatus('error')
      setErrorMessage(
        'Network error. Please use the Gmail or default mail app button below.'
      )
    }
  }

  return (
    <section id="contact" className="section relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-cyan-800 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>INITIATE CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Let’s Build Something Reliable
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
          Whether you need cloud infrastructure automation, CI/CD pipeline design, or training for your team, let’s connect.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick-Copy Card */}
          <SpotlightCard className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">Direct Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors break-all"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => copyToClipboard(profile.email, 'email')}
                  className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900 dark:bg-white/[0.04] dark:border-white/[0.08] dark:hover:bg-white/[0.08] dark:text-slate-300 dark:hover:text-white transition-all"
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-2 rounded-lg bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 text-cyan-700 text-xs font-semibold dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-300 dark:hover:bg-cyan-500/20 transition-all flex items-center gap-1"
                  title="Open in Gmail Web"
                >
                  <span>Gmail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            {copiedType === 'email' && (
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono mt-2 font-semibold">✓ Copied to clipboard!</p>
            )}
          </SpotlightCard>

          {/* Phone & WhatsApp Card */}
          <SpotlightCard className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase">Phone & WhatsApp</div>
                  <a
                    href="https://wa.me/201017877640"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => copyToClipboard(profile.phone, 'phone')}
                  className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 hover:text-slate-900 dark:bg-white/[0.04] dark:border-white/[0.08] dark:hover:bg-white/[0.08] dark:text-slate-300 dark:hover:text-white transition-all"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <a
                  href="https://wa.me/201017877640"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 dark:bg-emerald-500/20 dark:border-emerald-500/40 dark:text-emerald-300 dark:hover:bg-emerald-500/30 transition-all"
                >
                  Chat
                </a>
              </div>
            </div>
            {copiedType === 'phone' && (
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono mt-2 font-semibold">✓ Copied to clipboard!</p>
            )}
          </SpotlightCard>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-500/50 text-slate-700 hover:text-slate-900 shadow-sm dark:bg-white/[0.02] dark:hover:bg-white/[0.06] dark:border-white/[0.08] dark:hover:border-cyan-500/40 dark:text-slate-300 dark:hover:text-white dark:shadow-none transition-all group"
            >
              <Github className="w-5 h-5 mb-1.5 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-500/50 text-slate-700 hover:text-slate-900 shadow-sm dark:bg-white/[0.02] dark:hover:bg-white/[0.06] dark:border-white/[0.08] dark:hover:border-cyan-500/40 dark:text-slate-300 dark:hover:text-white dark:shadow-none transition-all group"
            >
              <Linkedin className="w-5 h-5 mb-1.5 group-hover:scale-110 transition-transform text-[#0077B5]" />
              <span className="text-xs font-semibold">LinkedIn</span>
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-cyan-500/50 text-slate-700 hover:text-slate-900 shadow-sm dark:bg-white/[0.02] dark:hover:bg-white/[0.06] dark:border-white/[0.08] dark:hover:border-cyan-500/40 dark:text-slate-300 dark:hover:text-white dark:shadow-none transition-all group"
            >
              <Facebook className="w-5 h-5 mb-1.5 group-hover:scale-110 transition-transform text-[#1877F2]" />
              <span className="text-xs font-semibold">Facebook</span>
            </a>
          </div>

          {/* Location & Timezone Card */}
          <SpotlightCard className="p-5">
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Cairo, Egypt (UTC+3)</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online & Ready</span>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send a Direct Message</h3>
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-medium"
              >
                <span>Compose in Gmail</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
              Fill out the form below to deliver an email directly to Moaaz.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 font-medium mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-cyan-600 dark:bg-white/[0.03] dark:border-white/10 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-white/[0.06] dark:focus:border-neon-cyan shadow-sm transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 font-medium mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-cyan-600 dark:bg-white/[0.03] dark:border-white/10 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-white/[0.06] dark:focus:border-neon-cyan shadow-sm transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 font-medium mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Cloud Infrastructure / DevOps Project"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-cyan-600 dark:bg-white/[0.03] dark:border-white/10 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-white/[0.06] dark:focus:border-neon-cyan shadow-sm transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-400 font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Tell me about your infrastructure requirements, delivery goals, or timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:border-cyan-600 dark:bg-white/[0.03] dark:border-white/10 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-white/[0.06] dark:focus:border-neon-cyan shadow-sm transition-all resize-none outline-none"
                />
              </div>

              {/* Status Notifications */}
              <AnimatePresence>
                {formStatus === 'submitted' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-300 text-xs"
                  >
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Message Sent Successfully!</span>
                    </div>
                    <p>
                      Thank you for reaching out. Your message has been sent directly to Moaaz. I’ll get back to you shortly.
                    </p>
                  </motion.div>
                )}

                {formStatus === 'activation_sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-300 text-xs leading-relaxed"
                  >
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <Mail className="w-4 h-4 text-amber-600" />
                      <span>One-Time Form Activation Link Sent!</span>
                    </div>
                    <p className="mb-2">
                      FormSubmit sent a one-time confirmation email to <strong>{profile.email}</strong>. Please check your inbox (and Spam folder) and click <strong>Activate Form</strong>. All future messages will arrive directly in your inbox.
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-amber-200 dark:border-amber-500/20">
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-200/70 hover:bg-amber-200 text-amber-950 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 dark:text-amber-200 font-semibold transition-all"
                      >
                        <span>Send via Gmail Web now</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-300 text-xs leading-relaxed"
                  >
                    <div className="flex items-center gap-2 font-bold mb-1">
                      <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                      <span>Direct Submission Notice</span>
                    </div>
                    <p className="mb-2">{errorMessage}</p>
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-rose-200 dark:border-rose-500/20">
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-200/70 hover:bg-rose-200 text-rose-950 dark:bg-rose-500/20 dark:hover:bg-rose-500/30 dark:text-rose-200 font-semibold transition-all"
                      >
                        <span>Open in Gmail Web</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={mailtoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-300 hover:bg-rose-100 dark:border-rose-500/30 dark:hover:bg-rose-500/10 text-rose-800 dark:text-rose-300 font-semibold transition-all"
                      >
                        <span>Open in Default Mail App</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-primary"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <RotateCw className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 text-xs">
                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  >
                    <span>Or send via Gmail</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
