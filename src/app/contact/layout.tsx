import type { Metadata } from 'next';
import { buildMetadata, getPageSeo } from '@/lib/seo';
import JsonLd from '@/components/Seo/JsonLd';

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSeo('contact');
  return buildMetadata(seo, {
    title: 'Contact Us — Artistvibes Entertainment',
    description:
      'Get in touch with Artistvibes Entertainment for artist bookings, event enquiries, and entertainment solutions across India.',
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd slug="contact" />
      {children}
    </>
  );
}
