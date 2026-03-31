import { useScrollAnimation } from '../hooks/useScrollAnimation'

const projects = [
  {
    title: 'Student Result Analysis System',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    description:
      'A full-stack platform for analyzing student academic performance with visual charts, filters, and export capabilities. Supports bulk data upload and comparative analysis across semesters.',
    github: 'https://github.com/sahilchahal',
    demo: '#',
  },
  {
    title: 'E-Library Recommendation System',
    stack: ['Python', 'Flask', 'ML', 'React'],
    description:
      'An intelligent library system that recommends books based on reading history and preferences using collaborative filtering. Features a clean search interface and personalized dashboards.',
    github: 'https://github.com/sahilchahal',
    demo: '#',
  },
  {
    title: 'Personal Finance Tracker',
    stack: ['MERN', 'Chart.js', 'JWT'],
    description:
      'A responsive finance management app with income/expense tracking, category-wise breakdowns, and interactive charts. Includes secure authentication and data export features.',
    github: 'https://github.com/sahilchahal',
    demo: '#',
  },
]

export default function Projects() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="projects" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold tracking-tight text-center">
          Projects
        </h2>
        <div className="animate-on-scroll stagger-1 mt-2 w-12 h-px bg-black dark:bg-white mx-auto" />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`animate-on-scroll scale-up stagger-${i + 1} group border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col hover:border-black dark:hover:border-white transition-colors duration-200`}
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>

              {/* Tech stack */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-xs font-medium border border-gray-200 dark:border-gray-700 rounded-full hover:border-black dark:hover:border-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-xs font-medium bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-80 transition-opacity duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
