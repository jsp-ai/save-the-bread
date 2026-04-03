import Link from "next/link";

// --- PLACEHOLDER DATA (replaced by CMS once content is published) ---

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
  tag: "Bread Winner",
  title: "She Makes $6K/Month Editing TikToks. Here\u2019s Exactly How.",
  excerpt:
    "Maya started editing videos during quarantine because she was bored. Two years later, she edits for four creators full-time and brings in $6,200/month. The first three months? She made nothing.",
  href: "/profiles",
  reads: "2.4K",
  time: "8 min read",
};

const sideStories = [
  {
    tag: "Money Moves",
    title: "You Just Got Your First Real Paycheck. Here\u2019s What To Do Before You Spend Any of It.",
    reads: "1.8K",
    time: "5 min",
    href: "/articles",
  },
  {
    tag: "Side Hustle Lab",
    title: "The Freelance Video Editing Playbook: Zero Clients to Booked Out",
    reads: "3.1K",
    time: "12 min",
    href: "/articles",
  },
];

const todaysBread = [
  "Roth IRA vs. Savings Account: the $200K difference nobody showed you",
  "Best free budgeting apps \u2014 we tested all of them",
  "Your landlord doesn\u2019t care about your credit score. Your next one will.",
  "How to start tutoring online this weekend and make $30-50/hr",
  "The real cost of \u2018free\u2019 buy now pay later apps",
];

const breadWinners = [
  {
    name: "Maya Chen",
    title: "Freelance Video Editor",
    stat: "$6.2K/mo",
    age: 24,
    platform: "TikTok",
    href: "/profiles",
    reads: "2.4K",
  },
  {
    name: "DeShawn Williams",
    title: "Sneaker Reseller \u2192 Brand Owner",
    stat: "$120K/yr",
    age: 22,
    platform: "eBay \u2192 Shopify",
    href: "/profiles",
    reads: "4.1K",
  },
  {
    name: "Priya Patel",
    title: "UGC Content Creator",
    stat: "$4.8K/mo",
    age: 21,
    platform: "Instagram",
    href: "/profiles",
    reads: "1.9K",
  },
  {
    name: "Marcus Rivera",
    title: "Online Math Tutor",
    stat: "$3.5K/mo",
    age: 20,
    platform: "Wyzant",
    href: "/profiles",
    reads: "1.2K",
  },
];

const moneyMoves = [
  {
    tag: "First Paycheck",
    title: "The First 48 Hours After Your First Direct Deposit Matter More Than You Think",
    excerpt: "Set up these 3 things before you touch a dollar.",
    reads: "1.8K",
    href: "/articles",
  },
  {
    tag: "Investing 101",
    title: "Roth IRA vs. Savings Account: The $200K Difference Nobody Showed You",
    excerpt: "Same money, wildly different outcomes. Here\u2019s the math.",
    reads: "5.2K",
    href: "/articles",
  },
  {
    tag: "Debt Escape",
    title: "Credit Score 101: The Number That Controls Your Rent, Car, and Phone Plan",
    excerpt: "It doesn\u2019t measure responsibility. It measures profitability to lenders.",
    reads: "3.7K",
    href: "/articles",
  },
  {
    tag: "Moving Out",
    title: "The Real Monthly Cost of Living Alone at 22 (We Did the Math)",
    excerpt: "Rent is the headline. Everything else is the fine print.",
    reads: "2.9K",
    href: "/articles",
  },
  {
    tag: "Saving",
    title: "The $200 Emergency Fund That Saved My Apartment",
    excerpt: "You don\u2019t need $10K. You need enough to survive one bad week.",
    reads: "4.4K",
    href: "/articles",
  },
];

const sideHustles = [
  {
    title: "Freelance Video Editing",
    income: "$2-6K/mo",
    time: "2-4 weeks to first $",
    href: "/articles",
  },
  {
    title: "UGC Content Creation",
    income: "$1-5K/mo",
    time: "1-3 weeks to first $",
    href: "/articles",
  },
  {
    title: "Online Tutoring",
    income: "$1.5-4K/mo",
    time: "1 week to first $",
    href: "/articles",
  },
  {
    title: "Local Service Business",
    income: "$2-10K/mo",
    time: "1-2 weeks to first $",
    href: "/articles",
  },
  {
    title: "Social Media Management",
    income: "$1.5-5K/mo",
    time: "1-3 weeks to first $",
    href: "/articles",
  },
];

