import Link from "next/link";

export const metadata = {
  title: "Bread Winners",
  description: "Real profiles of young people making real money. Their stories, their numbers, their playbooks.",
};

export default function ProfilesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <span className="badge-gradient mb-3 inline-block">Bread Winners</span>
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            Real People. <span className="gradient-primary-text">Real Money.</span>
          </h1>
          <p className="mt-2 max-w-xl text-sm text-neutral-500 md:text-base">
            In-depth profiles of young creators, entrepreneurs, and hustlers. Their actual numbers, timelines, and the moves they made.
          </p>
        </div>

        <div className="card-bold p-8 text-center md:p-12">
          <div className="mb-4 text-5xl">👤</div>
          <h3 className="mb-2 text-xl font-bold text-neutral-900">Profiles Coming Soon</h3>
          <p className="mx-auto max-w-md text-sm text-neutral-500">
            We&apos;re interviewing our first wave of Bread Winners right now. Real stories, real income breakdowns, real playbooks.
          </p>
          <Link href="/newsletter" className="btn-primary mt-6 inline-block text-sm">
            Be First to Read Them
          </Link>
        </div>
      </div>
    </div>
  );
}
