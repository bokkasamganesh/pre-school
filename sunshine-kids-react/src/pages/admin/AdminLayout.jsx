import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import './Admin.css';

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const userRole = localStorage.getItem('user_role');

  useEffect(() => {
    if (userRole !== 'admin') {
      navigate('/');
    }
  }, [userRole, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_role');
    navigate('/');
  };

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/students', label: 'Students', icon: '👨‍🎓' },
    { path: '/admin/teachers', label: 'Teachers', icon: '👩‍🏫' },
    { path: '/admin/staff', label: 'Staff', icon: '👥' },
    { path: '/admin/parents', label: 'Parents', icon: '👨‍👩‍👧' },
    { path: '/admin/attendance', label: 'Attendance', icon: '📅' },
    { path: '/admin/fees', label: 'Fees & Payments', icon: '💰' },
    { path: '/admin/exams', label: 'Exams & Results', icon: '📝' },
    { path: '/admin/events', label: 'Events', icon: '🎈' },
    { path: '/admin/transport', label: 'Transport', icon: '🚌' },
    { path: '/admin/media', label: 'Media', icon: '🖼️' },
    { path: '/admin/queries', label: 'Queries', icon: '📧' },
  ];

  return (
    <div className="admin-container">
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="admin-logo">
            <span className="logo-icon">🌟</span>
            <span className="logo-text">Admin Panel</span>
          </div>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">
            <span className="nav-icon">🚪</span>
            <span className="nav-label">Logout</span>
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-left">
            <h2>{navItems.find(item => item.path === location.pathname)?.label || 'Admin'}</h2>
          </div>
          <div className="topbar-right">
            <div className="admin-profile">
              <img src="https://ui-avatars.com/api/?name=Admin&background=random" alt="Admin" />
              <div className="profile-info">
                <span className="profile-name">Ganesh Bokkasam</span>
                <span className="profile-role">Super Admin</span>
              </div>
            </div>
          </div>
        </header>

        <section className="admin-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
