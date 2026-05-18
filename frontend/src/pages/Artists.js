import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../config/api';
import ArtistCard from '../components/ArtistCard';
import BookingModal from '../components/BookingModal';

const CATEGORIES = ['All', 'DJ', 'Singer', 'Dancer', 'Comedian', 'Band', 'Anchor', 'Musician', 'Magician', 'Stand-up Comic'];

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [exclusive, setExclusive] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('');
  const [bookingOpen, setBookingOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(loc.search);
    if (params.get('category')) setCategory(params.get('category'));
  }, [loc]);

  useEffect(() => {
    setLoading(true);
    const params = {};
    if (category !== 'All') params.category = category;
    if (location) params.location = location;
    Promise.all([
      API.get('/artists', { params }),
      API.get('/artists/exclusive')
    ]).then(([allRes, exclRes]) => {
      setArtists(allRes.data);
      setExclusive(exclRes.data);
    }).catch(() => {}).finally(() => setLoading(false));
  }, [category, location]);

  const regularArtists = artists.filter(a => !a.isExclusive);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Curated Performers</span>
          <h1>Browse & Book Artists</h1>
          <p>Discover verified artists for every occasion across India</p>
          <div className="gold-divider" />
        </div>
      </div>

      {/* FILTERS */}
      <div style={{ background: 'var(--off-white)', borderBottom: '1px solid var(--border)', padding: '28px 0', position: 'sticky', top: 70, zIndex: 100 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flex: 1 }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setCategory(cat)}
                  style={{
                    padding: '8px 16px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 500,
                    border: '1.5px solid', cursor: 'pointer', transition: '0.2s',
                    background: category === cat ? 'var(--navy)' : 'var(--white)',
                    color: category === cat ? 'var(--gold)' : 'var(--text-mid)',
                    borderColor: category === cat ? 'var(--navy)' : 'var(--border)',
                    fontFamily: 'var(--font-body)',
                  }}>
                  {cat}
                </button>
              ))}
            </div>
            <input
              placeholder="🔍 Search by city..."
              value={location}
              onChange={e => setLocation(e.target.value)}
              style={{ padding: '9px 16px', border: '1.5px solid var(--border)', borderRadius: '20px', fontSize: '0.85rem', fontFamily: 'var(--font-body)', minWidth: 180, background: 'var(--white)' }}
            />
          </div>
        </div>
      </div>

      <div style={{ padding: '64px 0', background: 'var(--white)' }}>
        <div className="container">

          {/* EXCLUSIVE SECTION */}
          {exclusive.length > 0 && (
            <div style={{ marginBottom: 72 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                <div>
                  <span className="section-label">Premium Talent</span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)' }}>⭐ Exclusive Artists</h2>
                </div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)', borderRadius: 'var(--radius-lg)', padding: '40px', marginBottom: 8 }}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', marginBottom: 28 }}>
                  Our exclusive roster features India's top-tier performers — premium bookings with priority placement and dedicated support.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
                  {exclusive.map(a => <ArtistCard key={a._id} artist={a} />)}
                </div>
              </div>
            </div>
          )}

          {/* ALL ARTISTS */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <span className="section-label">All Performers</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)' }}>
                  {category === 'All' ? 'All Artists' : `${category}s`}
                </h2>
              </div>
              {!loading && <span style={{ color: 'var(--text-light)', fontSize: '0.88rem' }}>{regularArtists.length} artist{regularArtists.length !== 1 ? 's' : ''} found</span>}
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '80px', color: 'var(--text-light)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>🎤</div>
                <p>Loading artists...</p>
              </div>
            ) : regularArtists.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>🔍</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: 8 }}>No Artists Found</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: 24 }}>Try a different category or contact us — we may have the right artist for you!</p>
                <button className="btn-primary" onClick={() => setBookingOpen(true)}>Ask Us for an Artist</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 28 }}>
                {regularArtists.map(a => <ArtistCard key={a._id} artist={a} />)}
              </div>
            )}
          </div>

          {/* BOTTOM CTA */}
          <div style={{ marginTop: 72, background: 'var(--off-white)', borderRadius: 'var(--radius-lg)', padding: '48px', textAlign: 'center', border: '1px solid var(--border)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--navy)', marginBottom: 12 }}>Need Help Choosing an Artist?</h3>
            <p style={{ color: 'var(--text-mid)', marginBottom: 28 }}>Our team knows every artist personally. Tell us about your event and we'll recommend the perfect match.</p>
            <button className="btn-primary" onClick={() => setBookingOpen(true)} style={{ fontSize: '0.95rem', padding: '14px 36px' }}>
              Get a Free Recommendation
            </button>
          </div>
        </div>
      </div>

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
    </>
  );
};

export default Artists;
