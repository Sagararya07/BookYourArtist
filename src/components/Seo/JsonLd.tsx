import { getPageSeo, parseSchemaJson } from '@/lib/seo';

export default async function JsonLd({ slug }: { slug: string }) {
  const seo = await getPageSeo(slug);
  const schema = parseSchemaJson(seo?.schemaJson || '');
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
