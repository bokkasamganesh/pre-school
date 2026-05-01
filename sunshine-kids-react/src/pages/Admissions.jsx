import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Admissions() {
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.errors ? data.errors[0].message : 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Could not connect to the server. Please check your internet.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--purple) 100%)' }}>
          <h1>🎒 Admissions</h1>
          <p>Begin your child's journey with us — simple, transparent, and welcoming</p>
        </div>
        <div className="breadcrumb"><div className="breadcrumb-inner"><Link to="/">Home</Link> › Admissions</div></div>
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
             <div style={{ background: '#d4f8e8', border: '2px solid var(--green)', borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'center', marginTop: '1rem' }}>
              <div style={{ fontSize: '3rem' }}>🎉</div>
              <h3 style={{ color: 'var(--green)' }}>Application Submitted Successfully!</h3>
              <p>Thank you! We'll contact you within 24 hours to schedule your school visit. Welcome to the Little Millennium family!</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, var(--secondary) 0%, var(--purple) 100%)' }}>
        <h1>🎒 Admissions</h1>
        <p>Begin your child's journey with us — simple, transparent, and welcoming</p>
      </div>
      <div className="breadcrumb"><div className="breadcrumb-inner"><Link to="/">Home</Link> › Admissions</div></div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">✅ Age Eligibility</span>
            <h2>Find the Right Program for Your Child</h2>
            <p>We admit children based on age as of June 1st of the academic year</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
            {[
              { icon: '👶', title: 'Playgroup', age: '2 – 3 years', bg: 'linear-gradient(135deg, #FF6B6B, #FF9F43)' },
              { icon: '🧒', title: 'Nursery', age: '3 – 4 years', bg: 'linear-gradient(135deg, #4ECDC4, #26de81)' },
              { icon: '📖', title: 'Junior KG', age: '4 – 5 years', bg: 'linear-gradient(135deg, #A855F7, #6c3483)' },
              { icon: '🎒', title: 'Senior KG', age: '5 – 6 years', bg: 'linear-gradient(135deg, #FF9F43, #FFE66D)' },
            ].map((p, i) => (
              <div key={i} style={{ background: p.bg, borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', color: 'white', transition: 'var(--transition)' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = ''}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{p.icon}</div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Age: {p.age}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📋 How to Apply</span>
            <h2>Simple 4-Step Admission Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: 1, title: 'Fill the Form', desc: 'Complete the online or offline admission inquiry form with your child\'s details.' },
              { num: 2, title: 'School Visit', desc: 'Schedule a school tour. Meet the teachers and see our campus and facilities.' },
              { num: 3, title: 'Submit Documents', desc: 'Submit required documents and registration fee at the school office.' },
              { num: 4, title: 'Confirmation', desc: 'Receive your admission confirmation letter and welcome kit within 3 working days.' },
            ].map(s => (
              <div key={s.num} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '2rem', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--orange))', color: 'white', fontSize: '1.3rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontFamily: "'Fredoka One', cursive" }}>{s.num}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">💰 Fee Structure</span>
            <h2>Transparent and Affordable Fees</h2>
            <p>Academic Year 2025–26 | All amounts in INR</p>
          </div>
          <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--white)' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, var(--primary), var(--orange))', color: 'white' }}>
                  <th style={{ padding: '1rem 1.5rem' }}>Program</th>
                  <th style={{ padding: '1rem 1.5rem' }}>Age Group</th>
                  <th style={{ padding: '1rem 1.5rem' }}>Registration</th>
                  <th style={{ padding: '1rem 1.5rem' }}>Monthly Fee</th>
                  <th style={{ padding: '1rem 1.5rem' }}>Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>👶 Playgroup</td><td style={{ padding: '1rem 1.5rem' }}>2–3 years</td><td style={{ padding: '1rem 1.5rem' }}>₹2,000</td><td style={{ padding: '1rem 1.5rem' }}>₹3,500</td><td style={{ padding: '1rem 1.5rem' }}>₹42,000</td>
                </tr>
                <tr style={{ background: 'var(--bg)', borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>🧒 Nursery</td><td style={{ padding: '1rem 1.5rem' }}>3–4 years</td><td style={{ padding: '1rem 1.5rem' }}>₹2,000</td><td style={{ padding: '1rem 1.5rem' }}>₹4,000</td><td style={{ padding: '1rem 1.5rem' }}>₹48,000</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>📖 Junior KG</td><td style={{ padding: '1rem 1.5rem' }}>4–5 years</td><td style={{ padding: '1rem 1.5rem' }}>₹2,500</td><td style={{ padding: '1rem 1.5rem' }}>₹4,500</td><td style={{ padding: '1rem 1.5rem' }}>₹54,000</td>
                </tr>
                <tr style={{ background: 'var(--bg)', borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>🎒 Senior KG</td><td style={{ padding: '1rem 1.5rem' }}>5–6 years</td><td style={{ padding: '1rem 1.5rem' }}>₹2,500</td><td style={{ padding: '1rem 1.5rem' }}>₹5,000</td><td style={{ padding: '1rem 1.5rem' }}>₹60,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', marginTop: '1rem', fontSize: '0.9rem' }}>* Annual fee includes tuition, books, activity materials & transport (optional). Sibling discounts available.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">📄 Documents Required</span>
            <h2>What to Bring Along</h2>
          </div>
          <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.8rem' }}>
            {[
              '📸 Child\'s recent passport-size photo (2 copies)',
              '🎂 Child\'s birth certificate (original + photocopy)',
              '🏠 Proof of residence (electricity bill/Aadhaar)',
              '💉 Immunization / vaccination record',
              '👨‍👩‍👧 Parent/Guardian Aadhaar card copies',
              '📝 Completed admission application form',
              '🏥 Child\'s medical fitness certificate',
              '💳 Registration fee (cash or online payment)'
            ].map((doc, i) => (
              <li key={i} style={{ background: 'var(--white)', borderRadius: '12px', padding: '0.8rem 1.2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem', fontWeight: 600 }}>{doc}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: 'var(--white)', borderRadius: '30px', padding: '3rem', boxShadow: 'var(--shadow)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-tag">📝 Apply Now</span>
              <h2 style={{ marginBottom: '0.5rem' }}>Online Admission Form</h2>
              <p style={{ color: 'var(--text-light)' }}>Fill in the details below and we'll contact you within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>👶 Child's Information</h3>
              <div className="form-row">
                <div className="form-group"><label>Child's First Name *</label><input name="child_first_name" type="text" placeholder="Enter first name" required /></div>
                <div className="form-group"><label>Child's Last Name *</label><input name="child_last_name" type="text" placeholder="Enter last name" required /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Date of Birth *</label><input name="dob" type="date" required /></div>
                <div className="form-group"><label>Gender *</label><select name="gender" required><option value="">Select gender</option><option>Boy</option><option>Girl</option><option>Prefer not to say</option></select></div>
              </div>
              <div className="form-group"><label>Program Applying For *</label>
                <select name="program" required><option value="">Select program</option><option>Playgroup (2–3 years)</option><option>Nursery (3–4 years)</option><option>Junior KG (4–5 years)</option><option>Senior KG (5–6 years)</option></select>
              </div>

              <h3 style={{ margin: '2rem 0 1rem', color: 'var(--primary)' }}>👨‍👩‍👧 Parent/Guardian Information</h3>
              <div className="form-row">
                <div className="form-group"><label>Parent/Guardian Name *</label><input name="parent_name" type="text" placeholder="Full name" required /></div>
                <div className="form-group"><label>Relationship to Child *</label><select name="relationship" required><option value="">Select</option><option>Mother</option><option>Father</option><option>Guardian</option></select></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Mobile Number *</label><input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required /></div>
                <div className="form-group"><label>Email Address *</label><input name="email" type="email" placeholder="parent@email.com" required /></div>
              </div>
              <div className="form-group"><label>Home Address</label><textarea name="address" placeholder="Full residential address" rows="3"></textarea></div>
              <div className="form-group"><label>How did you hear about us?</label>
                <select name="referral"><option value="">Select</option><option>Word of mouth / Friend</option><option>Google Search</option><option>Social Media</option><option>Newspaper / Magazine</option><option>School pamphlet</option><option>Other</option></select>
              </div>
              <div className="form-group"><label>Special Requirements or Medical Conditions</label><textarea name="medical" placeholder="Any allergies, medical conditions, or special needs we should know about..." rows="3"></textarea></div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <input type="checkbox" id="terms" required style={{ width: 'auto', marginTop: '4px' }} />
                <label htmlFor="terms" style={{ fontWeight: 600 }}>I agree to the school's terms & conditions and confirm the information provided is accurate.</label>
              </div>

              {error && (
                <div style={{ color: 'var(--red)', background: 'rgba(255,107,107,0.1)', padding: '1rem', borderRadius: '10px', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>
                  ⚠️ {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem', opacity: loading ? 0.7 : 1 }}>
                {loading ? '⏳ Submitting...' : '🎒 Submit Admission Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
