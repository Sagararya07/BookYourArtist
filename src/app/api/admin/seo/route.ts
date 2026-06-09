import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { DEFAULT_PAGE_SEO } from '@/lib/seo';

function revalidateSeoPage(path: string) {
  revalidatePath(path || '/');
  revalidatePath('/sitemap.xml');
}

function isAuthorized(req: NextRequest) {
  const token = req.headers.get('x-admin-token');
  return token === process.env.ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    let pages = await prisma.pageSeo.findMany({ orderBy: { path: 'asc' } });

    if (pages.length === 0) {
      await prisma.pageSeo.createMany({
        data: DEFAULT_PAGE_SEO,
        skipDuplicates: true,
      });
      pages = await prisma.pageSeo.findMany({ orderBy: { path: 'asc' } });
    }

    return NextResponse.json({ success: true, data: pages });
  } catch (err) {
    console.error('[Admin GET seo]', err);
    return NextResponse.json({ success: false, error: 'Failed to fetch SEO pages.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      slug, label, path, pageTitle, metaKeywords, metaDescription, canonicalUrl, schemaJson,
    } = body;

    if (!slug || !label || !path) {
      return NextResponse.json(
        { success: false, error: 'Slug, label, and path are required.' },
        { status: 400 }
      );
    }

    if (!metaDescription?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Meta description is required.' },
        { status: 400 }
      );
    }

    const page = await prisma.pageSeo.create({
      data: {
        slug,
        label,
        path,
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
    console.error('[Admin POST seo]', err);
    return NextResponse.json({ success: false, error: 'Failed to create SEO page.' }, { status: 500 });
  }
}
