export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: '100svh', paddingTop: '72px' }}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 w-full py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

          {/* text content */}
          <div className="flex-1 text-center lg:text-left" style={{ animation: 'fadeUp 0.7s ease both' }}>
            <p className="font-body text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 text-accent">
              Hey, I'm
            </p>

            <h1
              className="font-heading font-extrabold leading-none mb-3 sm:mb-4 text-charcoal"
              style={{ fontSize: 'clamp(2.6rem, 10vw, 6rem)' }}
            >
              Anshu<br />Kumar
            </h1>

            <h2
              className="font-heading font-semibold text-muted mb-4 sm:mb-6"
              style={{ fontSize: 'clamp(1.1rem, 4vw, 2rem)', animation: 'fadeUp 0.7s 0.1s ease both', opacity: 0 }}
            >
              Frontend Developer
            </h2>

            <p
              className="font-body text-sm sm:text-base leading-relaxed max-w-xl mb-7 sm:mb-10 mx-auto lg:mx-0"
              style={{ color: '#444', animation: 'fadeUp 0.7s 0.2s ease both', opacity: 0 }}
            >
             A B.Sc. IT student passionate about creating modern, responsive web applications. I love turning ideas into clean and user-friendly interfaces using React, JavaScript, and Tailwind CSS, while constantly learning new technologies and improving my craft.
            </p>

            <div
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              style={{ animation: 'fadeUp 0.7s 0.3s ease both', opacity: 0 }}
            >
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 sm:px-7 py-3 sm:py-3.5 font-body font-medium text-sm rounded-full text-white bg-accent hover:opacity-90 transition-opacity"
              >
                View my work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 sm:px-7 py-3 sm:py-3.5 font-body font-medium text-sm rounded-full border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* profile photo */}
          <div
            className="flex-shrink-0 order-first lg:order-last"
            style={{ animation: 'fadeUp 0.7s 0.15s ease both', opacity: 0 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: 'clamp(180px, 35vw, 280px)',
                height: 'clamp(220px, 42vw, 340px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}
            >
              <img
                src="/anshu.png"
                alt="Anshu Kumar"
                className="w-full h-full object-cover object-top"
              />
              {/* subtle accent border overlay */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ boxShadow: 'inset 0 0 0 2px rgba(232,87,42,0.15)' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* decorative glow — desktop only */}
      <div
        className="absolute right-0 top-1/3 w-72 h-72 rounded-full pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle, rgba(232,87,42,0.12), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </section>
  )
}
