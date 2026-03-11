function EmailIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Contact() {

  const contactLinks = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'tradinganshu2003@gmail.com',
      href: 'mailto:tradinganshu2003@gmail.com',
      color: '#1A1A1A',
    },
    {
      icon: <GithubIcon />,
      label: 'GitHub',
      value: 'github.com/Anshu07-stack',
      href: 'https://github.com/Anshu07-stack',
      color: '#1A1A1A',
    },
    {
      icon: <LinkedinIcon />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anshu-kumar',
      href: 'https://www.linkedin.com/in/anshu-kumar-829658315/',
      color: '#0A66C2',
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-24" style={{ backgroundColor: '#FDFAF5' }}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

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
            I am always open. Reach out through any of these.
          </p>
        </div>

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
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: '#F0EAE0', color: item.color }}
              >
                {item.icon}
              </span>

              <p className="font-heading font-semibold text-sm text-charcoal mb-1">
                {item.label}
              </p>

              <p className="font-body text-xs text-muted break-all">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="animate-on-scroll text-center mt-12">
          <p className="font-body text-sm text-muted">
            Open to freelance, internships, and full-time roles.{' '}
            <a
              href="mailto:tradinganshu2003@gmail.com"
              className="text-accent font-medium hover:underline"
            >
              Drop me a message ↗
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}