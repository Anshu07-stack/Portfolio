// github icon
function GithubIcon() {
  return (
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
    </svg>
  )
}

// external link icon
function ExternalIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

export default function ProjectCard({ project, delay = 0 }) {

  return (
    <div
      className="animate-on-scroll project-card rounded-2xl border border-border overflow-hidden flex flex-col"
      style={{ backgroundColor: '#FDFAF5', transitionDelay: `${delay}ms` }}
    >
      {/* preview area */}
      <div className="relative overflow-hidden" style={{ height: '185px', backgroundColor: project.previewBg }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span
              className="font-heading font-bold text-xl text-center px-4"
              style={{ color: project.previewText }}
            >
              {project.title}
            </span>
            <span className="text-xs font-body" style={{ color: project.previewText, opacity: 0.5 }}>
              Coming soon
            </span>
          </div>
        )}

        {/* live badge */}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-medium"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)', color: '#fff' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Live
          </a>
        )}
      </div>

      {/* content */}
      <div className="p-5 flex-1">
        <h3 className="font-heading font-bold text-lg mb-2 text-charcoal">{project.title}</h3>
        <p className="font-body text-sm leading-relaxed mb-4 text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full font-body"
              style={{ backgroundColor: '#F0EAE0', color: '#444' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* footer links */}
      <div className="px-5 pb-5 pt-3 border-t border-border flex items-center gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-charcoal hover:opacity-60 transition-opacity"
        >
          <GithubIcon />
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:opacity-60 transition-opacity"
          >
            <ExternalIcon />
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
