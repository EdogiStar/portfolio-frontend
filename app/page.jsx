'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Braces, Code2, Database, GraduationCap, Layers3, Menu, Moon, Server, Sun, Terminal, X } from 'lucide-react'

const profileLinks = [
  { name: 'HelloCV', label: 'View my profile', href: 'https://hello.cv/muhammadisahprofile', icon: 'cv' },
  { name: 'GitHub', label: 'View my code', href: 'https://github.com/EdogiStar', icon: 'github' },
  { name: 'LinkedIn', label: 'Connect professionally', href: 'https://www.linkedin.com/in/isah-muhammad-alhaji-b86224238', icon: 'linkedin' },
  { name: 'X', label: 'Follow along', href: 'https://x.com/MuqsitX50831', icon: 'x' },
  { name: 'Facebook', label: 'Visit my profile', href: 'https://www.facebook.com/muhd.isah.374', icon: 'facebook' },
]

function ProfileIcon({ type, size = 18 }) {
  if (type === 'github') return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.4 6 18.4 6.3 18.4 6.3a4.3 4.3 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.7 1 .7 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" /></svg>
  if (type === 'linkedin') return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M5.2 3.4A2.2 2.2 0 1 1 .8 3.4a2.2 2.2 0 0 1 4.4 0ZM1 8h4.3v13H1V8Zm6.8 0h4.1v1.8h.1c.6-1.1 2-2.2 4.2-2.2 4.5 0 5.3 2.9 5.3 6.7V21h-4.3v-5.9c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H7.8V8Z" /></svg>
  if (type === 'x') return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.4l-5-6.5L6.1 22H3l7.3-8.4L2.2 2h6.5l4.5 6L18.9 2Zm-1.1 17.8h1.8L7.7 4H5.8l12 15.8Z" /></svg>
  if (type === 'facebook') return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M13.8 22v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V4.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8.7v3.1h2.4v8h2.7Z" /></svg>
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 4.5h14v15H5zM8 8h8M8 12h8M8 16h5" /></svg>
}

const projects = [
  { number: '01', title: 'Kora Commerce', description: 'A calm, conversion-focused commerce system for independent African brands.', tags: ['Next.js', 'Node.js', 'PostgreSQL'], tone: 'ochre' },
  { number: '02', title: 'Nexa Health', description: 'A patient-first platform that makes complex health workflows feel human.', tags: ['React', 'FastAPI', 'Supabase'], tone: 'slate' },
  { number: '03', title: 'Maji Insights', description: 'Operational intelligence for teams that need clarity before they need more data.', tags: ['JavaScript', 'Laravel', 'AI'], tone: 'mint' },
]

function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => setProgress(Math.min(window.scrollY / Math.max(window.innerHeight * 1.15, 1), 1))
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return progress
}

function useProjectScrollMotion() {
  const ref = useRef(null)
  const [motion, setMotion] = useState({ scale: 0.95, y: 0, innerY: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      frame = 0
      if (reduced.matches || window.innerWidth <= 760) {
        setMotion({ scale: 1, y: 0, innerY: 0 })
        return
      }
      const rect = element.getBoundingClientRect()
      const center = window.innerHeight * 0.52
      const distance = Math.max(window.innerHeight * 0.72, 1)
      const progress = Math.max(-1, Math.min(1, (center - (rect.top + rect.height / 2)) / distance))
      const focus = 1 - Math.min(1, Math.abs(progress))
      setMotion({ scale: 0.95 + focus * 0.05, y: progress * 16, innerY: progress * -14 })
    }
    const requestUpdate = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })
    reduced.addEventListener?.('change', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      reduced.removeEventListener?.('change', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { ref, motion }
}

function useExperienceScrollProgress() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      frame = 0
      if (reduced.matches) {
        setProgress(1)
        return
      }
      const rect = element.getBoundingClientRect()
      const start = window.innerHeight * 0.82
      const end = -rect.height * 0.18
      const next = Math.max(0, Math.min(1, (start - rect.top) / Math.max(start - end, 1)))
      setProgress(next)
    }
    const requestUpdate = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate, { passive: true })
    reduced.addEventListener?.('change', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      reduced.removeEventListener?.('change', requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { ref, progress }
}

function useTheme() {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    const stored = window.localStorage.getItem('mxdev-theme')
    const initial = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])
  const toggle = () => setTheme((current) => {
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    window.localStorage.setItem('mxdev-theme', next)
    return next
  })
  return { theme, toggle }
}

