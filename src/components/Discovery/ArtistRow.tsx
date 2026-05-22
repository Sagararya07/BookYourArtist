'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from '@/app/discovery/discovery.module.css';
import ArtistCard from './ArtistCard';
import SkeletonCard from './SkeletonCard';
import Link from 'next/link';

interface ArtistRowProps {
  type: 'trending' | 'exclusive' | 'featured';
  title: string;
  tag: string;
  categoryFilter: string;
}

export default function ArtistRow({ type, title, tag, categoryFilter }: ArtistRowProps) {
  const [artists, setArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchArtists = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const url = `/api/discovery/${type}?category=${categoryFilter}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setArtists(data.data);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(`Failed to fetch ${type} artists:`, err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [type, categoryFilter]);

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  return (
    <div className={styles.rowContainer}>
      <div className={styles.rowHeader}>
        <div className={styles.rowTitleGroup}>
          <span className={styles.rowTag}>{tag}</span>
          <h2 className={styles.rowTitle}>{title}</h2>
        </div>
        <Link href={`/artists?filter=${type}`} className={styles.seeAllLink}>
          See All →
        </Link>
      </div>

      <div className={styles.scrollWrapper}>
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
        ) : error ? (
          <div className={styles.errorRow}>
            <p className={styles.errorText}>Something went wrong while loading {title}.</p>
            <button className={styles.retryBtn} onClick={fetchArtists}>
              Retry
            </button>
          </div>
        ) : artists.length === 0 ? (
          <p className={styles.emptyMsg}>No artists available in this category.</p>
        ) : (
          artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        )}
      </div>
    </div>
  );
}
