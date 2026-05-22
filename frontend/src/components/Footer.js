import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.75)', paddingTop: 60 }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', marginBottom: 8 }}>BookYourArtist</div>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
            India's trusted platform for booking top artists for weddings, corporate events, parties and more.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Facebook', 'Instagram', 'YouTube'].map(s => (
              <div key={s} style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', cursor: 'pointer', transition: '0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
              >
                {s[0]}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: 20, fontWeight: 600 }}>Quick Links</h4>
          {[['/', 'Home'], ['/about', 'About Us'], ['/artists', 'Book Artists'], ['/contact', 'Contact Us']].map(([path, label]) => (
            <Link key={path} to={path} style={{ display: 'block', color: 'rgba(255,255,255,0.65)', marginBottom: 10, fontSize: '0.88rem', transition: '0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >{label}</Link>
          ))}
        </div>

        {/* Artist Categories */}
        <div>
          <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: 20, fontWeight: 600 }}>Artist Categories</h4>
          {['DJ', 'Singer', 'Dancer', 'Comedian', 'Band', 'Anchor', 'Musician', 'Magician', 'Stand-up Comic'].map(cat => (
            <Link key={cat} to={`/artists?category=${cat}`} style={{ display: 'block', color: 'rgba(255,255,255,0.65)', marginBottom: 8, fontSize: '0.88rem', transition: '0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >{cat}</Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: 20, fontWeight: 600 }}>Contact Us</h4>
          <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 12 }}>📍 Mumbai, Maharashtra – 400001</p>
            <a href="tel:9353548082" style={{ display: 'block', color: 'rgba(255,255,255,0.65)', marginBottom: 8, transition: '0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >📞 +91 93535 48082</a>
            <a href="https://wa.me/919353548082" target="_blank" rel="noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.65)', marginBottom: 8, transition: '0.2s' }}
              onMouseEnter={e => e.target.style.color = '#25D366'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >💬 WhatsApp Us</a>
            <a href="mailto:sagarsagar49061@gmail.com" style={{ display: 'block', color: 'rgba(255,255,255,0.65)', transition: '0.2s', wordBreak: 'break-all' }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >✉️ sagarsagar49061@gmail.com</a>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>© {new Date().getFullYear()} BookYourArtist. All rights reserved.</p>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>India's Premier Artist Booking Platform</p>
      </div>
    </div>
  </footer>
);

export default Footer;
