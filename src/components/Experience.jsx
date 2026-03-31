import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    title: 'Zonal Coordinator',
    org: 'Science of Spirituality',
    duration: '2024 — Present',
    points: [
      'Coordinating zonal-level events with 500+ participants across multiple cities.',
      'Managing logistics, team allocation, and outreach strategies.',
      'Building community engagement through structured volunteer programs.',
    ],
  },
  {
    title: 'Co-Coordinator',
    org: 'Jazbaat — IIITDM Cultural Fest',
    duration: '2024 — 2025',
    points: [
      'Led a team of 30+ volunteers to organize the college\'s flagship cultural fest.',
      'Managed budgets, sponsorships, and event scheduling for 20+ events.',
      'Achieved record footfall and engagement across all event verticals.',
    ],
  },
  {
    title: 'Campus Ambassador',
    org: 'Zuno',
    duration: '2024',
    points: [
      'Represented the platform at IIITDM Jabalpur and drove student onboarding.',
      'Organized campus workshops and awareness sessions.',
    ],
  },
  {
    title: 'Open Source Contributor',
    org: 'Social Summer of Code (SSOC)',
    duration: '2024',
    points: [
      'Contributed to multiple open-source repositories during the SSOC program.',
      'Collaborated with maintainers on feature requests and bug fixes.',
      'Strengthened skills in Git workflows and collaborative development.',
    ],
  },
]

export default function Experience() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50 dark:bg-neutral-900" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight text-center">
          Experience
        </h2>
        <div className="animate-on-scroll stagger-1 mt-2 w-12 h-px bg-black dark:bg-white mx-auto" />

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`animate-on-scroll stagger-${Math.min(i + 1, 5)} relative pl-12 md:pl-16`}>
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 border-black dark:border-white bg-white dark:bg-neutral-900" />

                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {exp.org} · {exp.duration}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
