import { Factory } from "lucide-react";

const BRANDS = [
  { name: "GAF", label: "GAF Roofing" },
  { name: "Owens Corning", label: "Owens Corning" },
  { name: "CertainTeed", label: "CertainTeed" },
];

export function TrustBadgeGrid() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {BRANDS.map((brand) => (
        <div
          key={brand.name}
          className="group flex items-center gap-2 rounded-xl border border-border/50 bg-secondary/30 px-4 py-2.5 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:bg-secondary/60"
        >
          <Factory className="size-5 text-muted-foreground transition-colors duration-300 group-hover:text-primary" />
          <span className="text-sm font-semibold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            {brand.label}
          </span>
        </div>
      ))}
    </div>
  );
}
