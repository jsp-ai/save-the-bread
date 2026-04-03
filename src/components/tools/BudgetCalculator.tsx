"use client";

import { useState, useEffect } from "react";

const defaultCategories = [
  { name: "Rent / Housing", key: "rent", type: "needs" as const, amount: 0 },
  { name: "Food / Groceries", key: "food", type: "needs" as const, amount: 0 },
  { name: "Transportation", key: "transport", type: "needs" as const, amount: 0 },
  { name: "Phone / Internet", key: "phone", type: "needs" as const, amount: 0 },
  { name: "Subscriptions", key: "subs", type: "wants" as const, amount: 0 },
  { name: "Entertainment", key: "entertainment", type: "wants" as const, amount: 0 },
  { name: "Shopping", key: "shopping", type: "wants" as const, amount: 0 },
  { name: "Debt Payments", key: "debt", type: "needs" as const, amount: 0 },
  { name: "Savings", key: "savings", type: "savings" as const, amount: 0 },
  { name: "Investing", key: "investing", type: "savings" as const, amount: 0 },
];

type Category = (typeof defaultCategories)[number];

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function DonutChart({
  segments,
}: {
  segments: { label: string; value: number; color: string }[];
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  if (total === 0) {
    return (
      <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-neutral-700">
        <span className="text-sm text-neutral-500">Enter amounts</span>
      </div>
    );
  }

  let cumulativePercent = 0;
  const gradientStops = segments
    .filter((s) => s.value > 0)
    .map((segment) => {
      const start = cumulativePercent;
      const percent = (segment.value / total) * 100;
      cumulativePercent += percent;
      return `${segment.color} ${start}% ${cumulativePercent}%`;
    })
    .join(", ");

  return (
    <div
      className="relative flex h-48 w-48 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(${gradientStops})`,
      }}
    >
      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-neutral-950">
        <span className="text-xs text-neutral-500">Total</span>
        <span className="text-lg font-bold">{formatCurrency(total)}</span>
      </div>
    </div>
  );
}

