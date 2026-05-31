import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../config/api';
import { useAuth } from '../context/AuthContext';

// High-fidelity SVG logo inspired by ArtistVibes (Gold Monogram)
const LogoSVG = () => (
  <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e8c97a" />
        <stop offset="50%" stopColor="#c9a84c" />
        <stop offset="100%" stopColor="#b38f36" />
      </linearGradient>
    </defs>
    {/* Left leg of A and speed lines */}
    <rect x="5" y="32" width="22" height="7" rx="3.5" fill="url(#goldGrad)" />
    <rect x="0" y="48" width="30" height="7" rx="3.5" fill="url(#goldGrad)" />
    <rect x="5" y="64" width="22" height="7" rx="3.5" fill="url(#goldGrad)" />
    
    {/* Stylized high-tech AV Monogram */}
    <path 
      d="M48 20 L68 80 L88 20" 
      stroke="url(#goldGrad)" 
      strokeWidth="10" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M35 80 L52 28" 
      stroke="url(#goldGrad)" 
      strokeWidth="10" 
      strokeLinecap="round" 
    />
    <path 
      d="M40 56 H60" 
      stroke="url(#goldGrad)" 
      strokeWidth="8" 
      strokeLinecap="round" 
    />
  </svg>
);

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
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
    <div className="login-container">
      {/* Dynamic inline styles for premium fonts, states, placeholders and layout */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .login-container {
          min-height: 100vh;
          background: #050507;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .login-card {
          background: #0c0c0e;
          border-radius: 16px;
          padding: 48px 40px 40px 40px;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 
                      0 0 40px rgba(201, 168, 76, 0.04);
          border: 1.5px solid rgba(201, 168, 76, 0.25);
          text-align: center;
        }

        .login-brand-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 8px;
        }

        .login-logo-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .login-title-text {
          font-size: 2.3rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          background: linear-gradient(135deg, #f5e9c8 0%, #c9a84c 50%, #b38f36 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .login-title-subtext {
          font-size: 2.3rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-top: 4px;
        }

        .login-subtitle {
          color: #a0aec0;
          font-size: 0.95rem;
          margin-top: 14px;
          margin-bottom: 34px;
          font-weight: 400;
        }

        .login-form-group {
          margin-bottom: 20px;
          text-align: left;
        }

        .login-label {
          display: block;
          font-size: 0.88rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 8px;
        }

        .login-input {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-size: 0.95rem;
          color: #ffffff;
          background: #141417;
          outline: none;
          transition: all 0.2s ease-in-out;
          font-family: inherit;
        }

        .login-input::placeholder {
          color: #4b5563;
          font-weight: 400;
        }

        .login-input:focus {
          border-color: #c9a84c;
          box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.18);
        }

        .login-options {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-top: 16px;
          margin-bottom: 26px;
        }

        .login-remember {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.92rem;
          color: #a0aec0;
          cursor: pointer;
          user-select: none;
        }

        .login-checkbox {
          width: 18px;
          height: 18px;
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          accent-color: #c9a84c;
          cursor: pointer;
        }

        .login-btn {
          width: 100%;
          padding: 14px 20px;
          background: linear-gradient(135deg, #e8c97a 0%, #c9a84c 50%, #b38f36 100%);
          color: #050507;
          border: none;
          border-radius: 8px;
          font-size: 0.98rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          font-family: inherit;
        }

        .login-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #f5e9c8 0%, #e8c97a 50%, #c9a84c 100%);
          box-shadow: 0 0 15px rgba(201, 168, 76, 0.3);
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .login-footer-links {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;
        }

        .login-forgot {
          font-size: 0.92rem;
          color: #a0aec0;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .login-forgot:hover {
          color: #e8c97a;
        }

        .login-error {
          color: #e53e3e;
          font-size: 0.88rem;
          margin-bottom: 16px;
          text-align: left;
          font-weight: 500;
        }
      `}</style>

      <div className="login-card">
        <div className="login-brand-group">
          <div className="login-logo-row">
            <LogoSVG />
            <span className="login-title-text">ArtistVibes</span>
          </div>
          <span className="login-title-subtext">Entertainment</span>
        </div>
        
        <p className="login-subtitle">Please enter your user information.</p>

        <form onSubmit={submit}>
          <div className="login-form-group">
            <label className="login-label">Username or email</label>
            <input 
              className="login-input"
              value={form.username} 
              onChange={e => setForm({...form, username: e.target.value})} 
              required 
              placeholder="Username" 
              autoComplete="username" 
            />
          </div>

          <div className="login-form-group">
            <label className="login-label">Password</label>
            <input 
              className="login-input"
              type="password" 
              value={form.password} 
              onChange={e => setForm({...form, password: e.target.value})} 
              required 
              placeholder="•••••••" 
              autoComplete="current-password" 
            />
          </div>

          {error && <div className="login-error">{error}</div>}

          <div className="login-options">
            <label className="login-remember">
              <input 
                type="checkbox" 
                className="login-checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="login-footer-links">
          <a href="#forgot" onClick={e => e.preventDefault()} className="login-forgot">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

