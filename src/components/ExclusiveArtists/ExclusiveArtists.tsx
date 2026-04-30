'use client';

import { useState, useEffect } from 'react';
import styles from './ExclusiveArtists.module.css';

interface Artist {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  bio: string;
  location: string;
  price: string;
  rating: number;
}

const fallbackArtists: Artist[] = [];

export default function ExclusiveArtists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  useEffect(() => {
    async function fetchExclusive() {
      try {
        const res = await fetch('/api/exclusive-artists');
        const data = await res.json();
        if (data.success && data.data && data.data.length > 0) {
          setArtists(data.data);
        } else {
          setArtists(fallbackArtists);
        }
      } catch {
        setArtists(fallbackArtists);
      }
    }
    fetchExclusive();
  }, []);

  const displayArtists = artists.length > 0 ? artists : fallbackArtists;
  const total = displayArtists.length;

  useEffect(() => {
    if (total <= 1) return;
    const interval = setInterval(() => {
      setFlipDirection('next');
      setFlipping(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % total);
        setFlipping(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  // Don't render section if there's nothing to show
  if (total === 0) return null;

  const navigate = (direction: 'next' | 'prev') => {
    if (flipping) return;
    setFlipDirection(direction);
    setFlipping(true);
    setTimeout(() => {
      setCurrent((c) =>
        direction === 'next' ? (c + 1) % total : (c - 1 + total) % total
      );
      setFlipping(false);
    }, 500);
  };

  const artist = displayArtists[current];

  return (
    <section className={styles.section}>
      {/* Background ambient glow */}
      <div className={styles.ambientGlow} />

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.tagLine}>
            <div className={styles.tagDash} />
            <span className={styles.tag}>Premium Talent</span>
            <div className={styles.tagDash} />
          </div>
          <h2 className={styles.title}>
            Exclusive <span className={styles.highlight}>Artists</span>
          </h2>
          <p className={styles.subtitle}>
            Our most sought-after artists — handpicked for the grandest occasions.
          </p>
        </div>

        {/* Book Flip Viewer */}
        <div className={styles.bookContainer}>
          {/* Left Nav */}
          <button
            className={`btn ${styles.navBtn} ${styles.navBtnLeft}`}
            onClick={() => navigate('prev')}
            disabled={flipping}
            aria-label="Previous artist"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* The Book */}
          <div className={styles.book}>
            {/* Page shadow/depth layers */}
            <div className={styles.pageStack} />
            <div className={styles.pageStack2} />

            {/* Main Page */}
            <div
              className={`${styles.page} ${flipping ? (flipDirection === 'next' ? styles.flipNext : styles.flipPrev) : ''}`}
            >
              {/* Left page: Image */}
              <div className={styles.leftPage}>
                <div className={styles.imageFrame}>
                  <img src={artist.imageUrl} alt={artist.name} />
                  <div className={styles.imageOverlay} />
                  <div className={styles.pageNumber}>
                    <span>{String(current + 1).padStart(2, '0')}</span>
                    <span className={styles.pageNumberTotal}>/ {String(total).padStart(2, '0')}</span>
                  </div>
                </div>
                {/* Page spine crease */}
                <div className={styles.spineCrease} />
              </div>

              {/* Right page: Info */}
              <div className={styles.rightPage}>
                <div className={styles.pageContent}>
                  <span className={styles.artistCategory}>{artist.category}</span>
                  <h3 className={styles.artistName}>{artist.name}</h3>

                  <div className={styles.artistMeta}>
                    <span className={styles.metaItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" />
                      </svg>
                      {artist.location}
                    </span>
                    <span className={styles.metaItem}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {artist.rating}.0 Rating
                    </span>
                  </div>

                  <p className={styles.artistBio}>{artist.bio}</p>

                  <div className={styles.priceBadge}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <span className={styles.priceValue}>{artist.price}</span>
                  </div>

                  <a href="/artists" className={`btn ${styles.bookBtn}`}>
                    Book This Artist
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                  {/* Page texture lines */}
                  <div className={styles.pageLines} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Nav */}
          <button
            className={`btn ${styles.navBtn} ${styles.navBtnRight}`}
            onClick={() => navigate('next')}
            disabled={flipping}
            aria-label="Next artist"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {displayArtists.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => {
                if (!flipping) {
                  setFlipDirection(i > current ? 'next' : 'prev');
                  setFlipping(true);
                  setTimeout(() => { setCurrent(i); setFlipping(false); }, 500);
                }
              }}
              aria-label={`Go to artist ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
