import { useState } from "react";
import { DollarSign, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const MIN = 5000;
const MAX = 35000;
const STEP = 500;
const APR = 0.079;
const MONTHS = 84;

function monthlyPayment(principal: number) {
  const monthlyRate = APR / 12;
  const factor = Math.pow(1 + monthlyRate, MONTHS);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export function FinancingCalculator() {
  const [amount, setAmount] = useState(10000);
  const payment = monthlyPayment(amount);

  return (
    <div className="surface-card mt-6 overflow-hidden p-5 sm:p-7">
      <div className="flex items-center gap-2 text-primary">
        <DollarSign className="size-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em]">
          Financing calculator
        </span>
      </div>
      <h3 className="mt-2 text-xl font-bold sm:text-2xl">
        Estimate your monthly payment
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Move the slider to see what your project could cost per month.
      </p>

      <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-6 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Total project cost
        </div>
        <div className="mt-1 font-display text-4xl font-extrabold tabular-nums sm:text-5xl">
          ${amount.toLocaleString()}
        </div>
      </div>

      <div className="mt-6 px-1">
        <Slider
          value={[amount]}
          min={MIN}
          max={MAX}
          step={STEP}
          onValueChange={(v) => setAmount(v[0] ?? MIN)}
          aria-label="Total project cost"
        />
        <div className="mt-3 flex justify-between text-xs text-muted-foreground">
          <span>$5,000</span>
          <span>$35,000</span>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-primary/30 bg-secondary/40 p-5 text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Estimated monthly payment
        </p>
        <p className="mt-1 font-display text-3xl font-extrabold text-gold sm:text-4xl">
          ${Math.round(payment).toLocaleString()}/mo
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {MONTHS} months at {APR * 100}% APR — sample terms
        </p>
      </div>

      <div className="mt-5 flex items-start gap-2 text-xs text-muted-foreground">
        <Info className="mt-0.5 size-4 shrink-0" />
        <p>
          Financing Available — Qualified homeowners in [Service Area] get $0 down
          options. Rates shown are illustrative; actual terms depend on credit
          approval.
        </p>
      </div>

      <Button variant="ember" size="lg" className="mt-5 w-full">
        Pre-Qualify Now
      </Button>
    </div>
  );
}
