import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../config/api';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async e => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await API.post('/auth/login', form);
      login(res.data.token, res.data.username);
      navigate('/admin/dashboard');
    } catch {
      setError('Invalid credentials. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '48px', width: '100%', maxWidth: 420, boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>BookYourArtist</div>
          <div style={{ width: 40, height: 2, background: 'var(--gold)', margin: '8px auto 12px' }} />
          <p style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>Admin Panel — Secure Login</p>
        </div>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Username</label>
            <input value={form.username} onChange={e => setForm({...form, username: e.target.value})} required placeholder="admin" autoComplete="username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required placeholder="••••••••" autoComplete="current-password" />
          </div>
          {error && <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginBottom: 12 }}>{error}</p>}
          <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: 8 }}>
            {loading ? 'Logging in...' : '🔐 Login to Admin Panel'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
