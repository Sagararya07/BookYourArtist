import type { Metadata } from 'next';
import { buildMetadata, getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo('artists');
  return buildMetadata(seo, {
    title: 'Book Artists — Singers, DJs, Bands & More',
    description:
      'Browse and book top singers, DJs, live bands, comedians, dancers, and anchors for weddings, corporate events, and concerts across India.',
  });
}

export default function ArtistsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd slug="artists" />
      {children}
    </>
  );
}
