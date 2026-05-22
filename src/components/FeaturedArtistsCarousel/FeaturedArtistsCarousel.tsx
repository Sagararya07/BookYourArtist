"use client";

import { useState, useEffect } from "react";
import styles from "./FeaturedArtistsCarousel.module.css";

export default function FeaturedArtistsCarousel() {
  const [artists, setArtists] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const res = await fetch('/api/artists?featured=true');
        const data = await res.json();
        if (data.success && data.data) {
          setArtists(data.data.slice(0, 10)); // take up to 10 for the carousel
        }
      } catch (err) {
        console.warn('Failed to fetch artists, using fallback:', err);
        setArtists([
          { id: 1, name: 'DJ Snake', category: 'DJ', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=80', price: '₹1,50,000', rating: 4.8 },
          { id: 2, name: 'Arijit Singh', category: 'Singer', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?w=500&q=80', price: '₹5,00,000', rating: 4.9 },
          { id: 3, name: 'Zakir Khan', category: 'Stand-up', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=500&q=80', price: '₹2,50,000', rating: 4.7 },
          { id: 4, name: 'Coldplay Tribute', category: 'Band', isExclusive: true, imageUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500&q=80', price: '₹4,00,000', rating: 4.6 }
        ]);
      }
    }
    fetchArtists();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, artists.length - visibleCount);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  useEffect(() => {
    if (artists.length <= visibleCount) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [artists.length, maxIndex, visibleCount]);

  const visibleArtists = artists.slice(current, current + visibleCount);

  return (
    <section className={styles.carouselSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.tagLine}>
            <div className={styles.tagDash} />
            <span className={styles.tag}>Discover Talent</span>
            <div className={styles.tagDash} />
          </div>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Artists</span>
          </h2>
          <p className={styles.subtitle}>
            Bring your events to the next level with the best artists — book top
            musicians, live singers, DJs, comedians, motivational speakers,
            emcees and more.
          </p>
        </div>

        {/* Carousel Row */}
        <div className={styles.carouselRow}>
          <button
            onClick={prev}
            disabled={current === 0}
            className={`${styles.carouselBtn} ${current === 0 ? styles.carouselBtnDisabled : styles.carouselBtnPrev}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={styles.carouselCards}>
            {visibleArtists.map((artist, i) => (
              <ArtistCard key={artist.id || artist.name + i} artist={artist} />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === maxIndex || artists.length <= visibleCount}
            className={`${styles.carouselBtn} ${current === maxIndex || artists.length <= visibleCount ? styles.carouselBtnDisabled : styles.carouselBtnNext}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        {artists.length > visibleCount && (
          <div className={styles.carouselDots}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ArtistCard({ artist }: { artist: any }) {
  let imageUrl = artist.imageUrl || artist.image || '';
  if (imageUrl.startsWith('/images/')) {
    if (artist.category === 'DJ') imageUrl = 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=500&auto=format&fit=crop';
    else if (artist.category === 'Singer') imageUrl = 'https://images.unsplash.com/photo-1516280440502-12f8650f9689?q=80&w=500&auto=format&fit=crop';
    else if (artist.category === 'Band') imageUrl = 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=500&auto=format&fit=crop';
    else if (artist.category === 'Comedian') imageUrl = 'https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=500&auto=format&fit=crop';
    else imageUrl = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=500&auto=format&fit=crop';
  }

  return (
    <div className={styles.artistCard}>
      <div className={styles.artistCardGlow} />
      <div className={styles.artistAvatar}>
        <div className={styles.artistAvatarRing}>
          <div className={styles.artistAvatarInner}>
            <img src={imageUrl} alt={artist.name} />
          </div>
        </div>
      </div>
      <span className={styles.artistCategory}>{artist.category}</span>
      <span className={styles.artistName}>{artist.name}</span>
      <div className={styles.artistUnderline} />
    </div>
  );
}
