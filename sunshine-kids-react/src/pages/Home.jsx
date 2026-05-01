import { Link } from 'react-router-dom';

const whyCards = [
  { icon: '🏫', title: 'Safe Environment', desc: 'Child-proofed classrooms, CCTV monitoring, and trained staff ensure your child\'s safety at all times.', color: 'var(--primary)' },
  { icon: '🎓', title: 'Expert Teachers', desc: 'Certified, experienced, and passionate educators dedicated to each child\'s individual growth journey.', color: 'var(--secondary)' },
  { icon: '🌿', title: 'Holistic Learning', desc: 'Our curriculum balances academics, arts, sports, and social skills for all-round development.', color: 'var(--accent)' },
  { icon: '🤝', title: 'Parent Partnership', desc: 'Regular updates, parent meetings, and open communication keep you involved every step of the way.', color: 'var(--purple)' },
];

const events = [
  { day: '30', month: 'Apr', title: 'Parent-Teacher Meeting', desc: 'Quarterly progress discussion for all classes', time: '10:00 AM – 1:00 PM', bg: 'var(--primary)' },
  { day: '05', month: 'May', title: '🎨 Art & Craft Competition', desc: 'Annual creativity showcase for all students', time: '9:00 AM – 12:00 PM', bg: 'var(--secondary)' },
  { day: '15', month: 'May', title: '🌟 Annual Day Celebration', desc: 'Cultural performances, awards & fun activities', time: '5:00 PM – 8:00 PM', bg: 'var(--purple)' },
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
  { bg: 'linear-gradient(135deg,#ffe0e0,#ffb3b3)', emoji: '🎨', label: 'Art Class' },
  { bg: 'linear-gradient(135deg,#e0f8ff,#b3e8ff)', emoji: '🎵', label: 'Music Time' },
  { bg: 'linear-gradient(135deg,#e8ffe0,#b3ffb3)', emoji: '🌳', label: 'Outdoor Play' },
  { bg: 'linear-gradient(135deg,#fff3e0,#ffd79e)', emoji: '📚', label: 'Story Hour' },
  { bg: 'linear-gradient(135deg,#f3e0ff,#d9b3ff)', emoji: '🎭', label: 'Drama Club' },
  { bg: 'linear-gradient(135deg,#e0fff3,#b3ffd9)', emoji: '🏃', label: 'Sports Day' },
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

      {/* WHY CHOOSE US */}
      <section className="section">
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

      {/* EVENTS & NOTICES */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="two-col-events">
            <div>
              <div className="section-header" style={{ textAlign: 'left' }}>
                <span className="section-tag">📅 What's On</span>
                <h2>Upcoming Events</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {events.map((ev, i) => (
                  <div key={i} className="event-card">
                    <div className="event-date" style={{ background: ev.bg }}>
                      <div className="event-day">{ev.day}</div>
                      <div className="event-month">{ev.month}</div>
                    </div>
                    <div className="event-info">
                      <h4>{ev.title}</h4>
                      <p>{ev.desc}</p>
                      <div className="event-time">🕐 {ev.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/activities" className="btn btn-teal" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>View All Events →</Link>
            </div>
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
          </div>
        </div>
      </section>

      {/* PROGRAMS BANNER */}
      <section className="section">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg,var(--secondary),var(--purple))', color: 'var(--white)', borderRadius: 'var(--radius)', padding: '3rem 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎓 Our Programs for Every Age Group</h2>
            <p style={{ opacity: 0.9, marginBottom: '2rem' }}>From Playgroup to Senior KG — we have the perfect program for your little one's stage of development.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <span className="badge badge-green" style={{ fontSize: '1rem', padding: '0.5rem 1.2rem' }}>👶 Playgroup (2–3 yrs)</span>
              <span className="badge badge-blue" style={{ fontSize: '1rem', padding: '0.5rem 1.2rem' }}>🧒 Nursery (3–4 yrs)</span>
              <span className="badge" style={{ background: '#ede9fe', color: 'var(--purple)', fontSize: '1rem', padding: '0.5rem 1.2rem' }}>📖 Jr. KG (4–5 yrs)</span>
              <span className="badge badge-red" style={{ fontSize: '1rem', padding: '0.5rem 1.2rem' }}>🎒 Sr. KG (5–6 yrs)</span>
            </div>
            <Link to="/classes" className="btn btn-white" style={{ color: 'var(--secondary)' }}>Explore Programs →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💬 Parent Stories</span>
            <h2>What Parents Are Saying</h2>
            <p>Hear from the families who trust us with their most precious ones every day.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '2rem', boxShadow: 'var(--shadow)', position: 'relative' }}>
                <div style={{ fontSize: '5rem', color: 'var(--primary)', opacity: 0.15, position: 'absolute', top: '-10px', left: '20px', fontFamily: 'Georgia,serif', lineHeight: 1 }}>"</div>
                <div style={{ color: '#f1c40f', fontSize: '1rem', marginBottom: '0.5rem' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '1.2rem' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 50, height: 50, borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{t.role}</div>
                  </div>
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
              <div key={i} className="gallery-item" style={{ background: g.bg }}>
                {g.emoji}
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
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>Join hundreds of happy families. Enroll your child at Little Millennium Preschool today!</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/admissions" className="btn btn-white">🎒 Apply for Admission</Link>
          <Link to="/contact" className="btn-outline-white">📞 Contact Us</Link>
        </div>
      </section>
    </>
  );
}
