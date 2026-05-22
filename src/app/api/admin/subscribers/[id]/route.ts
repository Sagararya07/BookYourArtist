import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) {
    return NextResponse.json({ success: false, error: 'Invalid ID' }, { status: 400 });
  }

  try {
    await prisma.newsletterSubscriber.delete({ where: { id: numericId } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Admin DELETE subscriber]', err);
    return NextResponse.json({ success: false, error: 'Failed to delete subscriber.' }, { status: 500 });
  }
}
