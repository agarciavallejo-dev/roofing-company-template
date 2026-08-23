import { useState } from "react";
import { CheckCircle2, MapPin, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SERVICE_ZIPS = [
  "90250",
  "90260",
  "90249",
  "90247",
  "90248",
  "90245",
  "90266",
  "90278",
  "90304",
];

export function ZipValidator() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<"ok" | "no" | null>(null);

  return (
    <div className="surface-card p-5 sm:p-6">
      <div className="flex items-center gap-2 text-primary">
        <MapPin className="size-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em]">
          Service area check
        </span>
      </div>
      <h3 className="mt-2 text-xl font-bold">Do we cover your street?</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Enter your South Bay ZIP code for instant availability.
      </p>

      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setResult(SERVICE_ZIPS.includes(zip.trim()) ? "ok" : "no");
        }}
      >
        <Input
          value={zip}
          inputMode="numeric"
          maxLength={5}
          placeholder="90250"
          aria-label="ZIP code"
          onChange={(e) => {
            setZip(e.target.value.replace(/\D/g, ""));
            setResult(null);
          }}
          className="h-11 text-base tracking-widest"
        />
        <Button type="submit" variant="ember" disabled={zip.length !== 5} className="h-11 px-5">
          Check
        </Button>
      </form>

      {result === "ok" && (
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <CheckCircle2 className="size-6 shrink-0 text-emerald-400 animate-in zoom-in duration-500" />
          <p className="text-sm font-semibold text-emerald-300">
            Instant Booking Available in Your Area Today
          </p>
        </div>
      )}
      {result === "no" && (
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-secondary/50 p-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <XCircle className="size-6 shrink-0 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Outside our instant-booking zone — call us and we'll still take a look.
          </p>
        </div>
      )}
    </div>
  );
}
