import Link from "next/link";

const tools = [
  {
    title: "Budget Calculator",
    description: "See exactly where your money goes. Visual breakdown, personalized insights, and comparison to the 50/30/20 framework.",
    href: "/tools/budget-calculator",
    icon: "📊",
  },
  {
    title: "Side Hustle Finder",
    description: "Take a 2-minute quiz and get matched with side hustles based on your skills, schedule, and budget.",
    href: "/tools/side-hustle-finder",
    icon: "🔍",
  },
  {
    title: "Savings Goal Tracker",
    description: 'Set goals, track progress, and see exactly when you\'ll hit them. The "what if" slider shows how saving more changes your timeline.',
    href: "/tools/savings-tracker",
    icon: "🎯",
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
        <div className="mb-10 text-center">
          <span className="badge-gradient mb-3 inline-block">Free Tools</span>
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            Tools That <span className="gradient-primary-text">Actually Help</span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-500 md:text-base">
            No signup. No paywall. Just open it and start using it. Your data stays on your device.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href} className="card-bold group relative overflow-hidden p-6 md:p-8">
              <div className="relative">
                <div className="mb-5 text-4xl md:text-5xl">{tool.icon}</div>
                <h2 className="mb-3 text-xl font-bold text-neutral-900 md:text-2xl">{tool.title}</h2>
                <p className="text-sm leading-relaxed text-neutral-500">{tool.description}</p>
                <div className="mt-6 flex items-center gap-2 font-semibold text-accent-green">
                  Open tool
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
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
