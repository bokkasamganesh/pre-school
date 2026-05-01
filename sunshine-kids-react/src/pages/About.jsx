import { Link } from 'react-router-dom';

const milestones = [
  { year: '2010', title: 'School Founded', desc: 'Opened with 30 students, 3 classrooms, and a big dream.' },
  { year: '2013', title: 'Expanded Campus', desc: 'Added 8 new classrooms, a playground, and a library wing.' },
  { year: '2015', title: 'Best Preschool Award', desc: 'Recognized as the Best Preschool in the district by the Education Board.' },
  { year: '2018', title: 'Digital Classrooms', desc: 'Introduced smart boards and interactive learning technology in all classrooms.' },
  { year: '2021', title: '500 Student Milestone', desc: 'Celebrated welcoming our 500th student with a grand school fest.' },
  { year: '2025', title: 'ISO Certified', desc: 'Achieved ISO 9001 certification for quality education and management systems.' },
];

const values = [
  { icon: '❤️', title: 'Love & Care', desc: 'Every child is treated with unconditional love, warmth, and individual attention.' },
  { icon: '🛡️', title: 'Safety First', desc: 'A secure, child-proofed environment where children feel protected at all times.' },
  { icon: '🌈', title: 'Inclusivity', desc: 'We celebrate diversity and ensure every child belongs and feels valued.' },
  { icon: '🌱', title: 'Growth Mindset', desc: 'We encourage curiosity, resilience, and the joy of learning from every experience.' },
  { icon: '🤝', title: 'Community', desc: 'Strong partnerships with parents and the community for holistic child development.' },
  { icon: '⭐', title: 'Excellence', desc: 'Committed to the highest standards in early childhood education and care.' },
];

const facilities = [
  { icon: '🏫', title: 'Smart Classrooms', desc: 'Interactive whiteboards & tech-enabled learning' },
  { icon: '🛝', title: 'Outdoor Playground', desc: 'Safe, age-appropriate play equipment' },
  { icon: '📚', title: 'Mini Library', desc: '1,000+ picture books and story collections' },
  { icon: '🎨', title: 'Art Studio', desc: 'Dedicated space for creative expression' },
  { icon: '🎵', title: 'Music Room', desc: 'Instruments and sound-proofed music studio' },
  { icon: '🍽️', title: 'Dining Hall', desc: 'Hygienic, nutritious meals served daily' },
  { icon: '🏥', title: 'Medical Room', desc: 'On-site nurse and first aid facilities' },
  { icon: '📹', title: 'CCTV Security', desc: '24/7 monitored campus for safety' },
  { icon: '🚌', title: 'School Bus', desc: 'GPS-tracked safe transportation service' },
  { icon: '💻', title: 'Computer Lab', desc: 'Age-appropriate digital literacy programs' },
];

export default function About() {
  return (
    <>
      <div className="page-hero">
        <h1>🏫 About Our School</h1>
        <p>A story of love, learning, and little footprints since 2010</p>
      </div>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link to="/">Home</Link> › About Us</div></div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-story-grid">
            <div style={{ background: 'linear-gradient(135deg, #ffe8e8, #fff3cd)', borderRadius: '30px', padding: '3rem', textAlign: 'center', fontSize: '6rem' }}>
              🏫<br />
              <div style={{ fontSize: '1.5rem', marginTop: '1rem', fontFamily: "'Fredoka One', cursive", color: 'var(--primary)' }}>Est. 2010</div>
              <div style={{ fontSize: '1rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>15 Years of Nurturing Dreams</div>
            </div>
            <div>
              <span className="section-tag">📖 Our Story</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>How It All <span className="highlight">Began</span></h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>Little Millennium Preschool was founded in 2010 with a simple but powerful dream: to create a place where every child feels safe, loved, and excited to learn. What started as a small 3-room school with 30 students has grown into one of the most trusted preschools in the region.</p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>Our founder, Mrs. Lakshmi Nair, a child development specialist with 20+ years of experience, envisioned a school that combines the warmth of home with the structured joy of early childhood education.</p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>Today, we proudly serve 500+ families and continue to be guided by the same core belief — every child is a unique star waiting to shine!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🌟 Mission & Vision</span>
            <h2>What Drives Us Every Day</h2>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-accent" style={{ background: 'linear-gradient(90deg, var(--primary), var(--orange))' }}></div>
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide a safe, stimulating, and joyful learning environment that nurtures the whole child — intellectually, emotionally, socially, and physically — through play-based, child-centred education.</p>
            </div>
            <div className="card">
              <div className="card-accent" style={{ background: 'linear-gradient(90deg, var(--secondary), var(--green))' }}></div>
              <div className="card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be a centre of excellence in early childhood education where every child develops a lifelong love of learning, strong values, and the confidence to reach their full potential.</p>
            </div>
            <div className="card">
              <div className="card-accent" style={{ background: 'linear-gradient(90deg, var(--purple), var(--secondary))' }}></div>
              <div className="card-icon">💎</div>
              <h3>Our Philosophy</h3>
              <p>We believe childhood is not a race. Every child learns at their own pace, and our role is to be their guide, cheerleader, and safe harbour as they explore the world around them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🏆 Our Journey</span>
            <h2>15 Years of Milestones</h2>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                <span style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 0.8rem', borderRadius: '10px', fontWeight: 800, fontFamily: "'Fredoka One', cursive", fontSize: '1rem', whiteSpace: 'nowrap' }}>{m.year}</span>
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.2rem' }}>{m.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💛 Core Values</span>
            <h2>The Heart of Everything We Do</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '2rem', boxShadow: 'var(--shadow)', textAlign: 'center', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🏗️ Our Facilities</span>
            <h2>Built for Little Explorers</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
            {facilities.map((f, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.5rem', boxShadow: 'var(--shadow)', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateX(8px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ fontSize: '2rem' }}>{f.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem' }}>{f.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, var(--secondary), var(--purple))', color: 'white', padding: '3rem 2rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
            <h2>🏆 Awards & Accreditations</h2>
            <p>Trusted, certified, and recognized for excellence in early childhood education</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: '3rem' }}>🥇</div><p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '0.5rem' }}>Best Preschool<br />District Award 2015</p></div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: '3rem' }}>📋</div><p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '0.5rem' }}>ISO 9001<br />Certified 2025</p></div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: '3rem' }}>🎓</div><p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '0.5rem' }}>Affiliated with<br />State Education Board</p></div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: '3rem' }}>🌟</div><p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '0.5rem' }}>5-Star Safety<br />Rating</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
