import { useState, useEffect } from 'react'

const navItems = ['home', 'about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // scroll spy
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(navItems[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: scrolled ? 'rgba(245,240,232,0.96)' : 'transparent',
               backdropFilter: scrolled ? 'blur(8px)' : 'none',
               boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none' }}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

        {/* logo */}
        <button onClick={() => scrollTo('home')} className="font-heading font-extrabold text-xl text-charcoal">
          AK<span className="text-accent">.</span>
        </button>

        {/* desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`nav-link font-body text-sm capitalize tracking-wide transition-colors duration-200 ${
                  active === id ? 'text-accent' : 'text-charcoal hover:text-accent'
                }`}
              >
                {id}
              </button>
            </li>
          ))}
        </ul>

        {/* hamburger */}
        <button
          className={`md:hidden hamburger flex flex-col gap-1.5 w-6 ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-full" />
          <span className="w-full" />
          <span className="w-full" />
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-6 pt-2 border-t"
          style={{ borderColor: '#E0D9CF', backgroundColor: 'rgba(245,240,232,0.98)' }}
        >
          {navItems.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left capitalize py-3 font-body text-charcoal border-b last:border-0"
              style={{ borderColor: '#E0D9CF' }}
            >
              {id}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
