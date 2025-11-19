import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! I will get back to you soon.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-slate-300">Got a project, idea, or observation to discuss? Say hello.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input required name="name" placeholder="Name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <textarea required name="message" placeholder="Message" rows="5" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <motion.button whileTap={{ scale: 0.98 }} className="inline-flex justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 font-medium text-white shadow-lg hover:shadow-xl">
                Send Message
              </motion.button>
              <div className="text-sm text-slate-300">{status}</div>
            </div>
          </form>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
            <p>
              I’m open to collaborations in computer vision, astronomy outreach, and creative ML applications. If you have a dataset from the night sky, I’d love to see it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
