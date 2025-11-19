import { motion } from 'framer-motion'

const projects = [
  {
    title: 'NebulaNet',
    desc: 'Deep learning model to segment nebulae and galaxies from raw astro images; includes preprocessing pipeline and dataset tools.',
    tags: ['PyTorch', 'Segmentation', 'CV'],
    link: '#',
  },
  {
    title: 'StarStacker',
    desc: 'Web-based stacking and calibration demo that de-noises and aligns night-sky exposures for crisp results.',
    tags: ['Web', 'Image Processing', 'WASM'],
    link: '#',
  },
  {
    title: 'SkyClassifier',
    desc: 'Transfer learning project to classify constellations and DSOs from handheld shots.',
    tags: ['Transfer Learning', 'Vision'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-3 text-slate-300">A mix of research, tools, and creative builds.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="text-lg font-semibold text-white">{p.title}</div>
              <div className="mt-2 text-slate-300 text-sm">{p.desc}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
