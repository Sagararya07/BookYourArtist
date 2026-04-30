'use client';

import { useState, useEffect } from 'react';
import styles from './TrendingSection.module.css';

interface TrendingArtist {
  id: number;
  name: string;
  imageUrl: string;
}

export default function TrendingSection() {
  const [artists, setArtists] = useState<TrendingArtist[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const res = await fetch('/api/trending-artists');
        const data = await res.json();
        if (data.success) {
          setArtists(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch trending artists', err);
      }
    }
    fetchTrending();
  }, []);

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (artists.length === 0) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % artists.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [artists.length]);

  const displayArtists: TrendingArtist[] = [];
  for (let i = 0; i < 5; i++) {
    if (artists.length > 0) {
      displayArtists.push(artists[(startIndex + i) % artists.length]);
    }
  }

  if (displayArtists.length === 0) return null;

  return (
    <section className={styles.trendingSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.header}>
              <div className={styles.tagLine}>
                <div className={styles.tagDash} />
                <span className={styles.tag}>Trending Now</span>
                <div className={styles.tagDash} />
              </div>
              <h2 className={styles.title}>
                Trending <span className={styles.highlight}>Artists</span>
              </h2>
              <p className={styles.subtitle}>
                The most sought-after performers making waves across India's live event scene.
              </p>
            </div>
          </div>

          <div className={styles.collageGrid}>
            {/* Top Left */}
            {displayArtists[0] && (
              <div className={`${styles.artistFrame} ${styles.topLeft}`}>
                <img key={displayArtists[0].id} src={displayArtists[0].imageUrl} alt={displayArtists[0].name} className={styles.fadeImg} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
            {/* Top Right */}
            {displayArtists[1] && (
              <div className={`${styles.artistFrame} ${styles.topRight}`}>
                <img key={displayArtists[1].id} src={displayArtists[1].imageUrl} alt={displayArtists[1].name} className={styles.fadeImg} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
            {/* CENTER — cycles through all artists */}
            {displayArtists[2] && (
              <div className={`${styles.artistFrame} ${styles.center}`}>
                <img key={displayArtists[2].id} src={displayArtists[2].imageUrl} alt={displayArtists[2].name} className={styles.fadeImg} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
            {/* Bottom Left */}
            {displayArtists[3] && (
              <div className={`${styles.artistFrame} ${styles.bottomLeft}`}>
                <img key={displayArtists[3].id} src={displayArtists[3].imageUrl} alt={displayArtists[3].name} className={styles.fadeImg} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
            {/* Bottom Right */}
            {displayArtists[4] && (
              <div className={`${styles.artistFrame} ${styles.bottomRight}`}>
                <img key={displayArtists[4].id} src={displayArtists[4].imageUrl} alt={displayArtists[4].name} className={styles.fadeImg} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
