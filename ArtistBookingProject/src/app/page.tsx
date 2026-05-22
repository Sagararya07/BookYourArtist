'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle, FaStar, FaMusic, FaGlassCheers, FaBuilding, FaGraduationCap, FaPhoneAlt, FaArrowRight, FaPlayCircle, FaCamera, FaHeadphones, FaGuitar, FaMicrophoneAlt, FaUserFriends, FaLaughBeam, FaMagic, FaMicrophone } from 'react-icons/fa';
import BookingModal from '@/components/BookingModal/BookingModal';

export default function Home() {
  const [featuredArtists, setFeaturedArtists] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState<{ id?: number; name?: string } | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [artistsRes] = await Promise.all([
          fetch('/api/artists?featured=true')
        ]);
        const artistsData = await artistsRes.json();
        if (artistsData.success) {
          setFeaturedArtists(artistsData.data.slice(0, 4)); // Only show top 4
        }

        setTestimonials([
          {
            id: 1,
            name: 'Hannah Jahan',
            role: 'Event Manager',
            content: 'Nikita’s voice lit up the entire evening. Her energy and stage presence made the event unforgettable.',
            rating: 5,
          },
          {
            id: 2,
            name: 'Talia Varen',
            role: 'Event Organizer',
            content: 'The guitar riffs electrified the crowd, blending precision with passion. Truly turned every performance into an experience.',
            rating: 5,
          },
          {
            id: 3,
            name: 'Arden Kale',
            role: 'Music Producer',
            content: 'Production skills shaped every beat to perfection. Transformed simple sounds into cinematic masterpieces.',
            rating: 5,
          }
        ]);
      } catch (err) {
        console.error('Failed to fetch home data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const openBooking = (artist?: any) => {
    if (artist) {
      setSelectedArtist({ id: artist.id, name: artist.name });
    } else {
      setSelectedArtist(null);
    }
    setModalOpen(true);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden bg-[#1a1a2e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop"
            alt="Live Concert"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <span className="text-gold font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Trust + Ease</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Book Top <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e67e22] to-[#f39c12]">Artists</span> For <br />Your Events
            </h1>
            <p className="text-lg text-gray-300 max-w-lg mb-10 border-l-2 border-[#e67e22] pl-4">
              Bringing soulful performances, heartfelt vocals, and electrifying stage energy to every event — creating moments that linger long after the final note fades.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/artists" className="btn btn-primary">
                Explore Artists
              </Link>
              <button onClick={() => openBooking()} className="btn btn-secondary">
                Book Now <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-end relative">
            <div className="relative w-80 h-[500px] rounded-full overflow-hidden border-2 border-[#e67e22]/30 shadow-[0_0_50px_rgba(230,126,34,0.2)]">
              <img src="https://images.unsplash.com/photo-1516280440502-12f8650f9689?q=80&w=1000&auto=format&fit=crop" alt="Artist" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
              <FaPlayCircle className="text-4xl text-[#e67e22]" />
              <div>
                <p className="text-white font-bold text-sm">Live Performances</p>
                <p className="text-gray-400 text-xs">Experience the energy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-[#16213e] relative">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Services</span>
            <h2 className="section-title">Music Artist Services</h2>
            <p className="section-subtitle">Experience soulful performances tailored for your event.</p>
          </div>

          <div className="w-full relative overflow-hidden group">
            <div className="flex animate-marquee gap-8 py-4 w-max hover:[animation-play-state:paused]">
              {[
                { num: '01', title: 'DJ', icon: <FaHeadphones />, desc: 'Keep the dance floor alive with professional DJs spinning the best tracks for your event.' },
                { num: '02', title: 'Singer', icon: <FaMicrophoneAlt />, desc: 'Soulful vocals and energetic performances across multiple genres for an unforgettable night.' },
                { num: '03', title: 'Dancer', icon: <FaUserFriends />, desc: 'Captivating dance routines and choreographies that mesmerize and entertain the crowd.' },
                { num: '04', title: 'Comedian', icon: <FaLaughBeam />, desc: 'Bring joy and laughter to your audience with top stand-up comedians and humorists.' },
                { num: '05', title: 'Band', icon: <FaGuitar />, desc: 'Live musical bands delivering authentic, powerful, and immersive musical experiences.' },
                { num: '06', title: 'Anchor', icon: <FaMicrophone />, desc: 'Engaging, charismatic hosts and emcees to keep your event flowing smoothly.' },
                { num: '07', title: 'Musician', icon: <FaMusic />, desc: 'Talented instrumentalists creating the perfect ambiance for intimate or grand events.' },
                { num: '08', title: 'Magician', icon: <FaMagic />, desc: 'Mind-bending illusions and interactive magic shows that leave guests spellbound.' },
                { num: '09', title: 'Stand-up Comic', icon: <FaLaughBeam />, desc: 'Hilarious, witty, and relatable stand-up routines for a night of endless laughs.' },
                // Duplicated set for seamless marquee loop
                { num: '01', title: 'DJ', icon: <FaHeadphones />, desc: 'Keep the dance floor alive with professional DJs spinning the best tracks for your event.' },
                { num: '02', title: 'Singer', icon: <FaMicrophoneAlt />, desc: 'Soulful vocals and energetic performances across multiple genres for an unforgettable night.' },
                { num: '03', title: 'Dancer', icon: <FaUserFriends />, desc: 'Captivating dance routines and choreographies that mesmerize and entertain the crowd.' },
                { num: '04', title: 'Comedian', icon: <FaLaughBeam />, desc: 'Bring joy and laughter to your audience with top stand-up comedians and humorists.' },
                { num: '05', title: 'Band', icon: <FaGuitar />, desc: 'Live musical bands delivering authentic, powerful, and immersive musical experiences.' },
                { num: '06', title: 'Anchor', icon: <FaMicrophone />, desc: 'Engaging, charismatic hosts and emcees to keep your event flowing smoothly.' },
                { num: '07', title: 'Musician', icon: <FaMusic />, desc: 'Talented instrumentalists creating the perfect ambiance for intimate or grand events.' },
                { num: '08', title: 'Magician', icon: <FaMagic />, desc: 'Mind-bending illusions and interactive magic shows that leave guests spellbound.' },
                { num: '09', title: 'Stand-up Comic', icon: <FaLaughBeam />, desc: 'Hilarious, witty, and relatable stand-up routines for a night of endless laughs.' }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-[#1e1e30] rounded-2xl p-8 relative text-center border border-white/5 hover:border-[#e67e22]/50 transition-colors flex flex-col items-center flex-shrink-0 w-[350px]"
                >
                  <div className="absolute text-6xl font-bold text-white/5 font-display select-none" style={{ top: '1.5rem', left: '2rem' }}>
                    {service.num}
                  </div>
                  <div className="bg-[#14141f] rounded-full flex items-center justify-center text-4xl mb-6 relative z-10 border border-white/5 text-[#e67e22]" style={{ width: '6rem', height: '6rem', flexShrink: 0 }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                  <p className="text-gray-400 mb-8 relative z-10 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <Link href="/about" className="btn btn-primary mt-auto relative z-10">
                    Know More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ABOUT / EXPERIENCE SECTION */}
      <section className="section bg-[#10101a] exclusive-section">
        <div className="container">
          <div className="grid-2 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=600&auto=format&fit=crop" alt="Performance" className="rounded-2xl w-full h-64 object-cover mt-8" />
                <img src="https://images.unsplash.com/photo-1540039155732-68473668fb85?q=80&w=600&auto=format&fit=crop" alt="Crowd" className="rounded-2xl w-full h-80 object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e67e22] text-white rounded-full flex flex-col items-center justify-center border-4 border-[#10101a] shadow-xl" style={{ width: '8rem', height: '8rem' }}>
                <span className="text-4xl font-bold font-display">10+</span>
                <span className="text-xs font-bold uppercase tracking-wide">Years Exp.</span>
              </div>
            </div>

            <div>
              <span className="section-tag mb-4">Experience About Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Bringing Emotions to Life Through Music</h2>
              <p className="text-gray-400 text-lg mb-8">
                From intimate acoustic evenings to grand stage performances, we deliver powerful acts and heartfelt music that connect with every audience.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-[#e67e22] text-2xl mt-1"><FaStar /></div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Professional Artists</h4>
                    <p className="text-gray-400">Curated talent that meets the highest standards of the industry, ensuring your event goes flawlessly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#e67e22] text-2xl mt-1"><FaMusic /></div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Passionate Performances</h4>
                    <p className="text-gray-400">Every song, every beat is delivered with unmatched passion to make your moments truly memorable.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/about" className="btn btn-secondary rounded-full">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#e67e22]/5 to-transparent pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Creating Unforgettable <br />Musical Moments</h2>
            <p className="section-subtitle">Every song, every stage, every heartbeat matters — because music is not just performance, it’s a shared emotion.</p>
          </div>

          <div className="grid-4 mt-12">
            {[
              { title: 'Verified Artists', desc: 'Captivating performances that light up every venue.', icon: <FaCheckCircle /> },
              { title: 'Hassle-free Booking', desc: 'Builds an instant connection through authentic energy.', icon: <FaMusic /> },
              { title: 'Trusted by Clients', desc: 'Curated experiences that fit each event’s mood perfectly.', icon: <FaStar /> },
              { title: 'Fast Response', desc: 'Dedicated support team ready to assist you anytime.', icon: <FaPhoneAlt /> }
            ].map((feature, idx) => (
              <div key={idx} className="card p-8 hover-reveal-container flex-col items-start">
                <div className="w-16 h-16 rounded-full bg-[#e67e22]/10 text-[#e67e22] flex items-center justify-center text-2xl mb-6 transition-colors" style={{ transition: 'all 0.3s' }}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="section bg-[#0a0a0f] relative">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonial</span>
            <h2 className="section-title">What Fans Say</h2>
            <p className="section-subtitle">Real words from audiences and event organizers.</p>
          </div>

          <div className="grid-3 mt-12">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-10 relative">
                <div className="absolute top-8 right-8 text-6xl text-[#e67e22]/10 font-display leading-none"></div>
                <div className="flex text-[#e67e22] mb-6 text-sm gap-1">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed italic mb-8 relative z-10 min-h-[120px]">
                  {t.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#d35400] to-[#f39c12] flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <span className="text-xs text-[#e67e22] uppercase tracking-widest">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} artistName={selectedArtist?.name} artistId={selectedArtist?.id} />}
    </>
  );
}

