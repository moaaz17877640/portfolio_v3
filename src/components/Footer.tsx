import { Github, Linkedin, Facebook } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-black/40">
      <div className="section flex flex-col items-center gap-3 py-8">
        <div className="flex items-center gap-3">
          <a href="https://github.com/moaaz17877640" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-black/5 border border-black/10 hover:shadow-glow dark:bg-white/5 dark:border-white/10">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/moaaz-elmahi/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-black/5 border border-black/10 hover:shadow-glow dark:bg-white/5 dark:border-white/10">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/Moaaz.elmahy" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-black/5 border border-black/10 hover:shadow-glow dark:bg-white/5 dark:border-white/10">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        <div className="text-center text-sm text-neutral-600 dark:text-white/60">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
