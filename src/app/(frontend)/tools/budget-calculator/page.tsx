import { BudgetCalculator } from "@/components/tools/BudgetCalculator";

export const metadata = {
  title: "Budget Calculator",
  description: "See where your money actually goes. Visual breakdown and personalized insights in under 3 minutes.",
};

export default function BudgetCalculatorPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <div className="badge-gradient mb-4 inline-block">Free Tool</div>
          <h1 className="text-3xl font-black md:text-4xl">
            <span className="gradient-primary-text">The Bread Budget</span>
          </h1>
          <p className="mt-3 text-neutral-400">
            See where your money actually goes. Takes about 2 minutes.
          </p>
        </div>
        <BudgetCalculator />
      </div>
    </div>
  );
}
