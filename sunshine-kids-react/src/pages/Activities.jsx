import { Link } from 'react-router-dom';

const activities = [
  { icon: '🎨', bg: 'linear-gradient(135deg, #ffe0e0, #ffb3b3)', title: 'Art & Craft', desc: 'Children explore painting, sculpting, collage, and mixed media to express their creativity and develop fine motor skills.', day: 'Every Tuesday', time: '45 mins' },
  { icon: '🎵', bg: 'linear-gradient(135deg, #e0f8ff, #b3e8ff)', title: 'Music & Rhymes', desc: 'Songs, instruments, rhythms, and dance help children develop language, memory, coordination, and emotional expression.', day: 'Mon & Thu', time: '30 mins' },
  { icon: '🌳', bg: 'linear-gradient(135deg, #e8ffe0, #b3ffb3)', title: 'Outdoor Play', desc: 'Structured playground time with climbing, running, and team games to build physical strength, agility, and social bonds.', day: 'Daily', time: '30 mins' },
  { icon: '📖', bg: 'linear-gradient(135deg, #fff3e0, #ffd79e)', title: 'Story Time', desc: 'Interactive storytelling sessions that build vocabulary, imagination, listening skills, and a lifelong love of books and reading.', day: 'Every Friday', time: '30 mins' },
  { icon: '🧪', bg: 'linear-gradient(135deg, #f3e0ff, #d9b3ff)', title: 'Science Experiments', desc: 'Fun, safe experiments introduce scientific thinking. Children discover, question, and explore the world around them with wonder.', day: 'Every Wednesday', time: '45 mins' },
  { icon: '🧘', bg: 'linear-gradient(135deg, #e0fff3, #b3ffd9)', title: 'Yoga & Mindfulness', desc: 'Age-appropriate yoga poses and breathing exercises help children develop focus, calm, body awareness, and emotional regulation.', day: 'Every Friday', time: '20 mins' },
  { icon: '💻', bg: 'linear-gradient(135deg, #fff0e0, #ffd6a5)', title: 'Computer Basics', desc: 'Introduction to digital literacy through educational games and activities designed for young learners (Jr. KG & Sr. KG only).', day: 'Every Tuesday', time: '30 mins' },
  { icon: '🎭', bg: 'linear-gradient(135deg, #ffe0f0, #ffb3d9)', title: 'Drama & Role Play', desc: 'Imaginative play and drama activities build confidence, communication, empathy, and creative thinking through storytelling.', day: 'Every Thursday', time: '45 mins' },
];

const events = [
  { day: '30', month: 'Apr', title: 'Parent-Teacher Meeting', desc: 'Quarterly progress discussion for all classes. All parents are requested to attend.', loc: '📍 School Hall | 👥 All Parents', time: '🕐 10 AM – 1 PM', bg: 'var(--primary)', badge: 'badge-blue' },
  { day: '05', month: 'May', title: '🎨 Art & Craft Competition', desc: 'Annual creativity showcase. Students display their artwork and compete for prizes across all age groups.', loc: '📍 Art Studio | 👥 All Students', time: '🕐 9 AM – 12 PM', bg: 'var(--secondary)', badge: 'badge-green' },
  { day: '15', month: 'May', title: '🌟 Annual Day Celebration', desc: 'Cultural performances, prize distribution, and awards ceremony. A grand event for the whole family!', loc: '📍 School Auditorium | 👥 All Families', time: '🕐 5 PM – 8 PM', bg: 'var(--purple)', badgeCustom: { background: '#ede9fe', color: 'var(--purple)' } },
  { day: '20', month: 'May', title: '🏕️ Summer Camp Begins', desc: 'Fun-filled 3-week summer camp with swimming, art, cooking, science, and adventure activities.', loc: '📍 School Campus | 👥 Enrolled Students', time: '🕐 9 AM – 1 PM', bg: 'var(--orange)', badge: 'badge-red' },
  { day: '01', month: 'Jun', title: '🌍 Environment Day Activities', desc: 'Tree planting, poster making, and eco-awareness sessions to teach children about nature and responsibility.', loc: '📍 School Garden | 👥 All Students', time: '🕐 9 AM – 11 AM', bg: 'var(--green)', badge: 'badge-green' },
  { day: '15', month: 'Jun', title: '🎒 New Academic Year Begins', desc: 'Welcome back! Orientation day for new students and parents. Meet your teachers and explore the campus.', loc: '📍 All Classrooms | 👥 New Students & Parents', time: '🕐 9 AM – 12 PM', bg: '#0984e3', badge: 'badge-blue' },
];

export default function Activities() {
  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #26de81 0%, #4ECDC4 100%)' }}>
        <h1>🎭 Activities & Events</h1>
        <p>Every day is an adventure filled with creativity, fun, and discovery!</p>
      </div>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link to="/">Home</Link> › Activities & Events</div></div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">🌟 Regular Activities</span>
            <h2>What We Do Every Week</h2>
            <p>A rich variety of activities designed to nurture every dimension of your child's development.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
            {activities.map((a, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', background: a.bg }}>{a.icon}</div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{a.title}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>{a.desc}</p>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-light)', fontWeight: 600 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>📅 {a.day}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>⏱ {a.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📅 Events Calendar</span>
            <h2>Upcoming Events – 2025</h2>
            <p>Mark your calendars! Exciting events await throughout the year.</p>
          </div>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {events.map((e, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.5rem', boxShadow: 'var(--shadow)', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem', alignItems: 'center', transition: 'var(--transition)' }}
                onMouseEnter={ev => ev.currentTarget.style.transform = 'translateX(8px)'}
                onMouseLeave={ev => ev.currentTarget.style.transform = ''}>
                <div style={{ background: e.bg, color: 'white', borderRadius: '15px', padding: '0.8rem 1rem', textAlign: 'center', minWidth: '70px' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1, fontFamily: "'Fredoka One', cursive" }}>{e.day}</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase' }}>{e.month}</div>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>{e.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>{e.desc}</p>
                  <div style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>{e.loc}</div>
                </div>
                <span className={`badge ${e.badge || ''}`} style={{ padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, whiteSpace: 'nowrap', ...e.badgeCustom }}>{e.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, var(--primary), var(--orange))', borderRadius: 'var(--radius)', padding: '3rem', color: 'white' }}>
            <h2>📱 Stay Connected with Us</h2>
            <p style={{ opacity: 0.9, marginBottom: 0 }}>We keep parents informed and involved every step of the way through multiple communication channels.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: '📱', title: 'Parent App', desc: 'Daily updates, homework, attendance and reports on our parent portal app.' },
                { icon: '📧', title: 'Email Newsletters', desc: 'Weekly newsletters with activity highlights, notices, and upcoming events.' },
                { icon: '💬', title: 'WhatsApp Groups', desc: 'Class-wise parent groups for quick communication and community building.' },
                { icon: '📅', title: 'PTM Meetings', desc: 'Quarterly one-on-one parent-teacher meetings to discuss your child\'s progress.' },
              ].map((c, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{c.icon}</div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{c.title}</h4>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
