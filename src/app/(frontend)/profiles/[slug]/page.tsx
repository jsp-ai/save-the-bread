import Link from "next/link";
import { notFound } from "next/navigation";
import { profiles } from "@/lib/content";
import { ProfileJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://savethebread.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const profile = profiles.find((p) => p.slug === slug);
  if (!profile) return {};
  return {
    title: `${profile.name} — ${profile.title}`,
    description: profile.excerpt,
    keywords: [
      profile.name,
      profile.title,
      profile.platform,
      "Bread Winner",
      "young entrepreneur",
      "Gen Z",
    ],
    openGraph: {
      title: `${profile.name} — ${profile.title}`,
      description: profile.excerpt,
      url: `${BASE_URL}/profiles/${profile.slug}`,
      type: "profile",
      siteName: "Save The Bread",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${profile.name} — ${profile.title}`,
      description: profile.excerpt,
    },
    alternates: {
      canonical: `${BASE_URL}/profiles/${profile.slug}`,
    },
  };
}

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params;
  const profile = profiles.find((p) => p.slug === slug);
  if (!profile) notFound();

  return (
    <div className="pt-24 pb-20">
      <ProfileJsonLd profile={profile} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: BASE_URL },
          { name: "Bread Winners", url: `${BASE_URL}/profiles` },
          {
            name: profile.name,
            url: `${BASE_URL}/profiles/${profile.slug}`,
          },
        ]}
      />
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        {/* Header */}
        <div className="mb-6">
          <span className="badge-gradient mb-4 inline-block">Bread Winner</span>
          <h1 className="text-3xl font-black leading-[1.08] tracking-[-0.03em] text-neutral-900 md:text-[2.75rem]">
            {profile.headline}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">{profile.excerpt}</p>
        </div>

        {/* Byline */}
        <div className="article-byline">
          <span className="font-semibold text-neutral-900">Save The Bread</span>
          <span className="text-neutral-300">|</span>
          <span>April 2026</span>
        </div>

        {/* Profile Card */}
        <div className="mb-8 overflow-hidden rounded-xl border-2 border-neutral-200 md:mb-10">
          <div className="gradient-glow p-5 md:p-8">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
              Age {profile.age} · {profile.platform}
            </div>
            <div className="mt-1 text-2xl font-black text-white md:text-3xl">
              {profile.name}
            </div>
            <div className="text-base text-white/70">{profile.title}</div>
          </div>
          <div className="grid grid-cols-3 divide-x divide-neutral-200 bg-white">
            <div className="p-3 text-center md:p-4">
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">Earning</div>
              <div className="text-base font-black text-accent-green md:text-lg">{profile.stat}</div>
            </div>
            <div className="p-3 text-center md:p-4">
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">Platform</div>
              <div className="text-xs font-bold text-neutral-900 md:text-sm">{profile.platform}</div>
            </div>
            <div className="p-3 text-center md:p-4">
              <div className="text-[10px] uppercase tracking-wider text-neutral-400">Age</div>
              <div className="text-base font-black text-neutral-900 md:text-lg">{profile.age}</div>
            </div>
          </div>
        </div>

        {/* Profile Body — Editorial formatting */}
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: profile.body }}
        />

        {/* Key Takeaways */}
        {profile.takeaways && (
          <div className="mt-10 card-bold p-6">
            <h3 className="mb-4 text-lg font-black text-neutral-900">Key Takeaways</h3>
            <ul className="space-y-2">
              {profile.takeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-green" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 card-bold p-6 text-center md:p-8">
          <h3 className="text-lg font-black text-neutral-900">
            <span className="gradient-primary-text">Want more Bread Winner stories?</span>
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            We drop new profiles every week. Real people, real numbers.
          </p>
          <form className="mx-auto mt-4 flex max-w-sm flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:border-accent-green"
            />
            <button type="submit" className="btn-primary text-sm">
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-8">
          <Link
            href="/profiles"
            className="text-sm font-semibold text-accent-green hover:text-accent-emerald"
          >
            ← Back to all profiles
          </Link>
        </div>
      </div>
    </div>
  );
}
