import { useState, useEffect } from 'react'
import { Menu, X, Rocket, Camera, Brain, GalleryHorizontalEnd, FolderGit2, Mail } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home', icon: Rocket },
  { href: '#about', label: 'About', icon: Brain },
  { href: '#skills', label: 'ML Skills', icon: FolderGit2 },
  { href: '#gallery', label: 'Astro Gallery', icon: GalleryHorizontalEnd },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 grid place-items-center shadow-lg">
              <Camera size={18} />
            </div>
            <span className="font-semibold tracking-tight">Astro ML</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/5 transition">
                <Icon size={16} className="opacity-70 group-hover:opacity-100" />
                {label}
              </a>
            ))}
          </nav>

          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 text-white" onClick={() => setOpen(o => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {navItems.map(({ href, label, icon: Icon }) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-white hover:bg-white/5 transition">
                  <Icon size={16} className="opacity-70" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
