import type { Metadata } from 'next';
import { prisma } from '@/lib/prisma';

export type PageSeoRecord = {
  id: number;
  slug: string;
  label: string;
  path: string;
  pageTitle: string;
  metaKeywords: string;
  metaDescription: string;
  canonicalUrl: string;
  schemaJson: string;
  updatedAt: Date;
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artistvibes.in';

export const DEFAULT_PAGE_SEO: Omit<PageSeoRecord, 'id' | 'updatedAt'>[] = [
  {
    slug: 'home',
    label: 'Homepage',
    path: '/',
    pageTitle: 'Artistvibes Entertainment — Premium Artist & Celebrity Management',
    metaKeywords:
      'artist management india, celebrity booking india, live band for wedding mumbai, DJ booking india, singer for corporate event, artistvibes entertainment',
    metaDescription:
      'Artistvibes Entertainment is a 360° artist, celebrity, and live show management company. Book singers, live bands, DJs, comedians, anchors, dancers & more for weddings, corporate events, college festivals, and ticketed concerts across India.',
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artistvibes.in'}/`,
    schemaJson: '',
  },
  {
    slug: 'about',
    label: 'About Us',
    path: '/about',
    pageTitle: 'About Us — Artistvibes Entertainment',
    metaKeywords:
      'about artistvibes, artist management company india, Abhishek Pandey artist manager, live entertainment company',
    metaDescription:
      'Learn about Artistvibes Entertainment — India\'s trusted 360° artist and celebrity management brand delivering curated talent and luxury entertainment experiences.',
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artistvibes.in'}/about`,
    schemaJson: '',
  },
  {
    slug: 'artists',
    label: 'Book Artists',
    path: '/artists',
    pageTitle: 'Book Artists — Singers, DJs, Bands & More',
    metaKeywords:
      'book artist india, hire singer mumbai, DJ booking, live band booking, comedian for event, wedding entertainment',
    metaDescription:
      'Browse and book top singers, DJs, live bands, comedians, dancers, and anchors for weddings, corporate events, and concerts across India.',
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artistvibes.in'}/artists`,
    schemaJson: '',
  },
  {
    slug: 'contact',
    label: 'Contact Us',
    path: '/contact',
    pageTitle: 'Contact Us — Artistvibes Entertainment',
    metaKeywords:
      'contact artistvibes, book artist enquiry, event entertainment contact, artist booking enquiry india',
    metaDescription:
      'Get in touch with Artistvibes Entertainment for artist bookings, event enquiries, and entertainment solutions across India.',
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artistvibes.in'}/contact`,
    schemaJson: '',
  },
  {
    slug: 'discovery',
    label: 'Artist Discovery',
    path: '/discovery',
    pageTitle: 'Artist Discovery — Book Your Artist',
    metaKeywords:
      'artist discovery, trending artists, exclusive artists, featured performers, book talent india',
    metaDescription:
      'Explore trending, exclusive, and featured artists for your events. Filter by category to find the perfect talent.',
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artistvibes.in'}/discovery`,
    schemaJson: '',
  },
];

export async function getPageSeo(slug: string): Promise<PageSeoRecord | null> {
  try {
    return await prisma.pageSeo.findUnique({ where: { slug } });
  } catch {
    return null;
  }
}

export async function getAllPageSeo(): Promise<PageSeoRecord[]> {
  try {
    return await prisma.pageSeo.findMany({ orderBy: { path: 'asc' } });
  } catch {
    return [];
  }
}

export function buildMetadata(
  seo: PageSeoRecord | null,
  fallback: Metadata = {}
): Metadata {
  if (!seo?.pageTitle && !seo?.metaDescription) {
    return fallback;
  }

  const keywords = seo.metaKeywords
    ? seo.metaKeywords.split(',').map((k) => k.trim()).filter(Boolean)
    : undefined;

  const title = seo.pageTitle || undefined;
  const description = seo.metaDescription || undefined;

  return {
    ...fallback,
    title,
    description,
    keywords,
    alternates: seo.canonicalUrl
      ? { canonical: seo.canonicalUrl }
      : fallback.alternates,
    openGraph: {
      ...(typeof fallback.openGraph === 'object' ? fallback.openGraph : {}),
      title: title || undefined,
      description: description || undefined,
      url: seo.canonicalUrl || undefined,
    },
    twitter: {
      ...(typeof fallback.twitter === 'object' ? fallback.twitter : {}),
      title: title || undefined,
      description: description || undefined,
    },
  };
}

export function parseSchemaJson(raw: string): Record<string, unknown> | null {
  if (!raw?.trim()) return null;

  const cleaned = raw
    .replace(/<script[^>]*>/gi, '')
    .replace(/<\/script>/gi, '')
    .trim();

  try {
    const parsed = JSON.parse(cleaned);
    return typeof parsed === 'object' && parsed !== null ? parsed : null;
  } catch {
    return null;
  }
}
