import { useScrollAnimation } from '../hooks/useScrollAnimation'

const achievements = [
  {
    title: 'National Speech Competition',
    org: 'National Level',
    year: '2024',
    badge: 'Represented',
    highlight: '200+ Participants',
    description:
      'Represented region at the national-level speech competition, competing against 200+ participants.',
  },
  {
    title: 'IIT Guwahati Street Play',
    org: 'Cultural Fest',
    year: '2024',
    badge: 'Performer',
    highlight: '1,000+ Audience',
    description:
      'Performed in a street play at IIT Guwahati\'s cultural fest, reaching a live audience of 1,000+.',
  },
  {
    title: 'BITS Hyderabad Competition',
    org: 'Inter-College',
    year: '2024',
    badge: 'Competed',
    highlight: 'Top Finish',
    description:
      'Competed at BITS Pilani Hyderabad\'s inter-college event, securing a top finish among 50+ teams.',
  },
  {
    title: 'Mono Act Winner',
    org: 'College Cultural Fest',
    year: '2024',
    badge: 'Winner',
    highlight: 'First Place',
    description:
      'Won the mono-act competition at the college cultural fest, judged on performance and originality.',
  },
  {
    title: 'Poetry Competition',
    org: 'Inter-College',
    year: '2024',
    badge: 'Recognized',
    highlight: 'Creative Writing',
    description:
      'Recognized for creative writing at an inter-college poetry competition.',
  },
]

export default function Achievements() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="achievements" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight text-center">
          Achievements
        </h2>
        <p className="animate-on-scroll stagger-1 mt-3 text-sm text-gray-500 dark:text-gray-500 text-center">
          Milestones that shaped my journey.
        </p>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Center line — visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-16 md:space-y-20">
            {achievements.map((item, i) => {
              const isLeft = i % 2 === 0

              return (
                <div key={i} className="relative">
                  {/* Dot — center on md+, left on mobile */}
                  <div className="absolute left-2.5 md:left-1/2 top-6 md:top-8 w-3 h-3 rounded-full bg-black dark:bg-white md:-translate-x-1/2 z-10" />

                  {/* Card wrapper */}
                  <div
                    className={`animate-on-scroll ${isLeft ? 'from-left' : 'from-right'} stagger-${Math.min(i + 1, 5)} pl-10 md:pl-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 md:p-6 hover:border-black dark:hover:border-white transition-colors duration-300">
                      {/* Badge + Year */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider border border-gray-300 dark:border-gray-700 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
                          {item.badge}
                        </span>
                        <span className="text-sm font-medium text-gray-400 dark:text-gray-600">
                          {item.year}
                        </span>
                      </div>

                      {/* Title + Org */}
                      <h3 className="mt-3 text-base md:text-lg font-bold leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide mt-0.5">
                        {item.org}
                      </p>

                      {/* Highlight badge */}
                      <div className="mt-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-black text-white dark:bg-white dark:text-black rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          {item.highlight}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
