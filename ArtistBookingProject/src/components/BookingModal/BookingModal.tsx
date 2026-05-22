'use client';

import { useState } from 'react';
import styles from './BookingModal.module.css';
import { FaTimes, FaCheckCircle } from 'react-icons/fa';

const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'College Fest', 'Concert'];
const budgetRanges = [
  'Under ₹20,000',
  '₹20,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,00,000',
  'Above ₹2,00,000',
];

interface Props {
  onClose: () => void;
  artistName?: string;
  artistId?: number;
}

export default function BookingModal({ onClose, artistName, artistId }: Props) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', eventType: '', eventDate: '', budget: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, artistId, artistName }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal animate-slideUp">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        {success ? (
          <div className={styles.success}>
            <FaCheckCircle className={styles.successIcon} />
            <h3>Booking Request Sent!</h3>
            <p>Thank you, <strong>{form.name}</strong>! Our team will contact you within 2 hours.</p>
            <button className="btn btn-primary mt-lg" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2 className="modal-title">
              {artistName ? `Book ${artistName}` : "Book an Artist"}
            </h2>
            <p className="modal-subtitle">Fill in your details and we'll get back to you within 2 hours.</p>

            {error && <div className="alert alert-error">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input name="name" className="form-control" placeholder="e.g. Rahul Sharma" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input name="phone" className="form-control" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input name="email" type="email" className="form-control" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Event Type *</label>
                  <select name="eventType" className="form-control" value={form.eventType} onChange={handleChange} required>
                    <option value="">Select event type</option>
                    {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Event Date *</label>
                  <input name="eventDate" type="date" className="form-control" value={form.eventDate} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Budget Range *</label>
                <select name="budget" className="form-control" value={form.budget} onChange={handleChange} required>
                  <option value="">Select your budget</option>
                  {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Message</label>
                <textarea name="message" className="form-control" placeholder="Tell us more about your event, special requirements, etc." value={form.message} onChange={handleChange} rows={3} />
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? 'Sending...' : '🎤 Submit Booking Request'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
