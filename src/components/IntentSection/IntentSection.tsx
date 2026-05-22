import Link from 'next/link';
import { FaHeart, FaMusic, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import styles from './IntentSection.module.css';

const intents = [
  {
    icon: <FaHeart />,
    title: "Artist for Wedding",
    desc: "Make your special day unforgettable with the perfect musical backdrop.",
    link: "/artists?category=Singer" // Using existing category that fits well, or they can update later
  },
  {
    icon: <FaMusic />,
    title: "Artist for Party",
    desc: "Bring energy and excitement to your parties with top-tier entertainers.",
    link: "/artists?category=DJ"
  },
  {
    icon: <FaBriefcase />,
    title: "Corporate Event",
    desc: "Elevate your corporate gatherings with professional and engaging artists.",
    link: "/artists?category=Band"
  },
  {
    icon: <FaGraduationCap />,
    title: "College Fest",
    desc: "Create massive hype for your college fests with crowd-pulling performers.",
    link: "/artists?category=Comedian"
  }
];

export default function IntentSection() {
  return (
    <section className={styles.intentSection}>
      <div className="container">
        <div className={styles.intentHeader}>
          <span className={styles.intentTag}>Find Your Match</span>
          <h2 className={styles.intentTitle}>What Are You Looking For?</h2>
          <p className={styles.intentSubtitle}>
            Discover India&apos;s top-tier talent for your next event. Filter by category and instantly book the perfect performer.
          </p>
        </div>

        <div className={styles.intentGrid}>
          {intents.map((intent, index) => (
            <Link key={index} href={intent.link} className={styles.intentCard}>
              <div className={styles.intentIconWrap}>{intent.icon}</div>
              <h3 className={styles.intentCardTitle}>{intent.title}</h3>
              <p className={styles.intentCardDesc}>{intent.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
