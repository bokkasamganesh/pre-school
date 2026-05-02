import { useState, useEffect } from 'react';
import { db } from '../../utils/db';

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);

  useEffect(() => {
    setQueries(db.get('queries'));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this query?')) {
      db.delete('queries', id);
      setQueries(db.get('queries'));
    }
  };

  const handleStatusChange = (id, status) => {
    db.update('queries', id, { status });
    setQueries(db.get('queries'));
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Contact Queries</h3>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query) => (
                <tr key={query.id}>
                  <td>{query.date}</td>
                  <td style={{ fontWeight: 600 }}>{query.name}</td>
                  <td>{query.subject}</td>
                  <td>
                    <select 
                      value={query.status} 
                      onChange={(e) => handleStatusChange(query.id, e.target.value)}
                      style={{ 
                        padding: '0.2rem 0.5rem', 
                        borderRadius: '4px', 
                        border: '1px solid var(--admin-border)',
                        fontSize: '0.8rem',
                        backgroundColor: query.status === 'Pending' ? '#fff7ed' : '#f0fdf4',
                        color: query.status === 'Pending' ? '#9a3412' : '#166534'
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="actions-cell">
                    <button className="btn-icon btn-edit" onClick={() => setSelectedQuery(query)} title="View Details">👁️</button>
                    <button className="btn-icon btn-delete" onClick={() => handleDelete(query.id)} title="Delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedQuery && (
        <div className="admin-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="admin-card" style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
            <div className="card-header">
              <h3 className="card-title">Query Details</h3>
              <button onClick={() => setSelectedQuery(null)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <strong>From:</strong> {selectedQuery.name} ({selectedQuery.email})
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Subject:</strong> {selectedQuery.subject}
              </div>
              <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid var(--admin-border)' }}>
                {selectedQuery.message}
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button onClick={() => setSelectedQuery(null)} className="btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Queries;
