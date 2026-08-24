import { Shield, Users, Wrench } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "Immediate Protection",
    copy: "We provide emergency inspection and same-day tarping to prevent further leaks.",
    icon: Shield,
  },
  {
    number: "02",
    title: "Adjuster Meeting",
    copy: "Our experts meet your insurance adjuster on-site to ensure all storm damage is documented.",
    icon: Users,
  },
  {
    number: "03",
    title: "Rapid Restoration",
    copy: "We install your pristine new asphalt shingles or flat roof system backed by our 25-year warranty.",
    icon: Wrench,
  },
];

export function InsuranceProcess() {
  return (
    <div className="surface-card p-5 sm:p-7">
      <div className="mb-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Insurance support
        </span>
        <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
          Our Stress-Free Storm Insurance Process
        </h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative rounded-2xl border border-border bg-secondary/30 p-5 transition-colors hover:bg-secondary/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl ember-fill">
                  <Icon className="size-5" />
                </span>
                <span className="font-display text-xs font-bold text-muted-foreground">
                  {step.number}
                </span>
              </div>
              <h4 className="mt-4 text-base font-bold">{step.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {step.copy}
              </p>
              {index < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2.5 h-px w-5 bg-border" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
