import { NextResponse } from 'next/server';
import { prisma, withRetry } from '@/lib/prisma';

export async function GET() {
  try {
    const trendingArtists = await withRetry(() =>
      prisma.artist.findMany({
        where: { isTrending: true, isActive: true },
        orderBy: { order: 'asc' },
        // no take limit — fetch all trending artists for cycling
      })
    );
    return NextResponse.json({ success: true, data: trendingArtists });
  } catch (error) {
    console.error('Error fetching trending artists:', error);
    return NextResponse.json({ 
      success: true, 
      data: [
        { id: 1, name: 'DJ Snake', category: 'DJ', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=80', price: '₹1,50,000' },
        { id: 2, name: 'Arijit Singh', category: 'Singer', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?w=500&q=80', price: '₹5,00,000' },
        { id: 3, name: 'Zakir Khan', category: 'Stand-up', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=500&q=80', price: '₹2,50,000' }
      ]
    });
  }
}
