const tags = ['Full Stack', 'MERN', 'Leadership', 'Event Management', 'AI Automation']

function smoothScrollTo(href) {
  const target = document.querySelector(href)
  if (target) {
    const navHeight = 64
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 1000
    let startTime = null

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * ease)

      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }
}

export default function Hero() {
  const handleClick = (e, href) => {
    e.preventDefault()
    smoothScrollTo(href)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="hero-animate text-6xl md:text-8xl font-black tracking-tight leading-none">
          Sahil Chahal
        </h1>

        <p className="hero-animate hero-animate-delay-1 mt-6 text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl mx-auto">
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
            onClick={(e) => handleClick(e, '#projects')}
            className="px-10 py-4 text-base font-semibold bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition-opacity duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            id="hero-contact-me"
            onClick={(e) => handleClick(e, '#contact')}
            className="px-10 py-4 text-base font-semibold border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
