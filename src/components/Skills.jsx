import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'PyTorch', level: 85 },
  { name: 'TensorFlow', level: 70 },
  { name: 'Computer Vision', level: 80 },
  { name: 'MLOps', level: 65 },
  { name: 'Data Viz', level: 75 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            ML Skills
          </motion.h2>
          <p className="mt-3 text-slate-300">A snapshot of my toolkit for building and shipping intelligent systems.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {skills.map((s, idx) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <div className="flex justify-between text-sm text-slate-200">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} transition={{ duration: 0.9 }} className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