const trending = [
  { title: "Stop Googling \u2018How to Invest\u2019 and Read This Instead", href: "/articles", reads: "6.1K" },
  { title: "He Dropped Out of CS to Build a Shopify App. Here\u2019s His P&L.", href: "/profiles", reads: "4.8K" },
  { title: "The Real Cost of \u2018Free\u2019 Buy Now Pay Later Apps", href: "/articles", reads: "3.9K" },
  { title: "She Started a Cleaning Business at 19. Now She Employs 6 People.", href: "/profiles", reads: "3.2K" },
  { title: "Best Online Courses for Learning to Invest \u2014 Ranked by Actual Value", href: "/resources", reads: "2.7K" },
];

// --- COMPONENTS ---

function TagBadge({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    "Bread Winner": "bg-brand-purple/20 text-brand-purple border-brand-purple/30",
    "Money Moves": "bg-brand-pink/20 text-brand-pink border-brand-pink/30",
    "Side Hustle Lab": "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30",
    "First Paycheck": "bg-accent-gold/20 text-accent-gold border-accent-gold/30",
    "Investing 101": "bg-accent-teal/20 text-accent-teal border-accent-teal/30",
    "Debt Escape": "bg-accent-red/20 text-accent-red border-accent-red/30",
    "Moving Out": "bg-brand-magenta/20 text-brand-magenta border-brand-magenta/30",
    Saving: "bg-accent-lime/20 text-accent-lime border-accent-lime/30",
    Toolkit: "bg-accent-gold/20 text-accent-gold border-accent-gold/30",
  };
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${colors[tag] || "bg-neutral-800 text-neutral-400 border-neutral-700"}`}
    >
      {tag}
    </span>
  );
}

function ReadCount({ count }: { count: string }) {
  return (
    <span className="proof-badge">
      <span className="dot" />
      {count} reads
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ===== CATEGORY CHIPS (YouTube pattern) ===== */}
      <section className="sticky top-[65px] z-40 border-b border-neutral-800/50 bg-neutral-950/90 backdrop-blur-xl">
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
              <div className="gradient-glow flex aspect-[16/9] items-end p-6 md:p-8">
                <div className="relative">
                  <TagBadge tag={heroStory.tag} />
                  <h1 className="mt-3 text-3xl font-black leading-[1.1] tracking-tight text-white md:text-5xl">
                    {heroStory.title}
                  </h1>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
                    {heroStory.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <ReadCount count={heroStory.reads} />
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
                  className="card-bold group flex-1 p-5"
                >
                  <TagBadge tag={story.tag} />
                  <h3 className="mt-3 text-lg font-bold leading-snug text-neutral-100 group-hover:text-white md:text-xl">
                    {story.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-3">
                    <ReadCount count={story.reads} />
                    <span className="text-xs text-neutral-600">{story.time}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TODAY'S BREAD — WSJ "What's News" digest ===== */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="card-bold p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-lg">🍞</span>
              <h2 className="text-lg font-black uppercase tracking-wider text-neutral-100">
                Today&apos;s Bread
              </h2>
              <div className="divider flex-1" />
              <span className="text-xs text-neutral-600">Quick scan</span>
            </div>
            <ul className="space-y-3">
              {todaysBread.map((item, i) => (
                <li key={i}>
                  <Link
                    href="/articles"
                    className="group flex items-start gap-3 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-purple group-hover:bg-brand-pink" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== BREAD WINNERS — Horizontal scroll row (Netflix) ===== */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">
                <span className="gradient-primary-text">Bread Winners</span>
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Young people making real money. Swipe to explore.
              </p>
            </div>
            <Link
              href="/profiles"
              className="text-sm font-semibold text-brand-purple transition-colors hover:text-brand-pink"
            >
              All profiles →
            </Link>
          </div>
          {/* Horizontal scroll — swipe on mobile */}
          <div className="scroll-row">
            {breadWinners.map((person) => (
              <Link
                key={person.name}
                href={person.href}
                className="card-bold swipe-card group overflow-hidden"
              >
                <div className="gradient-glow flex aspect-[4/3] items-end p-5">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      Age {person.age} · {person.platform}
                    </div>
                    <div className="mt-1 text-xl font-black text-white">
                      {person.name}
                    </div>
                    <div className="text-sm text-white/70">{person.title}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                      Earning
                    </div>
                    <div className="text-lg font-black text-accent-cyan">
                      {person.stat}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <ReadCount count={person.reads} />
                    <span className="text-xs font-semibold text-brand-purple group-hover:text-brand-pink">
                      Read story →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MONEY MOVES — Horizontal scroll row ===== */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              Money Moves
            </h2>
            <Link
              href="/articles?type=money-moves"
              className="text-sm font-semibold text-brand-purple transition-colors hover:text-brand-pink"
            >
              All guides →
            </Link>
          </div>
          <div className="scroll-row">
            {moneyMoves.map((story) => (
              <Link
                key={story.title}
                href={story.href}
                className="card-bold swipe-card group p-5"
              >
                <TagBadge tag={story.tag} />
                <h3 className="mt-3 text-base font-bold leading-snug text-neutral-100 group-hover:text-white">
                  {story.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500">
                  {story.excerpt}
                </p>
                <div className="mt-4">
                  <ReadCount count={story.reads} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIDE HUSTLE PLAYBOOKS — Compact row ===== */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              Side Hustle Playbooks
            </h2>
            <Link
              href="/articles?type=side-hustle-lab"
              className="text-sm font-semibold text-brand-purple transition-colors hover:text-brand-pink"
            >
              All playbooks →
            </Link>
          </div>
          <div className="scroll-row">
            {sideHustles.map((hustle) => (
              <Link
                key={hustle.title}
                href={hustle.href}
                className="card-bold swipe-card group p-5"
              >
                <h3 className="text-base font-bold text-neutral-100 group-hover:text-white">
                  {hustle.title}
                </h3>
                <div className="mt-3 flex gap-3">
                  <div className="rounded-lg bg-neutral-800/80 px-2.5 py-1.5">
                    <div className="text-[10px] text-neutral-500">Income</div>
                    <div className="text-sm font-bold text-accent-cyan">
                      {hustle.income}
                    </div>
                  </div>
                  <div className="rounded-lg bg-neutral-800/80 px-2.5 py-1.5">
                    <div className="text-[10px] text-neutral-500">First $</div>
                    <div className="text-sm font-bold text-accent-gold">
                      {hustle.time}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs font-semibold text-brand-purple group-hover:text-brand-pink">
                  Read playbook →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRENDING + SIDEBAR ===== */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Trending — 2/3 */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-black tracking-tight md:text-3xl">
                Trending
              </h2>
              <div className="space-y-0">
                {trending.map((story, i) => (
                  <Link
                    key={story.title}
                    href={story.href}
                    className="group flex items-start gap-5 border-b border-neutral-800/50 py-5 transition-colors first:pt-0 last:border-0"
                  >
                    <span className="trending-num flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold leading-snug text-neutral-300 group-hover:text-white md:text-lg">
                        {story.title}
                      </h3>
                      <div className="mt-2">
                        <ReadCount count={story.reads} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <div className="space-y-4">
              {/* Newsletter — Morning Brew minimal capture */}
              <div className="card-bold p-6">
                <h3 className="text-lg font-black">
                  <span className="gradient-primary-text">The Weekly Bread</span>
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  Get smarter about your bread in 5 min/week. Real stories, real
                  numbers, zero fluff.
                </p>
                <form className="mt-4 space-y-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 outline-none transition-colors focus:border-brand-purple"
                  />
                  <button type="submit" className="btn-primary w-full text-sm">
                    Subscribe — It&apos;s Free
                  </button>
                </form>
                <p className="mt-3 text-[11px] text-neutral-600">
                  Join 1,000+ young people leveling up weekly.
                </p>
              </div>

              {/* Quick Tools — compact sidebar widget */}
              <div className="card-bold p-5">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-500">
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
                      className="flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-neutral-800/50"
                    >
                      <span className="text-lg">{tool.icon}</span>
                      <span className="text-sm font-medium text-neutral-300">
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
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl gradient-glow p-10 text-center md:p-16">
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-black text-white md:text-5xl">
                Your money education starts here.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/60">
                Real stories from young money-makers, delivered weekly.
              </p>
              <form className="mx-auto mt-8 flex max-w-md gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-colors focus:border-white/40"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-neutral-950 transition-all hover:bg-neutral-100"
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
