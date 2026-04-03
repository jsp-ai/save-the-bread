"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  question: string;
  options: { label: string; value: string; tags: string[] }[];
};

const questions: Question[] = [
  {
    question: "How many free hours per week do you have?",
    options: [
      { label: "Less than 5", value: "time-low", tags: ["passive", "digital-products"] },
      { label: "5-10 hours", value: "time-med", tags: ["freelance", "content", "tutoring"] },
      { label: "10-20 hours", value: "time-high", tags: ["freelance", "ecommerce", "service", "content"] },
      { label: "20+ hours", value: "time-max", tags: ["business", "freelance", "ecommerce", "content"] },
    ],
  },
  {
    question: "What's your startup budget?",
    options: [
      { label: "$0 — I'm broke", value: "budget-zero", tags: ["freelance", "content", "tutoring", "service"] },
      { label: "Under $100", value: "budget-low", tags: ["freelance", "content", "digital-products", "tutoring"] },
      { label: "Under $500", value: "budget-med", tags: ["ecommerce", "content", "digital-products"] },
      { label: "$500+", value: "budget-high", tags: ["ecommerce", "business", "investing"] },
    ],
  },
  {
    question: "Which skills are closest to what you enjoy?",
    options: [
      { label: "Creative (writing, design, video)", value: "creative", tags: ["content", "freelance", "digital-products"] },
      { label: "Technical (coding, data, systems)", value: "technical", tags: ["freelance", "business", "digital-products"] },
      { label: "People-oriented (sales, teaching)", value: "people", tags: ["tutoring", "service", "business"] },
      { label: "Hands-on (building, cleaning, delivery)", value: "physical", tags: ["service", "ecommerce"] },
    ],
  },
  {
    question: "Where do you want to work?",
    options: [
      { label: "Online only", value: "remote", tags: ["freelance", "content", "digital-products", "tutoring"] },
      { label: "Local / in-person", value: "local", tags: ["service", "tutoring", "business"] },
      { label: "Either works", value: "both", tags: ["freelance", "content", "service", "ecommerce", "business"] },
    ],
  },
  {
    question: "What matters most to you?",
    options: [
      { label: "Fast money now", value: "fast", tags: ["service", "freelance", "tutoring"] },
      { label: "Long-term income potential", value: "longterm", tags: ["business", "content", "digital-products", "investing"] },
      { label: "Flexibility", value: "flex", tags: ["freelance", "content", "digital-products"] },
      { label: "Learning new skills", value: "learn", tags: ["freelance", "content", "business"] },
    ],
  },
];

type Hustle = {
  name: string;
  tags: string[];
  income: string;
  timeToFirstDollar: string;
  startupCost: string;
  description: string;
};

