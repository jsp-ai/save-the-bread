import Link from "next/link";

export const metadata = {
  title: "Videos",
  description: "Short-form financial content, creator spotlights, and money tips.",
};

export default function VideosPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <span className="badge-gradient mb-3 inline-block">Bread Crumbs</span>
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            <span className="gradient-primary-text">Short-Form</span> Money Content
          </h1>
          <p className="mt-2 max-w-xl text-sm text-neutral-500 md:text-base">
            Quick tips, creator spotlights, and financial facts in snackable video format.
          </p>
        </div>

        <div className="card-bold p-8 text-center md:p-12">
          <div className="mb-4 text-5xl">🎬</div>
          <h3 className="mb-2 text-xl font-bold text-neutral-900">Videos Coming Soon</h3>
          <p className="mx-auto max-w-md text-sm text-neutral-500">
            Short-form clips, creator spotlights, and money tips. Subscribe to get first access.
          </p>
          <Link href="/newsletter" className="btn-primary mt-6 inline-block text-sm">Get Notified</Link>
        </div>
      </div>
    </div>
  );
}
