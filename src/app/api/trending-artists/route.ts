import { NextResponse } from 'next/server';
import { prisma, withRetry } from '@/lib/prisma';

export async function GET() {
  try {
    const trendingArtists = await withRetry(() =>
      prisma.artist.findMany({
        where: { isTrending: true, isActive: true },
        orderBy: { order: 'asc' },
        take: 5, // We only need 5 for the collage
      })
    );
    return NextResponse.json({ success: true, data: trendingArtists });
  } catch (error) {
    console.error('Error fetching trending artists:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch trending artists' }, { status: 500 });
  }
}
