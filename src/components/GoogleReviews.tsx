import { Star, StarHalf, Google } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    location: "Hawthorne, CA",
    rating: 5,
    date: "2 weeks ago",
    text: "Install It Roofing replaced our entire roof in two days. Crew was clean, polite, and the final walkthrough was thorough. Highly recommend for anyone in the South Bay.",
  },
  {
    name: "Daniela R.",
    location: "Lawndale, CA",
    rating: 5,
    date: "1 month ago",
    text: "We had an active leak during the last storm. They answered at 10pm, tarped the roof that night, and handled the insurance claim from start to finish. Lifesavers.",
  },
  {
    name: "James K.",
    location: "El Segundo, CA",
    rating: 4.5,
    date: "2 months ago",
    text: "Great communication, fair pricing, and the new cool shingles already made a difference in our upstairs temperature. Will use them again for gutters.",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star
          key={i}
          className="size-4 fill-gold text-gold"
          strokeWidth={0}
        />
      ))}
      {half && (
        <StarHalf className="size-4 fill-gold text-gold" strokeWidth={0} />
      )}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="size-4 text-muted-foreground/40"
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

export function GoogleReviews() {
  return (
    <div className="grid gap-4">
      {REVIEWS.map((r) => (
        <div
          key={r.name + r.date}
          className="surface-card flex flex-col gap-3 p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                {r.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.location}</p>
              </div>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">
              {r.date}
            </span>
          </div>
          <Stars rating={r.rating} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            “{r.text}”
          </p>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Google className="size-3.5" />
            <span>Posted on Google</span>
          </div>
        </div>
      ))}
    </div>
  );
}
