import { Link } from 'react-router-dom';

const programs = [
  {
    id: 'playgroup', title: '👶 Playgroup', age: '2 – 3 Years', bg: 'linear-gradient(135deg, #FF6B6B, #FF9F43)', btn: 'btn-primary', img: '/school_photos/pre-12.png',
    desc: 'A gentle introduction to structured learning through play, songs, and sensory exploration. We help toddlers transition from home to a social environment with love and patience.',
    details: [
      { label: 'Duration', val: '3 hours/day' }, { label: 'Class Size', val: 'Max 15 kids' },
      { label: 'Days', val: 'Mon – Fri' }, { label: 'Timing', val: '9 AM – 12 PM' }
    ],
    subjects: ['🎵 Rhymes & Songs', '🎨 Sensory Play', '📖 Storytelling', '🌿 Outdoor Play', '🤝 Social Skills']
  },
  {
    id: 'nursery', title: '🧒 Nursery', age: '3 – 4 Years', bg: 'linear-gradient(135deg, #4ECDC4, #26de81)', btn: 'btn-teal', img: '/school_photos/pre-13.png',
    desc: 'Building on social readiness with early literacy and numeracy concepts. Children develop language skills, curiosity, and confidence through hands-on activities and creative play.',
    details: [
      { label: 'Duration', val: '4 hours/day' }, { label: 'Class Size', val: 'Max 20 kids' },
      { label: 'Days', val: 'Mon – Fri' }, { label: 'Timing', val: '9 AM – 1 PM' }
    ],
    subjects: ['🔤 Pre-Reading', '🔢 Pre-Math', '🎨 Art & Craft', '💃 Movement', '🌍 EVS Basics']
  },
  {
    id: 'jr-kg', title: '📖 Junior KG', age: '4 – 5 Years', bg: 'linear-gradient(135deg, #A855F7, #6c3483)', btnCustom: { background: 'linear-gradient(135deg,var(--purple),#6c3483)', color: 'white' }, img: '/school_photos/pre-14.png',
    desc: 'Structured academic foundation with reading readiness, phonics, number concepts, and creative arts. Children develop critical thinking, problem-solving, and communication skills.',
    details: [
      { label: 'Duration', val: '5 hours/day' }, { label: 'Class Size', val: 'Max 25 kids' },
      { label: 'Days', val: 'Mon – Sat' }, { label: 'Timing', val: '8:30 AM – 1:30 PM' }
    ],
    subjects: ['🔤 Phonics', '🔢 Numbers 1–50', '🖊️ Writing', '🌿 EVS', '💻 Computers']
  },
  {
    id: 'sr-kg', title: '🎒 Senior KG', age: '5 – 6 Years', bg: 'linear-gradient(135deg, #FF9F43, #FFE66D)', btnCustom: { background: 'linear-gradient(135deg,var(--orange),var(--accent))', color: 'var(--text)' }, img: '/school_photos/pre-15.png',
    desc: 'School-readiness program preparing children for primary school. Advanced reading, writing, mathematics, science experiments, and leadership activities build confidence and independence.',
    details: [
      { label: 'Duration', val: '5.5 hours/day' }, { label: 'Class Size', val: 'Max 25 kids' },
      { label: 'Days', val: 'Mon – Sat' }, { label: 'Timing', val: '8 AM – 1:30 PM' }
    ],
    subjects: ['📖 Reading', '🔢 Math', '🧪 Science', '🌍 Social Studies', '🎭 Drama']
  }
];

export default function Classes() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--orange) 0%, var(--accent) 100%)', color: 'var(--text)' }}>
        <h1>📚 Our Classes & Programs</h1>
        <p>Age-appropriate programs designed to nurture, inspire, and ignite a love of learning</p>
      </div>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link to="/">Home</Link> › Classes</div></div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🎓 Programs</span>
            <h2>A Perfect Program for Every Age</h2>
            <p>Each program is tailored to meet the developmental needs of children at their specific stage of growth.</p>
          </div>
          <div className="cards-grid">
            {programs.map(p => (
              <div key={p.id} style={{ borderRadius: '25px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ height: '200px', backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }}></div>
                  <div style={{ position: 'absolute', inset: 0, padding: '2.5rem 2rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <div style={{ position: 'absolute', right: '-10px', bottom: '-20px', fontSize: '7rem', opacity: 0.2 }}>{p.title.split(' ')[0]}</div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.3rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{p.title}</h3>
                    <div style={{ fontSize: '1rem', opacity: 0.9, fontWeight: 600 }}>Age: {p.age}</div>
                  </div>
                </div>
                <div style={{ background: 'white', padding: '2rem' }}>
                  <p style={{ color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{p.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.5rem' }}>
                    {p.details.map((d, i) => (
                      <div key={i} style={{ background: 'var(--bg)', borderRadius: '10px', padding: '0.8rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{d.label}</div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{d.val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {p.subjects.map((s, i) => <span key={i} style={{ background: 'var(--bg)', padding: '0.4rem 0.9rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>{s}</span>)}
                  </div>
                  <Link to="/admissions" className={`btn ${p.btn || ''}`} style={{ ...p.btnCustom, width: '100%', justifyContent: 'center' }}>Enroll Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--orange))', borderRadius: 'var(--radius)', padding: '3rem', color: 'white', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌱 Our Curriculum Approach</h2>
            <p>Rooted in internationally recognized early childhood education frameworks, our curriculum balances structured learning with free exploration.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              {['🎮 Play-Based Learning', '📊 EYFS Framework', '🧠 Multiple Intelligences', '🌍 Montessori Elements', '🎨 Project-Based Activities', '💬 Language Immersion'].map((c, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1.2rem', borderRadius: '20px', fontWeight: 600, fontSize: '0.9rem' }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🕐 Sample Schedule</span>
            <h2>A Typical Day at Little Millennium</h2>
            <p>Structured yet flexible — every day is an adventure!</p>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto', background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={{ background: 'var(--bg)', padding: '0.8rem', fontSize: '0.9rem', textAlign: 'left' }}>⏰ Time</th><th style={{ background: 'var(--bg)', padding: '0.8rem', fontSize: '0.9rem', textAlign: 'left' }}>📅 Activity</th></tr></thead>
              <tbody>
                {[
                  ['9:00 – 9:30 AM', '🌅 Morning Arrival & Free Play'],
                  ['9:30 – 10:00 AM', '🎵 Morning Circle & Rhymes'],
                  ['10:00 – 10:45 AM', '📖 Language / Literacy Time'],
                  ['10:45 – 11:30 AM', '🔢 Math & Thinking Activities'],
                  ['11:30 – 12:00 PM', '🍎 Snack & Hygiene Time'],
                  ['12:00 – 12:45 PM', '🎨 Art, Craft & Creativity'],
                  ['12:45 – 1:30 PM', '🌳 Outdoor Play & Exercise'],
                  ['1:30 – 2:00 PM', '📚 Story Time / Show & Tell'],
                  ['2:00 – 5:00 PM', '🏠 Daycare / Extended Activities & Pack Up'],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '0.8rem', fontSize: '0.9rem', color: 'var(--text)', fontWeight: 700 }}>{row[0]}</td>
                    <td style={{ padding: '0.8rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
