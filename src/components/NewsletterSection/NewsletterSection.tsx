"use client";

import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaCheck } from "react-icons/fa";
import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className={styles.section}>
      {/* Background decoration */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGlowRight} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          {/* Left content */}
          <div className={styles.textSide}>
            <div className={styles.iconWrap}>
              <FaEnvelope className={styles.icon} />
            </div>
            <span className={styles.tag}>Stay Tuned With Us</span>
            <h2 className={styles.title}>
              Be the first to grab<br />
              this <span className={styles.titleAccent}>opportunity!</span>
            </h2>
            <p className={styles.subtitle}>
              Subscribe to get exclusive access to inspiring content, news,
              and special offers before anyone else.
            </p>
          </div>

          {/* Right form */}
          <div className={styles.formSide}>
            {subscribed ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <FaCheck />
                </div>
                <div>
                  <p className={styles.successTitle}>You&apos;re subscribed!</p>
                  <p className={styles.successDesc}>Welcome aboard. Check your inbox soon.</p>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.inputGroup}>
                  <div className={styles.inputWrap}>
                    <FaEnvelope className={styles.inputIcon} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                      placeholder="Enter your email address"
                      className={styles.input}
                      aria-label="Email address"
                    />
                  </div>
                  <button onClick={handleSubscribe} className={styles.submitBtn}>
                    <span>Subscribe</span>
                    <FaPaperPlane className={styles.submitIcon} />
                  </button>
                </div>
                <p className={styles.disclaimer}>
                  🔒 No spam, unsubscribe at any time. Your privacy matters.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
