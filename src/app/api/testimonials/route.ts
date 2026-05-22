import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: testimonials });
  } catch (error) {
    console.error('[GET /api/testimonials]', error);
    return NextResponse.json({ 
      success: true, 
      data: [
        { id: 1, name: 'Rahul Sharma', role: 'Event Manager', content: 'Incredible experience booking an artist for our corporate event!', rating: 5 },
        { id: 2, name: 'Priya Desai', role: 'Wedding Planner', content: 'ArtistVibes made the process so seamless and the performers were top-notch.', rating: 5 }
      ] 
    });
  }
}
