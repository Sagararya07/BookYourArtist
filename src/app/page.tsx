import type { Metadata } from 'next';
import { buildMetadata, getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';
import HomeClient from './HomeClient';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo('home');
  return buildMetadata(seo, {
    title: 'Artistvibes Entertainment — Premium Artist & Celebrity Management',
    description:
      'Artistvibes Entertainment is a 360° artist, celebrity, and live show management company. Book singers, live bands, DJs, comedians, anchors, dancers & more for weddings, corporate events, college festivals, and ticketed concerts across India.',
  });
}

export default function HomePage() {
  return (
    <>
      <JsonLd slug="home" />
      <HomeClient />
    </>
  );
}
