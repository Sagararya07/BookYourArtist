"use client";

import { useState } from "react";
import styles from "./FeaturedArtistsCarousel.module.css";

const artists = [
  { name: "SINGER", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "MUSIC BAND", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "DJ", image: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "MUSICIAN", image: "https://randomuser.me/api/portraits/men/78.jpg" },
  { name: "COMEDIAN", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "DANCER", image: "https://randomuser.me/api/portraits/women/29.jpg" },
  { name: "GUITARIST", image: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name: "DRUMMER", image: "https://randomuser.me/api/portraits/men/11.jpg" },
  { name: "VOCALIST", image: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "EMCEE", image: "https://randomuser.me/api/portraits/men/23.jpg" },
];

const VISIBLE = 4;

export default function FeaturedArtistsCarousel() {
  const [current, setCurrent] = useState(0);
  const maxIndex = artists.length - VISIBLE;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const visibleArtists = artists.slice(current, current + VISIBLE);

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
              <ArtistCard key={artist.name + current + i} artist={artist} />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === maxIndex}
            className={`${styles.carouselBtn} ${current === maxIndex ? styles.carouselBtnDisabled : styles.carouselBtnNext}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className={styles.carouselDots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtistCard({ artist }: { artist: { name: string; image: string } }) {
  return (
    <div className={styles.artistCard}>
      <div className={styles.artistCardGlow} />
      <div className={styles.artistAvatar}>
        <div className={styles.artistAvatarRing}>
          <div className={styles.artistAvatarInner}>
            <img src={artist.image} alt={artist.name} />
          </div>
        </div>
      </div>
      <span className={styles.artistName}>{artist.name}</span>
      <div className={styles.artistUnderline} />
    </div>
  );
}
