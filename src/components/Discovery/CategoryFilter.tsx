'use client';

import styles from '@/app/discovery/discovery.module.css';

const CATEGORIES = [
  'ALL', 'DJ', 'SINGER', 'DANCER', 'COMEDIAN', 
  'BAND', 'ANCHOR', 'MUSICIAN', 'MAGICIAN', 'STAND-UP COMIC'
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterWrapper}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterPill} ${activeCategory === cat ? styles.filterPillActive : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
