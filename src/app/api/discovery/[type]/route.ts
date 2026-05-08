import { NextResponse } from 'next/server';
import { prisma, withRetry } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  try {
    const where: any = { isActive: true };

    if (type === 'trending') {
      where.isTrending = true;
    } else if (type === 'exclusive') {
      where.isExclusive = true;
    } else if (type === 'featured') {
      where.isFeatured = true;
    } else {
      return NextResponse.json({ success: false, message: 'Invalid type' }, { status: 400 });
    }

    if (category && category !== 'ALL') {
      where.category = {
        equals: category,
        mode: 'insensitive',
      };
    }

    const artists = await withRetry(() =>
      prisma.artist.findMany({
        where,
        orderBy: { order: 'asc' },
      })
    );

    return NextResponse.json({ success: true, data: artists });
  } catch (error) {
    console.error(`Error fetching ${type} artists:`, error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
