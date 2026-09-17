"use client"

import { useState } from 'react'
import { MessageCircle, Mail, Phone } from 'lucide-react'
import { profile } from '@/data/profile'

export default function FloatingActionButton() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`mb-3 grid gap-2 transition-all ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <a href={`mailto:${profile.email}`} className="btn-primary shadow-glow"><Mail className="w-4 h-4" /> Email</a>
        <a href="https://wa.me/201017877640" target="_blank" rel="noreferrer" className="btn-outline"><Phone className="w-4 h-4" /> WhatsApp</a>
      </div>
      <button onClick={() => setOpen(!open)} className="btn-primary rounded-full shadow-glow">
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  )
}
