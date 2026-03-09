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
                I'm a final-year B.Sc IT student with a genuine interest in frontend development.
                I started building things for the web out of curiosity, and now I can't stop.
              </p>
              <p>
                I like clean UI, good typography, and code that's easy to read. I'm comfortable
                with React, Tailwind, Redux Toolkit, and I'm always trying to level up my JavaScript.
              </p>
              <p>
                When I'm not coding, I'm probably watching design breakdowns on YouTube that I
                definitely don't need to watch — but watch anyway.
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
