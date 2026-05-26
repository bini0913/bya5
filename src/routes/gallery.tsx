import { createFileRoute } from "@tanstack/react-router";
import { MarketingShell } from "@/components/marketing-shell";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Boriyad Youth Academy" },
      { name: "description", content: "Photo gallery of life at Boriyad Youth Academy." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  "Graduation Ceremony", "Science Laboratory", "Sports Day",
  "Cultural Festival", "Library & Learning Commons", "Early Years Classroom",
  "Debate Championship", "Art Exhibition", "Campus Aerial View",
];

const gradients = [
  "from-navy-800 to-navy-900",
  "from-navy-900 to-teal-accent",
  "from-gold-600 to-gold-700",
  "from-navy-700 to-navy-950",
  "from-teal-accent to-navy-800",
  "from-gold-500 to-navy-900",
  "from-navy-900 to-purple-accent",
  "from-purple-accent to-navy-900",
  "from-navy-800 to-gold-700",
];

function GalleryPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Gallery"
        title="Life at BYA"
        description="Moments that capture our community, campus, and celebrations."
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((label, i) => (
              <div
                key={label}
                className={`group relative aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br ${gradients[i]}`}
              >
                <div className="absolute inset-0 flex items-end p-6 transition-all">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">Photo {i + 1}</p>
                    <p className="mt-1 font-display text-2xl font-semibold text-white">{label}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-navy-900/0 transition-colors group-hover:bg-navy-900/30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
