import Link from "next/link";

const contentPillars = [
  {
    title: "Bread Winners",
    description: "Real profiles of young people making real money. Their stories, their numbers, their playbooks.",
    href: "/profiles",
    icon: "👤",
    color: "from-brand-purple to-brand-pink",
  },
  {
    title: "Money Moves",
    description: "Financial decisions explained through real scenarios. Not lectures — action plans.",
    href: "/articles",
    icon: "💸",
    color: "from-brand-pink to-brand-magenta",
  },
  {
    title: "Side Hustle Lab",
    description: "Detailed playbooks with startup costs, timelines, and realistic income ranges.",
    href: "/articles",
    icon: "🔬",
    color: "from-accent-cyan to-accent-teal",
  },
  {
    title: "The Toolkit",
    description: "Honest reviews of apps, tools, and resources. Free options always highlighted.",
    href: "/resources",
    icon: "🛠️",
    color: "from-accent-gold to-brand-pink",
  },
];

const tools = [
  {
    title: "Budget Calculator",
    description: "See where your money actually goes. Takes 2 minutes.",
    href: "/tools/budget-calculator",
    icon: "📊",
  },
  {
    title: "Side Hustle Finder",
    description: "Take a quick quiz and find hustles that match your skills and schedule.",
    href: "/tools/side-hustle-finder",
    icon: "🔍",
  },
  {
    title: "Savings Tracker",
    description: "Set goals, track progress, and see exactly when you'll hit them.",
    href: "/tools/savings-tracker",
    icon: "🎯",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
        {/* Gradient orbs background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-purple/20 blur-[120px]" />
          <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-brand-pink/15 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent-cyan/10 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className="badge-gradient mb-6 inline-block">
            The Gen Z Money Platform
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.1] tracking-tight md:text-7xl">
            School won&apos;t teach you this.{" "}
            <span className="gradient-primary-text">We will.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 md:text-xl">
            Real stories from young creators, entrepreneurs, and hustlers making
            money their way. Real numbers. Actionable tools. Zero corporate
            speak.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/profiles" className="btn-primary text-base">
              Meet the Bread Winners
            </Link>
            <Link href="/tools" className="btn-secondary text-base">
              Try Our Free Tools
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-neutral-800/50 bg-neutral-900/50 p-6 backdrop-blur-sm">
            <div>
              <div className="text-2xl font-bold gradient-primary-text md:text-3xl">
                100+
              </div>
              <div className="mt-1 text-xs text-neutral-500 md:text-sm">
                Profiles & Guides
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-cyan md:text-3xl">
                3
              </div>
              <div className="mt-1 text-xs text-neutral-500 md:text-sm">
                Free Financial Tools
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-gold md:text-3xl">
                18-28
              </div>
              <div className="mt-1 text-xs text-neutral-500 md:text-sm">
                Built for This Age
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Pillars */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="gradient-primary-text">What We Cover</span>
            </h2>
            <p className="mt-3 text-neutral-400">
              Everything you need to start making smarter money moves.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contentPillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="card-glass group p-6 transition-all duration-300"
              >
                <div className="mb-4 text-3xl">{pillar.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-100 group-hover:gradient-primary-text">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {pillar.description}
                </p>
                <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r ${pillar.color} transition-all duration-300 group-hover:w-full`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Profile Preview */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-3xl border border-neutral-800/50 bg-neutral-900/30">
            <div className="grid md:grid-cols-2">
              {/* Left: Image placeholder */}
              <div className="gradient-glow flex aspect-square items-center justify-center md:aspect-auto">
                <div className="text-center text-white">
                  <div className="mb-4 text-6xl">👤</div>
                  <div className="badge-gradient">Featured Bread Winner</div>
                </div>
              </div>
              {/* Right: Content */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-pink">
                  Bread Winner Spotlight
                </div>
                <h3 className="mb-3 text-3xl font-bold md:text-4xl">
                  Coming Soon
                </h3>
                <p className="mb-2 text-neutral-400">
                  We&apos;re building out our first wave of creator profiles.
                  Real people. Real numbers. Real playbooks you can follow.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
                    $5-10K/mo
                  </span>
                  <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
                    Creator Economy
                  </span>
                  <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-400">
                    Age 24
                  </span>
                </div>
                <Link
                  href="/newsletter"
                  className="btn-primary mt-8 w-fit text-sm"
                >
                  Get Notified When We Launch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Free Tools That{" "}
              <span className="gradient-primary-text">Actually Help</span>
            </h2>
            <p className="mt-3 text-neutral-400">
              No signup required. Start using them right now.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="card-glass group relative overflow-hidden p-6 transition-all duration-300"
              >
                {/* Glow accent */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-purple/10 blur-2xl transition-all duration-300 group-hover:bg-brand-purple/20" />
                <div className="relative">
                  <div className="mb-4 text-4xl">{tool.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{tool.title}</h3>
                  <p className="text-sm text-neutral-400">
                    {tool.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-purple transition-colors group-hover:text-brand-pink">
                    Try it free
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl gradient-glow p-12 text-center md:p-20">
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-black text-white md:text-5xl">
                Your money education starts here.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
                Join thousands of young people getting smarter with their
                finances every week.
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