const hustles: Hustle[] = [
  {
    name: "Freelance Video Editing",
    tags: ["freelance", "content"],
    income: "$2,000-$6,000/mo",
    timeToFirstDollar: "2-4 weeks",
    startupCost: "$0 (if you have a computer)",
    description: "Edit videos for YouTubers, brands, and agencies. Start with free projects to build a portfolio, then charge $100-500+ per video.",
  },
  {
    name: "UGC Content Creation",
    tags: ["content", "freelance"],
    income: "$1,000-$5,000/mo",
    timeToFirstDollar: "1-3 weeks",
    startupCost: "$0 (smartphone)",
    description: "Create authentic-looking content for brands to use in their ads. You don't need followers — just a phone and the ability to talk to camera.",
  },
  {
    name: "Online Tutoring",
    tags: ["tutoring", "service"],
    income: "$1,500-$4,000/mo",
    timeToFirstDollar: "1 week",
    startupCost: "$0",
    description: "Teach subjects you're good at. Platforms like Wyzant and Tutors.com connect you with students. $30-80/hour depending on subject.",
  },
  {
    name: "Sell Digital Products",
    tags: ["digital-products", "content"],
    income: "$500-$10,000/mo",
    timeToFirstDollar: "2-8 weeks",
    startupCost: "$0-50",
    description: "Create templates, guides, presets, or courses and sell on Gumroad, Etsy, or your own site. Build once, sell forever.",
  },
  {
    name: "E-commerce / Reselling",
    tags: ["ecommerce", "business"],
    income: "$1,000-$8,000/mo",
    timeToFirstDollar: "1-4 weeks",
    startupCost: "$100-500",
    description: "Buy low, sell high. Start with thrifting, garage sales, or wholesale. Sell on eBay, Poshmark, or Amazon.",
  },
  {
    name: "Local Service Business",
    tags: ["service", "business"],
    income: "$2,000-$10,000/mo",
    timeToFirstDollar: "1-2 weeks",
    startupCost: "$0-200",
    description: "Cleaning, lawn care, pressure washing, pet sitting. Low startup costs, immediate demand, and you can hire people to scale.",
  },
  {
    name: "Freelance Web Development",
    tags: ["freelance", "business"],
    income: "$3,000-$12,000/mo",
    timeToFirstDollar: "2-6 weeks",
    startupCost: "$0",
    description: "Build websites for local businesses, startups, and creators. High demand, high pay. Start on Upwork or cold outreach.",
  },
  {
    name: "Social Media Management",
    tags: ["content", "freelance"],
    income: "$1,500-$5,000/mo",
    timeToFirstDollar: "1-3 weeks",
    startupCost: "$0",
    description: "Run social accounts for small businesses. Post content, engage followers, grow their audience. $500-2000/client/month.",
  },
];

export function SideHustleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (tags: string[]) => {
    const newAnswers = [...answers, tags];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResults = (): (Hustle & { score: number })[] => {
    const tagCounts: Record<string, number> = {};
    answers.flat().forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    return hustles
      .map((hustle) => {
        const score = hustle.tags.reduce(
          (sum, tag) => sum + (tagCounts[tag] || 0),
          0
        );
        return { ...hustle, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const results = getResults();
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Your <span className="gradient-primary-text">Top Matches</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Based on your answers, these hustles fit your situation best.
          </p>
        </div>

        {results.map((result, i) => (
          <div key={result.name} className="card-glass relative overflow-hidden p-6">
            <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-sm font-bold text-white">
              {i + 1}
            </div>
            <h3 className="mb-2 text-xl font-bold">{result.name}</h3>
            <p className="mb-4 text-sm text-neutral-400">
              {result.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-lg border border-neutral-700 px-3 py-1.5">
                <div className="text-xs text-neutral-500">Income</div>
                <div className="text-sm font-bold text-accent-green">
                  {result.income}
                </div>
              </div>
              <div className="rounded-lg border border-neutral-700 px-3 py-1.5">
                <div className="text-xs text-neutral-500">First $</div>
                <div className="text-sm font-bold text-accent-gold">
                  {result.timeToFirstDollar}
                </div>
              </div>
              <div className="rounded-lg border border-neutral-700 px-3 py-1.5">
                <div className="text-xs text-neutral-500">Startup Cost</div>
                <div className="text-sm font-bold text-accent-gold">
                  {result.startupCost}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button onClick={restart} className="btn-secondary flex-1 text-sm">
            Retake Quiz
          </button>
          <Link href="/newsletter" className="btn-primary flex-1 text-center text-sm">
            Get the Full Playbook (Free)
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div>
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-xs text-neutral-500">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span>
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-neutral-800">
          <div
            className="h-full rounded-full gradient-primary transition-all duration-500"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="mb-6 text-2xl font-bold">{q.question}</h2>

      {/* Options */}
      <div className="space-y-3">
        {q.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.tags)}
            className="card-glass w-full p-4 text-left transition-all duration-200 hover:border-brand-purple/50 hover:glow-purple"
          >
            <span className="text-base font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
