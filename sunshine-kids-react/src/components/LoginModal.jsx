import { useState } from 'react';

export default function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('parent');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // The provided API key acting as our secure authorization key
  const SECURE_API_KEY = "AIzaSyCHH2ZePIi-EEX8XoasFEx3StJYDifHLf8";

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (activeTab === 'admin') {
        if (email === 'bokkasamganesh009@gmail.com' && password === 'G@ni009951555') {
          setSuccess(`Successfully authenticated as Admin!`);
          localStorage.setItem('auth_token', 'admin_secure_token');
          localStorage.setItem('user_role', 'admin');
          setTimeout(() => {
            setSuccess('');
            onClose();
          }, 2000);
        } else {
          setError('Invalid Admin Credentials. Access Denied.');
        }
      } else if (activeTab === 'teacher') {
        if (password === SECURE_API_KEY) {
          setSuccess(`Successfully authenticated as Teacher!`);
          localStorage.setItem('auth_token', SECURE_API_KEY);
          localStorage.setItem('user_role', 'teacher');
          setTimeout(() => {
            setSuccess('');
            onClose();
          }, 2000);
        } else {
          setError('Invalid API Key / Password. Access Denied.');
        }
      } else {
        // Parent mock login
        if (email && password) {
          setSuccess('Parent login successful!');
          localStorage.setItem('user_role', 'parent');
          setTimeout(() => {
            setSuccess('');
            onClose();
          }, 2000);
        } else {
          setError('Please enter both email and password.');
        }
      }
      setLoading(false);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className={`modal${isOpen ? ' open' : ''}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '3rem' }}>🔐</div>
          <h2 style={{ fontSize: '1.8rem' }}>Secure Portal Login</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Select your role to authenticate</p>
        </div>
        <div className="tabs">
          {['parent', 'teacher', 'admin'].map(role => (
            <button
              key={role}
              className={`tab-btn${activeTab === role ? ' active' : ''}`}
              onClick={() => {
                setActiveTab(role);
                setError('');
                setSuccess('');
              }}
            >
              {role === 'parent' ? '👨‍👩‍👧 Parent' : role === 'teacher' ? '👩‍🏫 Teacher' : '🛡️ Admin'}
            </button>
          ))}
        </div>

        {success ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--green)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{ marginBottom: '0.5rem' }}>{success}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Redirecting to secure dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>{activeTab === 'parent' ? 'Email Address' : activeTab === 'teacher' ? 'Staff Email' : 'Admin ID'}</label>
              <input 
                type={activeTab === 'parent' ? "email" : "text"} 
                placeholder={activeTab === 'parent' ? "parent@email.com" : `${activeTab}@gmail.com`} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>{activeTab === 'parent' ? 'Password' : 'API Key / Password'}</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div style={{ color: 'var(--red)', background: 'rgba(255,107,107,0.1)', padding: '0.8rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>⚠️ {error}</div>}

            <button type="submit" className={`btn ${activeTab === 'teacher' ? 'btn-teal' : activeTab === 'parent' ? 'btn-primary' : ''}`} disabled={loading} style={{ width: '100%', justifyContent: 'center', background: activeTab === 'admin' ? 'linear-gradient(135deg,var(--purple),#6c3483)' : undefined, color: 'white' }}>
              {loading ? 'Authenticating...' : `Login as ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
            </button>
          </form>
        )}
        
        {!success && (
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            Forgot password? <a href="#" style={{ color: 'var(--primary)', fontWeight: 700 }}>Reset here</a>
          </p>
        )}
      </div>
    </div>
  );
}
