import type { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { SITE_URL } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/artists`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/discovery`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ];

  try {
    const seoPages = await prisma.pageSeo.findMany();
    const seoRoutes: MetadataRoute.Sitemap = seoPages
      .filter((p) => p.path && p.path !== '/')
      .map((p) => ({
        url: p.canonicalUrl || `${SITE_URL}${p.path}`,
        lastModified: p.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    const artists = await prisma.artist.findMany({
      where: { isActive: true },
      select: { id: true, updatedAt: true },
    });

    const artistRoutes: MetadataRoute.Sitemap = artists.map((artist) => ({
      url: `${SITE_URL}/artists/${artist.id}`,
      lastModified: artist.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.6,
    }));

    return [...staticRoutes, ...seoRoutes, ...artistRoutes];
  } catch {
    return staticRoutes;
  }
}