export function BudgetCalculator() {
  const [income, setIncome] = useState<number>(0);
  const [incomeMode, setIncomeMode] = useState<"monthly" | "hourly">("monthly");
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [categories, setCategories] = useState<Category[]>(defaultCategories);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("stb-budget");
      if (saved) {
        const data = JSON.parse(saved);
        if (data.income) setIncome(data.income);
        if (data.categories) setCategories(data.categories);
        if (data.incomeMode) setIncomeMode(data.incomeMode);
        if (data.hourlyRate) setHourlyRate(data.hourlyRate);
        if (data.hoursPerWeek) setHoursPerWeek(data.hoursPerWeek);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        "stb-budget",
        JSON.stringify({ income, categories, incomeMode, hourlyRate, hoursPerWeek })
      );
    } catch {
      // ignore
    }
  }, [income, categories, incomeMode, hourlyRate, hoursPerWeek]);

  const effectiveIncome =
    incomeMode === "hourly" ? hourlyRate * hoursPerWeek * 4.33 : income;

  const totalExpenses = categories.reduce((sum, c) => sum + c.amount, 0);
  const remaining = effectiveIncome - totalExpenses;

  const needs = categories
    .filter((c) => c.type === "needs")
    .reduce((sum, c) => sum + c.amount, 0);
  const wants = categories
    .filter((c) => c.type === "wants")
    .reduce((sum, c) => sum + c.amount, 0);
  const savings = categories
    .filter((c) => c.type === "savings")
    .reduce((sum, c) => sum + c.amount, 0);

  const needsPercent = effectiveIncome > 0 ? (needs / effectiveIncome) * 100 : 0;
  const wantsPercent = effectiveIncome > 0 ? (wants / effectiveIncome) * 100 : 0;
  const savingsPercent = effectiveIncome > 0 ? (savings / effectiveIncome) * 100 : 0;

  const updateCategory = (key: string, amount: number) => {
    setCategories((prev) =>
      prev.map((c) => (c.key === key ? { ...c, amount } : c))
    );
  };

  const chartSegments = [
    { label: "Needs", value: needs, color: "#7c3aed" },
    { label: "Wants", value: wants, color: "#ec4899" },
    { label: "Savings", value: savings, color: "#06b6d4" },
    {
      label: "Unaccounted",
      value: Math.max(0, remaining),
      color: "#2d2d3d",
    },
  ];

  const getInsight = () => {
    if (effectiveIncome === 0) return null;
    if (needsPercent > 50) {
      return `You're spending ${Math.round(needsPercent)}% on needs. The typical target is under 50%. Look at your biggest expense — can any of it be reduced?`;
    }
    if (savingsPercent < 10) {
      return `Your savings rate is ${Math.round(savingsPercent)}%. Even moving ${formatCurrency(effectiveIncome * 0.1)} (10%) into savings would change your trajectory.`;
    }
    if (savingsPercent >= 20) {
      return `${Math.round(savingsPercent)}% savings rate. You're ahead of most people your age. Keep it up.`;
    }
    return `Your split: ${Math.round(needsPercent)}% needs, ${Math.round(wantsPercent)}% wants, ${Math.round(savingsPercent)}% savings. The 50/30/20 rule suggests 50/30/20.`;
  };

  return (
    <div className="space-y-8">
      {/* Income Input */}
      <div className="card-glass p-6">
        <h2 className="mb-4 text-lg font-bold">Monthly Income (After Taxes)</h2>
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setIncomeMode("monthly")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              incomeMode === "monthly"
                ? "gradient-primary text-white"
                : "border border-neutral-700 text-neutral-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIncomeMode("hourly")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              incomeMode === "hourly"
                ? "gradient-primary text-white"
                : "border border-neutral-700 text-neutral-400"
            }`}
          >
            Hourly Wage
          </button>
        </div>

        {incomeMode === "monthly" ? (
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
              $
            </span>
            <input
              type="number"
              value={income || ""}
              onChange={(e) => setIncome(Number(e.target.value))}
              placeholder="0"
              className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 py-3 pl-8 pr-4 text-xl font-bold text-neutral-100 outline-none transition-colors focus:border-brand-purple"
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs text-neutral-500">
                Hourly Rate
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                  $
                </span>
                <input
                  type="number"
                  value={hourlyRate || ""}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  placeholder="0"
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 py-3 pl-7 pr-4 font-bold text-neutral-100 outline-none transition-colors focus:border-brand-purple"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs text-neutral-500">
                Hours/Week
              </label>
              <input
                type="number"
                value={hoursPerWeek || ""}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full rounded-xl border border-neutral-700 bg-neutral-800/50 px-4 py-3 font-bold text-neutral-100 outline-none transition-colors focus:border-brand-purple"
              />
            </div>
            {hourlyRate > 0 && (
              <div className="col-span-2 text-sm text-neutral-400">
                Estimated monthly: <span className="font-bold text-neutral-100">{formatCurrency(effectiveIncome)}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Expenses */}
      <div className="card-glass p-6">
        <h2 className="mb-4 text-lg font-bold">Monthly Expenses</h2>
        <div className="space-y-3">
          {categories.map((cat) => (
            <div key={cat.key} className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${
                  cat.type === "needs"
                    ? "bg-brand-purple"
                    : cat.type === "wants"
                      ? "bg-brand-pink"
                      : "bg-accent-cyan"
                }`}
              />
              <span className="flex-1 text-sm text-neutral-300">
                {cat.name}
              </span>
              <div className="relative w-28">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">
                  $
                </span>
                <input
                  type="number"
                  value={cat.amount || ""}
                  onChange={(e) =>
                    updateCategory(cat.key, Number(e.target.value))
                  }
                  placeholder="0"
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-800/50 py-2 pl-6 pr-2 text-right text-sm text-neutral-100 outline-none transition-colors focus:border-brand-purple"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      {effectiveIncome > 0 && (
        <div className="card-glass p-6">
          <h2 className="mb-6 text-lg font-bold">Your Breakdown</h2>

          <div className="flex flex-col items-center gap-8 md:flex-row">
            {/* Chart */}
            <DonutChart segments={chartSegments} />

            {/* Legend + Stats */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-brand-purple" />
                  <span className="text-sm text-neutral-300">Needs</span>
                </div>
                <div className="text-right">
                  <span className="font-bold">{formatCurrency(needs)}</span>
                  <span className="ml-2 text-xs text-neutral-500">
                    {Math.round(needsPercent)}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-brand-pink" />
                  <span className="text-sm text-neutral-300">Wants</span>
                </div>
                <div className="text-right">
                  <span className="font-bold">{formatCurrency(wants)}</span>
                  <span className="ml-2 text-xs text-neutral-500">
                    {Math.round(wantsPercent)}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent-cyan" />
                  <span className="text-sm text-neutral-300">Savings</span>
                </div>
                <div className="text-right">
                  <span className="font-bold">{formatCurrency(savings)}</span>
                  <span className="ml-2 text-xs text-neutral-500">
                    {Math.round(savingsPercent)}%
                  </span>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">Unaccounted</span>
                  <span
                    className={`font-bold ${remaining < 0 ? "text-red-400" : remaining > 0 ? "text-accent-gold" : "text-neutral-100"}`}
                  >
                    {formatCurrency(remaining)}
                  </span>
                </div>
                {remaining > 0 && (
                  <p className="mt-1 text-xs text-neutral-500">
                    This is the money that &quot;disappears&quot; each month
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 50/30/20 Comparison */}
          <div className="mt-8 rounded-xl border border-neutral-700/50 bg-neutral-800/30 p-4">
            <h3 className="mb-3 text-sm font-semibold text-neutral-300">
              50/30/20 Check
            </h3>
            <div className="space-y-2">
              {[
                { label: "Needs", actual: needsPercent, target: 50, color: "bg-brand-purple" },
                { label: "Wants", actual: wantsPercent, target: 30, color: "bg-brand-pink" },
                { label: "Savings", actual: savingsPercent, target: 20, color: "bg-accent-cyan" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">{item.label}</span>
                    <span className="text-neutral-400">
                      {Math.round(item.actual)}% / {item.target}% target
                    </span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-neutral-700">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${item.color}`}
                      style={{
                        width: `${Math.min(100, (item.actual / item.target) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Insight */}
          {getInsight() && (
            <div className="mt-6 rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-4">
              <p className="text-sm text-neutral-300">{getInsight()}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
