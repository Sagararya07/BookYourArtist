'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import styles from './CategoryFilter.module.css';

const CATEGORIES = [
  { label: 'ALL',          icon: '🎭' },
  { label: 'DJ',           icon: '🎧' },
  { label: 'SINGER',       icon: '🎤' },
  { label: 'DANCER',       icon: '💃' },
  { label: 'COMEDIAN',     icon: '😂' },
  { label: 'BAND',         icon: '🎸' },
  { label: 'ANCHOR',       icon: '🎙️' },
  { label: 'MUSICIAN',     icon: '🎹' },
  { label: 'MAGICIAN',     icon: '🪄' },
  { label: 'STAND-UP',     icon: '🎭' },
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [mounted, setMounted] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number; id: number } | null>(null);

  const updateSlider = useCallback(() => {
    const activeIndex = CATEGORIES.findIndex((c) => c.label === activeCategory);
    const pill = pillRefs.current[activeIndex];
    const container = containerRef.current;
    if (!pill || !container) return;

    const pillRect = pill.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setSliderStyle({
      left: pillRect.left - containerRect.left + container.scrollLeft,
      width: pillRect.width,
      opacity: 1,
    });
  }, [activeCategory]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    updateSlider();

    // Also recalculate on resize
    const ro = new ResizeObserver(updateSlider);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [mounted, updateSlider]);

  const handleClick = (cat: string, e: React.MouseEvent<HTMLButtonElement>) => {
    onCategoryChange(cat);
    // Ripple
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top, id: Date.now() });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <div className={styles.filterBar}>
      {/* Scrollable pill track */}
      <div className={styles.filterTrack} ref={containerRef}>
        {/* Sliding background indicator */}
        <span
          className={styles.slider}
          style={{
            left: sliderStyle.left,
            width: sliderStyle.width,
            opacity: sliderStyle.opacity,
          }}
          aria-hidden="true"
        />

        {/* Aurora glow that follows slider */}
        <span
          className={styles.sliderGlow}
          style={{
            left: sliderStyle.left + sliderStyle.width / 2,
            opacity: sliderStyle.opacity,
          }}
          aria-hidden="true"
        />

        {CATEGORIES.map((cat, i) => {
          const isActive = activeCategory === cat.label;
          return (
            <button
              key={cat.label}
              ref={(el) => { pillRefs.current[i] = el; }}
              className={`${styles.pill} ${isActive ? styles.pillActive : ''}`}
              onClick={(e) => handleClick(cat.label, e)}
              aria-pressed={isActive}
            >
              <span className={styles.pillIcon}>{cat.icon}</span>
              <span className={styles.pillLabel}>{cat.label}</span>

              {/* Click ripple */}
              {isActive && ripple && (
                <span
                  key={ripple.id}
                  className={styles.ripple}
                  style={{ left: ripple.x, top: ripple.y }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom gradient fade edges for scroll hint */}
      <div className={styles.edgeFadeLeft}  aria-hidden="true" />
      <div className={styles.edgeFadeRight} aria-hidden="true" />
    </div>
  );
}
