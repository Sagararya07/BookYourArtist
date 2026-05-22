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
    const artists = await prisma.artist.findMany({
      where: { isExclusive: true },
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ success: true, data: artists });
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
    const artist = await prisma.exclusiveArtist.create({
      data: {
        name: body.name,
        category: body.category || 'Singer',
        location: body.location || 'Mumbai',
        bio: body.bio || '',
        price: body.price || 'On Request',
        imageUrl: body.imageUrl,
        rating: parseFloat(body.rating) || 5.0,
        order: parseInt(body.order) || 0,
        isActive: body.isActive ?? true,
      },
    });
    return NextResponse.json({ success: true, data: artist });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
