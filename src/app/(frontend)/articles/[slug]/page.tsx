import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/content";

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
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-500">
              {article.tag}
            </span>
            <span className="text-xs text-neutral-400">{article.time}</span>
            <span className="proof-badge">
              <span className="dot" />
              {article.reads} reads
            </span>
          </div>
          <h1 className="text-3xl font-black leading-[1.15] tracking-tight text-neutral-900 md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-500">{article.excerpt}</p>
        </div>

        {/* Hero Image */}
        <div className="mb-10 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200">
          {article.imagePrompt && (
            <div className="flex h-full items-center justify-center p-8 text-center text-sm text-neutral-400">
              {article.imagePrompt}
            </div>
          )}
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:leading-relaxed prose-strong:text-neutral-900 prose-li:text-neutral-600 prose-a:text-accent-green prose-a:no-underline hover:prose-a:underline"
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
