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

  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    if (artists.length === 0) return;
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % artists.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [artists.length]);

  // 4 corner frames are fixed (artists 0-3), center cycles through all artists
  const corners = artists.slice(0, 4);
  const centerArtist = artists.length > 0 ? artists[centerIndex] : null;

  if (!centerArtist) return null;

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
            {corners[0] && (
              <div className={`${styles.artistFrame} ${styles.topLeft}`}>
                <img src={corners[0].imageUrl} alt={corners[0].name} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
            {/* Top Right */}
            {corners[1] && (
              <div className={`${styles.artistFrame} ${styles.topRight}`}>
                <img src={corners[1].imageUrl} alt={corners[1].name} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
            {/* CENTER — cycles through all artists */}
            <div className={`${styles.artistFrame} ${styles.center}`}>
              <img
                key={centerArtist.id}
                src={centerArtist.imageUrl}
                alt={centerArtist.name}
                className={styles.fadeImg}
              />
              <div className={styles.neonGlow}></div>
            </div>
            {/* Bottom Left */}
            {corners[2] && (
              <div className={`${styles.artistFrame} ${styles.bottomLeft}`}>
                <img src={corners[2].imageUrl} alt={corners[2].name} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
            {/* Bottom Right */}
            {corners[3] && (
              <div className={`${styles.artistFrame} ${styles.bottomRight}`}>
                <img src={corners[3].imageUrl} alt={corners[3].name} />
                <div className={styles.neonGlow}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
