import { Metadata } from 'next';
import Link from 'next/link';
import { FaTrophy, FaUsers, FaGlobe, FaHandshake, FaMusic, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Artistvibes Entertainment, India\'s premier 360° artist, celebrity & live show management company for weddings, corporate events, college festivals, and ticketed concerts.',
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-[rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#10101a] z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,168,67,0.1)_0%,_transparent_70%)] pointer-events-none"></div>
        
        <div className="container relative z-10 text-center">
          <span className="section-tag animate-fadeIn">Our Story</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6 animate-slideUp">
            The Vision Behind <span className="text-gradient">Artistvibes Entertainment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
            We are India&apos;s premier 360° artist, celebrity, and live show management company — dedicated to delivering curated talent, iconic stage moments, and bespoke luxury entertainment experiences across India and globally.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section bg-[#0a0a0f] relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-[#d4a843] rounded-full blur-[180px] opacity-[0.03] pointer-events-none"></div>
        
        <div className="container relative z-10">
          <div className="grid-2 items-center">
            <div className="order-2 md:order-1 relative animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div style={{ height: '550px', borderRadius: '2rem', overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop" 
                  alt="Stage Performance" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.9), transparent, transparent)' }}></div>
                <div className="absolute" style={{ bottom: '2.5rem', left: '2rem', right: '2rem' }}>
                  <div className="card-glass p-8 border border-white/10">
                    <p className="text-xl font-serif italic text-white leading-relaxed">
                      &ldquo;To redefine live entertainment by connecting clients with the finest artists and creating memorable experiences through creativity, professionalism, and flawless execution.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex flex-col gap-10 animate-slideUp" style={{ animationDelay: '0.5s' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                   <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: 'rgba(212,168,67,0.1)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843', fontWeight: 'bold', fontSize: '1.2rem' }}>01</div>
                   <h2 className="font-display text-4xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed pl-4 border-l-2 border-[#d4a843]/30 ml-[1.75rem]">
                  To redefine live entertainment by connecting clients with the finest artists and creating memorable experiences through creativity, professionalism, and flawless execution. We deliver 250+ shows spanning weddings, corporate events, college festivals, private parties, mehfils, and ticketed concerts.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                   <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: 'rgba(212,168,67,0.1)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843', fontWeight: 'bold', fontSize: '1.2rem' }}>02</div>
                   <h2 className="font-display text-4xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-400 leading-relaxed pl-4 border-l-2 border-[#d4a843]/30 ml-[1.75rem]">
                  To become India&apos;s most trusted and globally recognized artist &amp; celebrity management brand for premium live entertainment experiences — spanning India, Sri Lanka, UAE, Bali, Saudi Arabia, Bangkok, and Australia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Detailed) */}
      <section className="section bg-[#10101a] border-y border-[rgba(255,255,255,0.05)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,168,67,0.05)_0%,_transparent_50%)]"></div>
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <span className="section-tag">Core Values</span>
            <h2 className="section-title">The Artistvibes Edge</h2>
            <div className="divider-gold"></div>
          </div>

          <div className="grid-3">
            <div className="card-glass p-10 flex flex-col hover:border-[#d4a843] transition-all duration-300 group" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <div style={{ width: '4.5rem', height: '4.5rem', borderRadius: '1.25rem', backgroundColor: 'rgba(212,168,67,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', transition: 'all 0.3s ease' }} className="group-hover:bg-[#d4a843] group-hover:text-black">
                <FaCheckCircle className="text-3xl text-[#d4a843] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Verified Talent</h3>
              <p className="text-gray-400 leading-relaxed">
                We strictly vet every artist for quality, punctuality, and professionalism, ensuring you only book the best in the business.
              </p>
            </div>

            <div className="card-glass p-10 flex flex-col hover:border-[#d4a843] transition-all duration-300 group" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <div style={{ width: '4.5rem', height: '4.5rem', borderRadius: '1.25rem', backgroundColor: 'rgba(212,168,67,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', transition: 'all 0.3s ease' }} className="group-hover:bg-[#d4a843] group-hover:text-black">
                <FaHandshake className="text-3xl text-[#d4a843] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">True Transparency</h3>
              <p className="text-gray-400 leading-relaxed">
                Direct artist communication and upfront pricing. No hidden commissions, no surprises—just honest, premium service.
              </p>
            </div>

            <div className="card-glass p-10 flex flex-col hover:border-[#d4a843] transition-all duration-300 group" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <div style={{ width: '4.5rem', height: '4.5rem', borderRadius: '1.25rem', backgroundColor: 'rgba(212,168,67,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', transition: 'all 0.3s ease' }} className="group-hover:bg-[#d4a843] group-hover:text-black">
                <FaMusic className="text-3xl text-[#d4a843] group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">End-to-End Care</h3>
              <p className="text-gray-400 leading-relaxed">
                Our dedicated event managers handle all technical and logistical details, leaving you free to enjoy the performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="section bg-[#0a0a0f] relative">
        <div className="container">
          <div className="text-center mb-20">
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">The Minds Behind The Magic</h2>
            <div className="divider-gold"></div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Founder */}
            <div className="group text-center animate-slideUp" style={{ animationDelay: '0.2s', maxWidth: '280px' }}>
              <div className="relative mx-auto mb-8 transition-all duration-500" 
                   style={{ width: '15rem', height: '15rem', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(212,168,67,0.2)', padding: '10px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
                   <img 
                    src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEs8Iy1S8p9fDHnkBwrMsjAY-Eh6Ri0FC0URCcKF5i4Ht7s1maxb1mjFT93MSbJqQDgqc8AHfqR0qTH2nkCs0cu05wkmPuXoBwIEayxvlK-Qk_7rEhhfnTfZ4-A6iGfvf6U_GU=w578-h240-k-no" 
                    alt="Abhishek Pandey - Founder & Talent Strategist" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#d4a843] transition-all duration-500"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Abhishek Pandey</h3>
              <p className="text-[#d4a843] font-bold text-sm tracking-[0.2em] uppercase mb-4">Founder &amp; Talent Strategist</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">Visionary live experience architect transforming India&apos;s entertainment landscape with premium artist &amp; celebrity management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#14141f] to-[#0a0a0f] border-t border-[rgba(255,255,255,0.05)] text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_center,_rgba(212,168,67,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="container relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Ready to Elevate Your Event?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful event hosts, wedding planners, and corporates who trust Artistvibes Entertainment for world-class live entertainment.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg px-12">
            Let's Start Planning
          </Link>
        </div>
      </section>
    </>
  );
}
