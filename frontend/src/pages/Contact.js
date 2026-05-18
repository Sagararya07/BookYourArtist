import React, { useState } from 'react';
import API from '../config/api';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await API.post('/contact', form);
      setSuccess(true);
      setForm({ name: '', phone: '', message: '' });
    } catch {
      setError('Failed to send. Please call or WhatsApp us directly.');
    }
    setLoading(false);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Reach Out</span>
          <h1>Contact Us</h1>
          <p>We'd love to hear about your event</p>
          <div className="gold-divider" />
        </div>
      </div>

      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* LEFT - CONTACT DETAILS */}
            <div>
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title">Let's Start a Conversation</h2>
              <div className="gold-divider" />
              <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 40 }}>
                Whether you're planning a wedding, corporate event, birthday party, or college fest — our team is here to help you find and book the perfect artist.
              </p>

              {[
                { icon: '📍', title: 'Office Address', content: 'Mumbai, Maharashtra — 400001', sub: 'India' },
                { icon: '📞', title: 'Phone', content: '+91 93535 48082', href: 'tel:9353548082', sub: 'Mon–Sat, 9am to 8pm' },
                { icon: '💬', title: 'WhatsApp', content: '+91 93535 48082', href: 'https://wa.me/919353548082', sub: 'Fastest response' },
                { icon: '✉️', title: 'Email', content: 'sagarsagar49061@gmail.com', href: 'mailto:sagarsagar49061@gmail.com', sub: 'We reply within 24 hours' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 20, marginBottom: 28, padding: '20px', border: '1px solid var(--border)', borderRadius: 'var(--radius)', transition: '0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'var(--off-white)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = ''; }}
                >
                  <div style={{ fontSize: '1.5rem', minWidth: 32, textAlign: 'center' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '0.9rem', marginBottom: 4 }}>{item.title}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        style={{ color: 'var(--gold)', fontWeight: 500, fontSize: '0.95rem' }}>{item.content}</a>
                    ) : (
                      <div style={{ color: 'var(--text-mid)', fontSize: '0.95rem' }}>{item.content}</div>
                    )}
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: 2 }}>{item.sub}</div>
                  </div>
                </div>
              ))}

              {/* Quick action buttons */}
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <a href="https://wa.me/919353548082?text=Hi, I want to book an artist." target="_blank" rel="noreferrer"
                  className="btn-primary" style={{ flex: 1, justifyContent: 'center', background: '#25D366', fontSize: '0.88rem' }}>
                  💬 WhatsApp Now
                </a>
                <a href="tel:9353548082" className="btn-navy" style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem' }}>
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <div style={{ background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: '40px', border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 8 }}>Send Us a Message</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', marginBottom: 28 }}>We'll get back to you within 24 hours.</p>

              {success ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 12 }}>✅</div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--navy)', marginBottom: 8 }}>Message Sent!</h4>
                  <p style={{ color: 'var(--text-mid)', fontSize: '0.9rem' }}>Our team will reach out to you shortly.</p>
                  <button onClick={() => setSuccess(false)} style={{ marginTop: 20, background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600 }}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="Full Name" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handle} required placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handle} required placeholder="Tell us about your event, artist requirements, budget..." style={{ minHeight: 130 }} />
                  </div>
                  {error && <p style={{ color: '#e53e3e', fontSize: '0.85rem', marginBottom: 12 }}>{error}</p>}
                  <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                    {loading ? 'Sending...' : '📨 Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ height: 380, background: 'var(--off-white)', position: 'relative', overflow: 'hidden' }}>
        <iframe
          title="BookYourArtist Mumbai Office"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.0!2d72.8354!3d18.9387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3f3b7b1d01%3A0x4e44a3cfc3f4e8e!2sMumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </>
  );
};

export default Contact;
