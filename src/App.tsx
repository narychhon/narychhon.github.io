import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X, Mail } from 'lucide-react'
import { achievements, designWorks, events, technologies, profile } from './data'
import './App.css'

const nav = [
  ['Home', 'home'], ['About', 'about'], ['Technology', 'technology'],
  ['Creative', 'creative'], ['Events', 'events'], ['Achievements', 'achievements'], ['Contact', 'contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<typeof designWorks[number] | null>(null)
  const [projectSlide, setProjectSlide] = useState(0)
  const [achievementSlide, setAchievementSlide] = useState(0)
  const [achievementPaused, setAchievementPaused] = useState(false)
  const designStripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = `${profile.name} — The Only Limit Is The Sky`
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProjectSlide((current) => current + 1)
    }, 4000)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    if (achievementPaused) return
    const interval = window.setInterval(() => {
      setAchievementSlide((current) => (current + 1) % achievements.length)
    }, 5000)
    return () => window.clearInterval(interval)
  }, [achievementPaused])

  const goTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const renderDesignCard = (work: typeof designWorks[number]) => (
    <button className={`design-card ${work.color}`} key={work.title} onClick={() => setLightbox(work)} aria-label={`Open ${work.title} preview`} style={{ '--r': work.ratio, '--s': work.scale } as CSSProperties}>
      <div className="design-art">
        {'image' in work && work.image ? <img className="design-real-image" src={work.image} alt="" /> : <div className="art-shape" />}
      </div>
    </button>
  )

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
            <p className="eyebrow"><span>●</span> Cyber Security, Emcee, TechBiz, Graphic Designer</p>
            <h1><span>THE ONLY LIMIT</span><span><em>is</em> <span className="sky-highlight">THE SKY</span><span className="lime-dot">.</span></span></h1>
            <p className="hero-subline">Technology. Creativity. Communication. <em>Impact.</em></p>
            <a className="hero-linkedin" href="https://www.linkedin.com/in/narychhon/" target="_blank" rel="noopener noreferrer">Let's connect <ArrowUpRight /></a>
          </div>
          <div className="hero-visual">
            <div className="portrait-placeholder">
              <div className="portrait-grid"></div>
              <img className="professional-portrait" src="/images/profile/professional-portrait.webp" alt="Professional portrait" />
              <div className="portrait-caption"><strong>NARY CHHON</strong><span>Call Me<b>“ARIE”</b></span></div>
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
            <div className="about-heading-wrap">
              <h2>I'M STILL A KID WHO <em>WANT TO EXPLORE THE WORLD.</em></h2>
              <figure className="kid-photo"><img src="/images/about/a-kid.webp" alt="Nary Chhon as a child holding a collection of stickers" /></figure>
            </div>
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
            {technologies.map((project, i) => {
              const slides = 'slides' in project ? project.slides : undefined
              return (
                <article className="project-row" key={project.title}>
                  <div className="project-number">0{i + 1}</div>
                  <div className="project-preview">
                    {slides ? <div className="project-slideshow" aria-label={`${project.title} image slideshow`}>{slides.map((slide, slideIndex) => <img key={slide} className={`project-real-image project-slide ${slideIndex === projectSlide % slides.length ? 'active' : ''} ${'slideFit' in project && project.slideFit === 'contain' ? 'fit-contain' : ''}`} src={slide} alt={`${project.title} preview ${slideIndex + 1}`} />)}</div> : <div className="terminal-art"><span>PORTFOLIO / PROJECT</span><b>{project.category}</b><div><i></i><i></i><i></i></div></div>}
                    <span className="placeholder-badge">{project.status}</span>
                  </div>
                  <div className="project-info">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {'methodology' in project && project.methodology && <p className="project-detail"><strong>Approach</strong>{project.methodology}</p>}
                    {'results' in project && project.results && <p className="project-detail"><strong>Results / status</strong>{project.results}</p>}
                    <dl><div><dt>Role</dt><dd>{project.role}</dd></div>{'tools' in project && project.tools && <div><dt>Tools</dt><dd>{project.tools.join(' · ')}</dd></div>}</dl>
                    <div className="project-actions">
                      {'pitchdeck' in project && project.pitchdeck && <a className="project-demo-link" href={project.pitchdeck} target="_blank" rel="noopener noreferrer">View pitchdeck <ArrowUpRight /></a>}
                      {'link' in project && project.link && <a className="project-demo-link" href={project.link} target="_blank" rel="noopener noreferrer">View live demo <ArrowUpRight /></a>}
                      {'prototype' in project && project.prototype && <a className="project-demo-link" href={project.prototype} target="_blank" rel="noopener noreferrer">View Figma prototype <ArrowUpRight /></a>}
                      {'repository' in project && project.repository && <a className="project-demo-link" href={project.repository} target="_blank" rel="noopener noreferrer">View GitHub repository <ArrowUpRight /></a>}
                      {'report' in project && project.report && <a className="project-demo-link" href={project.report} target="_blank" rel="noopener noreferrer">View project report <ArrowUpRight /></a>}
                      {!('pitchdeck' in project && project.pitchdeck) && !('link' in project && project.link) && !('prototype' in project && project.prototype) && !('repository' in project && project.repository) && !('report' in project && project.report) && <button className="circle-link" aria-label={`View ${project.title}`} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}><ArrowUpRight /></button>}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="creative-section section" id="creative">
          <div className="section-label"><span>03</span> Creative works</div>
          <div className="creative-heading">
            <h2>DESIGNER <em>DUMP...</em></h2>
            <p>A running collection of design work and visual experiments.</p>
          </div>
          <div className="design-grid" ref={designStripRef} aria-label="Creative work showcase">
            {designWorks.map((work) => {
              if (work.title === 'Artwork 03') return null
              if (work.title === 'Artwork 01') {
                const stacked = designWorks.find((item) => item.title === 'Artwork 03')
                return (
                  <div className="design-stack" key="artwork-stack" style={{ '--r': work.ratio, '--s': work.scale } as CSSProperties}>
                    {renderDesignCard(work)}
                    {stacked && renderDesignCard(stacked)}
                  </div>
                )
              }
              return renderDesignCard(work)
            })}
          </div>
          <button className="design-pan-hint" onClick={() => designStripRef.current?.scrollTo({ left: designStripRef.current.scrollWidth, behavior: 'smooth' })}>Pan to see all →</button>
        </section>

        <section className="events-section section" id="events">
          <div className="section-label light"><span>04</span> Events & experiences</div>
          <div className="events-heading">
            <div className="events-heading-main">
              <h2>Presence in the <em>room.</em></h2>
              <p className="events-stat"><strong>Emcee Host</strong> — from sports events to international conferences. <strong>50+ events</strong> in the past 3 years.</p>
            </div>
            <p className="events-volunteer">Volunteering became a way to learn by showing up — from local community runs to international conferences, helping where needed and meeting people along the way.</p>
          </div>
          <div className="event-grid">
            {events.map((event, i) => (
              <article className="event-card" key={event.title} style={{ '--r': event.ratio } as CSSProperties}>
                <div className="event-photo"><img className="event-real-image" src={event.image} alt={event.title} /><b>0{i + 1}</b></div>
                <div className="event-info"><h3>{event.title}</h3></div>
              </article>
            ))}
          </div>
        </section>

        <section className="achievements-section section" id="achievements">
          <div className="section-label"><span>05</span> Achievements</div>
          <div className="achievement-heading"><h2>Continual learning.<br /><em>Documented growth.</em></h2></div>
          <div className="achievement-slideshow" onMouseEnter={() => setAchievementPaused(true)} onMouseLeave={() => setAchievementPaused(false)} onFocus={() => setAchievementPaused(true)} onBlur={() => setAchievementPaused(false)}>
            {achievements.map((item, i) => (
              <article key={item.title} className={`achievement-slide ${item.color} ${i === achievementSlide ? 'active' : ''}`} aria-hidden={i !== achievementSlide}>
                <div className="achievement-slide-art">
                  <div className="achievement-certificate">
                    {'image' in item && item.image ? <img src={item.image} alt={item.title} /> : <span className="achievement-slide-fallback">{item.title}</span>}
                  </div>
                  <span className="achievement-slide-index">0{i + 1} / 0{achievements.length}</span>
                </div>
                <div className="achievement-slide-copy">
                  <p className="achievement-slide-field">{item.field}</p>
                  <h3>{item.title}</h3>
                  {(item.date || item.issuer) && <p className="achievement-slide-meta">{[item.date, item.issuer].filter(Boolean).join(' · ')}</p>}
                </div>
              </article>
            ))}
            <div className="achievement-controls">
              <div className="achievement-dots" role="group" aria-label="Choose certificate">
                {achievements.map((item, i) => <button key={item.title} className={i === achievementSlide ? 'active' : ''} onClick={() => setAchievementSlide(i)} aria-label={`Show ${item.title}`} aria-current={i === achievementSlide ? 'true' : undefined} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label light"><span>06</span> Contact</div>
          <div className="contact-grid">
            <div><p className="contact-kicker">Have a project, role, or idea?</p><h2>LET'S MAKE<br /><em>IT HAPPEN.</em></h2></div>
            <div className="contact-actions">
              {profile.email ? <a className="email-link" href={`mailto:${profile.email}`}><Mail />{profile.email}<ArrowUpRight /></a> : <div className="email-link"><Mail />Add your professional email<ArrowUpRight /></div>}
              <div className="social-links">{profile.linkedin ? <a className="linkedin-cta" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span>in</span>LinkedIn <ArrowUpRight /></a> : <span className="social-placeholder">LinkedIn URL to add</span>}</div>
            </div>
          </div>
        </section>
      </main>

      <footer><button onClick={() => goTo('home')}>© 2026 {profile.name}</button><p>Technology · Creativity · Communication · Impact</p><button onClick={() => goTo('home')}>Back to top ↑</button></footer>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Creative work preview" onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close preview"><X /></button><div className="lightbox-art" onClick={(event) => event.stopPropagation()}><div className={`large-art ${lightbox.color}`}>{'image' in lightbox && lightbox.image ? <img className="lightbox-real-image" src={lightbox.image} alt="" /> : <div className="art-shape" />}</div></div></div>}
    </>
  )
}

export default App
