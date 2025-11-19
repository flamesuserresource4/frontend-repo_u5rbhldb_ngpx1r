import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-24 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            >
              ML Explorer. Astrophotographer. Space Enthusiast.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg text-slate-200 max-w-2xl"
            >
              I build intelligent systems, capture the cosmos, and share stories from the night sky. Dive into my work blending machine learning with astrophotography.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg hover:shadow-xl transition">
                View Projects
              </a>
              <a href="#gallery" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">
                Astro Gallery
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
