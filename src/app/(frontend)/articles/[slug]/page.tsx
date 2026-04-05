import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/content";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://savethebread.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.tag, "Gen Z finance", "money", "personal finance"],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${BASE_URL}/articles/${article.slug}`,
      type: "article",
      siteName: "Save The Bread",
      section: article.tag,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: article.title,
      description: article.excerpt,
    },
    alternates: {
      canonical: `${BASE_URL}/articles/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="pt-24 pb-20">
      <ArticleJsonLd article={article} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Articles", url: `${BASE_URL}/articles` },
          { name: article.title, url: `${BASE_URL}/articles/${article.slug}` },
        ]}
      />
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-500">
              {article.tag}
            </span>
            <span className="text-xs text-neutral-400">{article.time}</span>
            <span className="proof-badge">
              <span className="dot" />
              {article.reads} reads
            </span>
          </div>
          <h1 className="text-3xl font-black leading-[1.08] tracking-[-0.03em] text-neutral-900 md:text-[2.75rem]">
            {article.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">{article.excerpt}</p>
        </div>

        {/* Byline */}
        <div className="article-byline">
          <span className="font-semibold text-neutral-900">Save The Bread</span>
          <span className="text-neutral-300">|</span>
          <span>April 2026</span>
        </div>

        {/* Hero Image */}
        <div className="mb-8 aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 md:mb-10">
          {article.imagePrompt && (
            <div className="flex h-full items-center justify-center p-6 text-center text-xs text-neutral-400">
              {article.imagePrompt}
            </div>
          )}
        </div>

        {/* Article Body — Editorial formatting */}
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* Bottom CTA */}
        <div className="mt-12 card-bold p-6 text-center md:p-8">
          <h3 className="text-lg font-black text-neutral-900">
            <span className="gradient-primary-text">Want more like this?</span>
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            Get smarter about your bread every week. Real stories, real numbers.
          </p>
          <form className="mx-auto mt-4 flex max-w-sm flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-accent-green"
            />
            <button type="submit" className="btn-primary text-sm">
              Subscribe
            </button>
          </form>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/articles"
            className="text-sm font-semibold text-accent-green hover:text-accent-emerald"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
}
