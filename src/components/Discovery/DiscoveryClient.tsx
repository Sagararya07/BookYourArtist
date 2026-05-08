'use client';

import { useState } from 'react';
import styles from '@/app/discovery/discovery.module.css';
import CategoryFilter from './CategoryFilter';
import ArtistRow from './ArtistRow';

export default function DiscoveryClient() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <div className={styles.discoveryContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Artist Discovery</h1>
        <p className={styles.subtitle}>
          Discover India's most talented performers for your next big event. 
          Curated, vetted, and ready to WOW.
        </p>
      </header>

      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      <div className={styles.rowsWrapper}>
        <ArtistRow 
          type="trending" 
          title="Trending Artists" 
          tag="TRENDING" 
          categoryFilter={activeCategory} 
        />
        <ArtistRow 
          type="exclusive" 
          title="Exclusive Talent" 
          tag="EXCLUSIVE" 
          categoryFilter={activeCategory} 
        />
        <ArtistRow 
          type="featured" 
          title="Featured Picks" 
          tag="FEATURED" 
          categoryFilter={activeCategory} 
        />
      </div>
    </div>
  );
}
