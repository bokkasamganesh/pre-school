import { Link } from 'react-router-dom';
import { useState } from 'react';

const galleryItems = [
  { cat: 'art', icon: '🎨', title: 'Art Class Fun', desc: 'Children creating beautiful masterpieces in our fully equipped art studio.', bg: 'linear-gradient(135deg,#ffe0e0,#ffb3b3)', h: 200 },
  { cat: 'music', icon: '🎵', title: 'Music & Movement', desc: 'Little musicians learning rhythm, beats, and the joy of music.', bg: 'linear-gradient(135deg,#e0f8ff,#b3e8ff)', h: 260 },
  { cat: 'outdoor', icon: '🌳', title: 'Outdoor Exploration', desc: 'Kids discovering nature, insects, and the great outdoors.', bg: 'linear-gradient(135deg,#e8ffe0,#b3ffb3)', h: 180 },
  { cat: 'events', icon: '🎉', title: 'Annual Day 2024', desc: 'Students performing on stage at our grand Annual Day celebration.', bg: 'linear-gradient(135deg,#f3e0ff,#d9b3ff)', h: 220 },
  { cat: 'classroom', icon: '📚', title: 'Story Hour', desc: 'Our beloved teacher reading stories to wide-eyed, engaged little listeners.', bg: 'linear-gradient(135deg,#fff3e0,#ffd79e)', h: 240 },
  { cat: 'sports', icon: '🏃', title: 'Sports Day 2024', desc: 'Children racing, jumping, and competing with great spirit at Sports Day.', bg: 'linear-gradient(135deg,#e0fff3,#b3ffd9)', h: 190 },
  { cat: 'art', icon: '🖼️', title: 'Craft Exhibition', desc: 'Beautiful craft projects displayed at the annual art and craft exhibition.', bg: 'linear-gradient(135deg,#ffe0f0,#ffb3d9)', h: 210 },
  { cat: 'classroom', icon: '🔢', title: 'Math Fun', desc: 'Making numbers exciting with colourful manipulatives and hands-on activities.', bg: 'linear-gradient(135deg,#e0e8ff,#b3c5ff)', h: 170 },
  { cat: 'events', icon: '🎪', title: 'Fancy Dress', desc: 'Adorable children dressed up for our popular Fancy Dress competition.', bg: 'linear-gradient(135deg,#fff8e0,#ffe8a0)', h: 250 },
  { cat: 'outdoor', icon: '🛝', title: 'Playground Fun', desc: 'Happy children enjoying our safe, colourful playground equipment.', bg: 'linear-gradient(135deg,#ffe8d0,#ffc680)', h: 195 },
  { cat: 'music', icon: '💃', title: 'Dance Performance', desc: 'Energetic dance performances at our Annual Day by talented young dancers.', bg: 'linear-gradient(135deg,#d0f0ff,#80d8ff)', h: 230 },
  { cat: 'classroom', icon: '🧪', title: 'Science Discovery', desc: 'Little scientists exploring and experimenting in our weekly science sessions.', bg: 'linear-gradient(135deg,#d0ffe8,#80ffb3)', h: 185 },
];

