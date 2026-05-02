import { Link } from 'react-router-dom';
import { useState } from 'react';
import { db } from '../utils/db';

const faqs = [
  { q: 'What are the school timings?', a: 'School is open Monday to Friday from 9:00 AM to 5:00 PM and Saturday from 9:00 AM to 12:00 PM. The office is open during the same hours.' },
  { q: 'How do I apply for admission?', a: 'You can apply online through our Admissions page or visit the school office directly. Our team will guide you through the process and schedule a school tour.' },
  { q: 'Is there a school bus facility available?', a: 'Yes! We operate 3 GPS-tracked school buses with trained drivers and female attendants. Routes cover most areas of Bengaluru. Please contact the office for route details and availability.' },
  { q: 'What meals are provided?', a: 'We provide a healthy mid-morning snack for all students. For children in extended programs, a nutritious lunch is also provided. All meals are prepared in our hygienic kitchen and cater to dietary restrictions and allergies.' },
  { q: 'How do you handle medical emergencies?', a: 'We have a qualified on-site nurse and a fully equipped medical room. In case of any emergency, parents are immediately notified and the child is taken to our partner hospital (MG Hospital, 5 minutes away) if needed.' },
  { q: 'How do you keep parents updated about their child\'s progress?', a: 'We maintain regular communication through our parent portal app, weekly email newsletters, class WhatsApp groups, and quarterly Parent-Teacher Meetings. We also provide written progress reports at the end of each term.' },
  { q: 'Are there CCTV cameras in the school?', a: 'Yes, our entire campus is under 24/7 CCTV surveillance including classrooms, playgrounds, corridors, and entry/exit points. The safety and security of every child is our top priority at all times.' }
];

