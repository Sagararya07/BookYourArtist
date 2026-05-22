import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../config/api';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = ['DJ', 'Singer', 'Dancer', 'Comedian', 'Band', 'Anchor', 'Musician', 'Magician', 'Stand-up Comic'];
const emptyArtist = { name: '', category: 'DJ', location: '', bio: '', price: '', experience: '', languages: '', eventsHandled: 0, isExclusive: false, isFeatured: false, rating: 4.5 };

const AdminDashboard = () => {
  const [tab, setTab] = useState('artists');
  const [artists, setArtists] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editArtist, setEditArtist] = useState(null);
  const [form, setForm] = useState(emptyArtist);
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const { logout, username } = useAuth();
  const navigate = useNavigate();

  const showToast = msg => { setToast(msg); setTimeout(() => setToast(''), 3000); };

  const loadArtists = async () => {
    setLoading(true);
    try { const r = await API.get('/artists'); setArtists(r.data); } catch {}
    setLoading(false);
  };

  const loadBookings = async () => {
    setLoading(true);
    try { const r = await API.get('/bookings'); setBookings(r.data); } catch {}
    setLoading(false);
  };

  useEffect(() => { if (tab === 'artists') loadArtists(); else loadBookings(); }, [tab]);

  const openAdd = () => { setEditArtist(null); setForm(emptyArtist); setImageFile(null); setShowForm(true); };
  const openEdit = a => { setEditArtist(a); setForm({ ...a, languages: Array.isArray(a.languages) ? a.languages.join(', ') : a.languages || '', isExclusive: a.isExclusive, isFeatured: a.isFeatured }); setImageFile(null); setShowForm(true); };

  const saveArtist = async e => {
    e.preventDefault(); setSaving(true);
    try {
      const fd = new FormData();
      Object.keys(form).forEach(k => fd.append(k, form[k]));
      if (imageFile) fd.append('image', imageFile);
      if (editArtist) { await API.put(`/artists/${editArtist._id}`, fd); showToast('✅ Artist updated!'); }
      else { await API.post('/artists', fd); showToast('✅ Artist added!'); }
      setShowForm(false); loadArtists();
    } catch (err) { showToast('❌ Error: ' + (err.response?.data?.message || 'Failed')); }
    setSaving(false);
  };

  const deleteArtist = async id => {
    if (!window.confirm('Delete this artist?')) return;
    try { await API.delete(`/artists/${id}`); showToast('✅ Deleted!'); loadArtists(); } catch { showToast('❌ Delete failed'); }
  };

  const updateBookingStatus = async (id, status) => {
    try { await API.patch(`/bookings/${id}`, { status }); loadBookings(); showToast('✅ Status updated'); } catch {}
  };

  const deleteBooking = async id => {
    if (!window.confirm('Delete this booking?')) return;
    try { await API.delete(`/bookings/${id}`); loadBookings(); showToast('✅ Deleted'); } catch {}
  };

  const statusColor = { New: '#e8f5e9', Contacted: '#fff3e0', Confirmed: '#e3f2fd', Cancelled: '#fce4ec' };
  const statusText = { New: '#2e7d32', Contacted: '#e65100', Confirmed: '#1565c0', Cancelled: '#c62828' };
  const API_BASE = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--off-white)' }}>
      {/* TOP BAR */}
      <div style={{ background: 'var(--navy)', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 60 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)' }}>BookYourArtist — Admin</div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>👤 {username}</span>
          <button onClick={() => { logout(); navigate('/admin'); }} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)', padding: '6px 14px', borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: '0.82rem' }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20, marginBottom: 36 }}>
          {[
            { label: 'Total Artists', val: artists.length, icon: '🎤' },
            { label: 'Total Bookings', val: bookings.length, icon: '📋' },
            { label: 'New Leads', val: bookings.filter(b => b.status === 'New').length, icon: '🆕' },
            { label: 'Confirmed', val: bookings.filter(b => b.status === 'Confirmed').length, icon: '✅' },
          ].map(s => (
            <div key={s.label} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '20px 24px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--navy)' }}>{s.val}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 24, background: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden', width: 'fit-content' }}>
          {[['artists', '🎤 Artists'], ['bookings', '📋 Bookings']].map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '12px 28px', border: 'none', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600, background: tab === t ? 'var(--navy)' : 'transparent', color: tab === t ? 'var(--gold)' : 'var(--text-mid)', fontFamily: 'var(--font-body)', transition: '0.2s' }}>
              {label}
            </button>
          ))}
        </div>

        {/* ARTISTS TAB */}
        {tab === 'artists' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--navy)' }}>Manage Artists</h2>
              <button className="btn-primary" onClick={openAdd}>+ Add New Artist</button>
            </div>
            {loading ? <p style={{ textAlign: 'center', padding: 40, color: 'var(--text-light)' }}>Loading...</p> : (
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--off-white)', borderBottom: '2px solid var(--border)' }}>
                      {['Artist', 'Category', 'Location', 'Price', 'Flags', 'Actions'].map(h => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--navy)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {artists.length === 0 ? (
                      <tr><td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: 'var(--text-light)' }}>No artists yet. Click "Add New Artist" to get started.</td></tr>
                    ) : artists.map(a => (
                      <tr key={a._id} style={{ borderBottom: '1px solid var(--border)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--off-white)'}
                        onMouseLeave={e => e.currentTarget.style.background = ''}>
                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            {a.image ? <img src={`${API_BASE}${a.image}`} alt={a.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} /> : <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>🎤</div>}
                            <span style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.9rem' }}>{a.name}</span>
                          </div>
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: 'var(--text-mid)' }}>{a.category}</td>
                        <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: 'var(--text-mid)' }}>{a.location}</td>
                        <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: 'var(--text-mid)' }}>{a.price}</td>
                        <td style={{ padding: '12px 16px' }}>
                          {a.isExclusive && <span style={{ background: 'var(--gold)', color: 'var(--navy)', fontSize: '9px', padding: '2px 8px', borderRadius: 2, fontWeight: 700, marginRight: 4 }}>EXCL</span>}
                          {a.isFeatured && <span style={{ background: 'var(--navy)', color: 'var(--gold)', fontSize: '9px', padding: '2px 8px', borderRadius: 2, fontWeight: 700 }}>FEAT</span>}
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ display: 'flex', gap: 8 }}>
                            <button onClick={() => openEdit(a)} style={{ padding: '6px 14px', background: 'var(--navy)', color: 'white', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: '0.8rem' }}>Edit</button>
                            <button onClick={() => deleteArtist(a._id)} style={{ padding: '6px 14px', background: '#fee2e2', color: '#c62828', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: '0.8rem' }}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* BOOKINGS TAB */}
        {tab === 'bookings' && (
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 20 }}>Booking Leads</h2>
            {loading ? <p style={{ textAlign: 'center', padding: 40, color: 'var(--text-light)' }}>Loading...</p> : (
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'var(--off-white)', borderBottom: '2px solid var(--border)' }}>
                      {['Client', 'Event', 'Date', 'Budget', 'Artist', 'Status', 'Actions'].map(h => (
                        <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--navy)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.length === 0 ? (
                      <tr><td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: 'var(--text-light)' }}>No bookings yet.</td></tr>
                    ) : bookings.map(b => (
                      <tr key={b._id} style={{ borderBottom: '1px solid var(--border)' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--off-white)'}
                        onMouseLeave={e => e.currentTarget.style.background = ''}>
                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.88rem' }}>{b.name}</div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{b.phone}</div>
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: '0.85rem', color: 'var(--text-mid)' }}>{b.eventType}</td>
                        <td style={{ padding: '12px 16px', fontSize: '0.82rem', color: 'var(--text-light)' }}>{b.eventDate ? new Date(b.eventDate).toLocaleDateString('en-IN') : '—'}</td>
                        <td style={{ padding: '12px 16px', fontSize: '0.82rem', color: 'var(--text-mid)' }}>{b.budget || '—'}</td>
                        <td style={{ padding: '12px 16px', fontSize: '0.82rem', color: 'var(--text-mid)' }}>{b.artistName || '—'}</td>
                        <td style={{ padding: '12px 16px' }}>
                          <select value={b.status} onChange={e => updateBookingStatus(b._id, e.target.value)}
                            style={{ background: statusColor[b.status] || '#fff', color: statusText[b.status] || '#333', border: 'none', borderRadius: 'var(--radius)', padding: '4px 10px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
                            {['New', 'Contacted', 'Confirmed', 'Cancelled'].map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <button onClick={() => deleteBooking(b._id)} style={{ padding: '5px 12px', background: '#fee2e2', color: '#c62828', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: '0.78rem' }}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ADD/EDIT FORM MODAL */}
      {showForm && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setShowForm(false)}>
          <div className="modal-box" style={{ maxWidth: 600 }}>
            <div className="modal-header">
              <div><h3>{editArtist ? 'Edit Artist' : 'Add New Artist'}</h3></div>
              <button className="modal-close" onClick={() => setShowForm(false)}>✕</button>
            </div>
            <div className="modal-body">
              <form onSubmit={saveArtist}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name *</label>
                    <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required placeholder="Artist Name" />
                  </div>
                  <div className="form-group">
                    <label>Category *</label>
                    <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Location / City *</label>
                    <input value={form.location} onChange={e => setForm({...form, location: e.target.value})} required placeholder="e.g. Mumbai" />
                  </div>
                  <div className="form-group">
                    <label>Price / Starting From *</label>
                    <input value={form.price} onChange={e => setForm({...form, price: e.target.value})} required placeholder="e.g. ₹15,000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Bio / Description *</label>
                  <textarea value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} required placeholder="Short artist bio..." />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Experience</label>
                    <input value={form.experience} onChange={e => setForm({...form, experience: e.target.value})} placeholder="e.g. 5 years" />
                  </div>
                  <div className="form-group">
                    <label>Events Handled</label>
                    <input type="number" value={form.eventsHandled} onChange={e => setForm({...form, eventsHandled: e.target.value})} placeholder="0" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Languages (comma separated)</label>
                    <input value={form.languages} onChange={e => setForm({...form, languages: e.target.value})} placeholder="Hindi, English, Marathi" />
                  </div>
                  <div className="form-group">
                    <label>Rating (0–5)</label>
                    <input type="number" step="0.1" min="0" max="5" value={form.rating} onChange={e => setForm({...form, rating: e.target.value})} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Artist Photo</label>
                  <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} style={{ padding: '8px 0', border: 'none' }} />
                  {editArtist?.image && !imageFile && <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: 4 }}>Current image will be kept if no new file is selected.</p>}
                </div>
                <div style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: '0.88rem', fontWeight: 500 }}>
                    <input type="checkbox" checked={form.isFeatured} onChange={e => setForm({...form, isFeatured: e.target.checked})} />
                    Featured on Home Page
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: '0.88rem', fontWeight: 500 }}>
                    <input type="checkbox" checked={form.isExclusive} onChange={e => setForm({...form, isExclusive: e.target.checked})} />
                    ⭐ Exclusive Artist
                  </label>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button type="submit" className="btn-primary" disabled={saving} style={{ flex: 1, justifyContent: 'center', padding: '13px' }}>
                    {saving ? 'Saving...' : (editArtist ? '✅ Update Artist' : '✅ Add Artist')}
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="btn-outline-navy" style={{ padding: '13px 24px', border: '1.5px solid var(--border)', borderRadius: 'var(--radius)', background: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
};

export default AdminDashboard;
