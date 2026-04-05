import { articles, profiles } from "@/lib/content";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://savethebread.com";

  const allItems = [
    ...articles.map((a) => ({
      title: a.title,
      link: `${baseUrl}/articles/${a.slug}`,
      description: a.excerpt,
      category: a.tag,
    })),
    ...profiles.map((p) => ({
      title: `${p.name} — ${p.title}`,
      link: `${baseUrl}/profiles/${p.slug}`,
      description: p.excerpt,
      category: "Bread Winner",
    })),
  ];

  const escapeXml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Save The Bread</title>
    <link>${baseUrl}</link>
    <description>The Gen Z guide to making, saving, and growing money. Real stories from young creators, entrepreneurs, and hustlers.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${allItems
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category)}</category>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
