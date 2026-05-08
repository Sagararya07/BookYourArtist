import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

// PUT /api/admin/artists/[id] — update artist
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await req.json();

    const artist = await prisma.artist.update({
      where: { id: parseInt(id) },
      data: {
        ...body,
        rating:      body.rating      ? parseFloat(body.rating)      : undefined,
        eventsCount: body.eventsCount ? parseInt(body.eventsCount)    : undefined,
      },
    });

    return NextResponse.json({ success: true, data: artist });
  } catch (err) {
    console.error('[Admin PUT artist]', err);
    return NextResponse.json({ success: false, error: 'Failed to update artist.' }, { status: 500 });
  }
}

// DELETE /api/admin/artists/[id] — delete artist
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    await prisma.artist.delete({ where: { id: parseInt(id) } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Admin DELETE artist]', err);
    return NextResponse.json({ success: false, error: 'Failed to delete artist.' }, { status: 500 });
  }
}
