'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: '', phone: '', message: '' });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-[rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#10101a] z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,168,67,0.08)_0%,_transparent_70%)] pointer-events-none"></div>
        
        <div className="container relative z-10 text-center">
          <span className="section-tag animate-fadeIn">Get In Touch</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6 animate-slideUp">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Whether you're planning a wedding, a corporate gala, or an intimate party, our team is here to help you find the perfect artist.
          </p>
        </div>
      </section>

      <section className="section bg-[#0a0a0f] relative overflow-hidden">
        {/* Animated Background Accents */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#d4a843] rounded-full blur-[150px] opacity-[0.03] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#6c63ff] rounded-full blur-[150px] opacity-[0.02] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container relative z-10">
          <div className="grid-2">
            
            {/* CONTACT DETAILS */}
            <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="mb-10">
                <h2 className="font-display text-4xl font-bold text-white mb-4">Our Office</h2>
                <p className="text-gray-400">Visit us or reach out through any of these channels.</p>
              </div>
              
              <div className="flex flex-col gap-6 mb-10">
                {/* Location Card */}
                <div className="card-glass p-6 group hover:border-[#d4a843]/50 transition-all duration-300" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ 
                    width: '4rem', height: '4rem', borderRadius: '1rem', backgroundColor: 'rgba(212,168,67,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843',
                    border: '1px solid rgba(212,168,67,0.2)', flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }} className="group-hover:bg-[#d4a843] group-hover:text-black">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#d4a843] transition-colors">Mumbai Headquarters</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Suite 405, Premium Business Park, Mumbai, MH 400001
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="card-glass p-6 group hover:border-[#d4a843]/50 transition-all duration-300" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ 
                    width: '4rem', height: '4rem', borderRadius: '1rem', backgroundColor: 'rgba(212,168,67,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843',
                    border: '1px solid rgba(212,168,67,0.2)', flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }} className="group-hover:bg-[#d4a843] group-hover:text-black">
                    <FaPhoneAlt className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#d4a843] transition-colors">Call or WhatsApp</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                      <a href="tel:+918956059005" className="text-xl font-display font-bold text-white hover:text-[#d4a843] transition-colors">+91 89560 59005</a>
                      <a href="https://wa.me/918956059005" target="_blank" rel="noreferrer" 
                         style={{ 
                           display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', 
                           borderRadius: '0.5rem', backgroundColor: 'rgba(37,211,102,0.1)', color: '#25d366', 
                           fontSize: '0.7rem', fontWeight: '800', border: '1px solid rgba(37,211,102,0.3)',
                           letterSpacing: '0.05em'
                         }}
                         className="hover:bg-[#25d366] hover:text-black transition-all duration-300">
                        <FaWhatsapp className="text-sm" /> CHAT
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="card-glass p-6 group hover:border-[#d4a843]/50 transition-all duration-300" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ 
                    width: '4rem', height: '4rem', borderRadius: '1rem', backgroundColor: 'rgba(212,168,67,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843',
                    border: '1px solid rgba(212,168,67,0.2)', flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }} className="group-hover:bg-[#d4a843] group-hover:text-black">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#d4a843] transition-colors">Email Support</h4>
                    <a href="mailto:artistmanagerabhishek@gmail.com" className="text-gray-400 hover:text-white transition-colors border-b border-gray-700 pb-0.5">artistmanagerabhishek@gmail.com</a>
                  </div>
                </div>
              </div>


              {/* MAP PLACEHOLDER */}
              <div className="hover-reveal-container overflow-hidden" style={{ width: '100%', height: '18rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative' }}>
                <div className="hover-reveal-content" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                  <a href="https://maps.google.com/?q=Mumbai+Maharashtra+400001" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    View on Google Maps
                  </a>
                </div>
                <img 
                  src="/location.jpg" 
                  alt="Mumbai Office Map" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                />
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
              <div className="card-glass p-10" style={{ position: 'relative', overflow: 'hidden', border: '1px solid rgba(212,168,67,0.15)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                {/* Subtle background glow */}
                <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '60%', height: '60%', backgroundColor: 'rgba(212,168,67,0.05)', filter: 'blur(80px)', borderRadius: '50%', zIndex: 0 }}></div>
                
                <div className="mb-10 relative z-10">
                  <h2 className="font-display text-4xl font-bold text-white mb-2">Send a Message</h2>
                  <p className="text-gray-400">Our booking experts typically respond within 2 hours.</p>
                </div>

                {success ? (
                  <div className="text-center py-12 animate-fadeIn relative z-10">
                    <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', backgroundColor: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid rgba(34,197,94,0.3)' }}>
                      <FaCheckCircle className="text-5xl text-[#22c55e]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Inquiry Received</h3>
                    <p className="text-gray-400 mb-10 leading-relaxed">Thank you for reaching out. We've sent a confirmation email to our team and will get back to you shortly.</p>
                    <button onClick={() => setSuccess(false)} className="btn btn-secondary w-full">Send Another Inquiry</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {error && <div className="alert alert-error">{error}</div>}
                    
                    <div className="form-group mb-0">
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '800', marginBottom: '0.75rem', display: 'block' }}>Full Name</label>
                      <input 
                        name="name" 
                        className="form-control" 
                        placeholder="e.g. Rahul Sharma" 
                        value={form.name} 
                        onChange={handleChange} 
                        required 
                        style={{ padding: '1.2rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', fontSize: '1rem' }}
                      />
                    </div>
                    
                    <div className="form-group mb-0">
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '800', marginBottom: '0.75rem', display: 'block' }}>Phone Number</label>
                      <input 
                        name="phone" 
                        className="form-control" 
                        placeholder="e.g. +91 98765 43210" 
                        value={form.phone} 
                        onChange={handleChange} 
                        required 
                        style={{ padding: '1.2rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', fontSize: '1rem' }}
                      />
                    </div>
                    
                    <div className="form-group mb-0">
                      <label className="form-label" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '800', marginBottom: '0.75rem', display: 'block' }}>Your Inquiry</label>
                      <textarea 
                        name="message" 
                        className="form-control" 
                        placeholder="Describe your event and what kind of artist you are looking for..." 
                        value={form.message} 
                        onChange={handleChange} 
                        rows={5}
                        required 
                        style={{ padding: '1.2rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', fontSize: '1rem', resize: 'none' }}
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-full" disabled={loading} style={{ height: '4rem', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                      {loading ? 'Processing...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
