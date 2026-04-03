import Link from "next/link";

const footerLinks = {
  Content: [
    { label: "Bread Winners", href: "/profiles" },
    { label: "Money Moves", href: "/articles" },
    { label: "Side Hustle Lab", href: "/articles" },
    { label: "The Toolkit", href: "/resources" },
  ],
  Tools: [
    { label: "Budget Calculator", href: "/tools/budget-calculator" },
    { label: "Side Hustle Finder", href: "/tools/side-hustle-finder" },
    { label: "Savings Tracker", href: "/tools/savings-tracker" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Newsletter", href: "/newsletter" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Newsletter CTA */}
        <div className="mb-16 rounded-2xl border border-neutral-800/50 bg-neutral-900/50 p-8 text-center md:p-12">
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">
            <span className="gradient-primary-text">
              Get smarter with your money.
            </span>{" "}
            Weekly.
          </h3>
          <p className="mx-auto mb-6 max-w-md text-neutral-400">
            Real stories, real numbers, and tools that actually help. No spam, no
            fluff.
          </p>
          <form className="mx-auto flex max-w-md gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-xl border border-neutral-700 bg-neutral-800/50 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 outline-none transition-colors focus:border-brand-purple"
            />
            <button type="submit" className="btn-primary whitespace-nowrap text-sm">
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-black tracking-tight">
              <span className="gradient-primary-text">SAVE</span>
              <span className="text-neutral-100">THE</span>
              <span className="gradient-primary-text">BREAD</span>
            </span>
            <p className="mt-3 text-sm text-neutral-500">
              Smart money for the next generation.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-neutral-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-neutral-800/50 pt-8 text-center text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Save The Bread. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
