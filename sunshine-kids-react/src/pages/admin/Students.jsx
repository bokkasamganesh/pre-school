import { useState, useEffect } from 'react';
import { db } from '../../utils/db';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({ name: '', class: '', parent: '', email: '', mobile: '', emergency: '', status: 'Active' });

  useEffect(() => {
    setStudents(db.get('students'));
  }, []);

  const handleOpenModal = (student = null) => {
    if (student) {
      setEditingStudent(student);
      setFormData({
        name: student.name || '',
        class: student.class || '',
        parent: student.parent || '',
        email: student.email || '',
        mobile: student.mobile || '',
        emergency: student.emergency || '',
        status: student.status || 'Active'
      });
    } else {
      setEditingStudent(null);
      setFormData({ name: '', class: '', parent: '', email: '', mobile: '', emergency: '', status: 'Active' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingStudent) {
      db.update('students', editingStudent.id, formData);
    } else {
      db.add('students', { ...formData, id: `ST${Date.now().toString().slice(-4)}` });
    }
    setStudents(db.get('students'));
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      db.delete('students', id);
      setStudents(db.get('students'));
    }
  };

  const exportToExcel = () => {
    const headers = ['ID', 'Name', 'Class', 'Parent', 'Email', 'Mobile', 'Emergency', 'Status'];
    const csvContent = [
      headers.join(','),
      ...students.map(s => [
        s.id,
        `"${s.name}"`,
        `"${s.class}"`,
        `"${s.parent}"`,
        s.email,
        s.mobile,
        s.emergency || 'N/A',
        s.status
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `students_data_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Student Management</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-outline" onClick={exportToExcel} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid var(--admin-border)', background: 'white', color: 'var(--admin-text)', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📥 Export Excel
            </button>
            <button className="btn-primary" onClick={() => handleOpenModal()} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
              + Add Student
            </button>
          </div>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Parent</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td style={{ fontWeight: 600 }}>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.parent}</td>
                  <td>{student.email}</td>
                  <td>{student.mobile}</td>
                  <td>
                    <span className={`status-badge ${student.status.toLowerCase()}`} style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '20px', 
                      fontSize: '0.75rem', 
                      fontWeight: 700,
                      backgroundColor: student.status === 'Active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                      color: student.status === 'Active' ? '#10b981' : '#64748b'
                    }}>
                      {student.status}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <button className="btn-icon btn-edit" onClick={() => handleOpenModal(student)}>✏️</button>
                    <button className="btn-icon btn-delete" onClick={() => handleDelete(student.id)}>🗑️</button>
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
              <h3 className="card-title">{editingStudent ? 'Edit Student' : 'Add New Student'}</h3>
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
                  <label>Class</label>
                  <select 
                    className="admin-input" 
                    value={formData.class} 
                    onChange={(e) => setFormData({...formData, class: e.target.value})} 
                    required 
                  >
                    <option value="">Select Class</option>
                    <option value="Playgroup">Playgroup</option>
                    <option value="Nursery">Nursery</option>
                    <option value="Junior KG">Junior KG</option>
                    <option value="Senior KG">Senior KG</option>
                    <option value="Summer Camp">Summer Camp</option>
                  </select>
                </div>
                  <div className="form-group">
                    <label>Status</label>
                    <select 
                      className="admin-input" 
                      value={formData.status} 
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Parent Name</label>
                    <input 
                      className="admin-input" 
                      value={formData.parent} 
                      onChange={(e) => setFormData({...formData, parent: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Parent Email</label>
                    <input 
                      className="admin-input" 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <input 
                      className="admin-input" 
                      type="tel" 
                      placeholder="91XXXXXXXX"
                      value={formData.mobile} 
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Emergency Contact (Optional)</label>
                    <input 
                      className="admin-input" 
                      type="tel" 
                      placeholder="Optional number"
                      value={formData.emergency} 
                      onChange={(e) => setFormData({...formData, emergency: e.target.value})} 
                    />
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingBottom: '1rem' }}>
                  <button type="button" onClick={handleCloseModal} className="btn-outline" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid var(--admin-border)', background: 'none', cursor: 'pointer' }}>Cancel</button>
                  <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                    {editingStudent ? 'Update Student' : 'Add Student'}
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

export default Students;
