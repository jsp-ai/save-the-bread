import Link from "next/link";
import { articles } from "@/lib/content";

const lifeContextChips = [
  { label: "All", value: "all" },
  { label: "First Paycheck", value: "First Paycheck" },
  { label: "Side Hustles", value: "Side Hustle Lab" },
  { label: "Moving Out", value: "Moving Out" },
  { label: "Debt Escape", value: "Debt Escape" },
  { label: "Investing 101", value: "Investing 101" },
  { label: "Saving", value: "Saving" },
  { label: "Real Jobs", value: "Real Jobs" },
  { label: "Toolkit", value: "Toolkit" },
];

export const metadata = {
  title: "Articles",
  description:
    "Money moves, side hustle playbooks, and financial guides organized by life context.",
};

export default function ArticlesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            Articles
          </h1>
          <p className="mt-2 max-w-xl text-sm text-neutral-500 md:text-base">
            Financial decisions explained through real scenarios you&apos;re actually in right now.
          </p>
        </div>

        <div className="scroll-row mb-8">
          {lifeContextChips.map((chip, i) => (
            <button key={chip.value} className={`chip ${i === 0 ? "chip-active" : ""}`}>
              {chip.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="card-bold group overflow-hidden">
              <div className="aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-200">
                {article.imagePrompt && (
                  <div className="flex h-full items-center justify-center p-4 text-center text-xs text-neutral-400">
                    {article.imagePrompt.slice(0, 80)}...
                  </div>
                )}
              </div>
              <div className="p-4 md:p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    {article.tag}
                  </span>
                  <span className="proof-badge">
                    <span className="dot" />
                    {article.reads} reads
                  </span>
                </div>
                <h3 className="text-sm font-bold leading-snug text-neutral-900 group-hover:text-accent-green md:text-base">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500">
                  {article.excerpt}
                </p>
                <div className="mt-3 text-xs text-neutral-400">{article.time}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
