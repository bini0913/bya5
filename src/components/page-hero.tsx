interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="cinematic-gradient relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(201,168,106,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(27,122,122,0.1), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-medium text-white text-balance md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
        )}
        <div className="section-divider mt-8" />
      </div>
    </section>
  );
}
