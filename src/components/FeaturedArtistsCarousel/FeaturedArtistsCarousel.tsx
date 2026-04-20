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
        console.error('Failed to fetch artists:', err);
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

  const visibleArtists = artists.slice(current, current + visibleCount);

  return (
    <section className={styles.carouselSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.carouselHeader}>
          <div className={styles.carouselTagLine}>
            <div className={styles.carouselTagDash} />
            <span className={styles.carouselTag}>Discover Talent</span>
          </div>
          <h2 className={styles.carouselTitle}>Featured Artists</h2>
          <p className={styles.carouselSubtitle}>
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
