import React, { useState } from 'react';
import BookingModal from './BookingModal';

const categoryEmoji = {
  'DJ': '🎧', 'Singer': '🎤', 'Dancer': '💃', 'Comedian': '🎭',
  'Band': '🎸', 'Anchor': '🎙️', 'Musician': '🎹', 'Magician': '🪄', 'Stand-up Comic': '😄'
};

const ArtistProfileModal = ({ artist, onClose }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const API_BASE = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';

  if (bookingOpen) return <BookingModal onClose={() => setBookingOpen(false)} artistName={artist.name} artistId={artist._id} />;

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ maxWidth: 640 }}>
        <div style={{ position: 'relative' }}>
          {artist.image ? (
            <img src={`${API_BASE}${artist.image}`} alt={artist.name}
              style={{ width: '100%', height: 260, objectFit: 'cover' }} />
          ) : (
            <div style={{ width: '100%', height: 260, background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'var(--gold)' }}>
              {categoryEmoji[artist.category] || '🎤'}
            </div>
          )}
          <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', width: 36, height: 36, borderRadius: '50%', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          {artist.isExclusive && <span className="exclusive-badge" style={{ position: 'absolute', top: 16, left: 16 }}>⭐ Exclusive</span>}
        </div>

        <div style={{ padding: '28px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)' }}>{artist.category}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--navy)', margin: '6px 0 4px' }}>{artist.name}</h2>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 16, color: 'var(--text-light)', fontSize: '0.88rem' }}>
            <span>📍 {artist.location}</span>
            {artist.experience && <span>⏱ {artist.experience}</span>}
            {artist.eventsHandled > 0 && <span>🎪 {artist.eventsHandled}+ Events</span>}
            {artist.rating && <span className="stars">{'★'.repeat(Math.round(artist.rating))} {artist.rating}/5</span>}
          </div>

          {artist.price && (
            <div style={{ background: 'var(--off-white)', padding: '12px 16px', borderRadius: 'var(--radius)', marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-mid)' }}>Starting Price</span>
              <span style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1.05rem' }}>{artist.price}</span>
            </div>
          )}

          <p style={{ color: 'var(--text-mid)', lineHeight: 1.7, marginBottom: 16, fontSize: '0.92rem' }}>{artist.bio}</p>

          {artist.languages?.length > 0 && (
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--navy)', marginRight: 8 }}>Languages:</span>
              {artist.languages.map(l => (
                <span key={l} style={{ background: 'var(--navy)', color: 'var(--gold)', fontSize: '0.78rem', padding: '3px 10px', borderRadius: '20px', marginRight: 6, display: 'inline-block' }}>{l}</span>
              ))}
            </div>
          )}

          <button className="btn-primary" onClick={() => setBookingOpen(true)}
            style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>
            🎤 Book {artist.name} for Your Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfileModal;
