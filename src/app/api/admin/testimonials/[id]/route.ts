import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> | { id: string } }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    const body = await req.json();
    const { name, role, content, rating, imageUrl, isActive } = body;

    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: {
        name,
        role,
        content,
        rating: rating ? parseInt(rating) : 5,
        imageUrl,
        isActive,
      },
    });

    return NextResponse.json({ success: true, data: testimonial });
  } catch (err) {
    console.error('[Admin PUT testimonial]', err);
    return NextResponse.json({ success: false, error: err instanceof Error ? err.message : 'Failed to update testimonial.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> | { id: string } }) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    await prisma.testimonial.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Admin DELETE testimonial]', err);
    return NextResponse.json({ success: false, error: 'Failed to delete testimonial.' }, { status: 500 });
  }
}
