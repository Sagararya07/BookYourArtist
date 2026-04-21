import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id: paramId } = await context.params;
    const body = await req.json();
    const id = parseInt(paramId);
    const updated = await prisma.exclusiveArtist.update({
      where: { id },
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
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id: paramId } = await context.params;
    const id = parseInt(paramId);
    await prisma.exclusiveArtist.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
