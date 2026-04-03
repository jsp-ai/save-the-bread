import Link from "next/link";

// Placeholder editorial content — will be replaced by CMS data
const heroStory = {
  tag: "Bread Winner",
  title: "She Makes $6K/Month Editing TikToks. Here's Exactly How.",
  excerpt:
    "Maya started editing videos during quarantine because she was bored. Two years later, she edits for four creators full-time. This is her playbook.",
  href: "/profiles",
  category: "Creator Economy",
};

const latestStories = [
  {
    tag: "Money Moves",
    title: "You Just Got Your First Real Paycheck. Here's What To Do Before You Spend Any of It.",
    excerpt: "The first 48 hours after your first deposit matter more than you think.",
    href: "/articles",
  },
  {
    tag: "Side Hustle Lab",
    title: "The Freelance Video Editing Playbook: From Zero Clients to Booked Out",
    excerpt: "A step-by-step guide with real numbers, timelines, and the mistakes to avoid.",
    href: "/articles",
  },
  {
    tag: "Money Moves",
    title: "Roth IRA vs. Savings Account: The $200K Difference Nobody Showed You",
    excerpt: "Same money, wildly different outcomes. Here's the math that changes everything.",
    href: "/articles",
  },
  {
    tag: "Bread Winner",
    title: "He Dropped Out of CS to Build a Shopify App. Here's His P&L.",
    excerpt: "Real revenue numbers, real expenses, and what he'd do differently.",
    href: "/profiles",
  },
];

const trendingStories = [
  { title: "The Real Cost of 'Free' Buy Now Pay Later Apps", href: "/articles" },
  { title: "Credit Score 101: The Number That Controls Your Rent, Car, and Phone Plan", href: "/articles" },
  { title: "Best Free Budgeting Apps — We Tested All of Them", href: "/resources" },
  { title: "How to Start Tutoring Online This Weekend (And Make $30-50/Hour)", href: "/articles" },
  { title: "Your Landlord Doesn't Care About Your Credit Score. Your Next One Will.", href: "/articles" },
];

const breadWinners = [
  {
    name: "Maya Chen",
    title: "Freelance Video Editor",
    stat: "$6.2K/mo",
    age: 24,
    href: "/profiles",
  },
  {
    name: "DeShawn Williams",
    title: "Sneaker Reseller",
    stat: "$120K/yr",
    age: 22,
    href: "/profiles",
  },
  {
    name: "Priya Patel",
    title: "UGC Content Creator",
    stat: "$4.8K/mo",
    age: 21,
    href: "/profiles",
  },
];

