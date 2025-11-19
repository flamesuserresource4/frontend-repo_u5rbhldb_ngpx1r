import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=1400&auto=format&fit=crop', title: 'Milky Way Core' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop', title: 'Orion Nebula' },
  { src: 'https://images.unsplash.com/photo-1558048743-7d6e8b0aa510?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaWxreSUyMFdheSUyMENvcmV8ZW58MHwwfHx8MTc2MzUzNTYwOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Star Trails' },
  { src: 'https://images.unsplash.com/photo-1558048743-7d6e8b0aa510?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaWxreSUyMFdheSUyMENvcmV8ZW58MHwwfHx8MTc2MzUzNTYwOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Andromeda' },
  { src: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1400&auto=format&fit=crop', title: 'Lunar Surface' },
  { src: 'https://images.unsplash.com/photo-1473923377535-0002805f57e8?q=80&w=1400&auto=format&fit=crop', title: 'Horsehead Nebula' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Astro Gallery</h2>
          <p className="mt-3 text-slate-300">A few favorites from nights under the stars.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.button key={img.src} onClick={() => setActive(img)} whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img src={img.src} alt={img.title} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 text-white font-medium drop-shadow">{img.title}</div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/80 grid place-items-center p-6" onClick={() => setActive(null)}>
            <motion.img initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} src={active.src} alt={active.title} className="max-h-[85vh] rounded-xl shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
