import React, { useState } from 'react';
import API from '../config/api';

const BookingModal = ({ onClose, artistName = '', artistId = null }) => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', eventType: '', eventDate: '', budget: '',
    message: '', artistName: artistName, artistId: artistId
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await API.post('/bookings', form);
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    }
    setLoading(false);
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <h3>Book an Artist</h3>
            <p>{artistName ? `Enquiring about: ${artistName}` : 'Tell us about your event'}</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {success ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 10 }}>Request Submitted!</h3>
              <p style={{ color: 'var(--text-mid)', marginBottom: 24 }}>Our team will contact you within 24 hours. For urgent queries, call us directly.</p>
              <a href="tel:9353548082" className="btn-primary" style={{ justifyContent: 'center', marginBottom: 10, display: 'flex' }}>📞 Call Now: 9353548082</a>
              <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-light)', fontSize: '0.85rem', cursor: 'pointer' }}>Close</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handle} required placeholder="10-digit mobile" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Event Type *</label>
                  <select name="eventType" value={form.eventType} onChange={handle} required>
                    <option value="">Select Event</option>
                    {['Wedding', 'Corporate Event', 'Birthday Party', 'College Fest', 'Concert'].map(e => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Event Date</label>
                  <input name="eventDate" type="date" value={form.eventDate} onChange={handle} />
                </div>
                <div className="form-group">
                  <label>Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handle}>
                    <option value="">Select Budget</option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹3,00,000</option>
                    <option>₹3,00,000+</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message / Special Requirements</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us more about your event..." />
              </div>
              {error && <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginBottom: 12 }}>{error}</p>}
              <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                {loading ? 'Submitting...' : '🎤 Submit Booking Request'}
              </button>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', textAlign: 'center', marginTop: 12 }}>
                We respond within 24 hours. You can also WhatsApp us at +91 9353548082
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
