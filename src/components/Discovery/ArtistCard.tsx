'use client';

import { useState } from 'react';
import styles from '@/app/discovery/discovery.module.css';

interface ArtistCardProps {
  artist: {
    id: number;
    name: string;
    category: string;
    location: string;
    imageUrl: string;
    rating: number;
    price: string;
  };
  onView?: (artist: any) => void;
  onBook?: (artist: any) => void;
}

export default function ArtistCard({ artist, onView, onBook }: ArtistCardProps) {
  const [imageError, setImageError] = useState(false);

  const initials = artist.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.categoryBadge}>{artist.category}</div>
        {!imageError ? (
          <img
            src={artist.imageUrl}
            alt={artist.name}
            className={styles.artistImage}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.placeholder}>{initials}</div>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.artistName}>{artist.name}</h3>
        <div className={styles.ratingLocation}>
          <span className={styles.starIcon}>★</span>
          <span>{artist.rating}</span>
          <span>•</span>
          <span>{artist.location}</span>
        </div>
        <div className={styles.price}>
          {artist.price && artist.price !== 'On Request' 
            ? `From ₹${artist.price}` 
            : 'On Request'}
        </div>
        <div className={styles.cardButtons}>
          <button className={`btn ${styles.btnView}`} onClick={() => onView?.(artist)}>
            View
          </button>
          <button className={`btn ${styles.btnBook}`} onClick={() => onBook?.(artist)}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
