"use client";

import { useState, useEffect } from "react";

type Goal = {
  id: string;
  name: string;
  target: number;
  current: number;
  monthlyContribution: number;
};

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function SavingsTracker() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: "",
    target: 0,
    current: 0,
    monthlyContribution: 0,
  });

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("stb-savings");
      if (saved) setGoals(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (goals.length > 0) {
      try {
        localStorage.setItem("stb-savings", JSON.stringify(goals));
      } catch {
        // ignore
      }
    }
  }, [goals]);

  const addGoal = () => {
    if (!newGoal.name || !newGoal.target) return;
    setGoals([
      ...goals,
      {
        ...newGoal,
        id: Date.now().toString(),
      },
    ]);
    setNewGoal({ name: "", target: 0, current: 0, monthlyContribution: 0 });
    setShowAdd(false);
  };

  const updateCurrent = (id: string, current: number) => {
    setGoals(goals.map((g) => (g.id === id ? { ...g, current } : g)));
  };

  const removeGoal = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const getMonthsRemaining = (goal: Goal) => {
    if (goal.monthlyContribution <= 0) return Infinity;
    const remaining = goal.target - goal.current;
    if (remaining <= 0) return 0;
    return Math.ceil(remaining / goal.monthlyContribution);
  };

  const getPercentage = (goal: Goal) => {
    if (goal.target <= 0) return 0;
    return Math.min(100, (goal.current / goal.target) * 100);
  };

  const getMilestone = (pct: number) => {
    if (pct >= 100) return { label: "Goal reached!", emoji: "🎉" };
    if (pct >= 75) return { label: "Almost there!", emoji: "🔥" };
    if (pct >= 50) return { label: "Halfway!", emoji: "💪" };
    if (pct >= 25) return { label: "Making moves", emoji: "📈" };
    return { label: "Just started", emoji: "🌱" };
  };

  return (
    <div className="space-y-6">
      {/* Goals List */}
      {goals.map((goal) => {
        const pct = getPercentage(goal);
        const months = getMonthsRemaining(goal);
        const milestone = getMilestone(pct);

        return (
          <div key={goal.id} className="card-glass p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{milestone.emoji}</span>
                  <h3 className="text-lg font-bold">{goal.name}</h3>
                </div>
                <span className="text-xs text-neutral-500">
                  {milestone.label}
                </span>
              </div>
              <button
                onClick={() => removeGoal(goal.id)}
                className="text-neutral-600 transition-colors hover:text-red-400"
                aria-label="Remove goal"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l8 8M4 12l8-8" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-2 h-4 overflow-hidden rounded-full bg-neutral-100">
              <div
                className="h-full rounded-full gradient-primary transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mb-4 flex justify-between text-sm">
              <span className="font-bold">{formatCurrency(goal.current)}</span>
              <span className="text-neutral-500">
                {formatCurrency(goal.target)}
              </span>
            </div>

            {/* Update current savings */}
            <div className="mb-4 flex items-center gap-2">
              <label className="text-xs text-neutral-500">
                Update savings:
              </label>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500">$</span>
                <input
                  type="number"
                  value={goal.current || ""}
                  onChange={(e) =>
                    updateCurrent(goal.id, Number(e.target.value))
                  }
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-6 pr-3 text-sm text-neutral-900 outline-none focus:border-accent-green"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-neutral-50 p-2">
                <div className="text-xs text-neutral-500">Progress</div>
                <div className="font-bold gradient-primary-text">
                  {Math.round(pct)}%
                </div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-2">
                <div className="text-xs text-neutral-500">Remaining</div>
                <div className="font-bold text-accent-amber">
                  {formatCurrency(Math.max(0, goal.target - goal.current))}
                </div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-2">
                <div className="text-xs text-neutral-500">Months Left</div>
                <div className="font-bold text-accent-green">
                  {months === Infinity
                    ? "--"
                    : months === 0
                      ? "Done!"
                      : months}
                </div>
              </div>
            </div>

            {/* What-if slider */}
            {goal.monthlyContribution > 0 && months > 0 && months < Infinity && (
              <div className="mt-4 rounded-lg border border-neutral-200/50 bg-neutral-100/20 p-3">
                <p className="text-xs text-neutral-400">
                  Saving{" "}
                  <span className="font-bold text-neutral-200">
                    {formatCurrency(goal.monthlyContribution + 50)}
                  </span>
                  /mo instead? You&apos;d finish{" "}
                  <span className="font-bold text-accent-green">
                    {Math.max(
                      0,
                      months -
                        Math.ceil(
                          (goal.target - goal.current) /
                            (goal.monthlyContribution + 50)
                        )
                    )}{" "}
                    months sooner
                  </span>
                  .
                </p>
              </div>
            )}
          </div>
        );
      })}

      {/* Add Goal Form */}
      {showAdd ? (
        <div className="card-glass p-6">
          <h3 className="mb-4 text-lg font-bold">New Savings Goal</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder='Goal name (e.g., "Emergency Fund")'
              value={newGoal.name}
              onChange={(e) =>
                setNewGoal({ ...newGoal, name: e.target.value })
              }
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 placeholder-neutral-500 outline-none focus:border-accent-green"
            />
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="mb-1 block text-xs text-neutral-500">
                  Target Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                  <input
                    type="number"
                    value={newGoal.target || ""}
                    onChange={(e) =>
                      setNewGoal({ ...newGoal, target: Number(e.target.value) })
                    }
                    placeholder="0"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-6 pr-2 text-sm text-neutral-900 outline-none focus:border-accent-green"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-neutral-500">
                  Already Saved
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                  <input
                    type="number"
                    value={newGoal.current || ""}
                    onChange={(e) =>
                      setNewGoal({ ...newGoal, current: Number(e.target.value) })
                    }
                    placeholder="0"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-6 pr-2 text-sm text-neutral-900 outline-none focus:border-accent-green"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-neutral-500">
                  Monthly Save
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                  <input
                    type="number"
                    value={newGoal.monthlyContribution || ""}
                    onChange={(e) =>
                      setNewGoal({
                        ...newGoal,
                        monthlyContribution: Number(e.target.value),
                      })
                    }
                    placeholder="0"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-6 pr-2 text-sm text-neutral-900 outline-none focus:border-accent-green"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={addGoal} className="btn-primary flex-1 text-sm">
                Add Goal
              </button>
              <button
                onClick={() => setShowAdd(false)}
                className="btn-secondary text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAdd(true)}
          className="card-glass flex w-full items-center justify-center gap-2 p-6 text-neutral-400 transition-all hover:border-accent-green/30 hover:text-neutral-900"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 4v12M4 10h12" />
          </svg>
          <span className="font-medium">
            {goals.length === 0 ? "Create your first savings goal" : "Add another goal"}
          </span>
        </button>
      )}

      {goals.length === 0 && !showAdd && (
        <div className="text-center text-sm text-neutral-500">
          <p>Your goals are saved locally on your device. No account needed.</p>
        </div>
      )}
    </div>
  );
}
