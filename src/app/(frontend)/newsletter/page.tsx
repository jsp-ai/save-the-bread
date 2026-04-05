export const metadata = {
  title: "The Weekly Bread — Free Newsletter",
  description: "Get smarter about your money in 5 minutes a week. Real stories, real numbers, zero fluff. Join 1,000+ young people leveling up their finances weekly.",
  keywords: ["money newsletter", "financial newsletter", "Gen Z newsletter", "weekly money tips"],
  openGraph: {
    title: "The Weekly Bread — Free Newsletter",
    description: "Get smarter about your money in 5 minutes a week.",
    url: "https://savethebread.com/newsletter",
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Weekly Bread Newsletter | Save The Bread",
    description: "Get smarter about your money in 5 minutes a week.",
  },
  alternates: { canonical: "https://savethebread.com/newsletter" },
};

export default function NewsletterPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <div className="relative">
          <span className="badge-gradient mb-6 inline-block">Free Newsletter</span>
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            Get smarter with your money.{" "}
            <span className="gradient-primary-text">Weekly.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-neutral-500 md:text-lg">
            Every week we drop real stories from young money-makers, actionable
            financial tips, and new tools to level up your bread game.
          </p>

          <div className="mt-8 card-bold p-6 md:p-8">
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="First name"
                className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-accent-green"
              />
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-accent-green"
              />
              <button type="submit" className="btn-primary text-base">
                Subscribe — It&apos;s Free
              </button>
            </form>
            <p className="mt-4 text-xs text-neutral-400">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="card-bold p-4">
              <div className="text-xl font-black text-neutral-900">Weekly</div>
              <div className="mt-1 text-xs text-neutral-500">Drop schedule</div>
            </div>
            <div className="card-bold p-4">
              <div className="text-xl font-black text-accent-green">5 min</div>
              <div className="mt-1 text-xs text-neutral-500">Read time</div>
            </div>
            <div className="card-bold p-4">
              <div className="text-xl font-black text-accent-gold">100%</div>
              <div className="mt-1 text-xs text-neutral-500">Free forever</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
