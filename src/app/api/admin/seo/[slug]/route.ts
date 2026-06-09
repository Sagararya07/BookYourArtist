import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

function revalidateSeoPage(path: string) {
  revalidatePath(path || '/');
  revalidatePath('/sitemap.xml');
}

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    const page = await prisma.pageSeo.findUnique({
      where: { slug: resolvedParams.slug },
    });

    if (!page) {
      return NextResponse.json({ success: false, error: 'Page not found.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: page });
  } catch (err) {
    console.error('[Admin GET seo slug]', err);
    return NextResponse.json({ success: false, error: 'Failed to fetch SEO page.' }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    const body = await req.json();
    const {
      label, path, pageTitle, metaKeywords, metaDescription, canonicalUrl, schemaJson,
    } = body;

    if (!metaDescription?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Meta description is required.' },
        { status: 400 }
      );
    }

    const page = await prisma.pageSeo.update({
      where: { slug: resolvedParams.slug },
      data: {
        label: label || '',
        path: path || '',
        pageTitle: pageTitle || '',
        metaKeywords: metaKeywords || '',
        metaDescription,
        canonicalUrl: canonicalUrl || '',
        schemaJson: schemaJson || '',
      },
    });

    revalidateSeoPage(page.path);

    return NextResponse.json({ success: true, data: page });
  } catch (err) {
    console.error('[Admin PUT seo]', err);
    return NextResponse.json({ success: false, error: 'Failed to update SEO page.' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const resolvedParams = await params;
    await prisma.pageSeo.delete({ where: { slug: resolvedParams.slug } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Admin DELETE seo]', err);
    return NextResponse.json({ success: false, error: 'Failed to delete SEO page.' }, { status: 500 });
  }
}
