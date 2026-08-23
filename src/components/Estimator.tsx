import { useCallback, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CloudUpload,
  Home,
  ImageIcon,
  Layers,
  Ruler,
  Waves,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PROJECT_TYPES = [
  {
    id: "shingles",
    title: "Asphalt Shingles",
    blurb: "Full tear-off & re-roof",
    icon: Home,
    rate: 7.5,
  },
  {
    id: "flat",
    title: "Flat Roof System",
    blurb: "TPO / torch-down membrane",
    icon: Layers,
    rate: 9.25,
  },
  {
    id: "gutters",
    title: "Gutter Installation",
    blurb: "Seamless aluminum runs",
    icon: Waves,
    rate: 2.4,
  },
];

const STEPS = ["Project", "Size", "Details"];

export function Estimator() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState<string | null>(null);
  const [sqft, setSqft] = useState(1800);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const selected = PROJECT_TYPES.find((p) => p.id === type);
  const low = selected ? Math.round((selected.rate * sqft * 0.85) / 50) * 50 : 0;
  const high = selected ? Math.round((selected.rate * sqft * 1.25) / 50) * 50 : 0;

  const takeFile = useCallback((f: File | undefined) => {
    if (!f) return;
    setFileName(f.name);
  }, []);

  const canNext = step === 0 ? Boolean(type) : true;

  if (submitted) {
    return (
      <div className="surface-card grid-glow overflow-hidden p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full ember-fill">
          <Check className="size-7" strokeWidth={3} />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Estimate request received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          A Hawthorne project manager will call you within one business hour with your
          firm quote.
        </p>
        {selected && (
          <p className="mt-5 text-sm text-muted-foreground">
            Preliminary range for {selected.title.toLowerCase()} at{" "}
            {sqft.toLocaleString()} sq ft:{" "}
            <span className="font-semibold text-gold">
              ${low.toLocaleString()} – ${high.toLocaleString()}
            </span>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="surface-card grid-glow overflow-hidden">
      {/* Progress */}
      <div className="border-b border-border/70 px-5 py-4">
        <div className="flex items-center gap-2">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div
                className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  i <= step
                    ? "ember-fill"
                    : "bg-secondary text-muted-foreground shadow-none"
                }`}
              >
                {i < step ? <Check className="size-4" strokeWidth={3} /> : i + 1}
              </div>
              <span
                className={`hidden text-xs font-semibold uppercase tracking-widest sm:inline ${
                  i <= step ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-px flex-1 ${i < step ? "bg-primary" : "bg-border"}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-7">
        {step === 0 && (
          <div>
            <h3 className="text-xl font-bold">What are we building?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Pick the service that best matches your property.
            </p>
            <div className="mt-5 grid gap-3">
              {PROJECT_TYPES.map((p) => {
                const Icon = p.icon;
                const active = type === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setType(p.id)}
                    className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                      active
                        ? "border-primary bg-secondary/80 shadow-[var(--shadow-glow)]"
                        : "border-border bg-secondary/30 hover:border-primary/50 hover:bg-secondary/60"
                    }`}
                  >
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${
                        active ? "ember-fill" : "bg-surface-2 text-primary"
                      }`}
                    >
                      <Icon className="size-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">{p.title}</span>
                      <span className="block text-sm text-muted-foreground">
                        {p.blurb}
                      </span>
                    </span>
                    <span
                      className={`flex size-5 items-center justify-center rounded-full border ${
                        active ? "border-primary bg-primary" : "border-border"
                      }`}
                    >
                      {active && (
                        <Check
                          className="size-3 text-primary-foreground"
                          strokeWidth={4}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold">How large is the property?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Slide to your approximate square footage.
            </p>

            <div className="mt-7 rounded-2xl border border-border bg-secondary/40 p-6 text-center">
              <Ruler className="mx-auto size-5 text-primary" />
              <div className="mt-2 font-display text-5xl font-extrabold tabular-nums">
                {sqft.toLocaleString()}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                square feet
              </div>
            </div>

            <div className="mt-7 px-1">
              <Slider
                value={[sqft]}
                min={500}
                max={5000}
                step={50}
                onValueChange={(v) => setSqft(v[0] ?? 500)}
                aria-label="Property square footage"
              />
              <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                <span>500 sq ft</span>
                <span>5,000 sq ft</span>
              </div>
            </div>

            {selected && (
              <div className="mt-7 rounded-2xl border border-primary/30 bg-secondary/40 p-4 text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Preliminary range
                </p>
                <p className="mt-1 text-2xl font-bold text-gold">
                  ${low.toLocaleString()} – ${high.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              toast.success("Estimate request sent — we'll call you shortly.");
            }}
          >
            <div>
              <h3 className="text-xl font-bold">Where should we send it?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                No obligation. No pressure. Just a straight number.
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Jordan Alvarez" />
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required placeholder="(424) 835-6576" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="zip">ZIP code</Label>
                <Input id="zip" required placeholder="90250" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes">Anything we should know?</Label>
              <Textarea
                id="notes"
                rows={3}
                placeholder="Active leak above the garage…"
              />
            </div>

            <div className="grid gap-2">
              <Label>Upload property photo</Label>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  takeFile(e.dataTransfer.files?.[0]);
                }}
                onClick={() => inputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
                className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-7 text-center transition-colors ${
                  dragging
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary/30 hover:border-primary/60"
                }`}
              >
                {fileName ? (
                  <>
                    <ImageIcon className="size-6 text-primary" />
                    <p className="mt-2 truncate text-sm font-medium">{fileName}</p>
                    <p className="text-xs text-muted-foreground">
                      Tap to replace photo
                    </p>
                  </>
                ) : (
                  <>
                    <CloudUpload className="size-7 text-primary" />
                    <p className="mt-2 text-sm font-medium">
                      Drag & drop a roof photo
                    </p>
                    <p className="text-xs text-muted-foreground">
                      or tap to browse — JPG, PNG up to 10MB
                    </p>
                  </>
                )}
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => takeFile(e.target.files?.[0])}
                />
              </div>
            </div>

            <Button type="submit" variant="ember" size="lg" className="mt-1 w-full">
              Get my free estimate
            </Button>
          </form>
        )}
      </div>

      {step < 2 && (
        <div className="flex items-center gap-3 border-t border-border/70 px-5 py-4">
          {step > 0 && (
            <Button variant="outline" size="lg" onClick={() => setStep(step - 1)}>
              <ArrowLeft className="size-4" /> Back
            </Button>
          )}
          <Button
            variant="ember"
            size="lg"
            className="flex-1"
            disabled={!canNext}
            onClick={() => setStep(step + 1)}
          >
            Continue <ArrowRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