function ThemeToggle({ theme, onToggle }) {
  return <button className="icon-button" onClick={onToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
}

function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update(); window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  const close = () => setOpen(false)
  return <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
    <a href="#home" className="brand" onClick={close}>Mx<span>Dev</span></a>
    <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
      {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}
      <div className="mobile-socials"><a href="https://github.com/EdogiStar" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile"><ProfileIcon type="github" /></a><a href="https://www.linkedin.com/in/isah-muhammad-alhaji-b86224238" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile"><ProfileIcon type="linkedin" /></a></div>
    </nav>
    <div className="nav-actions"><a className="social-link" href="https://github.com/EdogiStar" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile"><ProfileIcon type="github" /></a><a className="social-link" href="https://www.linkedin.com/in/isah-muhammad-alhaji-b86224238" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile"><ProfileIcon type="linkedin" /></a><ThemeToggle theme={theme} onToggle={onToggle} /><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
  </header>
}

function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: 0.12 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}

function SectionHeading({ kicker, title, children }) {
  return <div className="section-heading"><p className="eyebrow">{kicker}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>
}

function HeroSection({ progress }) {
  const style = { transform: `translateY(${progress * -44}px) scale(${1 - progress * 0.13})`, opacity: 1 - progress * 0.5 }
  return <section id="home" className="hero section-wrap"><div className="hero-grid"><div className="hero-copy" style={style}><p className="eyebrow"><span className="eyebrow-dot" /> Full-stack developer</p><h1>Building digital<br /><em>experiences</em><br />that solve real<br />problems.</h1><p className="hero-description">I&apos;m Isah Muhammad, a full-stack developer focused on building reliable, scalable and thoughtful web applications.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowDownRight size={17} /></a><a className="text-link" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a></div></div><div className="hero-mark" aria-hidden="true" style={{ transform: `translateY(${progress * 70}px) rotate(${progress * 8}deg)`, opacity: 0.95 - progress * 0.5 }}><span>Mx</span><span>Dev</span><i /></div></div><div className="hero-meta"><span>Based in Nigeria</span><span>Available for select projects</span><span className="scroll-cue"><span /> Scroll to explore</span></div></section>
}

function AboutSection() {
  const facts = [
    { title: 'B.Sc. Computer Science', icon: GraduationCap },
    { title: 'Full-Stack Development', icon: Layers3 },
    { title: 'React / JavaScript', icon: Code2 },
    { title: 'Node.js / Express', icon: Server },
    { title: 'PHP / Laravel', icon: Braces },
    { title: 'PostgreSQL / Supabase', icon: Database },
    { title: 'Python / FastAPI', icon: Terminal },
    { title: 'AI & Machine Learning', icon: BrainCircuit },
  ]
  return <section id="about" className="about section-wrap"><div className="about-top"><SectionHeading kicker="01 — About" title="More than code.">A practical approach to software, shaped by curiosity, clarity and the people who use what I build.</SectionHeading><ScrollReveal className="about-body"><p>I&apos;m a Computer Science graduate and full-stack developer who enjoys turning ideas into useful digital products. I work across frontend, backend and AI-powered applications, with a strong focus on clean architecture and practical user experiences.</p><a className="text-link" href="#contact">More about my approach <ArrowUpRight size={16} /></a></ScrollReveal></div><ScrollReveal className="facts-grid">{facts.map(({ title, icon: Icon }, index) => <div className="fact" key={title}><span>0{index + 1}</span><div className="fact-icon" aria-hidden="true"><Icon size={24} strokeWidth={1.35} /><i /></div><strong>{title}</strong></div>)}</ScrollReveal></section>
}

