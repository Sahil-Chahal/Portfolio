import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sahilchahal01',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Sahil-Chahal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:chahal.sahil0102@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
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

        {/* Social Icons with hover labels */}
        <div className="animate-on-scroll stagger-2 flex items-center justify-center gap-8 mt-8">
          {socials.map(social => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center"
            >
              {/* Hover label */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
                {social.label}
              </span>
              {/* Icon */}
              <span className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 group-hover:-translate-y-1 transform transition-transform">
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="animate-on-scroll from-left stagger-3 space-y-5">
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
        </div>
      </div>
    </section>
  )
}
