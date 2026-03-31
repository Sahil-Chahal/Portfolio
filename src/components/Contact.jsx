import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const socials = [
  {
    label: 'Email',
    href: 'mailto:chahal.sahil0102@gmail.com',
    display: 'chahal.sahil0102@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Sahil-Chahal',
    display: 'github.com/Sahil-Chahal',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sahilchahal01',
    display: 'linkedin.com/in/sahilchahal01',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useScrollAnimation()

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-neutral-900" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight text-center">
          Contact
        </h2>
        <div className="animate-on-scroll stagger-1 mt-2 w-12 h-px bg-black dark:bg-white mx-auto" />

        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="animate-on-scroll from-left stagger-2 space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-white dark:bg-neutral-950 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              id="contact-submit"
              className="w-full px-6 py-3 text-sm font-medium bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition-opacity duration-200"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>

          {/* Social Links */}
          <div className="animate-on-scroll from-right stagger-3 flex flex-col justify-center space-y-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just to say hello. I'm always open to connecting with like-minded people.
            </p>

            <div className="space-y-4">
              {socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <span className="text-xs uppercase tracking-widest text-gray-500">
                    {social.label}
                  </span>
                  <span className="block text-sm font-medium mt-0.5 group-hover:underline underline-offset-4">
                    {social.display}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
