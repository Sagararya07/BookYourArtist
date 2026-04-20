import Link from "next/link";
import { FaStar, FaMusic, FaHandshake, FaHeart, FaGlobeAsia, FaGem, FaUsers, FaAward, FaArrowRight } from "react-icons/fa";
import styles from "./about.module.css";
import StatsBar from "./StatsBar";







/* ── Values data ─────────────────────────────────────── */
const values = [
  { icon: <FaGem />, title: "Premium Quality", desc: "We curate only the finest talent, ensuring every performance exceeds expectations and creates lasting memories." },
  { icon: <FaHandshake />, title: "Trust & Transparency", desc: "Clear communication, honest pricing, and reliable service form the foundation of every client relationship." },
  { icon: <FaHeart />, title: "Passion Driven", desc: "Our team is fueled by a genuine love for music and entertainment, delivering heartfelt experiences every time." },
  { icon: <FaGlobeAsia />, title: "Pan-India Reach", desc: "From intimate gatherings to grand celebrations, we deliver exceptional entertainment experiences across the nation." },
];

/* ── Founder data ────────────────────────────────────── */
const founder = {
  name: "Abhishek Pandey",
  role: "Founder & CEO",
  image: "/owner.jpg",
  bio: "Visionary leader with 10+ years in artist management and event production. Abhishek founded Artistvibes with a passion for connecting extraordinary talent with extraordinary events across India.",
  tags: ["Artist Management", "Event Production", "Pan-India Network"],
};

export default function AboutPage() {

  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
          alt="Concert stage"
          className={styles.heroBgImage}
        />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroTag}>About Artistvibes</span>
          <h1 className={styles.heroTitle}>
            Crafting Unforgettable <br />
            <span className="text-gradient">Entertainment Experiences</span>
          </h1>
          <p className={styles.heroSubtitle}>
            India&apos;s most trusted 360° artist & celebrity management company.
            We connect extraordinary talent with extraordinary events — from
            intimate gatherings to grand celebrations.
          </p>
          <div className={styles.heroActions}>
            <Link href="/artists" className="btn btn-primary">
              Explore Artists <FaArrowRight />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <StatsBar />

      {/* ═══════════════════ OUR STORY ═══════════════════ */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImages}>
              <div className={styles.storyImagePrimary}>
                <img
                  src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop"
                  alt="Live performance"
                />
              </div>
              <div className={styles.storyImageSecondary}>
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop"
                  alt="Concert crowd"
                />
              </div>
              <div className={styles.experienceBadge}>
                <span className={styles.expNumber}>10+</span>
                <span className={styles.expLabel}>Years Exp.</span>
              </div>
            </div>

            <div className={styles.storyContent}>
              <span className="section-tag">Our Story</span>
              <h2 className={styles.storyTitle}>
                From a Vision to India&apos;s Premier Entertainment Partner
              </h2>
              <p className={styles.storyText}>
                Founded with a passion for music and a commitment to excellence,
                Artistvibes Entertainment has grown from a small artist management
                firm into a full-spectrum entertainment powerhouse.
              </p>
              <p className={styles.storyText}>
                We believe every event deserves a touch of magic. Our curated
                roster of 200+ artists spans singers, live bands, DJs, comedians,
                dancers, anchors, and more — each handpicked for their talent,
                professionalism, and stage presence.
              </p>
              <div className={styles.storyHighlights}>
                <div className={styles.highlightItem}>
                  <FaStar className={styles.highlightIcon} />
                  <div>
                    <h4>Curated Excellence</h4>
                    <p>Every artist is vetted for quality and professionalism.</p>
                  </div>
                </div>
                <div className={styles.highlightItem}>
                  <FaMusic className={styles.highlightIcon} />
                  <div>
                    <h4>End-to-End Management</h4>
                    <p>From booking to stage setup, we handle everything seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MISSION & VISION ═══════════════════ */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIconWrap}>
                <FaAward className={styles.missionIcon} />
              </div>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                To democratize access to premium entertainment by connecting
                world-class artists with event organizers seamlessly — making
                every celebration unforgettable, regardless of scale.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIconWrap}>
                <FaGlobeAsia className={styles.missionIcon} />
              </div>
              <h3 className={styles.missionTitle}>Our Vision</h3>
              <p className={styles.missionText}>
                To become India&apos;s most trusted entertainment ecosystem —
                where talent meets opportunity, and every stage tells a story
                that resonates with audiences across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ OUR VALUES ═══════════════════ */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">
              We go beyond booking — delivering premium, end-to-end entertainment
              experiences built on trust and passion.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIconWrap}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════════════ TEAM SECTION ═══════════════════ */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">The Visionary Behind It All</h2>
            <p className="section-subtitle">
              Meet the passionate mind who built Artistvibes Entertainment from
              the ground up.
            </p>
          </div>

          {/* Founder Spotlight */}
          <div className={styles.founderWrap}>
            <div className={styles.founderCard}>
              {/* Decorative rings */}
              <div className={styles.founderRingOuter} />
              <div className={styles.founderRingInner} />

              {/* Circle Photo */}
              <div className={styles.founderAvatarWrap}>
                <div className={styles.founderAvatarRing}>
                  <div className={styles.founderAvatarInner}>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className={styles.founderAvatar}
                    />
                  </div>
                </div>
                <div className={styles.founderBadge}>Founder</div>
              </div>

              {/* Info */}
              <div className={styles.founderInfo}>
                <h3 className={styles.founderName}>{founder.name}</h3>
                <span className={styles.founderRole}>{founder.role}</span>
                <p className={styles.founderBio}>{founder.bio}</p>
                <div className={styles.founderTags}>
                  {founder.tags.map((tag) => (
                    <span key={tag} className={styles.founderTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Create Something <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              Let&apos;s discuss how we can make your next event unforgettable with
              world-class entertainment.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Contact Us <FaArrowRight />
              </Link>
              <Link href="/artists" className="btn btn-secondary btn-lg">
                Browse Artists
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


