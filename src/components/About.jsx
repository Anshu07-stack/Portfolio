const cards = [
  { label: 'Degree', value: 'B.Sc Information Technology' },
  { label: 'Focus', value: 'Frontend Development' },
  { label: 'Status', value: 'Open to opportunities' },
  { label: 'Location', value: 'India' },
]

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="animate-on-scroll">
            <p className="font-body text-xs tracking-widest uppercase mb-3 text-accent">About me</p>
            <h2 className="font-heading font-bold text-charcoal mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              A bit about<br />who I am
            </h2>
            <div className="space-y-4 font-body leading-relaxed" style={{ color: '#444' }}>
              <p>
                I'm Anshu Kumar, a B.Sc. IT graduate with a strong interest in frontend development. I enjoy building modern, responsive, and user-friendly web interfaces that turn ideas into real digital experiences.
              </p>
              <p>
                My main focus is creating clean UI and writing maintainable code. I work primarily with React, JavaScript, Tailwind CSS, and Redux Toolkit to build interactive web applications.
              </p>
              <p>
                I’m always learning and improving my skills by building projects and exploring new frontend techniques. My goal is to grow as a developer while contributing to products that provide great user experiences.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll grid grid-cols-2 gap-4">
            {cards.map((c) => (
              <div
                key={c.label}
                className="p-5 rounded-2xl border border-border"
                style={{ backgroundColor: '#FDFAF5' }}
              >
                <p className="font-body text-xs uppercase tracking-wide mb-1 text-muted">{c.label}</p>
                <p className="font-heading font-semibold text-sm text-charcoal">{c.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
