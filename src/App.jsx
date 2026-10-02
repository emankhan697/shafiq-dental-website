import { useState } from 'react'
import './App.css'

const phone = '+92 336 5004550'
const whatsapp = '923365004550'
const address = 'Office #6, First Floor, Pak Land City Center, I-8 Markaz, Islamabad'
const services = [
  ['✳', 'General Dentistry', 'Check-ups, cleanings and everyday care for a healthier smile.'],
  ['⌁', 'Braces & Orthodontics', 'Personalized options to bring your bite and smile into alignment.'],
  ['✦', 'Wisdom Tooth Removal', 'Professional assessment and care for wisdom teeth and extractions.'],
  ['✧', 'Cosmetic Dentistry', 'Smile-enhancing treatments planned around your goals.'],
  ['◈', 'Dental Implants', 'Explore tooth-replacement options with an individual care plan.'],
  ['◉', 'Root Canal Treatment', 'Focused treatment to address infection and preserve your tooth.'],
  ['✚', 'Oral & Maxillofacial Surgery', 'Specialist surgical care for a range of oral conditions.'],
  ['⌖', 'Jaw Correction', 'Assessment and guidance for concerns with jaw alignment.'],
  ['✧', 'Facial Trauma Care', 'Professional care for facial injuries and your next steps.'],
]
const reasons = [
  ['01', 'Experienced professionals', 'A dedicated team with dental and surgical expertise.'],
  ['02', 'Care made for you', 'We listen to your concerns and explain your options.'],
  ['03', 'Modern treatment', 'Thoughtful treatment planning in a clean, professional clinic.'],
  ['04', 'Specialist surgical care', 'Access to maxillofacial expertise for complex needs.'],
]

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 12h15m-7-7 7 7-7 7" /></svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function bookAppointment(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Hello, I would like to book an appointment.',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${data.get('service')}`,
      `Preferred date: ${data.get('date')}`,
      `Preferred time: ${data.get('time')}`,
    ].join('\n')
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="topline"><span className="top-dot" /> A little more reason to smile <span className="top-separator">·</span> Islamabad, Pakistan</div>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Dr. Shafiq Dental Associates home"><span className="brand-symbol">✳</span><span>DR. SHAFIQ<small>DENTAL ASSOCIATES</small></span></a>
        <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          {['About', 'Services', 'Doctors', 'Gallery', 'Reviews', 'Contact'].map((name) => <a key={name} href={`#${name.toLowerCase()}`} onClick={closeMenu}>{name}</a>)}
          <a className="nav-book" href="#appointment" onClick={closeMenu}>Book a visit <Arrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A practice built around you</p>
            <h1>Healthy smile.<br /><em>Confident you.</em></h1>
            <p className="hero-lede">Professional dental care in Islamabad, with thoughtful attention to every smile.</p>
            <div className="hero-actions"><a className="button button-dark" href="#appointment">Book an appointment <Arrow /></a><a className="button button-plain" href="tel:+923365004550">↗ &nbsp; Call now</a></div>
            <div className="rating"><span className="stars">★★★★★</span><strong>4.4/5</strong><i /> <span>From <strong>90 reviews</strong></span></div>
            <div className="hero-footnote"><span /> Thoughtful care. Healthier smiles.</div>
          </div>
          <div className="hero-photo"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=88" alt="Bright, modern dental treatment room" /><div className="photo-note"><span>✳</span><div><strong>Care that feels different</strong><small>Professional. Personal. Welcoming.</small></div></div><span className="photo-count">01 <i /> 03</span></div>
          <a className="scroll-link" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="highlights"><div className="wrap highlight-row"><div><span className="highlight-icon">✳</span><span><strong>Patient-first care</strong><small>Every visit, every smile</small></span></div><div><span className="highlight-icon">⌖</span><span><strong>In Islamabad</strong><small>I-8 Markaz</small></span></div><div><span className="highlight-icon">✦</span><span><strong>Specialist expertise</strong><small>Dental & surgical care</small></span></div><a className="highlight-call" href="tel:+923365004550"><small>Have a question?</small><strong>Talk to our team <Arrow /></strong></a></div></section>

        <section className="about wrap section-space" id="about"><div className="about-visual"><img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1000&q=85" alt="Dentist meeting with a patient" /><div className="about-stamp"><span>✳</span><small>Here for<br />your smile</small></div></div><div className="about-copy"><p className="eyebrow"><span /> Welcome to our practice</p><h2>Good care starts<br />with <em>listening.</em></h2><p>At Dr. Shafiq Dental Associates, we believe a confident smile begins with feeling understood. Our team takes a patient-focused approach in a clean, professional environment—so you can feel at ease at every step.</p><p>From everyday dental care to specialized oral surgery, we help you understand your options and find the care that feels right for you.</p><a className="text-link" href="#doctors">Get to know our team <Arrow /></a></div></section>

        <section className="services-section section-space" id="services"><div className="wrap"><div className="section-heading"><div><p className="eyebrow"><span /> Care for every chapter</p><h2>Our <em>services</em></h2></div><p>From preventive care to specialist treatment, thoughtful dentistry for your whole smile.</p></div><div className="service-grid">{services.map(([icon, title, text], index) => <article className="service-card" key={title}><div className="service-meta"><span>{icon}</span><small>0{index + 1}</small></div><h3>{title}</h3><p>{text}</p><a href="#appointment" aria-label={`Ask about ${title}`}><Arrow /></a></article>)}</div></div></section>

        <section className="doctors wrap section-space" id="doctors"><div className="section-heading"><div><p className="eyebrow"><span /> The people behind your care</p><h2>Meet your <em>doctors</em></h2></div><p>Experienced hands. A personal approach. Care shaped around you.</p></div><div className="doctor-grid"><article className="doctor-card"><div className="doctor-photo"><img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=850&q=85" alt="Illustrative portrait for Dr. Shafiq" /><span>Your dental care, considered.</span></div><div className="doctor-caption"><div><h3>Dr. Shafiq</h3><p>Dental care</p></div><span>↗</span></div></article><article className="doctor-card"><div className="doctor-photo doctor-photo-alt"><img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=850&q=85" alt="Illustrative portrait for Dr. Mazhar" /><span>Specialist surgical expertise.</span></div><div className="doctor-caption"><div><h3>Dr. Mazhar</h3><p>Maxillofacial Surgeon</p></div><span>↗</span></div></article></div><p className="image-note">Doctor portraits are illustrative images; please replace with the clinic's own team photos.</p></section>

        <section className="why-section section-space"><div className="wrap why-layout"><div className="why-copy"><p className="eyebrow eyebrow-light"><span /> The difference is in the details</p><h2>Care you can<br /><em>feel good about.</em></h2><p>We want every visit to feel clear, comfortable and centered on what matters to you.</p><a className="button button-light" href="#appointment">Let's talk about your care <Arrow /></a></div><div className="reason-grid">{reasons.map(([number, title, text]) => <article className="reason" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

        <section className="reviews wrap section-space" id="reviews"><div className="review-heading"><div><p className="eyebrow"><span /> Kind words, trusted care</p><h2>Our patients' <em>voices</em></h2></div><a className="text-link" href="https://www.google.com/search?q=Dr.+Shafiq+Dental+Associates+Islamabad+reviews" target="_blank" rel="noreferrer">See more reviews <Arrow /></a></div><div className="review-panel"><div className="review-score"><span className="stars">★★★★★</span><strong>4.4<small>/5</small></strong><span>From 90 reviews</span></div><div className="review-message"><span>“</span><div><p>We're grateful to every patient who has shared feedback and helped others find our clinic.</p><small>Read the latest patient feedback on Google</small></div></div><a className="review-arrow" href="https://www.google.com/search?q=Dr.+Shafiq+Dental+Associates+Islamabad+reviews" target="_blank" rel="noreferrer" aria-label="Read reviews on Google"><Arrow /></a></div><p className="review-note">Rating and review count provided by the clinic. Individual review quotes are not reproduced here.</p></section>

        <section className="gallery-section section-space" id="gallery"><div className="wrap"><div className="section-heading"><div><p className="eyebrow"><span /> A look inside</p><h2>Our <em>space</em></h2></div><p>A calm, professional setting to help you feel comfortable from the moment you arrive.</p></div><div className="gallery-grid"><figure className="gallery-large"><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=85" alt="Bright dental clinic interior" /><figcaption>Our clinic <span>↗</span></figcaption></figure><figure><img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85" alt="Patient consultation" /><figcaption>Patient care <span>↗</span></figcaption></figure><figure><img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85" alt="Dental care equipment" /><figcaption>Modern dentistry <span>↗</span></figcaption></figure></div><p className="image-note">Gallery photos are illustrative and should be replaced with real clinic images.</p></div></section>

        <section className="appointment-section section-space" id="appointment"><div className="wrap appointment-layout"><div className="appointment-copy"><p className="eyebrow"><span /> Your next step</p><h2>Let's make time<br />for <em>your smile.</em></h2><p>Tell us what works for you. We'll open WhatsApp with your appointment request, and our team can help confirm the details.</p><div className="appointment-phone"><span>↗</span><div><small>Prefer to call?</small><a href="tel:+923365004550">{phone}</a></div></div></div><form className="appointment-form" onSubmit={bookAppointment}><div className="form-title"><div><small>Appointment request</small><h3>Book your appointment</h3></div><span>✳</span></div><div className="form-row"><label>Your name<input name="name" type="text" placeholder="e.g. Ayesha Khan" autoComplete="name" required /></label><label>Phone number<input name="phone" type="tel" placeholder="+92 3XX XXXXXXX" autoComplete="tel" required /></label></div><label>What can we help with?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map(([, title]) => <option key={title}>{title}</option>)}</select></label><div className="form-row"><label>Preferred date<input name="date" type="date" required /></label><label>Preferred time<select name="time" defaultValue="" required><option value="" disabled>Select a time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label></div><button className="button button-dark form-submit" type="submit">Send request on WhatsApp <Arrow /></button>{submitted && <p className="form-success" role="status">Your WhatsApp request is ready. Send it to our team to confirm.</p>}<p className="form-note">No account needed. Your request opens directly in WhatsApp.</p></form></div></section>

        <section className="contact wrap section-space" id="contact"><div className="contact-heading"><div><p className="eyebrow"><span /> We'd love to welcome you</p><h2>Find your way <em>to us.</em></h2></div><a className="button button-dark" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer">Get directions <Arrow /></a></div><div className="contact-layout"><div className="map"><iframe title="Map showing Pak Land City Center in I-8 Markaz, Islamabad" src={`https://maps.google.com/maps?q=${encodeURIComponent('Pak Land City Center I-8 Markaz Islamabad')}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="contact-info"><article><span>⌖</span><div><small>Visit the clinic</small><p>{address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer">Directions <Arrow /></a></div></article><article><span>↗</span><div><small>Call our team</small><a className="contact-phone" href="tel:+923365004550">{phone}</a><a href="https://wa.me/923365004550" target="_blank" rel="noreferrer">Chat on WhatsApp <Arrow /></a></div></article><article><span>◷</span><div><small>Opening hours</small><p>Please call us to confirm today's hours.</p><a href="tel:+923365004550">Call before visiting <Arrow /></a></div></article></div></div></section>
      </main>

      <footer className="footer"><div className="wrap footer-main"><a className="brand footer-brand" href="#home"><span className="brand-symbol">✳</span><span>DR. SHAFIQ<small>DENTAL ASSOCIATES</small></span></a><p>Professional dental care.<br />A little more reason to smile.</p><div className="footer-links"><a href="#services">Services</a><a href="#doctors">Our doctors</a><a href="#appointment">Appointments</a><a href="#contact">Contact</a></div><a className="footer-phone" href="tel:+923365004550">{phone}</a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Dr. Shafiq Dental Associates</span><span>Made with care in Islamabad</span></div></footer>
      <a className="whatsapp-float" href="https://wa.me/923365004550" target="_blank" rel="noreferrer" aria-label="Contact the clinic on WhatsApp">◉ <small>WhatsApp us</small></a>
    </>
  )
}

export default App
