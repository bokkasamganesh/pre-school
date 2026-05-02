import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../utils/db';

const whyCards = [
  { icon: '🏫', title: 'Safe Environment', desc: 'Child-proofed classrooms, CCTV monitoring, and trained staff ensure your child\'s safety at all times.', color: 'var(--primary)' },
  { icon: '🎓', title: 'Expert Teachers', desc: 'Certified, experienced, and passionate educators dedicated to each child\'s individual growth journey.', color: 'var(--secondary)' },
  { icon: '🌿', title: 'Holistic Learning', desc: 'Our curriculum balances academics, arts, sports, and social skills for all-round development.', color: 'var(--accent)' },
  { icon: '🤝', title: 'Parent Partnership', desc: 'Regular updates, parent meetings, and open communication keep you involved every step of the way.', color: 'var(--purple)' },
];

const notices = [
  { date: 'April 22, 2025', title: 'Admissions Open for 2025–26', body: 'Registrations are now open. Limited seats available. Apply early to secure your spot.', color: 'var(--primary)' },
  { date: 'April 18, 2025', title: 'Summer Camp Registration', body: 'Fun-filled summer camp from May 20 to June 10. Register at the front desk or online.', color: 'var(--secondary)' },
  { date: 'April 15, 2025', title: 'School Holiday – May 1st', body: 'The school will remain closed on May 1st on account of Labour Day. Classes resume May 2nd.', color: 'var(--purple)' },
  { date: 'April 10, 2025', title: 'Fee Payment Reminder', body: 'Term 2 fees are due by April 30th. Please submit on time to avoid late charges.', color: 'var(--orange)' },
];

const testimonials = [
  { text: '"My daughter absolutely loves going to school every morning! The teachers are so caring and patient. She has grown so much in confidence and creativity since joining Little Millennium."', name: 'Priya Sharma', role: 'Mother of Aaradhya, Nursery', bg: '#ffe8e8', avatar: '👩' },
  { text: '"The best preschool in the city! The curriculum is thoughtfully designed, and the staff communicates regularly with parents. My son is thriving both academically and socially."', name: 'Rahul Mehta', role: 'Father of Arjun, Jr. KG', bg: '#e8f8ff', avatar: '👨' },
  { text: '"The school provides a perfect blend of learning and fun. My twins have made wonderful friends and come home every day excited to share what they learned. Highly recommended!"', name: 'Anita Gupta', role: 'Mother of twins, Playgroup', bg: '#f0fff0', avatar: '👩' },
];

const galleryItems = [
  { img: '/school_photos/pre-1.png', label: 'Art Class' },
  { img: '/school_photos/pre-2.png', label: 'Music Time' },
  { img: '/school_photos/pre-3.png', label: 'Outdoor Play' },
  { img: '/school_photos/pre-4.png', label: 'Story Hour' },
  { img: '/school_photos/pre-5.png', label: 'Drama Club' },
  { img: '/school_photos/pre-6.png', label: 'Sports Day' },
];

const quickLinks = [
  { to: '/admissions', icon: '📝', label: 'Admissions' },
  { to: '/classes', icon: '📚', label: 'Our Classes' },
  { to: '/activities', icon: '🎭', label: 'Activities' },
  { to: '/gallery', icon: '📸', label: 'Gallery' },
  { to: '/teachers', icon: '👩‍🏫', label: 'Our Teachers' },
  { to: '/contact', icon: '📞', label: 'Contact Us' },
];

