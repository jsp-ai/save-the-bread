import { SideHustleQuiz } from "@/components/tools/SideHustleQuiz";

export const metadata = {
  title: "Side Hustle Finder",
  description: "Take a 2-minute quiz and get matched with side hustles that fit your skills, schedule, and budget.",
};

export default function SideHustleFinderPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 text-center">
          <div className="badge-gradient mb-4 inline-block">Free Tool</div>
          <h1 className="text-3xl font-black md:text-4xl">
            <span className="gradient-primary-text">Side Hustle Finder</span>
          </h1>
          <p className="mt-3 text-neutral-500">
            Answer 5 quick questions. We&apos;ll match you with hustles that fit
            your life.
          </p>
        </div>
        <SideHustleQuiz />
      </div>
    </div>
  );
}
