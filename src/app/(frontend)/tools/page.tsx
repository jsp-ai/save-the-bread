import Link from "next/link";

const tools = [
  {
    title: "Budget Calculator",
    description:
      "See exactly where your money goes. Visual breakdown, personalized insights, and comparison to the 50/30/20 framework.",
    href: "/tools/budget-calculator",
    icon: "📊",
    status: "live",
  },
  {
    title: "Side Hustle Finder",
    description:
      "Take a 2-minute quiz and get matched with side hustles based on your skills, schedule, and budget.",
    href: "/tools/side-hustle-finder",
    icon: "🔍",
    status: "live",
  },
  {
    title: "Savings Goal Tracker",
    description:
      'Set goals, track progress, and see exactly when you\'ll hit them. The "what if" slider shows how saving more changes your timeline.',
    href: "/tools/savings-tracker",
    icon: "🎯",
    status: "live",
  },
];

export const metadata = {
  title: "Free Financial Tools",
  description: "Budget calculator, side hustle finder, and savings tracker. No signup required.",
};

export default function ToolsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="badge-gradient mb-4 inline-block">Free Tools</div>
          <h1 className="text-4xl font-black md:text-5xl">
            Tools That{" "}
            <span className="gradient-primary-text">Actually Help</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-neutral-400">
            No signup. No paywall. Just open it and start using it. Your data
            stays on your device.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="card-glass group relative overflow-hidden p-8 transition-all duration-300"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-purple/10 blur-3xl transition-all duration-500 group-hover:bg-brand-purple/20" />
              <div className="relative">
                <div className="mb-6 text-5xl">{tool.icon}</div>
                <h2 className="mb-3 text-2xl font-bold">{tool.title}</h2>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {tool.description}
                </p>
                <div className="mt-8 flex items-center gap-2 font-semibold text-brand-purple transition-colors group-hover:text-brand-pink">
                  Open tool
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M4 10h12M12 6l4 4-4 4" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