function ProjectPreview({ project, index }) {
  const { ref, motion } = useProjectScrollMotion()
  return <ScrollReveal className="project-preview"><div ref={ref} className={`project-art ${project.tone}`} style={{ '--project-scale': motion.scale, '--project-y': `${motion.y}px`, '--window-y': `${motion.innerY}px` }}><div className="art-top"><span>{project.number} / 03</span><span>Featured work</span></div><div className="art-window"><div className="window-bar"><i /><i /><i /><span>{project.title.toLowerCase().replace(' ', '')}.studio</span></div><div className="window-content"><b>{index === 0 ? 'Commerce, with' : index === 1 ? 'Care, made' : 'See the signal.'}<br /><em>more intention.</em></b><span className="art-line" /></div></div></div><div className="project-info"><div><p className="eyebrow">{project.number} — Selected project</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-links"><a href="#contact" aria-label={`View ${project.title} live demo`}>Live demo <ArrowUpRight size={16} /></a><a href="#contact" aria-label={`View ${project.title} on GitHub`}>GitHub <ArrowUpRight size={16} /></a></div></div></ScrollReveal>
}

function ProjectsSection() { return <section id="projects" className="projects section-wrap"><SectionHeading kicker="02 — Projects" title="Selected work." >A small selection of digital products, systems and experiments built with care.</SectionHeading><div className="projects-list">{projects.map((project, index) => <ProjectPreview key={project.number} project={project} index={index} />)}</div></section> }

function ExperienceSection() {
  const { ref, progress } = useExperienceScrollProgress()
  const entries = [
    { label: 'Now', title: 'Independent developer', description: 'Building thoughtful products with ambitious teams.' },
    { label: 'Professional', title: 'Junior Full-Stack Developer', company: 'EduFlix Limited', description: 'Worked on web development projects and gained practical experience building and maintaining web applications.' },
    { label: 'Foundation', title: 'Computer Science', description: 'Turning systems thinking into human tools.' },
  ]
  return <section id="experience" ref={ref} className="experience section-wrap"><div><p className="eyebrow">03 — Experience</p><h2>Always learning.<br /><em>Always shipping.</em></h2></div><div className="experience-copy"><p>From the first interface to the last API response, I care about the details that make software feel considered.</p><div className="timeline" style={{ '--timeline-progress': progress }}><div className="timeline-track" aria-hidden="true"><span className="timeline-fill" /><span className="timeline-marker" /></div>{entries.map((entry, index) => <ScrollReveal key={entry.label} className={`timeline-entry ${progress >= index / (entries.length - 1) ? 'is-active' : ''}`}><span className="timeline-node" aria-hidden="true" /><span>{entry.label}</span><strong>{entry.title}</strong>{entry.company && <small className="timeline-company">{entry.company}</small>}<p>{entry.description}</p></ScrollReveal>)}</div></div></section>
}

function Footer() { return <footer id="contact" className="footer section-wrap"><div className="footer-lead"><ScrollReveal className="footer-reveal footer-eyebrow"><p className="eyebrow">04 — Contact</p></ScrollReveal><ScrollReveal className="footer-reveal footer-heading"><h2>Have a good idea?<br /><em>Let&apos;s make it real.</em></h2></ScrollReveal><ScrollReveal className="footer-reveal footer-cta"><a className="button button-primary" href="mailto:hello@mxdev.dev">Start a conversation <ArrowUpRight size={17} /></a></ScrollReveal><ScrollReveal className="footer-reveal profile-area"><p className="profile-kicker">Find me online</p><div className="profile-links">{profileLinks.map((profile) => <a className="profile-link" key={profile.name} href={profile.href} target="_blank" rel="noopener noreferrer" aria-label={`${profile.name === 'HelloCV' ? 'View my HelloCV profile' : `Visit my ${profile.name} profile`}`}><span className="profile-icon"><ProfileIcon type={profile.icon} /></span><span><strong>{profile.name}</strong><small>{profile.label}</small></span><ArrowUpRight className="profile-arrow" size={15} /></a>)}</div></ScrollReveal></div><div className="footer-bottom"><span>© 2026 MxDev / Isah Muhammad</span><div><a href="https://hello.cv/muhammadisahprofile" target="_blank" rel="noopener noreferrer">HelloCV</a><a href="https://github.com/EdogiStar" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://www.linkedin.com/in/isah-muhammad-alhaji-b86224238" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://x.com/MuqsitX50831" target="_blank" rel="noopener noreferrer">X</a><a href="#home">Back to top ↑</a></div></div></footer> }

export default function Page() {
  const progress = useScrollProgress(); const { theme, toggle } = useTheme()
  return <><Navbar theme={theme} onToggle={toggle} /><main><HeroSection progress={progress} /><AboutSection /><ProjectsSection /><ExperienceSection /></main><Footer /></>
}
