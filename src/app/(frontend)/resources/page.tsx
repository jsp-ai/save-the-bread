import Link from "next/link";

export const metadata = {
  title: "The Toolkit",
  description: "Honest reviews of financial apps, tools, courses, and resources. Free options always highlighted.",
};

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <div className="badge-gradient mb-4 inline-block">The Toolkit</div>
          <h1 className="text-4xl font-black md:text-5xl">
            Tools & Resources{" "}
            <span className="gradient-primary-text">That Actually Help</span>
          </h1>
          <p className="mt-3 max-w-xl text-neutral-400">
            Curated, honest reviews. We test everything and always highlight free
            options. No hidden sponsors.
          </p>
        </div>

        <div className="card-glass p-12 text-center">
          <div className="mb-4 text-5xl">🛠️</div>
          <h3 className="mb-2 text-xl font-bold">Resource Lists Coming Soon</h3>
          <p className="mx-auto max-w-md text-neutral-400">
            Best budgeting apps, starter investment platforms, free courses, and
            more. All tested and reviewed honestly.
          </p>
          <Link href="/newsletter" className="btn-primary mt-6 inline-block text-sm">
            Get Notified
          </Link>
        </div>
      </div>
    </div>
  );
}
