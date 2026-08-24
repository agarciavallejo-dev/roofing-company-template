import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "GIANNA25 S.",
    location: "Hawthorne, CA",
    rating: 5,
    date: "Verified Customer",
    text: "I chose Install It Roofing Hawthorne because they work in Hawthorne and offered a free estimate for roofing services. My estimator, Trenton, was friendly, experienced, and easy to talk to, which made my choice to move forward with the skylight and sun tunnel installation simple. He answered all of my questions with patience, explained the roofing process clearly, and helped me feel confident about the work being done on my home. The roofing crew that completed the job was professional, dependable, and respectful of our property. Everything was completed smoothly, and the finished work looks great.",
    services: ["Skylight Repair", "Attic Venting", "Gutter Installation"],
  },
  {
    name: "N. GAMBLE",
    location: "Hawthorne, CA",
    rating: 5,
    date: "Verified Customer",
    text: "I called Install It Roofing Hawthorne for my nearly flat roof when leaks started showing up around the skylights. I was really impressed by how detailed and professional the paperwork was. They covered everything clearly, including insurance details like workers comp and hot torch coverage, which gave me a lot of confidence. Bryson was very professional from start to finish. Later, Preston and the crew installed a new almost-flat roof over that section of the house, and the whole process went smoothly. The price was fair, the service was excellent, and they explained the repair steps in simple terms.",
    services: ["Attic Venting Repairs", "Flat Roof Storm & Wind Damage Repair"],
  },
  {
    name: "AUBREE ROMAN",
    location: "Hawthorne, CA",
    rating: 5,
    date: "Verified Customer",
    text: "We had a fantastic experience with this roofing company. From the first call with their office staff to the crew working on our roof, everyone was professional and friendly. The job was finished on schedule, and their customer service really stood out. This was by far one of the best experiences we've had with any contractor. Our new roof and gutters look amazing and work just as they should. The price was fair and competitive. The team, including Preston, made the whole process smooth, and they did an outstanding job with the clean up.",
    services: ["Attic Venting Repairs", "Roof Repair for Storm & Wind Damage"],
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const empty = 5 - full;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="size-4 fill-gold text-gold" strokeWidth={0} />
      ))}
      {empty > 0 &&
        Array.from({ length: empty }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className="size-4 text-gold/40"
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
          <div className="flex items-center gap-2">
            <Stars rating={r.rating} />
            <span className="text-xs font-semibold text-gold">{r.rating}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            “{r.text}”
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {r.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
              >
                {service}
              </span>
            ))}
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <svg
              viewBox="0 0 24 24"
              className="size-3.5"
              aria-hidden="true"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Posted on Google</span>
          </div>
        </div>
      ))}
    </div>
  );
}
