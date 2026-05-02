import { useState, useEffect } from 'react';
import { db } from '../../utils/db';

const Parents = () => {
  const [parents, setParents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingParent, setEditingParent] = useState(null);
  const [formData, setFormData] = useState({ name: '', student: '', email: '', contact: '' });

  useEffect(() => {
    setParents(db.get('parents'));
  }, []);

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingParent(item);
      setFormData(item);
    } else {
      setEditingParent(null);
      setFormData({ name: '', student: '', email: '', contact: '' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingParent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingParent) {
      db.update('parents', editingParent.id, formData);
    } else {
      db.add('parents', { ...formData, id: `PR${Date.now().toString().slice(-4)}` });
    }
    setParents(db.get('parents'));
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this parent record?')) {
      db.delete('parents', id);
      setParents(db.get('parents'));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Parent Management</h3>
          <button className="btn-primary" onClick={() => handleOpenModal()} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
            + Add Parent
          </button>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Child Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {parents.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td style={{ fontWeight: 600 }}>{item.name}</td>
                  <td>{item.student}</td>
                  <td>{item.email}</td>
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
        <div className="admin-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div className="admin-card" style={{ width: '100%', maxWidth: '450px', margin: 'auto' }}>
            <div className="card-header">
              <h3 className="card-title">{editingParent ? 'Edit Parent' : 'Add New Parent'}</h3>
              <button onClick={handleCloseModal} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>
            <form onSubmit={handleSubmit} style={{ padding: '1.5rem' }}>
              <div className="admin-form" style={{ gridTemplateColumns: '1fr' }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input className="admin-input" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Child's Name</label>
                  <input className="admin-input" value={formData.student} onChange={(e) => setFormData({...formData, student: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input className="admin-input" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input className="admin-input" value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} required />
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button type="button" onClick={handleCloseModal} className="btn-outline" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid var(--admin-border)', background: 'none', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                  {editingParent ? 'Update Parent' : 'Add Parent'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Parents;
