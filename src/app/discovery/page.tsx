import type { Metadata } from 'next';
import DiscoveryClient from '@/components/Discovery/DiscoveryClient';
import { buildMetadata, getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo('discovery');
  return buildMetadata(seo, {
    title: 'Artist Discovery | Book Your Artist',
    description:
      'Explore trending, exclusive, and featured artists for your events. Filter by category to find the perfect talent.',
  });
}

export default function DiscoveryPage() {
  return (
    <main>
      <JsonLd slug="discovery" />
      <DiscoveryClient />
    </main>
  );
}
