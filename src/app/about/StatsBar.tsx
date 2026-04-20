'use client';

import AnimatedCounter from '@/components/AnimatedCounter/AnimatedCounter';
import styles from './about.module.css';

const stats = [
  { value: 500, suffix: '+', label: 'Events Delivered' },
  { value: 200, suffix: '+', label: 'Artists Onboard' },
  { value: 50, suffix: '+', label: 'Cities Covered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export default function StatsBar() {
  return (
    <section className={styles.statsBar}>
      <div className={`container ${styles.statsGrid}`}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <span className={styles.statValue}>
              <AnimatedCounter target={s.value} suffix={s.suffix} duration={2000} />
            </span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
