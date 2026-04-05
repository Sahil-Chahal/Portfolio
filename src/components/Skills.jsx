import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillCategories = [
  {
    title: 'Technical Skills',
    skills: ['Java', 'JavaScript', 'Python', 'C++', 'MERN', 'MongoDB', 'SQL'],
  },
  {
    title: 'Automation & AI',
    skills: ['n8n', 'Hugging Face'],
  },
  {
    title: 'Management Skills',
    skills: ['Leadership', 'Event Planning', 'Team Management', 'Communication'],
  },
]

export default function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-neutral-900" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight text-center">
          Skills
        </h2>
        <div className="animate-on-scroll stagger-1 mt-2 w-12 h-px bg-black dark:bg-white mx-auto" />

        <div className="mt-16 space-y-12">
          {skillCategories.map((category, i) => (
            <div key={i} className={`animate-on-scroll stagger-${i + 1}`}>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-500 font-medium">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium border border-gray-200 dark:border-gray-800 rounded-full hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
