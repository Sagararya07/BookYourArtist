import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/artists/[id]
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const artist = await prisma.artist.findUnique({
      where: { id: parseInt(id) },
    });

    if (!artist) {
      return NextResponse.json({ success: false, error: 'Artist not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: artist });
  } catch (err) {
    console.error('[GET /api/artists/[id]]', err);
    return NextResponse.json({ success: false, error: 'Failed to fetch artist' }, { status: 500 });
  }
}
