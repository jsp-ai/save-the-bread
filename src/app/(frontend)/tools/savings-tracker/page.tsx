import { SavingsTracker } from "@/components/tools/SavingsTracker";

export const metadata = {
  title: "Savings Goal Tracker",
  description: "Set savings goals, track progress, and see exactly when you'll reach them.",
};

export default function SavingsTrackerPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 text-center">
          <div className="badge-gradient mb-4 inline-block">Free Tool</div>
          <h1 className="text-3xl font-black md:text-4xl">
            <span className="gradient-primary-text">Savings Goal Tracker</span>
          </h1>
          <p className="mt-3 text-neutral-400">
            Set goals, track progress, and watch your bread grow. Data stays on
            your device.
          </p>
        </div>
        <SavingsTracker />
      </div>
    </div>
  );
}
