export const metadata = {
  title: "Newsletter",
  description: "Get smarter with your money. Weekly. Real stories, real numbers, and tools that actually help.",
};

export default function NewsletterPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-2xl px-4 text-center">
        {/* Gradient orb */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-purple/15 blur-[120px]" />
        </div>

        <div className="relative">
          <div className="badge-gradient mb-6 inline-block">Free Newsletter</div>
          <h1 className="text-4xl font-black md:text-5xl">
            Get smarter with your money.{" "}
            <span className="gradient-primary-text">Weekly.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-neutral-400">
            Every week we drop real stories from young money-makers, actionable
            financial tips, and new tools to level up your bread game.
          </p>

          <div className="mt-8 card-glass p-8">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="First name"
                className="rounded-xl border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-neutral-100 placeholder-neutral-500 outline-none transition-colors focus:border-brand-purple"
              />
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="rounded-xl border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-neutral-100 placeholder-neutral-500 outline-none transition-colors focus:border-brand-purple"
              />
              <button type="submit" className="btn-primary text-base">
                Subscribe — It&apos;s Free
              </button>
            </form>
            <p className="mt-4 text-xs text-neutral-500">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold gradient-primary-text">
                Weekly
              </div>
              <div className="mt-1 text-xs text-neutral-500">Drop schedule</div>
            </div>
            <div>
              <div className="text-xl font-bold text-accent-cyan">5 min</div>
              <div className="mt-1 text-xs text-neutral-500">Read time</div>
            </div>
            <div>
              <div className="text-xl font-bold text-accent-gold">100%</div>
              <div className="mt-1 text-xs text-neutral-500">Free forever</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
