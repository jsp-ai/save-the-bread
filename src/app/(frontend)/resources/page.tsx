import Link from "next/link";

export const metadata = {
  title: "The Toolkit — Financial Apps, Tools & Resources",
  description: "Honest reviews of financial apps, tools, courses, and resources for young adults. No sponsorship bias — if it sucks, we say so.",
  keywords: ["financial apps", "money tools", "budgeting apps", "investing apps", "financial resources"],
  openGraph: {
    title: "The Toolkit — Financial Apps, Tools & Resources",
    description: "Honest reviews of financial apps, tools, courses, and resources.",
    url: "https://savethebread.com/resources",
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Toolkit | Save The Bread",
    description: "Honest reviews of financial apps, tools, courses, and resources.",
  },
  alternates: { canonical: "https://savethebread.com/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <span className="badge-gradient mb-3 inline-block">The Toolkit</span>
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            Tools & Resources <span className="gradient-primary-text">That Actually Help</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm text-neutral-500 md:text-base">
            Curated, honest reviews. We test everything and always highlight free options.
          </p>
        </div>

        <div className="card-bold p-8 text-center md:p-12">
          <div className="mb-4 text-5xl">🛠️</div>
          <h3 className="mb-2 text-xl font-bold text-neutral-900">Resource Lists Coming Soon</h3>
          <p className="mx-auto max-w-md text-sm text-neutral-500">
            Best budgeting apps, starter investment platforms, free courses, and more. All tested and reviewed honestly.
          </p>
          <Link href="/newsletter" className="btn-primary mt-6 inline-block text-sm">Get Notified</Link>
        </div>
      </div>
    </div>
  );
}
