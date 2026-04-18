'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FaStar, FaFilter } from 'react-icons/fa';
import BookingModal from '@/components/BookingModal/BookingModal';

const categories = ['All', 'DJ', 'Singer', 'Dancer', 'Comedian', 'Band', 'Anchor', 'Musician', 'Magician', 'Stand-up Comic'];

function ArtistsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlCategory = searchParams.get('category');

  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(urlCategory || 'All');
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<{ id?: number; name?: string } | null>(null);

  useEffect(() => {
    async function fetchArtists() {
      setLoading(true);
      try {
        let url = '/api/artists';
        if (activeCategory !== 'All') {
          url += `?category=${encodeURIComponent(activeCategory)}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        if (data.success) {
          setArtists(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch artists:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchArtists();
  }, [activeCategory]);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    router.push(cat === 'All' ? '/artists' : `/artists?category=${encodeURIComponent(cat)}`);
  };

  const openBooking = (artist?: any) => {
    if (artist) {
      setSelectedArtist({ id: artist.id, name: artist.name });
    } else {
      setSelectedArtist(null);
    }
    setModalOpen(true);
  };

  const exclusiveArtists = artists.filter(a => a.isExclusive);
  const regularArtists = artists.filter(a => !a.isExclusive);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-[#0a0a0f] pt-32 pb-12 border-b border-[rgba(255,255,255,0.05)]">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Browse & Book Artists</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover India's top-tier talent for your next event. Filter by category and instantly book the perfect performer.
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="bg-[#10101a] py-6 sticky top-[80px] z-40 border-b border-[rgba(255,255,255,0.05)] shadow-lg" style={{ padding: '20px 0' }}>
        <div className="container">
          <div className="flex items-center gap-md" style={{ overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex items-center gap-sm text-[#d4a843]" style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.875rem', flexShrink: 0, marginRight: '8px' }}>
              <FaFilter /> Filters:
            </div>
            <div className="flex items-center gap-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`btn btn-sm ${
                    activeCategory === cat 
                      ? 'btn-primary' 
                      : 'btn-ghost'
                  }`}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTISTS LISTING */}
      <section className="section bg-[#0a0a0f] min-h-[60vh]">
        <div className="container">
          {loading ? (
            <div className="grid-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="artist-card h-[400px] skeleton"></div>
              ))}
            </div>
          ) : artists.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-2">No artists found</h3>
              <p className="text-gray-400">Try selecting a different category.</p>
              <button onClick={() => handleCategoryClick('All')} className="btn btn-secondary mt-6">View All Artists</button>
            </div>
          ) : (
            <>
              {/* EXCLUSIVE SECTION */}
              {exclusiveArtists.length > 0 && (
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4a843] to-[#f0c060]">
                      Exclusive Artists
                    </h2>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#d4a843]/50 to-transparent"></div>
                  </div>
                  <div className="grid-4">
                    {exclusiveArtists.map((artist) => (
                      <div key={artist.id} className="artist-card border-[#d4a843]/40 shadow-[0_4px_20px_rgba(212,168,67,0.1)]">
                        <span className="artist-card-badge">Exclusive</span>
                        <div className="artist-card-image">
                          <img 
                            src={artist.imageUrl.startsWith('/images/') ? (
                              artist.category === 'DJ' ? 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=500&auto=format&fit=crop' :
                              artist.category === 'Singer' ? 'https://images.unsplash.com/photo-1516280440502-12f8650f9689?q=80&w=500&auto=format&fit=crop' :
                              artist.category === 'Band' ? 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop' :
                              artist.category === 'Comedian' ? 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=500&auto=format&fit=crop' :
                              'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=500&auto=format&fit=crop'
                            ) : artist.imageUrl} 
                            alt={artist.name} 
                          />
                        </div>
                        <div className="artist-card-body">
                          <div className="artist-card-category">{artist.category}</div>
                          <h3 className="artist-card-name text-[#d4a843]">{artist.name}</h3>
                          <div className="artist-card-meta">
                            <span className="flex items-center gap-1"><FaStar className="text-[#d4a843]" /> {artist.rating}</span>
                            <span>•</span>
                            <span>{artist.location}</span>
                          </div>
                          <div className="text-sm font-bold text-white mb-4">{artist.price}</div>
                          <button onClick={() => openBooking(artist)} className="btn btn-primary btn-sm w-full">Book Now</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* REGULAR LISTING */}
              {regularArtists.length > 0 && (
                <div>
                  {exclusiveArtists.length > 0 && (
                    <div className="flex items-center gap-4 mb-8">
                      <h2 className="font-display text-2xl font-bold text-white">
                        All {activeCategory !== 'All' ? activeCategory + 's' : 'Artists'}
                      </h2>
                      <div className="h-[1px] flex-1 bg-gray-800"></div>
                    </div>
                  )}
                  <div className="grid-4">
                    {regularArtists.map((artist) => (
                      <div key={artist.id} className="artist-card">
                        <div className="artist-card-image">
                          <img 
                            src={artist.imageUrl.startsWith('/images/') ? (
                              artist.category === 'DJ' ? 'https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=500&auto=format&fit=crop' :
                              artist.category === 'Singer' ? 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=500&auto=format&fit=crop' :
                              artist.category === 'Band' ? 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop' :
                              artist.category === 'Comedian' ? 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=500&auto=format&fit=crop' :
                              'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=500&auto=format&fit=crop'
                            ) : artist.imageUrl} 
                            alt={artist.name} 
                          />
                        </div>
                        <div className="artist-card-body">
                          <div className="artist-card-category">{artist.category}</div>
                          <h3 className="artist-card-name">{artist.name}</h3>
                          <div className="artist-card-meta">
                            <span className="flex items-center gap-1"><FaStar className="text-[#d4a843]" /> {artist.rating}</span>
                            <span>•</span>
                            <span>{artist.location}</span>
                          </div>
                          <div className="text-sm font-bold text-gray-300 mb-4">{artist.price}</div>
                          <button onClick={() => openBooking(artist)} className="btn btn-secondary btn-sm w-full">Book Now</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} artistName={selectedArtist?.name} artistId={selectedArtist?.id} />}
    </>
  );
}

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center text-[#d4a843] animate-pulse">Loading Artists...</div>}>
      <ArtistsContent />
    </Suspense>
  );
}
