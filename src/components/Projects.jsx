import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div className="animate-on-scroll text-center mb-14">
          <p className="font-body text-xs tracking-widest uppercase mb-3 text-accent">What I've built</p>
          <h2 className="font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  )
}
