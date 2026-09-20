"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { Github, Linkedin, Mail, Menu, X, FileText, Terminal } from 'lucide-react'
import { profile } from '@/data/profile'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-4 sm:px-6 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto border ${
          scrolled
            ? 'bg-dark-900/80 dark:bg-dark-900/80 light:bg-white/85 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/40 py-2.5 px-4 sm:px-6'
            : 'bg-dark-900/40 dark:bg-dark-900/40 light:bg-white/60 backdrop-blur-md border-white/5 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="#" className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-cyan via-indigo-500 to-neon-violet p-[1px] shadow-glow">
              <div className="w-full h-full rounded-[7px] bg-dark-950 flex items-center justify-center text-neon-cyan group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-neon-cyan transition-colors">
                {profile.name.split(' ')[0]} <span className="text-neon-cyan font-normal">{profile.name.split(' ')[1]}</span>
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider uppercase hidden sm:block">
                Cloud / DevOps
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 border border-neon-cyan/40 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1.5 border-r border-white/10 pr-2 mr-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Resume CTA */}
            <a
              href="#resume"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-neon-cyan/40 bg-neon-cyan/10 text-cyan-300 hover:bg-neon-cyan/20 transition-all shadow-glow"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden pt-3 border-t border-white/10 mt-3"
            >
              <nav className="flex flex-col gap-1 pb-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10 font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2 mt-2 border-t border-white/10 px-2">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-white">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