function TagBadge({ tag }: { tag: string }) {
  const colors: Record<string, string> = {
    "Bread Winner": "bg-brand-purple/20 text-brand-purple",
    "Money Moves": "bg-brand-pink/20 text-brand-pink",
    "Side Hustle Lab": "bg-accent-cyan/20 text-accent-cyan",
    Toolkit: "bg-accent-gold/20 text-accent-gold",
  };
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colors[tag] || "bg-neutral-800 text-neutral-400"}`}
    >
      {tag}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Editorial Hero — Lead Story */}
      <section className="relative pt-24 pb-0 md:pt-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Lead Story — takes 2/3 */}
            <Link
              href={heroStory.href}
              className="card-glass group relative col-span-1 overflow-hidden lg:col-span-2"
            >
              {/* Gradient background as image placeholder */}
              <div className="gradient-glow flex aspect-[16/9] items-end p-6 md:p-10">
                <div className="relative">
                  <TagBadge tag={heroStory.tag} />
                  <h1 className="mt-3 text-2xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
                    {heroStory.title}
                  </h1>
                  <p className="mt-3 max-w-xl text-sm text-white/70 md:text-base">
                    {heroStory.excerpt}
                  </p>
                </div>
              </div>
            </Link>

            {/* Side stories — 1/3 */}
            <div className="flex flex-col gap-4">
              {latestStories.slice(0, 2).map((story) => (
                <Link
                  key={story.title}
                  href={story.href}
                  className="card-glass group flex-1 p-5 transition-all duration-300"
                >
                  <TagBadge tag={story.tag} />
                  <h3 className="mt-2 text-base font-bold leading-snug text-neutral-100 group-hover:text-white md:text-lg">
                    {story.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-neutral-500">
                    {story.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Stories Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold md:text-3xl">Latest Stories</h2>
            <Link
              href="/articles"
              className="text-sm font-semibold text-brand-purple transition-colors hover:text-brand-pink"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {latestStories.map((story) => (
              <Link
                key={story.title}
                href={story.href}
                className="card-glass group p-5 transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="mb-4 aspect-[16/10] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900" />
                <TagBadge tag={story.tag} />
                <h3 className="mt-2 text-base font-bold leading-snug text-neutral-100 group-hover:text-white">
                  {story.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs text-neutral-500">
                  {story.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bread Winners Spotlight */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                <span className="gradient-primary-text">Bread Winners</span>
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Young people making real money. Their stories, their numbers.
              </p>
            </div>
            <Link
              href="/profiles"
              className="text-sm font-semibold text-brand-purple transition-colors hover:text-brand-pink"
            >
              All profiles
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {breadWinners.map((person) => (
              <Link
                key={person.name}
                href={person.href}
                className="card-glass group relative overflow-hidden transition-all duration-300"
              >
                {/* Avatar placeholder */}
                <div className="gradient-glow flex aspect-[4/3] items-end p-5">
                  <div>
                    <div className="text-xs font-semibold text-white/60">
                      Age {person.age}
                    </div>
                    <div className="text-xl font-black text-white">
                      {person.name}
                    </div>
                    <div className="text-sm text-white/70">{person.title}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <div className="text-xs text-neutral-500">Earning</div>
                    <div className="text-lg font-bold text-accent-cyan">
                      {person.stat}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-brand-purple group-hover:text-brand-pink">
                    Read story
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M3 7h8M8 4l3 3-3 3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending + Sidebar Layout */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Trending Stories — 2/3 */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Trending</h2>
              <div className="space-y-0 divide-y divide-neutral-800/50">
                {trendingStories.map((story, i) => (
                  <Link
                    key={story.title}
                    href={story.href}
                    className="group flex items-start gap-4 py-5 transition-colors"
                  >
                    <span className="flex-shrink-0 text-3xl font-black text-neutral-700 group-hover:gradient-primary-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold leading-snug text-neutral-300 group-hover:text-white md:text-lg">
                      {story.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <div className="space-y-6">
              {/* Newsletter */}
              <div className="card-glass p-6">
                <h3 className="mb-2 text-lg font-bold">
                  <span className="gradient-primary-text">The Weekly Bread</span>
                </h3>
                <p className="mb-4 text-sm text-neutral-400">
                  One email per week. Real stories, real numbers, and money moves
                  you can actually use.
                </p>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 outline-none transition-colors focus:border-brand-purple"
                  />
                  <button type="submit" className="btn-primary w-full text-sm">
                    Subscribe — Free
                  </button>
                </form>
              </div>

              {/* Quick Tools */}
              <div className="card-glass p-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  Quick Tools
                </h3>
                <div className="space-y-2">
                  <Link
                    href="/tools/budget-calculator"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-neutral-800/50"
                  >
                    <span className="text-xl">📊</span>
                    <span className="text-sm font-medium text-neutral-300">
                      Budget Calculator
                    </span>
                  </Link>
                  <Link
                    href="/tools/side-hustle-finder"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-neutral-800/50"
                  >
                    <span className="text-xl">🔍</span>
                    <span className="text-sm font-medium text-neutral-300">
                      Side Hustle Finder
                    </span>
                  </Link>
                  <Link
                    href="/tools/savings-tracker"
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-neutral-800/50"
                  >
                    <span className="text-xl">🎯</span>
                    <span className="text-sm font-medium text-neutral-300">
                      Savings Tracker
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl gradient-glow p-12 text-center md:p-20">
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-black text-white md:text-5xl">
                Your money education starts here.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
                Real stories from young money-makers, delivered weekly. No spam,
                no fluff, no corporate speak.
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