export default function Home() {
  const [dynamicEvents, setDynamicEvents] = useState([]);

  useEffect(() => {
    setDynamicEvents(db.get('events'));
  }, []);

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="announcement-bar" style={{ marginTop: '70px' }}>
        <span className="ann-label">📢 Notice</span>
        <span className="ann-text">🎉 Admissions Open for 2025–26 Academic Year &nbsp;|&nbsp; 🌟 Annual Day Celebration – May 15th &nbsp;|&nbsp; 📚 Parent-Teacher Meeting – April 30th &nbsp;|&nbsp; 🎨 Art &amp; Craft Competition – May 5th</span>
      </div>

      {/* HERO */}
      <section className="hero" style={{ paddingTop: '4rem' }}>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-tag">🌈 Welcome to Little Millennium Preschool</span>
            <h1>Where Every <span>Little Star</span> Shines Bright!</h1>
            <p>A warm, nurturing, and fun-filled learning environment where children aged 2–6 explore, discover, and grow. Building the foundation of a lifetime of learning through play, creativity, and love.</p>
            <div className="hero-btns">
              <Link to="/admissions" className="btn btn-primary">🎒 Apply Now</Link>
              <Link to="/about" className="btn btn-secondary">Learn More →</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <span className="floating-emoji fe-1">🌟</span>
              <span className="floating-emoji fe-2">🎨</span>
              <span className="floating-emoji fe-3">🦋</span>
              <div className="kids-illustration">🧒👧🧒</div>
              <h3 style={{ textAlign: 'center', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Join Our Happy Family!</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.9rem' }}>500+ happy students every year</p>
              <div className="hero-stats">
                <div className="stat-card"><div className="stat-num">500+</div><div className="stat-label">Happy Kids</div></div>
                <div className="stat-card"><div className="stat-num">25+</div><div className="stat-label">Teachers</div></div>
                <div className="stat-card"><div className="stat-num">15+</div><div className="stat-label">Years</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="section section-alt" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '1rem', marginTop: '1rem' }}>
            {quickLinks.map(ql => (
              <Link key={ql.to} to={ql.to} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.5rem 1rem', textAlign: 'center', boxShadow: 'var(--shadow)', transition: 'var(--transition)', color: 'var(--text)', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = ''; }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{ql.icon}</div>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{ql.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC EVENTS SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📅 School Life</span>
            <h2>Latest Events & Happenings</h2>
            <p>Catch up with all the exciting activities and special celebrations at Little Millennium.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {dynamicEvents.map((ev) => (
              <div key={ev.id} className="admin-card" style={{ overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 'var(--shadow)', borderRadius: 'var(--radius)' }}>
                <div style={{ position: 'relative', height: '220px' }}>
                  {ev.type === 'image' ? (
                    <img src={ev.url} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <iframe 
                      src={ev.url} 
                      title={ev.title} 
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  )}
                  <span style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    background: 'var(--primary)', 
                    color: 'white', 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '20px', 
                    fontSize: '0.75rem', 
                    fontWeight: 700 
                  }}>
                    {ev.category}
                  </span>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>🗓️ {ev.date}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{ev.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{ev.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/activities" className="btn btn-primary">Explore All Activities →</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💛 Why Choose Us</span>
            <h2>A Place Kids <span className="highlight">Love</span> to Come Every Day</h2>
            <p>We create memorable experiences that spark curiosity, creativity, and lifelong love of learning in every child.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1.5rem' }}>
            {whyCards.map((c, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '2rem', boxShadow: 'var(--shadow)', textAlign: 'center', transition: 'var(--transition)', borderTop: `5px solid ${c.color}`, cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{c.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICES & PROGRAMS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="two-col-events">
            <div>
              <div className="section-header" style={{ textAlign: 'left' }}>
                <span className="section-tag" style={{ background: 'linear-gradient(135deg,var(--orange),var(--accent))', color: 'var(--text)' }}>📌 Notice Board</span>
                <h2>Latest Notices</h2>
              </div>
              {notices.map((n, i) => (
                <div key={i} className="notice-card" style={{ borderColor: n.color }}>
                  <div className="notice-date" style={{ color: n.color }}>{n.date}</div>
                  <h4>{n.title}</h4>
                  <p>{n.body}</p>
                </div>
              ))}
            </div>
            <div>
               <div style={{ background: 'linear-gradient(135deg,var(--secondary),var(--purple))', color: 'var(--white)', borderRadius: 'var(--radius)', padding: '3rem 2rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎓 Our Programs</h2>
                <p style={{ opacity: 0.9, marginBottom: '2rem' }}>From Playgroup to Senior KG — we have the perfect program for your little one.</p>
                <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  <span className="badge badge-green">👶 Playgroup</span>
                  <span className="badge badge-blue">🧒 Nursery</span>
                  <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>📖 Jr. KG</span>
                  <span className="badge badge-red">🎒 Sr. KG</span>
                </div>
                <Link to="/classes" className="btn btn-white" style={{ color: 'var(--secondary)', alignSelf: 'center' }}>Explore Programs →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💬 Parent Stories</span>
            <h2>What Parents Are Saying</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '2rem', boxShadow: 'var(--shadow)', position: 'relative' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '1.2rem' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.avatar}</div>
                  <div><div style={{ fontWeight: 700 }}>{t.name}</div><div style={{ fontSize: '0.85rem' }}>{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📸 Our Moments</span>
            <h2>Glimpses of Happy Days</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((g, i) => (
              <div key={i} className="gallery-item" style={{ backgroundImage: `url(${g.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="gallery-overlay"><span>{g.label}</span></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-2">
            <Link to="/gallery" className="btn btn-primary">View Full Gallery 📸</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,var(--primary) 0%,var(--orange) 100%)', color: 'var(--white)', textAlign: 'center', padding: '5rem 2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Give Your Child the Best Start? 🌟</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <Link to="/admissions" className="btn btn-white">🎒 Apply for Admission</Link>
          <Link to="/contact" className="btn-outline-white">📞 Contact Us</Link>
        </div>
      </section>
    </>
  );
}
