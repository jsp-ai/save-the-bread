import Link from "next/link";

const lifeContextChips = [
  { label: "All", value: "all" },
  { label: "First Paycheck", value: "first-paycheck" },
  { label: "Side Hustles", value: "side-hustles" },
  { label: "Moving Out", value: "moving-out" },
  { label: "Debt Escape", value: "debt" },
  { label: "Investing 101", value: "investing" },
  { label: "Creator Economy", value: "creator-economy" },
  { label: "Saving", value: "saving" },
  { label: "Career Moves", value: "career" },
];

const articles = [
  {
    tag: "First Paycheck",
    title: "You Just Got Your First Real Paycheck. Here\u2019s What To Do Before You Spend Any of It.",
    excerpt: "The first 48 hours after your first deposit matter more than you think. Set up these 3 things before you touch a dollar.",
    reads: "1.8K",
    time: "5 min read",
  },
  {
    tag: "Investing 101",
    title: "Roth IRA vs. Savings Account: The $200K Difference Nobody Showed You",
    excerpt: "Same money, wildly different outcomes over 30 years. Here\u2019s the math that changes everything.",
    reads: "5.2K",
    time: "7 min read",
  },
  {
    tag: "Debt Escape",
    title: "Credit Score 101: The Number That Controls Your Rent, Car, and Phone Plan",
    excerpt: "A perfect score means you borrow money and pay it back reliably. That\u2019s not a moral judgment. It\u2019s just math.",
    reads: "3.7K",
    time: "6 min read",
  },
  {
    tag: "Moving Out",
    title: "The Real Monthly Cost of Living Alone at 22 (We Did the Math)",
    excerpt: "Rent is the headline. Utilities, groceries, insurance, and the random stuff nobody warns you about are the fine print.",
    reads: "2.9K",
    time: "8 min read",
  },
  {
    tag: "Side Hustles",
    title: "The Freelance Video Editing Playbook: From Zero Clients to Booked Out",
    excerpt: "A step-by-step guide with real numbers, timelines, and the mistakes to avoid. Start with free projects, charge $100-500+ per video within months.",
    reads: "3.1K",
    time: "12 min read",
  },
  {
    tag: "Saving",
    title: "The $200 Emergency Fund That Saved My Apartment",
    excerpt: "You don\u2019t need $10K in savings. You need enough to survive one bad week without borrowing.",
    reads: "4.4K",
    time: "4 min read",
  },
];

export const metadata = {
  title: "Articles",
  description:
    "Money moves, side hustle playbooks, and financial guides organized by life context \u2014 not product categories.",
};

export default function ArticlesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Articles
          </h1>
          <p className="mt-2 max-w-xl text-neutral-400">
            Financial decisions explained through real scenarios you\u2019re
            actually in right now.
          </p>
        </div>

        {/* Life-context chip filters */}
        <div className="scroll-row mb-8">
          {lifeContextChips.map((chip, i) => (
            <button
              key={chip.value}
              className={`chip ${i === 0 ? "chip-active" : ""}`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.title}
              href="/articles"
              className="card-bold group overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-neutral-800 to-neutral-900" />
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-block rounded-full border border-neutral-700 bg-neutral-800/50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    {article.tag}
                  </span>
                  <span className="proof-badge">
                    <span className="dot" />
                    {article.reads} reads
                  </span>
                </div>
                <h3 className="text-base font-bold leading-snug text-neutral-100 group-hover:text-white">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500">
                  {article.excerpt}
                </p>
                <div className="mt-3 text-xs text-neutral-600">
                  {article.time}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
