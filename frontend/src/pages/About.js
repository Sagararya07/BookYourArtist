import React from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { num: '500+', label: 'Events Delivered' },
  { num: '200+', label: 'Verified Artists' },
  { num: '50+', label: 'Cities Covered' },
  { num: '5+', label: 'Years Experience' },
];

const whyUs = [
  { icon: '🎯', title: 'Curated Artist Network', desc: 'We maintain a carefully curated network of artists across 9 categories, each personally verified for quality and professionalism.' },
  { icon: '🔐', title: 'Verified & Trusted', desc: 'Every artist on our platform goes through a stringent verification process. You only see professionals you can trust.' },
  { icon: '📞', title: 'End-to-End Support', desc: 'From initial consultation to post-event follow-up, our team is with you at every step.' },
  { icon: '💡', title: 'Tailored Solutions', desc: 'Whether it\'s an intimate gathering or a 2000-person gala, we match the right artist to your specific event.' },
  { icon: '⚡', title: 'Quick Turnaround', desc: 'Get artist confirmations within 24 hours. We understand events are time-sensitive.' },
  { icon: '🌍', title: 'Pan-India Network', desc: 'Operating across 50+ cities, we can source artists for events anywhere in India.' },
];

const About = () => (
  <>
    <div className="page-hero">
      <div className="container">
        <span className="section-label">Who We Are</span>
        <h1>About Us</h1>
        <p>India's trusted platform for professional artist booking</p>
        <div className="gold-divider" />
      </div>
    </div>

    {/* ABOUT COMPANY */}
    <section style={{ padding: '80px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Connecting Event Organizers with India's Best Artists</h2>
            <div className="gold-divider" />
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 20 }}>
              BookYourArtist was founded with a single mission: to make professional artist booking accessible, transparent, and effortless for everyone in India.
            </p>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 32 }}>
              We understand that finding the right artist for your event can be overwhelming. Our platform simplifies this by bringing together a curated network of DJs, singers, dancers, comedians, bands, anchors, musicians, magicians and stand-up comics — all verified and ready to make your event extraordinary.
            </p>
            <Link to="/artists" className="btn-primary">Browse Our Artists →</Link>
          </div>
          <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {stats.map(s => (
              <div key={s.label} style={{ textAlign: 'center', padding: '20px 10px', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 'var(--radius)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--gold)' }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Our Purpose</span>
          <h2 className="section-title">Mission & Vision</h2>
          <div className="gold-divider" style={{ margin: '16px auto' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '40px', borderTop: '4px solid var(--gold)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 16 }}>🎯</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--gold)', marginBottom: 16 }}>Our Mission</h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              To democratize professional artist booking in India — making it possible for anyone, anywhere to access verified, talented performers for their events without the traditional barriers of middlemen, hidden fees, or uncertainty.
            </p>
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '40px', border: '1px solid var(--border)', borderTop: '4px solid var(--gold)' }}>
            <div style={{ fontSize: '2rem', marginBottom: 16 }}>🔭</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--navy)', marginBottom: 16 }}>Our Vision</h3>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              To become India's largest and most trusted artist booking ecosystem — connecting thousands of event organizers with exceptional performing artists, while empowering artists to grow their careers through technology and opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section style={{ padding: '80px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Our Advantage</span>
          <h2 className="section-title">Why Choose Us</h2>
          <div className="gold-divider" style={{ margin: '16px auto' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
          {whyUs.map(item => (
            <div key={item.title} style={{ padding: '32px', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = ''; }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: 14 }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--navy)', marginBottom: 10 }}>{item.title}</h3>
              <p style={{ color: 'var(--text-mid)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ padding: '72px 0', background: 'var(--navy)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: 'var(--white)', marginBottom: 16 }}>
          Let's Create Something Extraordinary
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 36, fontSize: '1rem' }}>Reach out today and let's make your next event unforgettable.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/artists" className="btn-primary" style={{ fontSize: '0.95rem', padding: '15px 36px' }}>Browse Artists</Link>
          <Link to="/contact" className="btn-outline" style={{ fontSize: '0.95rem', padding: '15px 36px' }}>Get in Touch</Link>
        </div>
      </div>
    </section>

    <style>{`
      @media (max-width: 768px) {
        .about-grid { grid-template-columns: 1fr !important; }
        .mission-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </>
);

export default About;
