import { createFileRoute } from "@tanstack/react-router";
import { MarketingShell } from "@/components/marketing-shell";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Boriyad Youth Academy" },
      { name: "description", content: "Latest news, events, and announcements from Boriyad Youth Academy." },
    ],
  }),
  component: NewsPage,
});

const news = [
  { slug: "national-science-fair-2025", title: "BYA Students Sweep National Science Fair", excerpt: "Three gold medals and two special awards at the 2025 National Science Olympiad. Our students demonstrated exceptional research skills and presentation excellence.", date: "2025-03-12", category: "Achievement" },
  { slug: "cambridge-partnership", title: "New Cambridge Assessment Partnership", excerpt: "Expanded IGCSE pathways and examiner training for our faculty. The partnership will strengthen our high school programs starting this academic year.", date: "2025-02-28", category: "Academics" },
  { slug: "open-day-2025", title: "Spring Open Day — Register Now", excerpt: "Tour our campus, meet faculty, and experience a day at BYA. Open day will feature interactive workshops, classroom visits, and Q&A with school leadership.", date: "2025-04-05", category: "Admissions" },
  { slug: "sports-championship", title: "Football Team Crowned Regional Champions", excerpt: "Our U-17 squad lifted the regional trophy after an undefeated season — congratulations to coaches and players.", date: "2025-01-22", category: "Sports" },
  { slug: "cultural-day", title: "Annual Cultural Day Celebrates Ethiopia's Heritage", excerpt: "Music, dance, food, and storytelling from all corners of Ethiopia. A vibrant reminder of who we are and what we celebrate.", date: "2024-12-10", category: "Community" },
  { slug: "new-library", title: "New Learning Commons Opens to Students", excerpt: "A modern library with study pods, maker space, and 15,000+ titles — designed for the next generation of learners.", date: "2024-11-04", category: "Campus" },
];

function NewsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="News & Events"
        title="Stories from Our Community"
        description="Achievements, announcements, and campus happenings."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((n) => (
              <article key={n.slug} className="group flex flex-col rounded-sm border border-navy-900/10 bg-white p-6 transition-all hover:border-gold-500/50 hover:shadow-lg">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-sm bg-navy-900 px-2 py-1 font-semibold uppercase tracking-widest text-gold-500">{n.category}</span>
                  <time className="text-muted-foreground">{new Date(n.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900 group-hover:text-gold-600">{n.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{n.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
