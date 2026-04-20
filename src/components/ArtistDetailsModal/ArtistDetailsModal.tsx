'use client';

import { FaTimes, FaStar, FaMapMarkerAlt, FaVideo } from 'react-icons/fa';

interface Props {
  artist: any;
  onClose: () => void;
  onBook: () => void;
}

export default function ArtistDetailsModal({ artist, onClose, onBook }: Props) {
  if (!artist) return null;

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal animate-slideUp" style={{ padding: 0, overflow: 'hidden' }}>
        <button className="modal-close" onClick={onClose} aria-label="Close" style={{ zIndex: 10 }}>
          <FaTimes />
        </button>

        <div className="flex flex-col">
          {/* Image Header */}
          <div className="relative w-full" style={{ background: '#0a0a0f' }}>
            <img 
              src={artist.imageUrl.startsWith('/images/') ? (
                artist.category === 'DJ' ? 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Singer' ? 'https://images.unsplash.com/photo-1516280440502-12f8650f9689?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Band' ? 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Comedian' ? 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=600&auto=format&fit=crop' :
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop'
              ) : artist.imageUrl} 
              alt={artist.name} 
              className="w-full"
              style={{ display: 'block', maxHeight: '420px', objectFit: 'contain', objectPosition: 'center top' }}
            />
            {artist.isExclusive && (
              <div className="absolute top-4 left-4 bg-[#d4a843] text-black font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg">
                Exclusive
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent"></div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 pt-0 -mt-8 relative z-1">
            <div className="text-[#d4a843] font-bold tracking-widest uppercase text-xs mb-1">{artist.category}</div>
            <h2 className="font-display text-3xl text-white font-bold mb-3">{artist.name}</h2>
            
            <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-300 text-sm">
              <div className="flex items-center gap-1.5">
                <FaStar className="text-[#d4a843]" />
                <span>{artist.rating} / 5.0</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-[#d4a843]" />
                <span>{artist.location}</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {artist.bio || "Experience a mesmerizing performance that brings emotions to life. This artist specializes in delivering top-tier entertainment tailored to make your event unforgettable."}
            </p>

            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Starting Price</div>
                <div className="text-xl font-bold text-white">{artist.price}</div>
              </div>
              {artist.videoUrl && (
                <a href={artist.videoUrl} target="_blank" rel="noreferrer" className="text-[#d4a843] hover:text-white flex items-center gap-2 text-sm transition-colors">
                  <FaVideo /> Watch Video
                </a>
              )}
            </div>

            <button onClick={onBook} className="btn btn-primary w-full shadow-[0_0_15px_rgba(212,168,67,0.3)]">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
