import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

// GET /api/admin/artists — list all (including inactive)
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const artists = await prisma.artist.findMany({
      orderBy: [{ isExclusive: 'desc' }, { isFeatured: 'desc' }, { createdAt: 'desc' }],
    });
    return NextResponse.json({ success: true, data: artists });
  } catch (err) {
    console.error('[Admin GET artists]', err);
    return NextResponse.json({ success: false, error: 'Failed to fetch.' }, { status: 500 });
  }
}

// POST /api/admin/artists — create artist
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      name, category, location, bio, price,
      imageUrl, isExclusive, isFeatured, isActive,
      rating, eventsCount, videoUrl,
    } = body;

    if (!name || !category) {
      return NextResponse.json({ success: false, error: 'Name and category are required.' }, { status: 400 });
    }

    const artist = await prisma.artist.create({
      data: {
        name,
        category,
        location: location || 'Mumbai',
        bio: bio || '',
        price: price || 'On Request',
        imageUrl: imageUrl || '/images/placeholder-artist.jpg',
        isExclusive: isExclusive ?? false,
        isFeatured: isFeatured ?? false,
        isActive: isActive ?? true,
        rating: rating ? parseFloat(rating) : 4.5,
        eventsCount: eventsCount ? parseInt(eventsCount) : 0,
        videoUrl: videoUrl || '',
      },
    });

    return NextResponse.json({ success: true, data: artist });
  } catch (err) {
    console.error('[Admin POST artist]', err);
    return NextResponse.json({ success: false, error: 'Failed to create artist.' }, { status: 500 });
  }
}
