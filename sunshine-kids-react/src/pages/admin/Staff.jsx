import { useState, useEffect } from 'react';
import { db } from '../../utils/db';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [formData, setFormData] = useState({ name: '', role: '', contact: '' });

  useEffect(() => {
    setStaff(db.get('staff'));
  }, []);

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingStaff(item);
      setFormData(item);
    } else {
      setEditingStaff(null);
      setFormData({ name: '', role: '', contact: '' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingStaff(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStaff) {
      db.update('staff', editingStaff.id, formData);
    } else {
      db.add('staff', { ...formData, id: `SF${Date.now().toString().slice(-4)}` });
    }
    setStaff(db.get('staff'));
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this staff member?')) {
      db.delete('staff', id);
      setStaff(db.get('staff'));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Staff Management</h3>
          <button className="btn-primary" onClick={() => handleOpenModal()} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
            + Add Staff
          </button>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td style={{ fontWeight: 600 }}>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.contact}</td>
                  <td className="actions-cell">
                    <button className="btn-icon btn-edit" onClick={() => handleOpenModal(item)}>✏️</button>
                    <button className="btn-icon btn-delete" onClick={() => handleDelete(item.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-box">
            <div className="card-header">
              <h3 className="card-title">{editingStaff ? 'Edit Staff' : 'Add New Staff'}</h3>
              <button onClick={handleCloseModal} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>
            <div className="admin-modal-content">
              <form onSubmit={handleSubmit}>
                <div className="admin-form" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input className="admin-input" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <input className="admin-input" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} required />
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input className="admin-input" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} required />
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingBottom: '1rem' }}>
                  <button type="button" onClick={handleCloseModal} className="btn-outline" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid var(--admin-border)', background: 'none', cursor: 'pointer' }}>Cancel</button>
                  <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                    {editingStaff ? 'Update Staff' : 'Add Staff'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Staff;
