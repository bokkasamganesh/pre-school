import { useState, useEffect } from 'react';
import { db } from '../../utils/db';

const LeaveRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(db.get('leave_requests'));
  }, []);

  const handleStatusUpdate = (id, newStatus) => {
    db.update('leave_requests', id, { status: newStatus });
    setRequests(db.get('leave_requests'));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return '#27ae60';
      case 'Rejected': return '#e74c3c';
      default: return '#f39c12';
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Teacher Leave Requests</h3>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date Applied</th>
                <th>Teacher Name</th>
                <th>Contact</th>
                <th>Timing (Period)</th>
                <th>Problem (Reason)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((req) => (
                  <tr key={req.id}>
                    <td>{new Date(req.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div style={{ fontWeight: 600 }}>{req.teacherName}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{req.teacherEmail}</div>
                    </td>
                    <td style={{ fontSize: '0.85rem' }}>{req.mobile}</td>
                    <td style={{ fontSize: '0.85rem' }}>{req.startDate} to {req.endDate}</td>
                    <td style={{ maxWidth: '200px', fontSize: '0.85rem' }}>{req.reason}</td>
                    <td>
                      <span style={{ 
                        padding: '0.3rem 0.8rem', 
                        borderRadius: '20px', 
                        fontSize: '0.8rem', 
                        fontWeight: 700, 
                        background: `${getStatusColor(req.status)}22`, 
                        color: getStatusColor(req.status) 
                      }}>
                        {req.status}
                      </span>
                    </td>
                    <td className="actions-cell">
                      {req.status === 'Pending' && (
                        <>
                          <button 
                            onClick={() => handleStatusUpdate(req.id, 'Approved')}
                            className="btn-icon" 
                            title="Approve"
                            style={{ background: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', padding: '0.3rem 0.6rem', marginRight: '0.5rem', cursor: 'pointer' }}
                          >
                            ✅ Approve
                          </button>
                          <button 
                            onClick={() => handleStatusUpdate(req.id, 'Rejected')}
                            className="btn-icon" 
                            title="Reject"
                            style={{ background: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px', padding: '0.3rem 0.6rem', cursor: 'pointer' }}
                          >
                            ❌ Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-light)' }}>
                    No leave requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequests;
