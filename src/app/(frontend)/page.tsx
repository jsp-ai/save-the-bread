import Link from "next/link";
import { articles, profiles } from "@/lib/content";

// --- CONTENT DATA (pulled from lib/content.ts) ---

const categoryChips = [
  { label: "All", value: "all" },
  { label: "First Paycheck", value: "first-paycheck" },
  { label: "Side Hustles", value: "side-hustles" },
  { label: "Creator Economy", value: "creator-economy" },
  { label: "Investing 101", value: "investing" },
  { label: "Moving Out", value: "moving-out" },
  { label: "Debt Escape", value: "debt" },
  { label: "Saving", value: "saving" },
];

const heroStory = {
  tag: articles[0].tag,
  title: articles[0].title,
  excerpt: articles[0].excerpt,
  href: `/articles/${articles[0].slug}`,
  reads: articles[0].reads,
  time: articles[0].time,
};

const sideStories = [
  {
    tag: articles[1].tag,
    title: articles[1].title,
    reads: articles[1].reads,
    time: articles[1].time,
    href: `/articles/${articles[1].slug}`,
  },
  {
    tag: articles[2].tag,
    title: articles[2].title,
    reads: articles[2].reads,
    time: articles[2].time,
    href: `/articles/${articles[2].slug}`,
  },
];

const todaysBread = [
  { text: "Roth IRA vs. Savings Account: the $200K difference nobody showed you", slug: "roth-ira-vs-savings-200k-difference" },
  { text: "Best free budgeting apps \u2014 we tested all of them", slug: "best-budgeting-apps-tested" },
  { text: "If you don\u2019t know your credit score, your landlord does", slug: "credit-score-101" },
  { text: "How to start tutoring online this weekend and make $30-50/hr", slug: "side-hustle-online-tutoring" },
  { text: "Buy Now Pay Later is free money the same way a mousetrap is free cheese", slug: "buy-now-pay-later-trap" },
];

const breadWinners = profiles.map((p) => ({
  name: p.name,
  title: p.title,
  stat: p.stat,
  age: p.age,
  platform: p.platform,
  href: `/profiles/${p.slug}`,
  reads: p.reads,
}));

const moneyMoves = articles.slice(3, 8).map((a) => ({
  tag: a.tag,
  title: a.title,
  excerpt: a.excerpt,
  reads: a.reads,
  href: `/articles/${a.slug}`,
}));

const sideHustleData = [
  { slug: "freelance-video-editing-playbook", title: "Freelance Video Editing", income: "$2-6K/mo", time: "2-4 weeks to first $" },
  { slug: "side-hustle-ugc-content", title: "UGC Content Creation", income: "$1-5K/mo", time: "1-3 weeks to first $" },
  { slug: "side-hustle-online-tutoring", title: "Online Tutoring", income: "$1.5-4K/mo", time: "1 week to first $" },
  { slug: "side-hustle-local-service", title: "Local Service Business", income: "$2-10K/mo", time: "1-2 weeks to first $" },
  { slug: "side-hustle-social-media-management", title: "Social Media Management", income: "$1.5-5K/mo", time: "1-3 weeks to first $" },
];
const sideHustles = sideHustleData.map((h) => ({ ...h, href: `/articles/${h.slug}` }));

const trending = articles.slice(13, 18).map((a) => ({
  title: a.title,
  href: `/articles/${a.slug}`,
  reads: a.reads,
}));

// --- COMPONENTS ---

