import { useScrollAnimation } from '../hooks/useScrollAnimation'

const quickInfo = [
  { label: 'Location', value: 'Jabalpur, MP' },
  { label: 'Education', value: 'IIITDM Jabalpur' },
  { label: 'Interests', value: 'Web Dev, AI, Leadership' },
  { label: 'Availability', value: 'Open to Opportunities' },
]

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight text-center">
          About
        </h2>
        <div className="animate-on-scroll stagger-1 mt-2 w-12 h-px bg-black dark:bg-white mx-auto" />

        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Bio */}
          <div className="animate-on-scroll from-left stagger-2">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a student at <strong className="font-semibold text-black dark:text-white">IIITDM Jabalpur</strong>, studying Electronics &amp; Communication Engineering. My work sits at the intersection of technology and leadership — I build full-stack web applications with the <strong className="font-semibold text-black dark:text-white">MERN stack</strong>, lead large-scale campus events, and contribute to open-source communities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              I thrive in environments where management meets engineering. Whether it's coordinating a multi-day cultural fest or shipping a production-ready app, I bring structure, clarity, and execution to everything I do.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              As an active <strong className="font-semibold text-black dark:text-white">open source contributor</strong>, I believe in building in public and giving back to the developer community.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickInfo.map((item, i) => (
              <div
                key={item.label}
                className={`animate-on-scroll scale-up stagger-${i + 1} p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-colors duration-200`}
              >
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
