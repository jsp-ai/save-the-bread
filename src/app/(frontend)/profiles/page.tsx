import Link from "next/link";
import { profiles } from "@/lib/content";

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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <Link
              key={profile.slug}
              href={`/profiles/${profile.slug}`}
              className="card-bold group overflow-hidden"
            >
              <div className="gradient-glow flex aspect-[4/3] items-end p-4 md:p-5">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    Age {profile.age} · {profile.platform}
                  </div>
                  <div className="mt-1 text-lg font-black text-white md:text-xl">
                    {profile.name}
                  </div>
                  <div className="text-sm text-white/70">{profile.title}</div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      Earning
                    </div>
                    <div className="text-lg font-black text-accent-green">
                      {profile.stat}
                    </div>
                  </div>
                  <span className="proof-badge">
                    <span className="dot" />
                    {profile.reads} reads
                  </span>
                </div>
                <p className="mt-3 line-clamp-2 text-xs text-neutral-500">
                  {profile.excerpt}
                </p>
                <div className="mt-3 text-xs font-semibold text-accent-green">
                  Read full story →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
