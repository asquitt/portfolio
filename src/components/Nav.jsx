import { useEffect, useState } from 'react'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }, { threshold: 0.6 })

    items.forEach(i => {
      const el = document.getElementById(i.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="glass rounded-2xl px-3 py-2 flex gap-1">
        {items.map(i => (
          <li key={i.id}>
            <button
              onClick={() => scrollTo(i.id)}
              className={`px-3 py-1 rounded-xl text-sm transition
                ${active === i.id ? 'bg-white text-black' : 'text-neutral-200 hover:bg-white/10'}`}
            >
              {i.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