const filters = [
  { id: 'all', label: '🌈 All' },
  { id: 'classroom', label: '📚 Classroom' },
  { id: 'art', label: '🎨 Art & Craft' },
  { id: 'events', label: '🎉 Events' },
  { id: 'outdoor', label: '🌳 Outdoor' },
  { id: 'sports', label: '🏃 Sports' },
  { id: 'music', label: '🎵 Music' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filteredItems = galleryItems.filter(item => filter === 'all' || item.cat === filter);

  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #FF9F43 0%, #FFE66D 100%)', color: 'var(--text)' }}>
        <h1>📸 Our Gallery</h1>
        <p>Moments of joy, learning, and laughter captured forever</p>
      </div>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link to="/">Home</Link> › Gallery</div></div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[{ n: '500+', l: 'Photos' }, { n: '50+', l: 'Events Captured' }, { n: '15', l: 'Years of Memories' }, { n: '20+', l: 'Albums' }].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontFamily: "'Fredoka One', cursive", color: 'var(--primary)' }}>{s.n}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 600 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {filters.map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)}
                style={{
                  padding: '0.5rem 1.4rem', borderRadius: '25px', border: '2px solid var(--primary)', cursor: 'pointer', transition: 'var(--transition)', fontSize: '0.9rem', fontWeight: 700, fontFamily: "'Nunito', sans-serif",
                  background: filter === f.id ? 'var(--primary)' : 'transparent',
                  color: filter === f.id ? 'white' : 'var(--primary)'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div style={{ columns: '3 250px', columnGap: '1rem' }}>
            {filteredItems.map((item, i) => (
              <div key={i} style={{ breakInside: 'avoid', marginBottom: '1rem', borderRadius: 'var(--radius)', overflow: 'hidden', cursor: 'pointer', position: 'relative', display: 'block' }}
                onClick={() => setLightbox(item)}
              >
                <div className="gbox" style={{ width: '100%', height: item.h, background: item.bg, borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', transition: 'var(--transition)', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.children[0].style.background = 'rgba(0,0,0,0.45)'; e.currentTarget.querySelector('.gbox-label').style.opacity = 1; e.currentTarget.querySelector('.gbox-label').style.transform = 'translateY(0)'; e.currentTarget.querySelector('.gbox-zoom').style.opacity = 1; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.children[0].style.background = 'transparent'; e.currentTarget.querySelector('.gbox-label').style.opacity = 0; e.currentTarget.querySelector('.gbox-label').style.transform = 'translateY(10px)'; e.currentTarget.querySelector('.gbox-zoom').style.opacity = 0; }}>
                  {item.icon}
                  <div style={{ position: 'absolute', inset: 0, background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }}>
                    <div className="gbox-zoom" style={{ color: 'white', fontSize: '1.5rem', opacity: 0, transition: 'var(--transition) 0.05s' }}>🔍</div>
                    <div className="gbox-label" style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', opacity: 0, transition: 'var(--transition)', transform: 'translateY(10px)' }}>{item.title}</div>
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
            <span className="section-tag">🎬 Video Highlights</span>
            <h2>See Our School in Action</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🏫', title: 'School Campus Tour', desc: 'A walkthrough of our beautiful facilities and classrooms', bg: 'linear-gradient(135deg,#ffe0e0,#ffb3b3)' },
              { icon: '🌟', title: 'Annual Day 2024 Highlights', desc: 'Best moments from our spectacular Annual Day celebration', bg: 'linear-gradient(135deg,#e0f8ff,#b3e8ff)' },
              { icon: '🎨', title: 'A Day in the Life', desc: 'Follow a typical fun-filled day at Little Millennium Preschool', bg: 'linear-gradient(135deg,#f3e0ff,#d9b3ff)' }
            ].map((v, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', position: 'relative', cursor: 'pointer', background: v.bg }}
                  onMouseEnter={e => { e.currentTarget.querySelector('.play-btn').style.transform = 'scale(1.15)'; e.currentTarget.querySelector('.play-btn').style.background = 'var(--primary)'; e.currentTarget.querySelector('.play-btn').style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.querySelector('.play-btn').style.transform = ''; e.currentTarget.querySelector('.play-btn').style.background = 'rgba(255,255,255,0.9)'; e.currentTarget.querySelector('.play-btn').style.color = 'inherit'; }}>
                  {v.icon}
                  <div className="play-btn" style={{ position: 'absolute', width: '60px', height: '60px', background: 'rgba(255,255,255,0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', transition: 'var(--transition)' }}>▶</div>
                </div>
                <div style={{ padding: '1.2rem' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{v.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setLightbox(null)}>
          <div style={{ background: 'white', borderRadius: '30px', padding: '2.5rem', maxWidth: '600px', width: '90%', textAlign: 'center', position: 'relative' }} onClick={e => e.stopPropagation()}>
            <span style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-light)' }} onClick={() => setLightbox(null)}>✕</span>
            <div style={{ fontSize: '8rem', marginBottom: '1rem' }}>{lightbox.icon}</div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>{lightbox.title}</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{lightbox.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
