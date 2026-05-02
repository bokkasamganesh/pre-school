import { useState, useEffect } from 'react';
import { db } from '../../utils/db';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({ 
    title: '', 
    date: '', 
    category: 'General', 
    type: 'image', 
    url: '', 
    description: '' 
  });

  useEffect(() => {
    setEvents(db.get('events'));
  }, []);

  const handleOpenModal = (event = null) => {
    if (event) {
      setEditingEvent(event);
      setFormData({
        title: event.title || '',
        date: event.date || '',
        category: event.category || 'General',
        type: event.type || 'image',
        url: event.url || '',
        description: event.description || ''
      });
    } else {
      setEditingEvent(null);
      setFormData({ 
        title: '', 
        date: '', 
        category: 'General', 
        type: 'image', 
        url: '', 
        description: '' 
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEvent(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, url: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      db.update('events', editingEvent.id, formData);
    } else {
      db.add('events', { ...formData, id: `EV${Date.now().toString().slice(-4)}` });
    }
    setEvents(db.get('events'));
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      db.delete('events', id);
      setEvents(db.get('events'));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Event Management</h3>
          <button className="btn-primary" onClick={() => handleOpenModal()} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
            + Add Event
          </button>
        </div>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Category</th>
                <th>Type</th>
                <th>Preview</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.date}</td>
                  <td style={{ fontWeight: 600 }}>{event.title}</td>
                  <td>
                    <span style={{ 
                      padding: '0.2rem 0.6rem', 
                      borderRadius: '12px', 
                      fontSize: '0.75rem', 
                      backgroundColor: '#e0f2fe', 
                      color: '#0369a1',
                      fontWeight: 700
                    }}>
                      {event.category}
                    </span>
                  </td>
                  <td>{event.type.toUpperCase()}</td>
                  <td>
                    {event.type === 'image' ? (
                      <img src={event.url} alt="event" style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ fontSize: '1.2rem' }}>📺</div>
                    )}
                  </td>
                  <td className="actions-cell">
                    <button className="btn-icon btn-edit" onClick={() => handleOpenModal(event)}>✏️</button>
                    <button className="btn-icon btn-delete" onClick={() => handleDelete(event.id)}>🗑️</button>
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
              <h3 className="card-title">{editingEvent ? 'Edit Event' : 'Add New Event'}</h3>
              <button onClick={handleCloseModal} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>
            <div className="admin-modal-content">
              <form onSubmit={handleSubmit}>
                <div className="admin-form">
                  <div className="form-group full-width">
                    <label>Event Title</label>
                    <input 
                      className="admin-input" 
                      value={formData.title} 
                      onChange={(e) => setFormData({...formData, title: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Date</label>
                    <input 
                      className="admin-input" 
                      type="date"
                      value={formData.date} 
                      onChange={(e) => setFormData({...formData, date: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select 
                      className="admin-input" 
                      value={formData.category} 
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="General">General</option>
                      <option value="Sports">Sports</option>
                      <option value="Academic">Academic</option>
                      <option value="Cultural">Cultural</option>
                      <option value="Holiday">Holiday</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Media Type</label>
                    <select 
                      className="admin-input" 
                      value={formData.type} 
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option value="image">Image</option>
                      <option value="video">Video (YouTube/URL)</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label>{formData.type === 'image' ? 'Upload Event Image' : 'Media URL (YouTube Embed)'}</label>
                    {formData.type === 'image' ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleFileChange}
                          style={{ 
                            padding: '1rem', 
                            border: '2px dashed var(--admin-border)', 
                            borderRadius: '8px',
                            cursor: 'pointer',
                            width: '100%'
                          }} 
                        />
                        {formData.url && (
                          <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                            <img src={formData.url} alt="Preview" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'white', borderRadius: '50%', padding: '2px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer' }} onClick={() => setFormData({...formData, url: ''})}>❌</div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <input 
                        className="admin-input" 
                        placeholder="https://youtube.com/embed/..."
                        value={formData.url} 
                        onChange={(e) => setFormData({...formData, url: e.target.value})} 
                        required 
                      />
                    )}
                  </div>
                  <div className="form-group full-width">
                    <label>Description</label>
                    <textarea 
                      className="admin-input" 
                      rows="3"
                      value={formData.description} 
                      onChange={(e) => setFormData({...formData, description: e.target.value})} 
                      required 
                    />
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingBottom: '1rem' }}>
                  <button type="button" onClick={handleCloseModal} className="btn-outline" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid var(--admin-border)', background: 'none', cursor: 'pointer' }}>Cancel</button>
                  <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                    {editingEvent ? 'Update Event' : 'Add Event'}
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

export default Events;
