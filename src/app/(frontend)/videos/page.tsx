import Link from "next/link";

export const metadata = {
  title: "Videos",
  description: "Short-form financial content, creator spotlights, and money tips.",
};

export default function VideosPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <div className="badge-gradient mb-4 inline-block">Bread Crumbs</div>
          <h1 className="text-4xl font-black md:text-5xl">
            <span className="gradient-primary-text">Short-Form</span> Money
            Content
          </h1>
          <p className="mt-3 max-w-xl text-neutral-400">
            Quick tips, creator spotlights, and financial facts in snackable
            video format.
          </p>
        </div>

        <div className="card-glass p-12 text-center">
          <div className="mb-4 text-5xl">🎬</div>
          <h3 className="mb-2 text-xl font-bold">Videos Coming Soon</h3>
          <p className="mx-auto max-w-md text-neutral-400">
            Short-form clips, creator spotlights, and money tips. Subscribe to
            get first access.
          </p>
          <Link href="/newsletter" className="btn-primary mt-6 inline-block text-sm">
            Get Notified
          </Link>
        </div>
      </div>
    </div>
  );
}
