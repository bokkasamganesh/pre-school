import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    students: 124,
    teachers: 12,
    staff: 8,
    queries: 5,
  });

  const recentActivities = [
    { id: 1, type: 'student', action: 'New student enrolled', detail: 'Aarav Sharma', time: '2 hours ago' },
    { id: 2, type: 'query', action: 'New admission inquiry', detail: 'Priya Patel', time: '4 hours ago' },
    { id: 3, type: 'teacher', action: 'Profile updated', detail: 'Ms. Sunita', time: 'Yesterday' },
    { id: 4, type: 'media', action: 'New gallery photos', detail: 'Annual Day 2024', time: '2 days ago' },
  ];

  return (
    <div className="dashboard-view">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>👨‍🎓</div>
          <div className="stat-info">
            <h3>Total Students</h3>
            <div className="stat-value">{stats.students}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>👩‍🏫</div>
          <div className="stat-info">
            <h3>Active Teachers</h3>
            <div className="stat-value">{stats.teachers}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>👥</div>
          <div className="stat-info">
            <h3>Support Staff</h3>
            <div className="stat-value">{stats.staff}</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>📧</div>
          <div className="stat-info">
            <h3>New Queries</h3>
            <div className="stat-value">{stats.queries}</div>
          </div>
        </div>
      </div>

      <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <div className="admin-card">
          <div className="card-header">
            <h3 className="card-title">Recent Activity</h3>
            <button className="btn-text" style={{ color: 'var(--admin-primary)', fontWeight: 600, border: 'none', background: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Details</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map(activity => (
                  <tr key={activity.id}>
                    <td>
                      <span style={{ fontWeight: 600 }}>{activity.action}</span>
                    </td>
                    <td>{activity.detail}</td>
                    <td>{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-card">
          <div className="card-header">
            <h3 className="card-title">Quick Actions</h3>
          </div>
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn-primary" style={{ padding: '0.75rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
              + Add New Student
            </button>
            <button className="btn-outline" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--admin-border)', backgroundColor: 'transparent', fontWeight: 600, cursor: 'pointer' }}>
              📤 Export Reports
            </button>
            <button className="btn-outline" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--admin-border)', backgroundColor: 'transparent', fontWeight: 600, cursor: 'pointer' }}>
              🖼️ Upload Media
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
