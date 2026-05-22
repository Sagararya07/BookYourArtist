import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../config/api';
import ArtistCard from '../components/ArtistCard';
import BookingModal from '../components/BookingModal';

const intentCards = [
  { icon: '💍', label: 'Artist for Wedding', category: 'Wedding' },
  { icon: '🏢', label: 'Corporate Event', category: 'Corporate Event' },
  { icon: '🎉', label: 'Birthday Party', category: 'Birthday Party' },
  { icon: '🎓', label: 'College Fest', category: 'College Fest' },
];

const trustPoints = [
  { icon: '✅', title: 'Verified Artists', desc: 'Every artist is background-checked and professionally vetted.' },
  { icon: '⚡', title: 'Fast Response', desc: 'Get a confirmation within 24 hours of submitting your request.' },
  { icon: '🤝', title: 'Hassle-Free Booking', desc: 'We handle everything — from selection to coordination.' },
  { icon: '⭐', title: 'Trusted by Clients', desc: '500+ events successfully delivered across India.' },
];

const testimonials = [
  { name: 'Priya Mehta', event: 'Wedding, Mumbai', text: 'BookYourArtist made our wedding unforgettable. The singer they arranged was phenomenal!', stars: 5 },
  { name: 'Rahul Sharma', event: 'Corporate Event, Pune', text: 'Professional team, great artists, zero hassle. Highly recommend for corporate events.', stars: 5 },
  { name: 'Ananya Patel', event: 'Birthday Party, Delhi', text: 'The DJ they booked for our party was absolutely amazing. Everyone loved it!', stars: 5 },
];

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/artists/featured').then(r => setFeatured(r.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', background: 'var(--navy)', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: 70
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
          <div style={{ maxWidth: 680 }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>India's Premier Artist Booking Platform</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.1, marginBottom: 24 }}>
              Book Top Artists<br />
              <span style={{ color: 'var(--gold)' }}>for Your Events</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', marginBottom: 40, lineHeight: 1.7, maxWidth: 520 }}>
              From grand weddings to corporate galas — discover and book verified DJs, singers, dancers, comedians and more across India. Seamless. Professional. Memorable.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/artists" className="btn-primary" style={{ fontSize: '0.95rem', padding: '16px 36px' }}>Explore Artists →</Link>
              <button className="btn-outline" onClick={() => setBookingOpen(true)} style={{ fontSize: '0.95rem', padding: '16px 36px' }}>Book Now</button>
            </div>
            <div style={{ marginTop: 56, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
              {[['500+', 'Events Delivered'], ['200+', 'Verified Artists'], ['50+', 'Cities Covered']].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>{num}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.5px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTENT SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Find Your Match</span>
            <h2 className="section-title">What Are You Looking For?</h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {intentCards.map(card => (
              <Link key={card.label} to={`/artists?event=${card.category}`}
                style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '36px 24px', textAlign: 'center', border: '1.5px solid var(--border)', transition: '0.3s', display: 'block', cursor: 'pointer', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <div style={{ fontSize: '2.8rem', marginBottom: 16 }}>{card.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>{card.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600, letterSpacing: '1px' }}>Browse Artists →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTISTS */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="section-label">Hand-Picked Talent</span>
              <h2 className="section-title">Featured Artists</h2>
              <div className="gold-divider" />
            </div>
            <Link to="/artists" className="btn-navy" style={{ padding: '12px 28px', fontSize: '0.88rem' }}>View All Artists →</Link>
          </div>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-light)' }}>Loading artists...</div>
          ) : featured.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎤</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: 8 }}>Artists Coming Soon</h3>
              <p style={{ color: 'var(--text-light)' }}>Our curated roster is being set up. Contact us for bookings.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 28 }}>
              {featured.map(a => <ArtistCard key={a._id} artist={a} />)}
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '80px 0', background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Why BookYourArtist</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>The Smarter Way to Book</h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {trustPoints.map(p => (
              <div key={p.title} style={{ textAlign: 'center', padding: '32px 20px' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--gold)', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="gold-divider" style={{ margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: 'var(--white)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                <div style={{ color: 'var(--gold)', fontSize: '1.1rem', marginBottom: 16 }}>{'★'.repeat(t.stars)}</div>
                <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--navy)', fontSize: '1.05rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: 2 }}>{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '80px 0', background: 'var(--gold)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--navy)', marginBottom: 16, fontWeight: 700 }}>
            Ready to Make Your Event Unforgettable?
          </h2>
          <p style={{ color: 'rgba(10,22,40,0.7)', fontSize: '1.05rem', marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>
            Let's have a quick discussion about your event. Our team is ready to help you find the perfect artist.
          </p>
          <button className="btn-navy" onClick={() => setBookingOpen(true)} style={{ fontSize: '1rem', padding: '16px 44px' }}>
            Let's Have a Quick Discussion →
          </button>
        </div>
      </section>

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </>
  );
};

export default Home;
