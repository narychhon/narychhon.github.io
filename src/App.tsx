import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X, Mail, Layers3 } from 'lucide-react'
import { achievements, designWorks, events, technologies, profile, kolapseSlides } from './data'
import './App.css'

const nav = [
  ['Home', 'home'], ['About', 'about'], ['Technology', 'technology'],
  ['Creative', 'creative'], ['Events', 'events'], ['Achievements', 'achievements'], ['Contact', 'contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDesign, setActiveDesign] = useState('All')
  const [lightbox, setLightbox] = useState<typeof designWorks[number] | null>(null)
  const [kolapseSlide, setKolapseSlide] = useState(0)

  useEffect(() => {
    document.title = `${profile.name} — Multidisciplinary Portfolio`
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setKolapseSlide((current) => (current + 1) % kolapseSlides.length)
    }, 4000)
    return () => window.clearInterval(interval)
  }, [])

  const goTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const designFilters = ['All', ...Array.from(new Set(designWorks.map((work) => work.category)))]
  const filteredDesign = activeDesign === 'All' ? designWorks : designWorks.filter((work) => work.category === activeDesign)

  return (
    <>
      <header className="site-header">
        <button className="brand" onClick={() => goTo('home')} aria-label="Go to home">
          <span className="brand-mark">CN</span>
          <span className="brand-name">{profile.name}</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, id]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {nav.map(([label, id], index) => <button key={id} onClick={() => goTo(id)}><span>0{index + 1}</span>{label}</button>)}
          </nav>
        )}
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-index"><span>Portfolio</span><span>2026—∞</span></div>
          <div className="hero-copy">
            <p className="eyebrow"><span>●</span> Independent profile / Available for opportunities</p>
            <h1><span>BEYOND</span><span>ONE DISCIPLINE<span className="lime-dot">.</span></span></h1>
            <p className="hero-subline">Technology. Creativity. Communication. <em>Impact.</em></p>
          </div>
          <div className="hero-visual">
            <div className="portrait-placeholder">
              <div className="portrait-grid"></div>
              <img className="professional-portrait" src="/images/profile/professional_pic.png" alt="Professional portrait" />
            </div>
          </div>
          <button className="scroll-cue" onClick={() => goTo('about')} aria-label="Scroll to about"><ArrowDown /></button>
        </section>

        <section className="discipline-strip" aria-label="Areas of expertise">
          {['Technology', 'Cybersecurity', 'Design', 'Communication', 'Leadership'].map((item, i) => <button key={item} onClick={() => goTo(i === 0 || i === 1 ? 'technology' : i === 2 ? 'creative' : i === 3 ? 'events' : 'about')}><span>0{i + 1}</span>{item}<ArrowUpRight /></button>)}
        </section>

        <section className="about-section section" id="about">
          <div className="section-label"><span>01</span> About</div>
          <div className="about-grid">
            <h2>I'M STILL A KID WHO <em>WANT TO EXPLORE THE WORLD.</em></h2>
            <div className="about-copy">
              <p>{profile.bio}</p>
              <div className="value-list">
                <div><span>01</span><strong>Think analytically</strong><p>Bring structure to complex problems.</p></div>
                <div><span>02</span><strong>Create with intent</strong><p>Make ideas clear, useful, and memorable.</p></div>
                <div><span>03</span><strong>Collaborate openly</strong><p>Build trust and move people toward impact.</p></div>
              </div>
              <a className="text-link" href={profile.cvUrl}>Download CV <ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section className="technology-section section dark-section" id="technology">
          <div className="section-label light"><span>02</span> Technology & projects</div>
          <div className="tech-heading">
            <h2>WHAT I'M <em>WORKING ON...</em></h2>
            <p>Technical work across cybersecurity, information technology, programming, and research.</p>
          </div>
          <div className="project-list">
            {technologies.map((project, i) => (
              <article className="project-row" key={project.title}>
                <div className="project-number">0{i + 1}</div>
                <div className="project-preview">
                  {i === 0 ? <div className="kolapse-slideshow" aria-label="KOLAPSE project image slideshow">{kolapseSlides.map((slide, slideIndex) => <img key={slide} className={`project-real-image kolapse-slide ${slideIndex === kolapseSlide ? 'active' : ''}`} src={slide} alt={`${project.title} preview ${slideIndex + 1}`} />)}</div> : ('image' in project && project.image ? <img className="project-real-image" src={project.image} alt={`${project.title} preview`} /> : <div className="terminal-art"><span>PORTFOLIO / PROJECT</span><b>{project.category}</b><div><i></i><i></i><i></i></div></div>)}
                  <span className="placeholder-badge">{project.status}</span>
                </div>
                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {'methodology' in project && project.methodology && <p className="project-detail"><strong>Approach</strong>{project.methodology}</p>}
                  {'results' in project && project.results && <p className="project-detail"><strong>Results / status</strong>{project.results}</p>}
                  <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Tools</dt><dd>{project.tools.join(' · ')}</dd></div></dl>
                  {'link' in project && project.link ? <a className="project-demo-link" href={project.link} target="_blank" rel="noreferrer">View live demo <ArrowUpRight /></a> : 'repository' in project && project.repository ? <a className="project-demo-link" href={project.repository} target="_blank" rel="noreferrer">View GitHub repository <ArrowUpRight /></a> : <button className="circle-link" aria-label={`View ${project.title}`} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}><ArrowUpRight /></button>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="creative-section section" id="creative">
          <div className="section-label"><span>03</span> Creative works</div>
          <div className="creative-heading"><h2>Ideas made <em>visible.</em></h2><p>Graphic design, brand systems, publications, and visual communication.</p></div>
          <div className="filter-row" role="group" aria-label="Filter creative work">
            {designFilters.map((filter) => <button className={activeDesign === filter ? 'active' : ''} key={filter} onClick={() => setActiveDesign(filter)}>{filter}</button>)}
          </div>
          <div className="design-grid">
            {filteredDesign.map((work, i) => (
              <button className={`design-card ${work.color}`} key={work.title} onClick={() => setLightbox(work)}>
                <div className="design-art">
                  {'image' in work && work.image ? <img className="design-real-image" src={work.image} alt={work.title} /> : <><div className="art-shape"></div><strong>{work.title}</strong></>}
                  <span className="art-type">{work.type}</span>
                </div>
                <div className="design-meta"><span>0{i + 1}</span><div><strong>{work.title}</strong><small>{work.category}</small></div><ArrowUpRight /></div>
              </button>
            ))}
          </div>
        </section>

        <section className="events-section section" id="events">
          <div className="section-label light"><span>04</span> Events & experiences</div>
          <div className="events-heading"><h2>Presence in the <em>room.</em></h2><p>Hosting, speaking, moderation, organization, and collaborative leadership.</p></div>
          <div className="event-grid">
            {events.map((event, i) => (
              <article className="event-card" key={event.title}>
                <div className="event-photo">{'image' in event && event.image ? <img className="event-real-image" src={event.image} alt={event.title} /> : <><span>Event photograph<br />placeholder</span><b>{i + 1}</b></>}</div>
                <div className="event-info"><p>{event.role} / {event.date}</p><h3>{event.title}</h3><dl><div><dt>Venue</dt><dd>{event.venue}</dd></div></dl><p>{event.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="achievements-section section" id="achievements">
          <div className="section-label"><span>05</span> Achievements</div>
          <div className="achievement-heading"><h2>Continual learning.<br /><em>Documented growth.</em></h2></div>
          <div className="achievement-list">
            {achievements.map((item, i) => (
              <article className="achievement-row" key={item.title}>
                <div className="certificate-placeholder"><Layers3 /><span>Certificate image</span></div>
                <div className="achievement-copy"><p>0{i + 1} / {item.date}</p><h3>{item.title}</h3><strong>{item.issuer}</strong><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label light"><span>06</span> Contact</div>
          <div className="contact-grid">
            <div><p className="contact-kicker">Have a project, role, or idea?</p><h2>LET'S MAKE<br /><em>IT HAPPEN.</em></h2></div>
            <div className="contact-actions">
              {profile.email ? <a className="email-link" href={`mailto:${profile.email}`}><Mail />{profile.email}<ArrowUpRight /></a> : <div className="email-link"><Mail />Add your professional email<ArrowUpRight /></div>}
              <div className="social-links">{profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>in</span>LinkedIn</a> : <span className="social-placeholder">LinkedIn URL to add</span>} {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer"><span>gh</span>GitHub</a> : <span className="social-placeholder">GitHub URL to add</span>}</div>
            </div>
          </div>
        </section>
      </main>

      <footer><button onClick={() => goTo('home')}>© 2026 {profile.name}</button><p>Technology · Creativity · Communication · Impact</p><button onClick={() => goTo('home')}>Back to top ↑</button></footer>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close preview"><X /></button><div className="lightbox-art" onClick={(event) => event.stopPropagation()}><div className={`large-art ${lightbox.color}`}>{'image' in lightbox && lightbox.image ? <img className="lightbox-real-image" src={lightbox.image} alt={lightbox.title} /> : <><span>{lightbox.type}</span><strong>{lightbox.title}</strong></>}</div><p>{lightbox.category}</p></div></div>}
    </>
  )
}

export default App
