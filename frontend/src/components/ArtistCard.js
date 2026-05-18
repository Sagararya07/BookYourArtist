import React, { useState } from 'react';
import BookingModal from './BookingModal';
import ArtistProfileModal from './ArtistProfileModal';

const categoryEmoji = {
  'DJ': '🎧', 'Singer': '🎤', 'Dancer': '💃', 'Comedian': '🎭',
  'Band': '🎸', 'Anchor': '🎙️', 'Musician': '🎹', 'Magician': '🪄', 'Stand-up Comic': '😄'
};

const ArtistCard = ({ artist }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const API_BASE = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';

  return (
    <>
      <div className="artist-card">
        {artist.isExclusive && (
          <div style={{ background: 'var(--gold)', padding: '6px 16px', textAlign: 'center' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--navy)' }}>⭐ Exclusive Artist</span>
          </div>
        )}
        {artist.image ? (
          <img src={`${API_BASE}${artist.image}`} alt={artist.name} className="card-image" />
        ) : (
          <div className="card-image-placeholder">
            {categoryEmoji[artist.category] || '🎤'}
          </div>
        )}
        <div className="card-body">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="card-category">{artist.category}</span>
            {artist.rating && <span className="stars" style={{ fontSize: '0.75rem' }}>★ {artist.rating}</span>}
          </div>
          <div className="card-name">{artist.name}</div>
          <div className="card-location">📍 {artist.location}</div>
          {artist.price && <div className="card-price">Starting from {artist.price}</div>}
          <div className="card-actions">
            <button className="btn-primary" onClick={() => setBookingOpen(true)}>Book Now</button>
            <button className="btn-outline-navy" onClick={() => setProfileOpen(true)}>View Profile</button>
          </div>
        </div>
      </div>
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} artistName={artist.name} artistId={artist._id} />}
      {profileOpen && <ArtistProfileModal artist={artist} onClose={() => setProfileOpen(false)} />}
    </>
  );
};

export default ArtistCard;
