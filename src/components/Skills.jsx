import { useEffect, useRef } from 'react'
import { skills, tools } from '../data/projects'

// skill icons using devicons CDN
const skillIcons = {
  'HTML & CSS':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'JavaScript':       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React.js':         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Tailwind CSS':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Redux Toolkit':    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Git & GitHub':     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'MUI (Material UI)':'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  'Context API':      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
}

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
    if (fillRef.current) observer.observe(fillRef.current.parentElement)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className="flex items-center gap-3">
      {/* icon */}
      <div
        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: '#F0EAE0' }}
      >
        <img
          src={skillIcons[name]}
          alt={name}
          className="w-5 h-5 object-contain"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      {/* bar + label */}
      <div className="flex-1">
        <div className="flex justify-between mb-1.5">
          <span className="font-body font-medium text-sm text-charcoal">{name}</span>
          <span className="font-body text-xs text-muted">{level}%</span>
        </div>
        <div className="h-2 rounded-full bg-border">
          <div ref={fillRef} className="skill-bar-fill" />
        </div>
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

        <div className="animate-on-scroll grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
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
