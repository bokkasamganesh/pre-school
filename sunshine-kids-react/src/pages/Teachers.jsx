import { Link } from 'react-router-dom';

const teachers = [
  { icon: '👩', name: 'Ms. Ananya Singh', role: 'Playgroup Lead Teacher', exp: '⭐ 8 years experience', bg: 'linear-gradient(135deg, #ffe8e8, #ffb3b3)', avatarBg: '#ffe8e8', headerEmoji: '🎨',
    bio: 'B.Ed. in Early Childhood. Specialises in sensory play and toddler development. Known for her warm hugs and creative storytelling.',
    tags: ['Sensory Play', 'Montessori', 'Music'] },
  { icon: '👨', name: 'Mr. Ravi Sharma', role: 'Nursery Teacher', exp: '⭐ 6 years experience', bg: 'linear-gradient(135deg, #e8f8ff, #b3e8ff)', avatarBg: '#e8f8ff', headerEmoji: '🎵',
    bio: 'M.A. in Child Psychology. Expert in language development and early literacy. Uses music and movement to make learning memorable.',
    tags: ['Literacy', 'Music', 'Psychology'] },
  { icon: '👩', name: 'Ms. Deepa Patel', role: 'Junior KG Teacher', exp: '⭐ 10 years experience', bg: 'linear-gradient(135deg, #f0ffe8, #b3ffb3)', avatarBg: '#f0ffe8', headerEmoji: '📚',
    bio: 'B.Ed. + Diploma in Special Education. Makes phonics and numbers exciting through interactive games and creative projects.',
    tags: ['Phonics', 'Special Ed', 'STEM'] },
  { icon: '👩', name: 'Ms. Kavya Menon', role: 'Senior KG Teacher', exp: '⭐ 12 years experience', bg: 'linear-gradient(135deg, #f3e0ff, #d9b3ff)', avatarBg: '#f3e0ff', headerEmoji: '🎭',
    bio: 'M.Ed. with specialisation in curriculum design. Prepares children for primary school with confidence, critical thinking, and a love of reading.',
    tags: ['Curriculum', 'Drama', 'Leadership'] },
  { icon: '👩', name: 'Ms. Shreya Joshi', role: 'Art & Craft Teacher', exp: '⭐ 5 years experience', bg: 'linear-gradient(135deg, #fff3e0, #ffd79e)', avatarBg: '#fff3e0', headerEmoji: '🎨',
    bio: 'Fine Arts Graduate with a passion for unlocking creativity in children. Runs the weekly art workshop and annual art exhibition.',
    tags: ['Fine Arts', 'Creativity', 'Crafts'] },
  { icon: '👨', name: 'Mr. Arjun Das', role: 'Music & Dance Teacher', exp: '⭐ 7 years experience', bg: 'linear-gradient(135deg, #e0fff3, #b3ffd9)', avatarBg: '#e0fff3', headerEmoji: '🎵',
    bio: 'Trained classical musician and dance instructor. Brings rhythm, joy, and cultural appreciation to every class through music and movement.',
    tags: ['Music', 'Dance', 'Classical Arts'] }
];

const staff = [
  { icon: '🏥', name: 'Ms. Rekha Iyer', role: 'School Nurse', desc: 'Registered Nurse with 15 years of paediatric care experience. Handles all health concerns, first aid, and wellness programs.', grad: 'linear-gradient(90deg, var(--primary), var(--orange))' },
  { icon: '🍽️', name: 'Mrs. Meena Pillai', role: 'Nutrition & Catering Head', desc: 'Nutritionist ensuring all meals are healthy, balanced, and kid-friendly. Manages dietary requirements and allergy-safe menus.', grad: 'linear-gradient(90deg, var(--secondary), var(--green))' },
  { icon: '📚', name: 'Mr. Suresh Nath', role: 'Librarian & Resource Manager', desc: 'Oversees the mini-library with 1,000+ books. Runs weekly story sessions and manages all teaching resources.', grad: 'linear-gradient(90deg, var(--purple), var(--secondary))' },
  { icon: '🚌', name: 'Transport Team', role: '3 Dedicated School Buses', desc: 'GPS-tracked vehicles with trained drivers and female attendants on every bus. Safety is always our top priority.', grad: 'linear-gradient(90deg, var(--orange), var(--accent))' }
];

export default function Teachers() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--purple) 0%, #FF6B6B 100%)' }}>
        <h1>👩‍🏫 Our Teachers & Staff</h1>
        <p>Passionate, qualified educators dedicated to every child's growth and happiness</p>
      </div>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link to="/">Home</Link> › Teachers & Staff</div></div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">👑 Leadership Team</span>
            <h2>The Heart of Little Millennium</h2>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', borderRadius: '30px', padding: '3rem', color: 'white' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '👩', name: 'Mrs. Lakshmi Nair', role: '🌟 Founder & Principal', desc: 'Child Development Specialist with 25+ years of experience. Passionate about creating nurturing learning environments where every child thrives.' },
                { icon: '👨', name: 'Mr. Vijay Kumar', role: '🏫 Vice Principal', desc: 'M.Ed in Early Childhood Education. Oversees curriculum development and ensures the highest quality of learning experiences for all students.' },
                { icon: '👩', name: 'Mrs. Preethi Reddy', role: '📋 Head of Administration', desc: '15+ years in school management. Ensures smooth daily operations, parent communications, and staff coordination across all departments.' }
              ].map((l, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '110px', height: '110px', borderRadius: '50%', margin: '0 auto 1rem', border: '4px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', background: 'rgba(255,255,255,0.1)' }}>{l.icon}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.2rem' }}>{l.name}</div>
                  <div style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{l.role}</div>
                  <div style={{ opacity: 0.8, fontSize: '0.88rem', lineHeight: 1.6 }}>{l.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">👩‍🏫 Our Teachers</span>
            <h2>Dedicated Classroom Educators</h2>
            <p>Each teacher brings unique skills and genuine love for early childhood education</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {teachers.map((t, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', background: t.bg }}>{t.headerEmoji}</div>
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ width: '90px', height: '90px', borderRadius: '50%', margin: '-50px auto 1rem', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.8rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', background: t.avatarBg }}>{t.icon}</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.2rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>{t.role}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.8rem', marginBottom: '0.8rem' }}>{t.exp}</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>{t.bio}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                    {t.tags.map(tag => <span key={tag} style={{ background: 'var(--bg)', padding: '0.25rem 0.7rem', borderRadius: '15px', fontSize: '0.78rem', fontWeight: 600 }}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🤝 Support Staff</span>
            <h2>The Team Behind the Scenes</h2>
          </div>
          <div className="cards-grid">
            {staff.map((s, i) => (
              <div key={i} className="card">
                <div className="card-accent" style={{ background: s.grad }}></div>
                <div className="card-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <p><strong>{s.role}</strong><br />{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, var(--secondary), var(--purple))', borderRadius: 'var(--radius)', padding: '3rem', textAlign: 'center', color: 'white' }}>
            <h2>👩‍🏫 Join Our Team!</h2>
            <p style={{ opacity: 0.9, margin: '1rem 0 2rem' }}>Are you a passionate educator who loves working with young children? We'd love to have you join the Little Millennium family!</p>
            <Link to="/contact" className="btn btn-white" style={{ color: 'var(--secondary)' }}>📧 Send Your Application</Link>
          </div>
        </div>
      </section>
    </>
  );
}
