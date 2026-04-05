import type { Article, Profile } from "@/lib/content";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://savethebread.com";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Save The Bread",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "The Gen Z guide to making, saving, and growing money. Real stories from young creators, entrepreneurs, and hustlers.",
    sameAs: [],
    foundingDate: "2024",
    knowsAbout: [
      "Personal Finance",
      "Gen Z Finance",
      "Side Hustles",
      "Creator Economy",
      "Budgeting",
      "Investing for Beginners",
      "Financial Literacy",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Save The Bread",
    url: BASE_URL,
    description:
      "The Gen Z guide to making, saving, and growing money. Real stories from young creators, entrepreneurs, and hustlers.",
    publisher: {
      "@type": "Organization",
      name: "Save The Bread",
      url: BASE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    url: `${BASE_URL}/articles/${article.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/articles/${article.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Save The Bread",
      url: BASE_URL,
    },
    author: {
      "@type": "Organization",
      name: "Save The Bread",
    },
    articleSection: article.tag,
    keywords: [article.tag, "Gen Z finance", "money", "personal finance"].join(
      ", "
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProfileJsonLd({ profile }: { profile: Profile }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.title,
      description: profile.excerpt,
      knowsAbout: [profile.platform, profile.title],
    },
    url: `${BASE_URL}/profiles/${profile.slug}`,
    name: `${profile.name} — ${profile.title}`,
    description: profile.excerpt,
    publisher: {
      "@type": "Organization",
      name: "Save The Bread",
      url: BASE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
