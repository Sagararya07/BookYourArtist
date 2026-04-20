"use client";

import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaCheck } from "react-icons/fa";
import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim() || !email.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      
      if (data.success) {
        setSubscribed(true);
        setTimeout(() => {
          setSubscribed(false);
          setEmail("");
        }, 5000);
      } else {
        setError(data.error || "Failed to subscribe");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
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
                      suppressHydrationWarning
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                      placeholder="Enter your email address"
                      className={styles.input}
                      aria-label="Email address"
                      disabled={loading}
                    />
                  </div>
                  <button
                    suppressHydrationWarning
                    onClick={handleSubscribe}
                    className={styles.submitBtn}
                    disabled={loading}
                  >
                    <span>{loading ? "Subscribing..." : "Subscribe"}</span>
                    <FaPaperPlane className={styles.submitIcon} />
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
