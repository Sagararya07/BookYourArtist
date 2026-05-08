import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.testimonial.deleteMany();
  await prisma.bookingLead.deleteMany();
  await prisma.contactMessage.deleteMany();
  await prisma.artist.deleteMany();

  // Seed Artists
  const artists = await prisma.artist.createMany({
    data: [
      // --- EXCLUSIVE ARTISTS ---
      {
        name: 'DJ Arjun Mehta',
        category: 'DJ',
        location: 'Mumbai',
        bio: 'Award-winning DJ with 10+ years of experience. Performed at 500+ events across India including major Bollywood parties and corporate galas.',
        price: '₹50,000 onwards',
        imageUrl: '/images/artists/dj-arjun.jpg',
        isExclusive: true,
        isFeatured: true,
        rating: 4.9,
        eventsCount: 520,
      },
      {
        name: 'Priya Sharma',
        category: 'Singer',
        location: 'Mumbai',
        bio: 'Bollywood playback singer turned live performer. Captivating voice perfect for weddings, concerts and corporate events.',
        price: '₹80,000 onwards',
        imageUrl: '/images/artists/priya-sharma.jpg',
        isExclusive: true,
        isFeatured: true,
        rating: 4.8,
        eventsCount: 300,
      },
      {
        name: 'The Rhythm Band',
        category: 'Band',
        location: 'Mumbai',
        bio: 'A 6-member versatile band performing Bollywood, Sufi, Rock and Pop. The complete entertainment package for any grand event.',
        price: '₹1,20,000 onwards',
        imageUrl: '/images/artists/rhythm-band.jpg',
        isExclusive: true,
        isFeatured: true,
        rating: 4.9,
        eventsCount: 180,
      },

      // --- FEATURED ARTISTS ---
      {
        name: 'Rahul Verma',
        category: 'Comedian',
        location: 'Mumbai',
        bio: 'Stand-up comedian known for his clean yet hilarious corporate & family shows. Regular on leading OTT platforms.',
        price: '₹40,000 onwards',
        imageUrl: '/images/artists/rahul-verma.jpg',
        isExclusive: false,
        isFeatured: true,
        rating: 4.7,
        eventsCount: 250,
      },

      // --- REGULAR ARTISTS ---
      {
        name: 'Sneha Patel',
        category: 'Dancer',
        location: 'Mumbai',
        bio: 'Classical and contemporary dancer with expertise in Bharatanatyam, Kathak and Bollywood fusion. Perfect for weddings and cultural events.',
        price: '₹25,000 onwards',
        imageUrl: '/images/artists/sneha-patel.jpg',
        isExclusive: false,
        isFeatured: false,
        rating: 4.6,
        eventsCount: 150,
      },
      {
        name: 'Vikram Anchor',
        category: 'Anchor',
        location: 'Mumbai',
        bio: 'Bilingual anchor (Hindi & English) with a flair for corporate events, weddings and award ceremonies. 200+ events hosted.',
        price: '₹20,000 onwards',
        imageUrl: '/images/artists/vikram-anchor.jpg',
        isExclusive: false,
        isFeatured: false,
        rating: 4.5,
        eventsCount: 210,
      },
      {
        name: 'Kabir Rao',
        category: 'Musician',
        location: 'Pune',
        bio: 'Multi-instrumentalist proficient in guitar, sitar and keyboard. Soulful performances for intimate gatherings and large events alike.',
        price: '₹30,000 onwards',
        imageUrl: '/images/artists/kabir-rao.jpg',
        isExclusive: false,
        isFeatured: false,
        rating: 4.7,
        eventsCount: 130,
      },
      {
        name: 'The Great Zario',
        category: 'Magician',
        location: 'Mumbai',
        bio: 'Mesmerizing magician and illusionist. Specialises in stage magic, close-up magic and grand illusions for all ages.',
        price: '₹35,000 onwards',
        imageUrl: '/images/artists/zario-magic.jpg',
        isExclusive: false,
        isFeatured: false,
        rating: 4.8,
        eventsCount: 190,
      },
      {
        name: 'Aisha Khan',
        category: 'Singer',
        location: 'Mumbai',
        bio: 'Soulful ghazal and sufi singer. Her performances create a magical atmosphere at weddings and private events.',
        price: '₹45,000 onwards',
        imageUrl: '/images/artists/aisha-khan.jpg',
        isExclusive: false,
        isFeatured: false,
        rating: 4.6,
        eventsCount: 110,
      },
      {
        name: 'Rohan Kapoor',
        category: 'Stand-up Comic',
        location: 'Mumbai',
        bio: 'Fresh and witty stand-up comic known for observational humour. Perfect for college fests and corporate nights.',
        price: '₹15,000 onwards',
        imageUrl: '/images/artists/rohan-comic.jpg',
        isExclusive: false,
        isFeatured: false,
        rating: 4.4,
        eventsCount: 80,
      },
      {
        name: 'DJ Nisha',
        category: 'DJ',
        location: 'Delhi',
        bio: 'One of India\'s top female DJs. Specialises in EDM, Bollywood remix and retro nights. High energy performances guaranteed.',
        price: '₹40,000 onwards',
        imageUrl: '/images/artists/dj-nisha.jpg',
        isExclusive: false,
        isFeatured: false,
        rating: 4.8,
        eventsCount: 320,
      },
      {
        name: 'Nalini Dance Troupe',
        category: 'Dancer',
        location: 'Mumbai',
        bio: 'A 5-member professional dance troupe performing folk, Bollywood and fusion styles. A visual treat for any event.',
        price: '₹60,000 onwards',
        imageUrl: '/images/artists/nalini-troupe.jpg',
        isExclusive: false,
        isFeatured: false,
        rating: 4.7,
        eventsCount: 95,
      },
    ],
  });

  // Seed Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Anita Desai',
        role: 'Wedding Client',
        content: 'BookYourArtist made our wedding absolutely unforgettable! DJ Arjun kept everyone on the dance floor all night. The booking process was smooth and the team was super responsive.',
        rating: 5,
        imageUrl: '',
        isActive: true,
      },
      {
        name: 'Rajesh Kumar',
        role: 'Corporate Event Manager, TechCorp India',
        content: 'We booked Rahul Verma for our annual corporate night. He had 300 employees laughing non-stop! Highly professional service from BookYourArtist.',
        rating: 5,
        imageUrl: '',
        isActive: true,
      },
      {
        name: 'Pooja Mehta',
        role: 'Birthday Party Host',
        content: 'The Rhythm Band was simply outstanding at my 30th birthday bash. They played everything from Bollywood to English hits. Will definitely book again!',
        rating: 5,
        imageUrl: '',
        isActive: true,
      },
      {
        name: 'Siddharth Nair',
        role: 'College Fest Organiser, Mumbai University',
        content: 'Booked two artists for our college fest through BookYourArtist. Zero hassle, amazing coordination, and the artists were fantastic. 10/10!',
        rating: 5,
        imageUrl: '',
        isActive: true,
      },
    ],
  });

  console.log(`✅ Seeded ${artists.count} artists and 4 testimonials.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
