'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaInstagram, FaFacebookF, FaYoutube, FaHome, FaInfoCircle, FaUsers, FaPhoneAlt } from 'react-icons/fa';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Home', icon: <FaHome /> },
  { href: '/about', label: 'About Us', icon: <FaInfoCircle /> },
  { href: '/artists', label: 'Book Artists', icon: <FaUsers /> },
  { href: '/contact', label: 'Contact Us', icon: <FaPhoneAlt /> },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname.startsWith('/admin') && href !== pathname) {
      if (!window.confirm("Do you want to logout and leave the admin panel?")) {
        e.preventDefault();
      }
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.socialWrap}>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com/artistvibes_entertainment" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.facebook.com/people/Artistvibes-Entertainment/61590622793617/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://youtube.com/@ArtistvibesEntertainment" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
          <Link href="/" className={styles.logo} onClick={(e) => handleLinkClick(e, '/')}>
            <img src="/logo.png" alt="Artistvibes Entertainment" className={styles.logoImg} />
          </Link>
          <div className={styles.topRight}>
            <Link href="/contact" className={`btn ${styles.contactBtn}`} onClick={(e) => handleLinkClick(e, '/contact')}>Get Started</Link>
          </div>
        </div>
      </div>

      {/* MAIN NAV BAR */}
      <nav className={styles.navBar}>
        <div className={styles.navInner}>
          {/* Mobile: show logo in navbar */}
          <Link href="/" className={styles.mobileLogo} onClick={(e) => handleLinkClick(e, '/')}>
            <img src="/logo.png" alt="Artistvibes Entertainment" className={styles.mobileLogoImg} />
          </Link>

          <div className={styles.navLinks}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span className={styles.navIcon}>{link.icon}</span>
                  <span className={styles.navLabel}>{link.label}</span>
                  {isActive && <span className={styles.navActiveDot} />}
                </Link>
              );
            })}
          </div>

          <button
            suppressHydrationWarning
            className={styles.hamburger}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`${styles.mobileLink} ${isActive ? styles.active : ''}`}
                onClick={(e) => {
                  handleLinkClick(e, link.href);
                  if (!e.defaultPrevented) {
                    setMenuOpen(false);
                  }
                }}
              >
                <span className={styles.navIcon}>{link.icon}</span>
                <span className={styles.navLabel}>{link.label}</span>
                {isActive && <span className={styles.navActiveDot} />}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
