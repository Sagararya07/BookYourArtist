'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import NewsletterSection from '@/components/NewsletterSection/NewsletterSection';
import Link from 'next/link';
import {
  FaHeadphones, FaMicrophoneAlt, FaUserFriends, FaLaughBeam,
  FaGuitar, FaMicrophone, FaMusic, FaMagic, FaStar,
  FaPlayCircle, FaTimes, FaArrowRight
} from 'react-icons/fa';
import BookingModal from '@/components/BookingModal/BookingModal';
import FeaturedArtistsCarousel from '@/components/FeaturedArtistsCarousel/FeaturedArtistsCarousel';
import styles from './home.module.css';

/* ── Scroll-triggered animation hook ────────────────── */
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe the container and all children with animation classes
    const animatedElements = node.querySelectorAll(
      `.${styles.animateOnScroll}, .${styles.animateSlideLeft}, .${styles.animateSlideRight}, .${styles.animateScale}`
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Services data ──────────────────────────────────── */
const services = [
  { num: '01', title: 'DJ', icon: <FaHeadphones />, desc: 'Keep the dance floor alive with professional DJs spinning the best tracks for your event.' },
  { num: '02', title: 'Singer', icon: <FaMicrophoneAlt />, desc: 'Soulful vocals and energetic performances across multiple genres for an unforgettable night.' },
  { num: '03', title: 'Dancer', icon: <FaUserFriends />, desc: 'Captivating dance routines and choreographies that mesmerize and entertain the crowd.' },
  { num: '04', title: 'Comedian', icon: <FaLaughBeam />, desc: 'Bring joy and laughter to your audience with top stand-up comedians and humorists.' },
  { num: '05', title: 'Band', icon: <FaGuitar />, desc: 'Live musical bands delivering authentic, powerful, and immersive musical experiences.' },
  { num: '06', title: 'Anchor', icon: <FaMicrophone />, desc: 'Engaging, charismatic hosts and emcees to keep your event flowing smoothly.' },
  { num: '07', title: 'Musician', icon: <FaMusic />, desc: 'Talented instrumentalists creating the perfect ambiance for intimate or grand events.' },
  { num: '08', title: 'Magician', icon: <FaMagic />, desc: 'Mind-bending illusions and interactive magic shows that leave guests spellbound.' },
  { num: '09', title: 'Stand-up', icon: <FaLaughBeam />, desc: 'Hilarious, witty, and relatable stand-up routines for a night of endless laughs.' },
];

/* ── Testimonials data ──────────────────────────────── */
const testimonials = [
  {
    id: 1,
    name: 'Hannah Jahan',
    role: 'Event Manager',
    content: `Nikita's voice lit up the entire evening. Her energy and stage presence made the event unforgettable.`,
    rating: 5,
  },
  {
    id: 2,
    name: 'Talia Varen',
    role: 'Event Organizer',
    content: `The guitar riffs electrified the crowd, blending precision with passion. Truly turned every performance into an experience.`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Arden Kale',
    role: 'Music Producer',
    content: `Production skills shaped every beat to perfection. Transformed simple sounds into cinematic masterpieces.`,
    rating: 5,
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<{ id?: number; name?: string } | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const servicesRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();

  const openBooking = useCallback((artist?: { id: number; name: string }) => {
    setSelectedArtist(artist ? { id: artist.id, name: artist.name } : null);
    setModalOpen(true);
  }, []);

  // Duplicate services for seamless marquee
  const doubledServices = [...services, ...services];

  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrap}>
          <img
            src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop"
            alt="Live Concert"
            className={styles.heroBgImg}
          />
        </div>

        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroTagline}>Trust + Ease</span>
            <h1 className={styles.heroTitle}>
              Book Top Artists<br />For Your Events
            </h1>
            <p className={styles.heroDesc}>
              Bringing soulful performances, heartfelt vocals, and electrifying
              stage energy to every event — creating moments that linger long
              after the final note fades.
            </p>
            <div className={styles.heroActions}>
              <Link href="/artists" className="btn btn-primary">
                Explore Artists
              </Link>
              <button onClick={() => openBooking()} className="btn btn-secondary">
                Book Now <FaArrowRight />
              </button>
            </div>
          </div>

          <div className={styles.heroImageWrap}>
            <div className={styles.heroImageFrame}>
              <img
                src="https://kickstarrt.co.in/wp-content/themes/music-artist-wordpress-theme-premium/assets/images/banner/banner-main-img.png"
                alt="Musician performing with guitar"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Floating Video Card */}
        <div className={styles.heroVideoCard}>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className={styles.heroVideoBtn}
          >
            <FaPlayCircle />
          </button>
          <p className={styles.heroVideoLabel}>Live Performances</p>
          {videoOpen && (
            <div className={styles.heroVideoOverlay}>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className={styles.heroVideoClose}
              >
                <FaTimes />
              </button>
              <video
                controls autoPlay muted loop playsInline
                className={styles.heroVideoPlayer}
                poster="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-cold-looking-hip-hop-dancer-on-the-street-39951-large.mp4" type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════ FEATURED ARTISTS CAROUSEL ═══════════════════ */}
      <FeaturedArtistsCarousel />

      {/* ═══════════════════ SERVICES SECTION ═══════════════════ */}
      <section className={styles.servicesSection} ref={servicesRef}>
        <div className="container">
          <div className={`section-header ${styles.animateOnScroll}`}>
            <span className="section-tag">Services</span>
            <h2 className="section-title">Music Artist Services</h2>
            <p className="section-subtitle">
              Experience soulful performances tailored for your event.
            </p>
          </div>
        </div>

        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {doubledServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <span className={styles.serviceCardNum}>{service.num}</span>
                <div className={styles.serviceCardIcon}>{service.icon}</div>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                <p className={styles.serviceCardDesc}>{service.desc}</p>
                <Link href="/about" className={`btn btn-primary btn-sm ${styles.serviceCardBtn}`}>
                  Know More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT / EXPERIENCE ═══════════════════ */}
      <section className={styles.aboutSection} ref={aboutRef}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutImages} ${styles.animateSlideLeft}`}>
              <div className={styles.aboutImgPrimary}>
                <img
                  src="https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-performance-music-concert-night-copy-space_637285-544.jpg"
                  alt="Live performance"
                />
              </div>
              <div className={styles.aboutImgSecondary}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/047/064/481/small/a-large-crowd-of-people-at-a-concert-illuminated-by-stage-lights-photo.jpeg"
                  alt="Concert crowd"
                />
              </div>
              <div className={styles.aboutExpBadge}>
                <span className={styles.aboutExpBadgeNum}>10+</span>
                <span className={styles.aboutExpBadgeLabel}>Years Exp.</span>
              </div>
            </div>

            <div className={`${styles.aboutContent} ${styles.animateSlideRight}`}>
              <span className={styles.aboutTag}>Experience About Us</span>
              <h2 className={styles.aboutTitle}>
                Bringing Emotions to Life Through Music
              </h2>
              <p className={styles.aboutDesc}>
                From intimate acoustic evenings to grand stage performances, we
                deliver powerful acts and heartfelt music that connect with every
                audience.
              </p>

              <div className={styles.aboutFeatures}>
                <div className={styles.aboutFeatureItem}>
                  <FaStar className={styles.aboutFeatureIcon} />
                  <div>
                    <h4>Professional Artists</h4>
                    <p>
                      Curated talent that meets the highest standards of the
                      industry, ensuring your event goes flawlessly.
                    </p>
                  </div>
                </div>
                <div className={styles.aboutFeatureItem}>
                  <FaMusic className={styles.aboutFeatureIcon} />
                  <div>
                    <h4>Passionate Performances</h4>
                    <p>
                      Every song, every beat is delivered with unmatched passion
                      to make your moments truly memorable.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="btn btn-secondary rounded-full">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section className={styles.testimonialsSection} ref={testimonialsRef}>
        <div className="container">
          <div className={`section-header ${styles.animateOnScroll}`}>
            <span className="section-tag">Testimonial</span>
            <h2 className="section-title">What Clients Say About ArtistVibes</h2>
            <p className="section-subtitle">
              Real feedback from our talented artists and collaborators.
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className={`${styles.testimonialCard} ${styles.animateOnScroll} ${
                  index === 0 ? styles.animateDelay1 :
                  index === 1 ? styles.animateDelay2 : styles.animateDelay3
                }`}
              >
                <span className={styles.testimonialQuoteMark}>&ldquo;</span>
                <div className={styles.testimonialStars}>
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className={styles.testimonialText}>{t.content}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={styles.testimonialName}>{t.name}</h4>
                    <span className={styles.testimonialRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />

      {/* Booking Modal */}
      {modalOpen && (
        <BookingModal
          onClose={() => setModalOpen(false)}
          artistName={selectedArtist?.name}
          artistId={selectedArtist?.id}
        />
      )}
    </>
  );
}
