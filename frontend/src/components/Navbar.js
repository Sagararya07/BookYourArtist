import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        background: scrolled ? 'rgba(10,22,40,0.98)' : 'rgba(10,22,40,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
        transition: '0.3s ease',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.5px', lineHeight: 1.1 }}>
              BookYourArtist
            </span>
            <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
              India's Artist Booking Platform
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
            {[['/', 'Home'], ['/about', 'About Us'], ['/artists', 'Artist Booking']].map(([path, label]) => (
              <Link key={path} to={path} style={{
                color: isActive(path) ? 'var(--gold)' : 'rgba(255,255,255,0.8)',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.3px',
                transition: '0.2s',
                borderBottom: isActive(path) ? '1.5px solid var(--gold)' : '1.5px solid transparent',
                paddingBottom: 2,
              }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => { if (!isActive(path)) e.target.style.color = 'rgba(255,255,255,0.8)'; }}
              >{label}</Link>
            ))}
            <Link to="/contact" style={{
              color: isActive('/contact') ? 'var(--gold)' : 'rgba(255,255,255,0.8)',
              fontSize: '0.88rem', fontWeight: 500,
            }}>Contact Us</Link>
            <button className="btn-primary" onClick={() => setBookingOpen(true)}
              style={{ padding: '10px 22px', fontSize: '0.82rem' }}>
              Let's Have a Quick Discussion
            </button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem' }} className="hamburger">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: 'var(--navy)', borderTop: '1px solid rgba(201,168,76,0.2)', padding: '16px 24px 20px' }}>
            {[['/', 'Home'], ['/about', 'About Us'], ['/artists', 'Artist Booking'], ['/contact', 'Contact Us']].map(([path, label]) => (
              <Link key={path} to={path} style={{ display: 'block', color: 'rgba(255,255,255,0.85)', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.95rem' }}>{label}</Link>
            ))}
            <button className="btn-primary" onClick={() => { setBookingOpen(true); setMenuOpen(false); }} style={{ marginTop: 16, width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
              Let's Have a Quick Discussion
            </button>
          </div>
        )}
      </nav>

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
