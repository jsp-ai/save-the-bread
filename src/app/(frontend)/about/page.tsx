import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Save The Bread is the Gen Z guide to making, saving, and growing money.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10">
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">
            About <span className="gradient-primary-text">Save The Bread</span>
          </h1>
        </div>

        <div className="space-y-6 text-neutral-600">
          <p className="text-base leading-relaxed md:text-lg">
            School teaches you algebra but not how to do your taxes. It teaches
            you about the Civil War but not how a credit score works. It never
            mentions that the biggest financial decisions of your life happen
            before you turn 30 — and that most of them are driven by emotion,
            not logic.
          </p>

          <p className="text-base leading-relaxed md:text-lg">
            <strong className="text-neutral-900">Save The Bread exists to fix that.</strong>
          </p>

          <p className="leading-relaxed">
            We&apos;re a financial media platform built for people aged 18-28.
            Not Wall Street bros. Not crypto gurus. Not your parents telling you
            to &quot;just save more.&quot; We profile real young people making real
            money — streamers, creators, entrepreneurs, freelancers — and break
            down exactly how they did it.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-neutral-900">Why &quot;Save The Bread&quot;?</h2>
          <p className="leading-relaxed">
            &quot;Bread&quot; is money. &quot;Save the bread&quot; is the mindset:
            be smart with what you earn, grow what you have, and build something
            that lasts. It&apos;s not about being cheap — it&apos;s about being intentional.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-neutral-900">What We Believe</h2>
          <ul className="space-y-3">
            <li><strong className="text-neutral-900">Show, don&apos;t tell.</strong> This is a &quot;show me&quot; generation. We don&apos;t lecture — we profile people who are actually doing it.</li>
            <li><strong className="text-neutral-900">Real numbers or nothing.</strong> Vague advice is useless. We publish actual income breakdowns, timelines, and costs.</li>
            <li><strong className="text-neutral-900">Free first.</strong> Our tools and content are free. We&apos;ll never paywall the basics of financial literacy.</li>
            <li><strong className="text-neutral-900">Honest always.</strong> If a product sucks, we say so. If a side hustle has a 90% failure rate, we say so.</li>
          </ul>

          <div className="mt-8 card-bold p-6 text-center md:p-8">
            <h3 className="mb-2 text-xl font-bold text-neutral-900">Want to be featured?</h3>
            <p className="mb-4 text-sm text-neutral-500">
              If you&apos;re a young creator, entrepreneur, or hustler making money and want to share your story, we want to hear from you.
            </p>
            <Link href="/newsletter" className="btn-primary inline-block text-sm">Get In Touch</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