function TagBadge({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    "Bread Winner": "bg-brand-navy/10 text-brand-navy border-brand-navy/20",
    "Money Moves": "bg-accent-green/10 text-accent-green border-accent-green/20",
    "Side Hustle Lab": "bg-accent-gold/10 text-accent-gold border-accent-gold/20",
    "First Paycheck": "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
    "Investing 101": "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20",
    "Debt Escape": "bg-accent-red/10 text-accent-red border-accent-red/20",
    "Moving Out": "bg-neutral-600/10 text-neutral-600 border-neutral-600/20",
    Saving: "bg-accent-green/10 text-accent-green border-accent-green/20",
  };
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${colors[tag] || "bg-neutral-100 text-neutral-500 border-neutral-200"}`}
    >
      {tag}
    </span>
  );
}

function ReadCount({ count, light }: { count: string; light?: boolean }) {
  return (
    <span className={`proof-badge ${light ? "text-white/50" : ""}`}>
      <span className="dot" />
      {count} reads
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== CATEGORY CHIPS (YouTube pattern) ===== */}
      <section className="sticky top-16 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4">
          <div className="scroll-row py-3">
            {categoryChips.map((chip, i) => (
              <button
                key={chip.value}
                className={`chip ${i === 0 ? "chip-active" : ""}`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HERO — Lead Story + Side Stories ===== */}
      <section className="pt-6 md:pt-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 lg:grid-cols-5">
            {/* Lead Story — 3/5 */}
            <Link
              href={heroStory.href}
              className="card-bold group relative col-span-1 overflow-hidden lg:col-span-3"
            >
              <div className="gradient-glow flex aspect-[16/9] items-end p-5 md:p-8">
                <div className="relative">
                  <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {heroStory.tag}
                  </span>
                  <h1 className="mt-3 text-2xl font-black leading-[1.1] tracking-tight text-white sm:text-3xl md:text-5xl">
                    {heroStory.title}
                  </h1>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60 md:mt-3 md:text-base">
                    {heroStory.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-4 md:mt-4">
                    <ReadCount count={heroStory.reads} light />
                    <span className="text-xs text-white/40">{heroStory.time}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Side Stories — 2/5 */}
            <div className="col-span-1 flex flex-col gap-4 lg:col-span-2">
              {sideStories.map((story) => (
                <Link
                  key={story.title}
                  href={story.href}
                  className="card-bold group flex-1 p-4 md:p-5"
                >
                  <TagBadge tag={story.tag} />
                  <h3 className="mt-2 text-base font-bold leading-snug text-neutral-900 group-hover:text-accent-green md:mt-3 md:text-lg">
                    {story.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 md:mt-3">
                    <ReadCount count={story.reads} />
                    <span className="text-xs text-neutral-400">{story.time}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TODAY'S BREAD — WSJ digest ===== */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="card-bold p-5 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-lg">🍞</span>
              <h2 className="text-base font-black uppercase tracking-wider text-neutral-900 md:text-lg">
                Today&apos;s Bread
              </h2>
              <div className="divider flex-1" />
              <span className="text-xs text-neutral-400">Quick scan</span>
            </div>
            <ul className="space-y-3">
              {todaysBread.map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/articles/${item.slug}`}
                    className="group flex items-start gap-3 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-green" />
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BREAD WINNERS — Horizontal scroll (Netflix) ===== */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black tracking-tight text-neutral-900 md:text-2xl">
                <span className="gradient-primary-text">Bread Winners</span>
              </h2>
              <p className="mt-1 text-xs text-neutral-500 md:text-sm">
                Young people making real money. Swipe to explore.
              </p>
            </div>
            <Link
              href="/profiles"
              className="text-sm font-semibold text-accent-green transition-colors hover:text-accent-emerald"
            >
              All profiles →
            </Link>
          </div>
          <div className="scroll-row">
            {breadWinners.map((person) => (
              <Link
                key={person.name}
                href={person.href}
                className="card-bold swipe-card group overflow-hidden"
              >
                <div className="gradient-glow flex aspect-[4/3] items-end p-4 md:p-5">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      Age {person.age} · {person.platform}
                    </div>
                    <div className="mt-1 text-lg font-black text-white md:text-xl">
                      {person.name}
                    </div>
                    <div className="text-sm text-white/70">{person.title}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      Earning
                    </div>
                    <div className="text-lg font-black text-accent-green">
                      {person.stat}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <ReadCount count={person.reads} />
                    <span className="text-xs font-semibold text-accent-green">
                      Read story →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MONEY MOVES — Horizontal scroll ===== */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-black tracking-tight text-neutral-900 md:text-2xl">
              Money Moves
            </h2>
            <Link
              href="/articles?type=money-moves"
              className="text-sm font-semibold text-accent-green transition-colors hover:text-accent-emerald"
            >
              All guides →
            </Link>
          </div>
          <div className="scroll-row">
            {moneyMoves.map((story) => (
              <Link
                key={story.title}
                href={story.href}
                className="card-bold swipe-card group p-4 md:p-5"
              >
                <TagBadge tag={story.tag} />
                <h3 className="mt-2 text-sm font-bold leading-snug text-neutral-900 group-hover:text-accent-green md:mt-3 md:text-base">
                  {story.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500">
                  {story.excerpt}
                </p>
                <div className="mt-3">
                  <ReadCount count={story.reads} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIDE HUSTLE PLAYBOOKS ===== */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-black tracking-tight text-neutral-900 md:text-2xl">
              Side Hustle Playbooks
            </h2>
            <Link
              href="/articles?type=side-hustle-lab"
              className="text-sm font-semibold text-accent-green transition-colors hover:text-accent-emerald"
            >
              All playbooks →
            </Link>
          </div>
          <div className="scroll-row">
            {sideHustles.map((hustle) => (
              <Link
                key={hustle.title}
                href={hustle.href}
                className="card-bold swipe-card group p-4 md:p-5"
              >
                <h3 className="text-sm font-bold text-neutral-900 group-hover:text-accent-green md:text-base">
                  {hustle.title}
                </h3>
                <div className="mt-3 flex gap-2">
                  <div className="rounded-lg bg-neutral-50 px-2.5 py-1.5">
                    <div className="text-[10px] text-neutral-400">Income</div>
                    <div className="text-sm font-bold text-accent-green">
                      {hustle.income}
                    </div>
                  </div>
                  <div className="rounded-lg bg-neutral-50 px-2.5 py-1.5">
                    <div className="text-[10px] text-neutral-400">First $</div>
                    <div className="text-sm font-bold text-accent-gold">
                      {hustle.time}
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-xs font-semibold text-accent-green">
                  Read playbook →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRENDING + SIDEBAR ===== */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Trending — 2/3 */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-xl font-black tracking-tight text-neutral-900 md:text-2xl">
                Trending
              </h2>
              <div className="space-y-0">
                {trending.map((story, i) => (
                  <Link
                    key={story.title}
                    href={story.href}
                    className="group flex items-start gap-4 border-b border-neutral-100 py-4 transition-colors first:pt-0 last:border-0 md:gap-5 md:py-5"
                  >
                    <span className="trending-num flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold leading-snug text-neutral-700 group-hover:text-neutral-900 md:text-base">
                        {story.title}
                      </h3>
                      <div className="mt-1.5">
                        <ReadCount count={story.reads} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <div className="space-y-4">
              {/* Newsletter */}
              <div className="card-bold p-5 md:p-6">
                <h3 className="text-base font-black text-neutral-900 md:text-lg">
                  <span className="gradient-primary-text">The Weekly Bread</span>
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  Get smarter about your bread in 5 min/week. Real stories, real
                  numbers, zero fluff.
                </p>
                <form className="mt-4 space-y-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-accent-green"
                  />
                  <button type="submit" className="btn-primary w-full text-sm">
                    Subscribe — It&apos;s Free
                  </button>
                </form>
                <p className="mt-3 text-[11px] text-neutral-400">
                  Join 1,000+ young people leveling up weekly.
                </p>
              </div>

              {/* Quick Tools */}
              <div className="card-bold p-4 md:p-5">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Quick Tools
                </h3>
                <div className="space-y-1">
                  {[
                    { icon: "📊", name: "Budget Calculator", href: "/tools/budget-calculator" },
                    { icon: "🔍", name: "Side Hustle Finder", href: "/tools/side-hustle-finder" },
                    { icon: "🎯", name: "Savings Tracker", href: "/tools/savings-tracker" },
                  ].map((tool) => (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-neutral-50"
                    >
                      <span className="text-lg">{tool.icon}</span>
                      <span className="text-sm font-medium text-neutral-600">
                        {tool.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl gradient-glow p-8 text-center md:p-16">
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-2xl font-black text-white md:text-5xl">
                Your money education starts here.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/60 md:mt-4 md:text-base">
                Real stories from young money-makers, delivered weekly.
              </p>
              <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row md:mt-8">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-colors focus:border-white/40"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-neutral-900 transition-all hover:bg-neutral-100"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
