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
    return NextResponse.json({ success: false, message: 'Failed to fetch exclusive artists' }, { status: 500 });
  }
}
