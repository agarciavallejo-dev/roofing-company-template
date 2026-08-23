import { createFileRoute } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock, BadgeCheck, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Estimator } from "@/components/Estimator";
import heroRoof from "@/assets/hero-roof.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Install It Roofing | Hawthorne, CA Roof Repair & Replacement" },
      {
        name: "description",
        content:
          "Hawthorne's trusted roofing experts. 4.9/5 from 88 local Google reviews. Free 3-step online estimate for shingles, flat roofs and gutters.",
      },
      {
        property: "og:title",
        content: "Install It Roofing | Hawthorne's Trusted Roofing Experts",
      },
      {
        property: "og:description",
        content:
          "Emergency repair, re-roofs, flat roof systems and seamless gutters in Hawthorne, CA. Get an instant project estimate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "CSLB #1094412" },
  { icon: Clock, label: "24/7 Emergency", sub: "Same-day tarping" },
  { icon: BadgeCheck, label: "25-Year Warranty", sub: "Labor + materials" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl ember-fill font-display text-sm font-extrabold">
              II
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-sm font-bold">
                Install It Roofing
              </span>
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <MapPin className="size-3" /> Hawthorne, CA
              </span>
            </span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <a href="tel:+13105550142" className="shrink-0">
              <Button variant="pill" size="pill" className="text-xs sm:text-sm">
                <Phone className="size-4" />
                <span className="hidden sm:inline">
                  Call for Emergency Repair
                </span>
                <span className="inline sm:hidden">Emergency</span>
              </Button>
            </a>
            <button
              aria-label="Menu"
              className="hidden size-9 items-center justify-center rounded-full border border-border text-muted-foreground lg:flex"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="grid-glow relative overflow-hidden px-4 pb-10 pt-12">
          <div className="mx-auto max-w-5xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              South Bay · Since 2004
            </span>
            <h1 className="mt-5 text-[2.6rem] font-extrabold leading-[1.03] sm:text-6xl">
              Hawthorne's{" "}
              <span className="text-primary">Trusted Roofing</span> Experts
            </h1>

            {/* Social proof banner */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gold/30 bg-secondary/40 px-4 py-3 shadow-[var(--shadow-card)]">
              <span className="text-base tracking-tight">⭐⭐⭐⭐⭐</span>
              <p className="font-display text-sm font-bold text-gold sm:text-base">
                4.9/5 Stars from 88 Local Google Reviews
              </p>
            </div>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Tear-offs, flat roof systems and seamless gutters installed by a
              local crew that answers the phone. Free estimates in under 60
              seconds.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#estimate" className="sm:w-auto">
                <Button variant="ember" size="lg" className="w-full sm:w-auto">
                  Start free estimate
                </Button>
              </a>
              <a href="tel:+13105550142" className="sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="size-4" /> (310) 555-0142
                </Button>
              </a>
            </div>

            <div className="surface-card mt-9 overflow-hidden p-2">
              <img
                src={heroRoof}
                alt="Newly installed dark shingle roof on a Hawthorne home at sunset"
                width={1200}
                height={1408}
                className="h-[280px] w-full rounded-[calc(var(--radius)+8px)] object-cover sm:h-[420px]"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {TRUST.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.label}
                    className="surface-card flex items-center gap-3 p-4"
                  >
                    <Icon className="size-5 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{t.label}</p>
                      <p className="text-xs text-muted-foreground">{t.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Estimator */}
        <section id="estimate" className="scroll-mt-20 px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Instant estimate tool
              </span>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Price your project in 3 steps
              </h2>
            </div>
            <div className="mx-auto max-w-2xl">
              <Estimator />
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Real local projects
              </span>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Our Neighborhood Transformations
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Drag the handle to reveal the difference.
              </p>
            </div>
            <BeforeAfter />
          </div>
        </section>

        {/* ZIP validator */}
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-2xl">
            <ZipValidator />
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Good to know
              </span>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="grid gap-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="surface-card border-b px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>


      <footer className="border-t border-border/70 px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <p className="font-display font-bold">Install It Roofing</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Serving Hawthorne, Lawndale, El Segundo, Gardena & the South Bay.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Install It Roofing · CSLB #1094412
          </p>
        </div>
      </footer>
    </div>
  );
}
