import styles from '@/app/discovery/discovery.module.css';

export default function SkeletonCard() {
  return (
    <div className={`${styles.skeletonCard} ${styles.skeletonPulse}`}>
      {/* Pulse effect covers the whole card as a dark pulsing rectangle */}
    </div>
  );
}
