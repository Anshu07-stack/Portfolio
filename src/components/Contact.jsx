const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'anshu@example.com',
    href: 'mailto:anshu@example.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Anshu07-stack',
    href: 'https://github.com/Anshu07-stack',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/anshukumar',
    href: 'https://linkedin.com/in/anshukumar',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24" style={{ backgroundColor: '#FDFAF5' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        {/* heading */}
        <div className="animate-on-scroll text-center mb-12 sm:mb-16">
          <p className="font-body text-xs tracking-widest uppercase mb-3 text-accent">
            Get in touch
          </p>
          <h2
            className="font-heading font-bold text-charcoal mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Let's talk
          </h2>
          <p className="font-body text-muted leading-relaxed max-w-md mx-auto text-sm sm:text-base">
            Whether you have a project idea, want to collaborate, or just want to say hi —
            I'm always open. Reach out through any of these.
          </p>
        </div>

        {/* contact cards */}
        <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl border border-border transition-all duration-200 hover:border-accent hover:shadow-md"
              style={{ backgroundColor: '#FDFAF5' }}
            >
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: '#F0EAE0' }}
              >
                {item.icon}
              </span>
              <p className="font-heading font-semibold text-sm text-charcoal mb-1">{item.label}</p>
              <p className="font-body text-xs text-muted break-all">{item.value}</p>
            </a>
          ))}
        </div>

        {/* bottom cta */}
        <div className="animate-on-scroll text-center mt-12">
          <p className="font-body text-sm text-muted">
            Open to freelance, internships, and full-time roles.{' '}
            <a href="mailto:anshu@example.com" className="text-accent font-medium hover:underline">
              Drop me a message ↗
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}
