"use client"

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { Github, Linkedin, Facebook, Mail } from 'lucide-react'
import { profile } from '@/data/profile'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-black/10 bg-white/60 text-neutral-900 dark:border-white/10 dark:bg-black/30 dark:text-white">
      <div className="section flex items-center justify-between py-4">
        <Link href="#" className="font-semibold text-neutral-900 hover:text-black dark:text-white/90 dark:hover:text-white">
          <span className="gradient-text">{profile.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-neutral-700 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/moaaz17877640" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/moaaz-elmahi/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"><Linkedin className="w-5 h-5" /></a>
          <a href="https://www.facebook.com/Moaaz.elmahy" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"><Facebook className="w-5 h-5" /></a>
          <a href={`mailto:${profile.email}`} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"><Mail className="w-5 h-5" /></a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
