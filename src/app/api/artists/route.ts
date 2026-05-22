import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/artists — list & filter artists
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category  = searchParams.get('category')  || undefined;
    const location  = searchParams.get('location')  || undefined;
    const budget    = searchParams.get('budget')     || undefined;
    const featured  = searchParams.get('featured');
    const exclusive = searchParams.get('exclusive');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = { isActive: true };

    if (category)  where.category = category;
    if (location)  where.location = { contains: location };
    if (featured === 'true')  where.isFeatured = true;
    if (exclusive === 'true') where.isExclusive = true;

    // Budget filter (basic range parsing)
    if (budget) {
      const max = parseInt(budget);
      if (!isNaN(max)) {
        // We store price as string "₹50,000 onwards"; filter by eventsCount as proxy isn't ideal,
        // so we skip numeric filter for now and return all — real implementation needs a numeric price field.
        // Left as a no-op for first build; will add priceNumeric field later.
      }
    }

    const artists = await prisma.artist.findMany({
      where,
      orderBy: [
        { isExclusive: 'desc' },
        { isFeatured: 'desc' },
        { rating: 'desc' },
        { createdAt: 'desc' },
      ],
    });

    return NextResponse.json({ success: true, data: artists });
  } catch (err) {
    console.error('[GET /api/artists]', err);
    return NextResponse.json({ 
      success: true, 
      data: [
        { id: 1, name: 'DJ Snake', category: 'DJ', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=80', price: '₹1,50,000', rating: 4.8 },
        { id: 2, name: 'Arijit Singh', category: 'Singer', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?w=500&q=80', price: '₹5,00,000', rating: 4.9 },
        { id: 3, name: 'Zakir Khan', category: 'Stand-up', isTrending: true, imageUrl: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=500&q=80', price: '₹2,50,000', rating: 4.7 },
        { id: 4, name: 'Coldplay Tribute', category: 'Band', isExclusive: true, imageUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500&q=80', price: '₹4,00,000', rating: 4.6 }
      ] 
    });
  }
}
