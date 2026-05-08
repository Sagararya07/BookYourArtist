'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { FaStar, FaMapMarkerAlt, FaVideo, FaCalendarCheck, FaArrowLeft } from 'react-icons/fa';
import BookingModal from '@/components/BookingModal/BookingModal';

export default function ArtistDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const [artist, setArtist] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchArtist() {
      try {
        const res = await fetch(`/api/artists/${id}`);
        const data = await res.json();
        if (data.success) {
          setArtist(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch artist:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchArtist();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-[#d4a843] animate-pulse font-bold tracking-widest uppercase">Loading Artist Details...</div>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl text-white mb-6">Artist Not Found</h1>
        <button onClick={() => router.push('/artists')} className="btn btn-secondary">Return to Artists</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-40 md:pt-48 pb-20">
      <div className="container max-w-6xl mx-auto">
        <button onClick={() => router.push('/artists')} className="flex items-center gap-2 text-gray-400 hover:text-[#d4a843] mb-8 transition-colors font-semibold">
          <FaArrowLeft /> Back to Artists
        </button>

        <div className="bg-[#111114] border border-[rgba(255,255,255,0.05)] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-5/12 relative min-h-[400px] md:min-h-[600px]">
            <img 
              src={artist.imageUrl.startsWith('/images/') ? (
                artist.category === 'DJ' ? 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=800&auto=format&fit=crop' :
                artist.category === 'Singer' ? 'https://images.unsplash.com/photo-1516280440502-12f8650f9689?q=80&w=800&auto=format&fit=crop' :
                artist.category === 'Band' ? 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop' :
                artist.category === 'Comedian' ? 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=800&auto=format&fit=crop' :
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop'
              ) : artist.imageUrl} 
              alt={artist.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {artist.isExclusive && (
              <div className="absolute top-6 left-6 bg-[#d4a843] text-black font-extrabold px-5 py-2 rounded-full text-xs uppercase tracking-widest shadow-lg">
                Exclusive
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent md:hidden"></div>
          </div>

          {/* Content Section */}
          <div className="md:w-7/12 p-8 md:p-14 flex flex-col justify-center bg-[#111114] relative z-10">
            <div className="text-[#d4a843] font-bold tracking-widest uppercase text-sm mb-3">{artist.category}</div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-6">{artist.name}</h1>
            
            <div className="flex flex-wrap items-center gap-8 mb-8 text-gray-400 border-b border-[rgba(255,255,255,0.05)] pb-8">
              <div className="flex items-center gap-3">
                <FaStar className="text-[#d4a843] text-xl" />
                <span className="font-medium text-lg">{artist.rating} / 5.0</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#d4a843] text-xl" />
                <span className="font-medium text-lg">{artist.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarCheck className="text-[#d4a843] text-xl" />
                <span className="font-medium text-lg">{artist.eventsCount}+ Events</span>
              </div>
            </div>

            <h2 className="text-white font-display text-2xl mb-4">About the Artist</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {artist.bio || "Experience a mesmerizing performance that brings emotions to life. This artist specializes in delivering top-tier entertainment tailored to make your event unforgettable. From intimate gatherings to grand stage performances, they bring unparalleled energy and professionalism. Book now to secure your date and elevate your event!"}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 p-6 border border-[#d4a843]/20 rounded-2xl bg-[#d4a843]/5">
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-semibold">Starting Price</div>
                <div className="text-3xl font-bold text-white">{artist.price}</div>
              </div>
              <button onClick={() => setModalOpen(true)} className="btn btn-primary btn-lg w-full sm:w-auto px-10 shadow-[0_0_20px_rgba(212,168,67,0.3)]">
                Book Now
              </button>
            </div>

            {artist.videoUrl && (
              <a href={artist.videoUrl} target="_blank" rel="noreferrer" className="btn btn-ghost w-full flex items-center justify-center gap-3 py-4 text-lg">
                <FaVideo className="text-[#d4a843]" /> Watch Performance Video
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {modalOpen && (
        <BookingModal
          onClose={() => setModalOpen(false)}
          artistName={artist.name}
          artistId={artist.id}
        />
      )}
    </div>
  );
}