export default function Contact() {
  const [formType, setFormType] = useState('general');
  const [success, setSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const dataObj = Object.fromEntries(formData.entries());
    
    // Save to Mock DB for Admin
    db.add('queries', {
      name: dataObj.name,
      email: dataObj.email,
      subject: dataObj.subject,
      message: dataObj.message,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    });

    // Still send to FormSubmit if desired (keeping the original logic too)
    try {
      const response = await fetch('https://formsubmit.co/ajax/bokkasamganesh009@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        // Fallback: If FormSubmit fails, we still succeeded locally
        setSuccess(true);
      }
    } catch (err) {
      // Fallback: If network fails, we still succeeded locally
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, #0984e3 100%)' }}>
        <h1>📞 Contact Us</h1>
        <p>We'd love to hear from you — reach out any time!</p>
      </div>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link to="/">Home</Link> › Contact</div></div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }} className="contact-wrapper">
            
            {/* LEFT: INFO */}
            <div>
              <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', borderRadius: '30px', padding: '2.5rem', color: 'white' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Get In Touch 👋</h2>
                <p style={{ opacity: 0.75, marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>Have questions about admissions, programs, or anything else? We're happy to help. Reach us through any channel below.</p>
                
                {[
                  { icon: '📍', label: 'Address', val1: '222, 6th Cross Rd, Mico Layout, 2nd Stage Layout', val2: 'BTM Layout, Bengaluru, Karnataka 560076', bg: 'rgba(255,107,107,0.2)' },
                  { icon: '📞', label: 'Phone', val1: '+91 78923 26254', val2: '+91 80 1234 5678 (Office)', bg: 'rgba(78,205,196,0.2)' },
                  { icon: '✉️', label: 'Email', val1: 'bokkasamganesh009@gmail.com', val2: 'admissions@gmail.com', bg: 'rgba(168,85,247,0.2)' },
                  { icon: '🕐', label: 'School Hours', val1: 'Monday – Friday: 9:00 AM – 5:00 PM', val2: 'Saturday: 9:00 AM – 12:00 PM | Sunday: Closed', bg: 'rgba(255,230,109,0.2)' },
                  { icon: '💬', label: 'WhatsApp', val1: '+91 78923 26254', val2: 'Quick replies between 9 AM – 5 PM', bg: 'rgba(38,222,129,0.2)' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.8rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0, background: c.bg }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, marginBottom: '0.2rem' }}>{c.label}</div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{c.val1}</div>
                      <div style={{ opacity: 0.7, fontSize: '0.85rem' }}>{c.val2}</div>
                    </div>
                  </div>
                ))}
                
                <div style={{ display: 'flex', gap: '0.8rem', marginTop: '2rem' }}>
                  {['📘', '📸', '▶️', '🐦', '💬'].map((s, i) => (
                    <a key={i} href="#" style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', transition: 'var(--transition)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = ''; }}>{s}</a>
                  ))}
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                <a href="tel:+917892326254" style={{ background: 'linear-gradient(135deg,var(--primary),var(--orange))', color: 'white', borderRadius: 'var(--radius)', padding: '1.2rem', textAlign: 'center', transition: 'var(--transition)', display: 'block' }}>
                  <div style={{ fontSize: '1.8rem' }}>📞</div><div style={{ fontWeight: 700, marginTop: '0.3rem' }}>Call Now</div>
                </a>
                <a href="https://wa.me/917892326254" style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', borderRadius: 'var(--radius)', padding: '1.2rem', textAlign: 'center', transition: 'var(--transition)', display: 'block' }}>
                  <div style={{ fontSize: '1.8rem' }}>💬</div><div style={{ fontWeight: 700, marginTop: '0.3rem' }}>WhatsApp</div>
                </a>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div style={{ background: 'var(--white)', borderRadius: '30px', padding: '2.5rem', boxShadow: 'var(--shadow)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>Send Us a Message ✉️</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '0.95rem' }}>Fill in the form below and we'll get back to you within 24 hours.</p>

              {!success ? (
                <>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    {[
                      { id: 'general', label: '💬 General Inquiry' },
                      { id: 'admission', label: '🎒 Admission Query' },
                      { id: 'feedback', label: '⭐ Feedback' },
                      { id: 'complaint', label: '📋 Complaint' }
                    ].map(t => (
                      <button key={t.id} onClick={() => setFormType(t.id)}
                        style={{ padding: '0.5rem 1.1rem', borderRadius: '20px', border: '2px solid', borderColor: formType === t.id ? 'var(--primary)' : '#e0e0e0', background: formType === t.id ? 'var(--primary)' : 'transparent', color: formType === t.id ? 'white' : 'var(--text-light)', fontFamily: "'Nunito', sans-serif", fontWeight: 700, cursor: 'pointer', fontSize: '0.88rem', transition: 'var(--transition)' }}>
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group"><label>Your Name *</label><input name="name" type="text" placeholder="Full name" required /></div>
                      <div className="form-group"><label>Phone Number *</label><input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required /></div>
                    </div>
                    <div className="form-group"><label>Email Address *</label><input name="email" type="email" placeholder="your@email.com" required /></div>
                    
                    {formType === 'admission' && (
                      <div className="form-row">
                        <div className="form-group"><label>Child's Name</label><input name="child_name" type="text" placeholder="Child's full name" /></div>
                        <div className="form-group"><label>Child's Age</label><input name="child_age" type="number" placeholder="Age in years" min="1" max="10" /></div>
                      </div>
                    )}
                    
                    <div className="form-group"><label>Subject *</label><input name="subject" type="text" placeholder="What is this about?" required /></div>
                    <div className="form-group"><label>Your Message *</label><textarea name="message" placeholder="Write your message here..." rows="5" required></textarea></div>
                    <div className="form-group">
                      <label>How would you prefer we contact you back?</label>
                      <select name="preferred_contact"><option>📞 Phone Call</option><option>✉️ Email</option><option>💬 WhatsApp</option></select>
                    </div>

                    {error && (
                      <div style={{ color: 'var(--red)', background: 'rgba(255,107,107,0.1)', padding: '1rem', borderRadius: '10px', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>
                        ⚠️ {error}
                      </div>
                    )}

                    <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '1rem', opacity: loading ? 0.7 : 1 }}>
                      {loading ? '⏳ Sending...' : '📨 Send Message'}
                    </button>
                  </form>
                </>
              ) : (
                <div style={{ background: '#d4f8e8', border: '2px solid var(--green)', borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem' }}>🎉</div>
                  <h3 style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours. Have a wonderful day! ☀️</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📍 Find Us</span>
            <h2>Our Location</h2>
            <p>Conveniently located in BTM Layout, Bengaluru — easy access from all major areas</p>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #e8f4f8, #d0ebf0)', borderRadius: '25px', height: '380px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', position: 'relative', overflow: 'hidden', padding: 0 }}>
            <iframe src="https://maps.google.com/maps?q=WJ74+H6%20Bengaluru,%20Karnataka&key=AIzaSyCHH2ZePIi-EEX8XoasFEx3StJYDifHLf8&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text)' }}>Little Millennium Preschool</h3>
            <p style={{ color: 'var(--text-light)', textAlign: 'center', fontSize: '0.95rem' }}>222, 6th Cross Rd, Mico Layout, 2nd Stage Layout<br />BTM Layout, Bengaluru, Karnataka 560076</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { icon: '🚌', title: 'By Bus', desc: 'BMTC Routes 201, 202, 205 stop at Garden Nagar Bus Stand (2 min walk)' },
              { icon: '🚇', title: 'By Metro', desc: 'Nearest metro: Garden City Station (Green Line) — 10 min walk or auto ride' },
              { icon: '🚗', title: 'By Car', desc: 'Ample parking available on School Lane. GPS: 12.9716° N, 77.5946° E' },
              { icon: '🚌', title: 'School Bus', desc: 'We operate 3 GPS-tracked school buses covering major areas. Contact office for routes.' },
            ].map((d, i) => (
              <div key={i} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.5rem', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }}>{d.icon}</div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.3rem' }}>{d.title}</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="section-tag">❓ FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{ border: '2px solid #f0f0f0', borderRadius: 'var(--radius)', marginBottom: '0.8rem', overflow: 'hidden' }}>
                <div onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  style={{ padding: '1.2rem 1.5rem', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'var(--transition)', background: openFaq === i ? 'var(--bg)' : 'transparent', color: openFaq === i ? 'var(--primary)' : 'inherit' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                  onMouseLeave={e => { if (openFaq !== i) e.currentTarget.style.background = 'transparent' }}>
                  {f.q}
                  <span style={{ transition: 'var(--transition)', fontSize: '0.8rem', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: '1rem 1.5rem', color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: 1.7, borderTop: '1px solid #f0f0f0' }}>
                    {f.q === 'How do I apply for admission?' ? 
                      <>You can apply online through our <Link to="/admissions" style={{ color: 'var(--primary)', fontWeight: 700 }}>Admissions page</Link> or visit the school office directly. Our team will guide you through the process and schedule a school tour.</>
                    : f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
