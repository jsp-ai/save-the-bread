import Link from "next/link";

const footerLinks = {
  Sections: [
    { label: "Bread Winners", href: "/profiles" },
    { label: "Money Moves", href: "/articles?type=money-moves" },
    { label: "Side Hustle Lab", href: "/articles?type=side-hustle-lab" },
    { label: "Videos", href: "/videos" },
  ],
  Resources: [
    { label: "The Toolkit", href: "/resources" },
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
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Newsletter CTA */}
        <div className="mb-12 rounded-2xl border border-neutral-200 bg-white p-6 text-center md:mb-16 md:p-12">
          <h3 className="mb-3 text-xl font-black text-neutral-900 md:text-3xl">
            Get smarter with your money.{" "}
            <span className="gradient-primary-text">Weekly.</span>
          </h3>
          <p className="mx-auto mb-6 max-w-md text-sm text-neutral-500 md:text-base">
            Real stories, real numbers, and tools that actually help. No spam, no
            fluff.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-accent-green"
            />
            <button type="submit" className="btn-primary whitespace-nowrap text-sm">
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Grid — stacks to 1 col on mobile */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-black tracking-tight text-neutral-900">
              SAVE<span className="text-accent-green">THE</span>BREAD
            </span>
            <p className="mt-3 text-sm text-neutral-500">
              Smart money for the next generation.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
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
        <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} Save The Bread. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
