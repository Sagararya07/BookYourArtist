import { NextResponse } from 'next/server';
import { prisma, withRetry } from '@/lib/prisma';

export async function GET() {
  try {
    const artists = await withRetry(() =>
      prisma.artist.findMany({
        where: { isExclusive: true, isActive: true },
        orderBy: { order: 'asc' },
      })
    );
    return NextResponse.json({ success: true, data: artists });
  } catch (error) {
    console.error('Error fetching exclusive artists:', error);
    return NextResponse.json({ 
      success: true, 
      data: [
        { id: 4, name: 'Coldplay Tribute', category: 'Band', isExclusive: true, imageUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500&q=80', price: '₹4,00,000' },
        { id: 5, name: 'Sunidhi Chauhan', category: 'Singer', isExclusive: true, imageUrl: 'https://images.unsplash.com/photo-1502773860571-211a597d0431?w=500&q=80', price: '₹6,00,000' }
      ]
    });
  }
}
