'use client';

import React from 'react';
import { FaTimes, FaStar, FaMapMarkerAlt, FaVideo } from 'react-icons/fa';
import { Artist } from '@/types/artist';

interface Props {
  artist: Artist | null;
  onClose: () => void;
  onBook: () => void;
}

export default function ArtistDetailsModal({ artist, onClose, onBook }: Props) {
  if (!artist) return null;

  return (
    <div className="modal-overlay" onClick={(e: React.MouseEvent) => e.target === e.currentTarget && onClose()}>
      <div className="modal animate-slideUp" style={{ padding: 0, overflowY: 'auto', maxHeight: '85vh', width: '90%', maxWidth: '500px' } as React.CSSProperties}>
        <button className="modal-close" onClick={onClose} aria-label="Close" style={{ zIndex: 10, position: 'absolute', top: '12px', right: '12px' }}>
          <FaTimes />
        </button>

        <div className="flex flex-col">
          {/* Image Header */}
          <div className="relative w-full" style={{ background: '#0a0a0f' }}>
            <img 
              src={(!artist.imageUrl || artist.imageUrl === '') ? (
                // Fallback by category when no image is set
                artist.category === 'DJ' ? 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Singer' ? 'https://images.unsplash.com/photo-1516280440502-12f8650f9689?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Band' ? 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Comedian' ? 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=600&auto=format&fit=crop' :
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop'
              ) : artist.imageUrl?.startsWith('/images/') ? (
                artist.category === 'DJ' ? 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Singer' ? 'https://images.unsplash.com/photo-1516280440502-12f8650f9689?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Band' ? 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop' :
                artist.category === 'Comedian' ? 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=600&auto=format&fit=crop' :
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop'
              ) : artist.imageUrl}
              alt={artist.name}
              className="w-full"
              style={{ display: 'block', height: '320px', objectFit: 'cover', objectPosition: 'center 20%' } as React.CSSProperties}
            />

            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-secondary), transparent)' }}></div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 pt-0 -mt-8 relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {/* Category pill */}
              <span style={{
                display: 'inline-block',
                padding: '3px 14px',
                borderRadius: '999px',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                background: 'rgba(212,168,67,0.15)',
                color: '#d4a843',
                border: '1px solid rgba(212,168,67,0.4)',
              }}>{artist.category}</span>
              {/* Section badge */}
              {artist.isExclusive && (
                <span style={{
                  display: 'inline-block',
                  padding: '3px 14px',
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: 'rgba(212,168,67,0.9)',
                  color: '#000',
                }}>✦ Exclusive</span>
              )}
              {artist.isFeatured && !artist.isExclusive && (
                <span style={{
                  display: 'inline-block',
                  padding: '3px 14px',
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: 'rgba(167,139,250,0.15)',
                  color: '#a78bfa',
                  border: '1px solid rgba(167,139,250,0.4)',
                }}>★ Featured</span>
              )}
              {artist.isTrending && !artist.isExclusive && !artist.isFeatured && (
                <span style={{
                  display: 'inline-block',
                  padding: '3px 14px',
                  borderRadius: '999px',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: 'rgba(255,107,53,0.15)',
                  color: '#ff6b35',
                  border: '1px solid rgba(255,107,53,0.4)',
                }}>🔥 Trending</span>
              )}
            </div>
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

