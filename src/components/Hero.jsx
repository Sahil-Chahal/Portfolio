const tags = ['Full Stack', 'MERN', 'Leadership', 'Event Management', 'AI Automation']

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="hero-animate text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Sahil Chahal
        </h1>

        <p className="hero-animate hero-animate-delay-1 mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
          Electronics &amp; Communication Engineering Student · Full-Stack Developer · Event Leader
        </p>

        {/* Tags */}
        <div className="hero-animate hero-animate-delay-2 mt-8 flex flex-wrap justify-center gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-4 py-1.5 text-xs font-medium tracking-wide uppercase border border-gray-200 dark:border-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="hero-animate hero-animate-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            id="hero-view-projects"
            className="px-8 py-3 text-sm font-medium bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-80 transition-opacity duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            id="hero-contact-me"
            className="px-8 py-3 text-sm font-medium border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
