import { useState, useEffect } from 'react';
import { db } from '../../utils/db';

const Media = () => {
  const [media, setMedia] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ type: 'image', url: '', title: '' });

  useEffect(() => {
    setMedia(db.get('media'));
  }, []);

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

  const handleAddMedia = (e) => {
    e.preventDefault();
    db.add('media', formData);
    setMedia(db.get('media'));
    setIsModalOpen(false);
    setFormData({ type: 'image', url: '', title: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this media?')) {
      db.delete('media', id);
      setMedia(db.get('media'));
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-card">
        <div className="card-header">
          <h3 className="card-title">Media Management</h3>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)} style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
            + Add Media
          </button>
        </div>
        
        <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {media.map((item) => (
            <div key={item.id} className="media-card" style={{ border: '1px solid var(--admin-border)', borderRadius: '12px', overflow: 'hidden', position: 'relative', background: 'white', boxShadow: 'var(--shadow)' }}>
              {item.type === 'image' ? (
                <img src={item.url} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: '150px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  📺 Video
                </div>
              )}
              <div style={{ padding: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</span>
                <button className="btn-icon btn-delete" onClick={() => handleDelete(item.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-box" style={{ maxWidth: '450px' }}>
            <div className="card-header">
              <h3 className="card-title">Add New Media</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>
            <div className="admin-modal-content">
              <form onSubmit={handleAddMedia}>
                <div className="admin-form" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="form-group">
                    <label>Media Type</label>
                    <select 
                      className="admin-input" 
                      value={formData.type} 
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option value="image">Image</option>
                      <option value="video">Video (YouTube URL)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Media Title</label>
                    <input 
                      className="admin-input" 
                      placeholder="e.g. Annual Day 2024"
                      value={formData.title} 
                      onChange={(e) => setFormData({...formData, title: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>{formData.type === 'image' ? 'Upload Image' : 'YouTube Embed URL'}</label>
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
                          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                            <img src={formData.url} alt="Preview" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'white', borderRadius: '50%', padding: '2px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer', fontSize: '0.7rem' }} onClick={() => setFormData({...formData, url: ''})}>❌</div>
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
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingBottom: '1rem' }}>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn-outline" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: '1px solid var(--admin-border)', background: 'none', cursor: 'pointer' }}>Cancel</button>
                  <button type="submit" className="btn-primary" style={{ padding: '0.6rem 1.2rem', borderRadius: '8px', border: 'none', backgroundColor: 'var(--admin-primary)', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                    Add Media
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

export default Media;
