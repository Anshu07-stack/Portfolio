import { useEffect, useRef } from 'react'
import { skills, tools } from '../data/projects'

function SkillBar({ name, level }) {
  const fillRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && fillRef.current) {
          fillRef.current.style.width = level + '%'
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    // observe the track element (parent of fill)
    if (fillRef.current) {
      observer.observe(fillRef.current.parentElement)
    }

    return () => observer.disconnect()
  }, [level])

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-body font-medium text-sm text-charcoal">{name}</span>
        <span className="font-body text-sm text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-border">
        <div ref={fillRef} className="skill-bar-fill" />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ backgroundColor: '#FDFAF5' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div className="animate-on-scroll text-center mb-14">
          <p className="font-body text-xs tracking-widest uppercase mb-3 text-accent">What I know</p>
          <h2 className="font-heading font-bold text-charcoal" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Skills
          </h2>
        </div>

        <div className="animate-on-scroll grid sm:grid-cols-2 gap-x-16 gap-y-8 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>

        <div className="animate-on-scroll mt-14 flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full text-sm font-body border border-border"
              style={{ color: '#444' }}
            >
              {tool}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
