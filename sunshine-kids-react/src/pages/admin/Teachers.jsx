import { useState, useEffect } from 'react';
import { db } from '../../utils/db';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [formData, setFormData] = useState({ name: '', subject: '', experience: '', contact: '', email: '' });

  useEffect(() => {
    setTeachers(db.get('teachers'));
  }, []);

  const handleOpenModal = (teacher = null) => {
    if (teacher) {
      setEditingTeacher(teacher);
      setFormData({
        name: teacher.name || '',
        subject: teacher.subject || '',
        experience: teacher.experience || '',
        contact: teacher.contact || '',
        email: teacher.email || ''
      });
    } else {
      setEditingTeacher(null);
      setFormData({ name: '', subject: '', experience: '', contact: '', email: '' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTeacher(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTeacher) {
      db.update('teachers', editingTeacher.id, formData);
    } else {
      db.add('teachers', { ...formData, id: `TR${Date.now().toString().slice(-4)}` });
    }
    setTeachers(db.get('teachers'));
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      db.delete('teachers', id);
      setTeachers(db.get('teachers'));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Teacher Management</h3>
          <button className="btn-primary" onClick={() => handleOpenModal()} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
            + Add Teacher
          </button>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Experience</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td style={{ fontWeight: 600 }}>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.experience}</td>
                  <td>{teacher.contact}</td>
                  <td>{teacher.email}</td>
                  <td className="actions-cell">
                    <button className="btn-icon btn-edit" onClick={() => handleOpenModal(teacher)}>✏️</button>
                    <button className="btn-icon btn-delete" onClick={() => handleDelete(teacher.id)}>🗑️</button>
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
              <h3 className="card-title">{editingTeacher ? 'Edit Teacher' : 'Add New Teacher'}</h3>
              <button onClick={handleCloseModal} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>
            <div className="admin-modal-content">
              <form onSubmit={handleSubmit}>
                <div className="admin-form">
                  <div className="form-group full-width">
                    <label>Full Name</label>
                    <input 
                      className="admin-input" 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input 
                      className="admin-input" 
                      value={formData.subject} 
                      onChange={(e) => setFormData({...formData, subject: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Experience</label>
                    <input 
                      className="admin-input" 
                      value={formData.experience} 
                      onChange={(e) => setFormData({...formData, experience: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input 
                      className="admin-input" 
                      value={formData.contact} 
                      onChange={(e) => setFormData({...formData, contact: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      className="admin-input" 
                      type="email"
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      required 
                    />
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingBottom: '1rem' }}>
                  <button type="button" onClick={handleCloseModal} className="btn-outline" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid var(--admin-border)', background: 'none', cursor: 'pointer' }}>Cancel</button>
                  <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                    {editingTeacher ? 'Update Teacher' : 'Add Teacher'}
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

export default Teachers;
