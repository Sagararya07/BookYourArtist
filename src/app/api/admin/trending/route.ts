import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const trending = await prisma.artist.findMany({
      where: { isTrending: true },
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ success: true, data: trending });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const trending = await prisma.trendingArtist.create({
      data: {
        name: body.name,
        imageUrl: body.imageUrl,
        order: parseInt(body.order) || 0,
        isActive: body.isActive ?? true,
      },
    });
    return NextResponse.json({ success: true, data: trending });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
