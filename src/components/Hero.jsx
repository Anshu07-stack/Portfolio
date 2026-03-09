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

        <div style={{ animation: 'fadeUp 0.7s ease both' }}>
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
            className="font-body text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-7 sm:mb-10"
            style={{ color: '#444', animation: 'fadeUp 0.7s 0.2s ease both', opacity: 0 }}
          >
            B.Sc IT student who loves turning ideas into clean, usable web experiences.
            I build with React, Tailwind, and a lot of curiosity.
          </p>

          <div
            className="flex flex-wrap gap-3 sm:gap-4"
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

        {/* decorative glow — desktop only */}
        <div
          className="absolute right-0 top-1/3 w-72 h-72 rounded-full pointer-events-none hidden lg:block"
          style={{
            background: 'radial-gradient(circle, rgba(232,87,42,0.15), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
    </section>
  )
}
