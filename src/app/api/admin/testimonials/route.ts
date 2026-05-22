import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: testimonials });
  } catch (err) {
    console.error('[Admin GET testimonials]', err);
    return NextResponse.json({ success: false, error: 'Failed to fetch.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { name, role, content, rating, imageUrl, isActive } = body;

    if (!name || !content) {
      return NextResponse.json({ success: false, error: 'Name and content are required.' }, { status: 400 });
    }

    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        role: role || '',
        content,
        rating: rating ? parseInt(rating) : 5,
        imageUrl: imageUrl || '',
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json({ success: true, data: testimonial });
  } catch (err) {
    console.error('[Admin POST testimonial]', err);
    return NextResponse.json({ success: false, error: 'Failed to create testimonial.' }, { status: 500 });
  }
}
