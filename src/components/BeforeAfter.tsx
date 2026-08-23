import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeRoof from "@/assets/before-roof.jpg";
import afterRoof from "@/assets/after-roof.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => move(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, move]);

  return (
    <div className="surface-card overflow-hidden p-2">
      <div
        ref={ref}
        onPointerDown={(e) => {
          setDragging(true);
          move(e.clientX);
        }}
        className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-[calc(var(--radius)+8px)] sm:aspect-[16/10]"
      >
        {/* After (base) */}
        <img
          src={afterRoof}
          alt="After: pristine new asphalt shingle roof installation"
          width={1200}
          height={800}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 size-full object-cover"
        />
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={beforeRoof}
            alt="Before: storm damaged roof with cracked and missing shingles"
            width={1200}
            height={800}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full max-w-none object-cover"
            style={{ width: ref.current?.clientWidth ?? "100%" }}
          />
        </div>

        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur-md">
          Before: Damaged Roof
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-primary/40 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
          After: Pristine Install
        </span>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ember-fill">
            <MoveHorizontal className="size-5" strokeWidth={2.5} />
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Reveal before and after roof photos"
          className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}
