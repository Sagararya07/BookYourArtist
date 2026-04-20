'use client';

import { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaPlus, FaSignOutAlt, FaStar, FaCrown } from 'react-icons/fa';

export default function AdminDashboard() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: '', category: '', location: '', price: '', imageUrl: '', rating: '', bio: '',
    isExclusive: false, isFeatured: false, isActive: true
  });

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/admin/artists', {
        headers: { 'x-admin-token': token }
      });
      if (res.ok) {
        setIsLoggedIn(true);
        const data = await res.json();
        setArtists(data.data);
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Network error');
    }
    setLoading(false);
  };

  const fetchArtists = async () => {
    const res = await fetch('/api/admin/artists', { headers: { 'x-admin-token': token } });
    if (res.ok) {
      const data = await res.json();
      setArtists(data.data);
    }
  };

  const handleLogout = () => {
    setToken('');
    setIsLoggedIn(false);
    setArtists([]);
  };

  // Form Handlers
  const handleFormChange = (e: any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const openNewForm = () => {
    setEditingId(null);
    setForm({ name: '', category: '', location: '', price: '', imageUrl: '', rating: '', bio: '', isExclusive: false, isFeatured: false, isActive: true });
    setFormOpen(true);
  };

  const openEditForm = (artist: any) => {
    setEditingId(artist.id);
    setForm({
      name: artist.name, category: artist.category, location: artist.location, price: artist.price,
      imageUrl: artist.imageUrl || '', rating: artist.rating || '', bio: artist.bio || '',
      isExclusive: artist.isExclusive, isFeatured: artist.isFeatured, isActive: artist.isActive
    });
    setFormOpen(true);
  };

  const saveArtist = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const url = editingId ? `/api/admin/artists/${editingId}` : '/api/admin/artists';
    const method = editingId ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setFormOpen(false);
        fetchArtists();
      } else {
        alert('Failed to save artist');
      }
    } catch (err) {
      alert('Error saving artist');
    }
    setLoading(false);
  };

  const deleteArtist = async (id: number) => {
    if (!confirm('Are you sure you want to delete this artist?')) return;
    try {
      const res = await fetch(`/api/admin/artists/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-token': token }
      });
      if (res.ok) fetchArtists();
      else alert('Failed to delete');
    } catch {
      alert('Error deleting');
    }
  };

  // --- LOGIN SCREEN ---
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] p-4">
        <div className="card-glass p-8 w-full max-w-md text-center">
          <h1 className="font-display text-3xl font-bold text-[#d4a843] mb-2">Admin Login</h1>
          <p className="text-gray-400 mb-8">Enter the master password to manage artists.</p>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter Password" 
              value={token} 
              onChange={(e) => setToken(e.target.value)} 
              required 
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? 'Authenticating...' : 'Login to Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD SCREEN ---
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-[#10101a] p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] shadow-lg">
        <div>
          <h1 className="font-display text-3xl font-bold text-white">Artist Management</h1>
          <p className="text-gray-400 text-sm mt-1">Total Artists: {artists.length}</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={openNewForm} className="btn btn-primary btn-sm"><FaPlus /> Add New Artist</button>
          <button onClick={handleLogout} className="btn btn-ghost btn-sm text-red-400 hover:text-red-500 hover:bg-red-500/10"><FaSignOutAlt /> Logout</button>
        </div>
      </div>

      {/* Artist Table */}
      <div className="bg-[#14141f] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.05)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-[#1a1a2e] text-xs uppercase text-gray-300">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status / Badges</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr key={artist.id} className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[#1a1a2e]/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{artist.name}</td>
                  <td className="px-6 py-4">{artist.category}</td>
                  <td className="px-6 py-4">{artist.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 flex-wrap">
                      {artist.isExclusive && <span className="badge badge-gold"><FaCrown /> Exclusive</span>}
                      {artist.isFeatured && <span className="badge badge-purple"><FaStar /> Featured</span>}
                      {artist.isActive ? (
                        <span className="badge badge-success">Active</span>
                      ) : (
                        <span className="badge bg-red-500/10 text-red-500 border-red-500/30">Inactive</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => openEditForm(artist)} className="text-blue-400 hover:text-blue-300 mr-4" aria-label="Edit">
                      <FaEdit size={18} />
                    </button>
                    <button onClick={() => deleteArtist(artist.id)} className="text-red-500 hover:text-red-400" aria-label="Delete">
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {artists.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500">No artists found. Add one to get started.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- ADD/EDIT MODAL --- */}
      {formOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title mb-6">{editingId ? 'Edit Artist' : 'Add New Artist'}</h2>
            
            <form onSubmit={saveArtist} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-0">
                  <label className="form-label">Name *</label>
                  <input name="name" className="form-control" value={form.name} onChange={handleFormChange} required />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Category *</label>
                  <select name="category" className="form-control" value={form.category} onChange={handleFormChange} required>
                    <option value="">Select Category</option>
                    <option value="DJ">DJ</option>
                    <option value="Singer">Singer</option>
                    <option value="Dancer">Dancer</option>
                    <option value="Comedian">Comedian</option>
                    <option value="Band">Band</option>
                    <option value="Anchor">Anchor</option>
                    <option value="Musician">Musician</option>
                    <option value="Magician">Magician</option>
                    <option value="Stand-up Comic">Stand-up Comic</option>
                  </select>
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Location</label>
                  <input name="location" className="form-control" value={form.location} onChange={handleFormChange} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Starting Price</label>
                  <input name="price" className="form-control" placeholder="e.g. ₹50,000 onwards" value={form.price} onChange={handleFormChange} />
                </div>
                <div className="form-group mb-0">
                  <label className="form-label">Rating</label>
                  <input name="rating" type="number" step="0.1" min="1" max="5" className="form-control" placeholder="e.g. 4.5" value={form.rating} onChange={handleFormChange} />
                </div>
                <div className="form-group mb-0 col-span-2">
                  <label className="form-label">Bio / Details</label>
                  <textarea name="bio" className="form-control" rows={3} placeholder="Artist details, experience, etc." value={form.bio} onChange={handleFormChange}></textarea>
                </div>
                <div className="form-group mb-0 col-span-2">
                  <label className="form-label">Photo Link (URL)</label>
                  <input name="imageUrl" className="form-control" placeholder="https://images.unsplash.com/..." value={form.imageUrl} onChange={handleFormChange} />
                  <p className="text-[10px] text-gray-500 mt-1">Provide a direct link to the artist's image. Supports Unsplash, Cloudinary, etc.</p>
                </div>
              </div>

              <div className="p-4 bg-[#1a1a2e] border border-[rgba(255,255,255,0.05)] rounded-lg flex flex-col gap-3 mt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="isExclusive" checked={form.isExclusive} onChange={handleFormChange} className="w-4 h-4 accent-[#d4a843]" />
                  <span className="text-sm font-medium text-white">Exclusive Artist</span>
                  <span className="text-xs text-gray-500">(Highlights artist at the top with gold styling)</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={handleFormChange} className="w-4 h-4 accent-[#d4a843]" />
                  <span className="text-sm font-medium text-white">Featured Artist</span>
                  <span className="text-xs text-gray-500">(Shows artist on the Home page)</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleFormChange} className="w-4 h-4 accent-[#d4a843]" />
                  <span className="text-sm font-medium text-white">Active</span>
                  <span className="text-xs text-gray-500">(Visible to public)</span>
                </label>
              </div>

              <div className="flex gap-4 mt-6">
                <button type="button" onClick={() => setFormOpen(false)} className="btn btn-ghost flex-1">Cancel</button>
                <button type="submit" className="btn btn-primary flex-1" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Artist'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
