import { motion } from 'framer-motion'
import { Brain, Telescope, Camera } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Machine Learning',
    desc: 'From classical ML to deep learning, I love building models that uncover patterns and power real products.',
  },
  {
    icon: Telescope,
    title: 'Astronomy',
    desc: 'Curious about the universe — from nebulae to galaxies, I explore space through data and optics.',
  },
  {
    icon: Camera,
    title: 'Astrophotography',
    desc: 'Long exposures, stacking, calibration — capturing faint photons and turning them into vivid images.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(600px_circle_at_0%_0%,#6d28d9,transparent_40%),radial-gradient(600px_circle_at_100%_0%,#4f46e5,transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
              Blending AI with the Night Sky
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-4 text-slate-300">
              I work at the intersection of data and starlight. My projects range from image enhancement pipelines and object detection to end-to-end ML apps.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-8 grid sm:grid-cols-3 gap-4">
              {items.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 grid place-items-center text-white mb-3">
                    <Icon size={18} />
                  </div>
                  <div className="font-semibold text-white">{title}</div>
                  <div className="text-sm text-slate-300 mt-1">{desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-2">
              <div className="h-full w-full rounded-xl bg-slate-900/60 grid place-items-center text-slate-300">
                Star trails • Nebulae • Milky Way • Lunar mosaics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
