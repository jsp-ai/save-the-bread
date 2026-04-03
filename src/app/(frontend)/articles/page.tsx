import Link from "next/link";

const contentTypes = [
  { label: "All", value: "all" },
  { label: "Money Moves", value: "money-moves" },
  { label: "Side Hustle Lab", value: "side-hustle-lab" },
  { label: "Toolkit Reviews", value: "toolkit" },
  { label: "Opinion", value: "opinion" },
];

export const metadata = {
  title: "Articles",
  description: "Financial guides, money moves, and side hustle playbooks for the next generation.",
};

export default function ArticlesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black md:text-5xl">
            <span className="gradient-primary-text">Articles</span>
          </h1>
          <p className="mt-3 max-w-xl text-neutral-400">
            Financial decisions explained through real scenarios. Playbooks you
            can actually follow. No fluff.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap gap-2">
          {contentTypes.map((type) => (
            <button
              key={type.value}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                type.value === "all"
                  ? "gradient-primary text-white"
                  : "border border-neutral-700 text-neutral-400 hover:border-brand-purple hover:text-neutral-100"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Empty State */}
        <div className="card-glass p-12 text-center">
          <div className="mb-4 text-5xl">📝</div>
          <h3 className="mb-2 text-xl font-bold">Articles Coming Soon</h3>
          <p className="mx-auto max-w-md text-neutral-400">
            We&apos;re cooking up our first wave of money moves, side hustle
            playbooks, and financial guides. Get notified when we launch.
          </p>
          <Link href="/newsletter" className="btn-primary mt-6 inline-block text-sm">
            Get Notified
          </Link>
        </div>
      </div>
    </div>
  );
}
