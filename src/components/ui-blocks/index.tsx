import { useId, useState, type ReactNode } from "react";

export function Section({
  children,
  className = "",
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
}) {
  return (
    <As className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </As>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-petrol/20 bg-linnen-licht px-3 py-1 text-xs font-medium tracking-wide uppercase text-petrol/80">
      {children}
    </span>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="block text-xs font-medium uppercase tracking-[0.14em] text-koraal mb-2">
      {children}
    </span>
  );
}

type CardTone = "goud" | "petrol" | "koraal" | "linnen";

export function Card({
  tone = "linnen",
  children,
  className = "",
}: {
  tone?: CardTone;
  children: ReactNode;
  className?: string;
}) {
  const tones: Record<CardTone, string> = {
    goud: "bg-goud text-[color:var(--color-on-goud-title)]",
    petrol: "bg-petrol text-linnen-licht",
    koraal: "bg-koraal text-[color:var(--color-on-koraal-title)]",
    linnen: "bg-linnen-licht text-petrol border border-petrol/10",
  };
  return (
    <div className={`rounded-2xl p-6 md:p-8 ${tones[tone]} ${className}`}>{children}</div>
  );
}

type FAQItem = { q: string; a: ReactNode };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <ul className="divide-y divide-petrol/15 border-y border-petrol/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <li key={i}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg text-petrol"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="text-koraal text-2xl leading-none"
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="pb-5 pr-10 text-petrol/80 leading-relaxed"
              >
                {item.a}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function CTAStrip({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  action: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-koraal p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="block text-xs font-medium uppercase tracking-[0.14em] mb-2 text-[color:var(--color-on-koraal-sub)]">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-on-koraal-title)]">
          {title}
        </h2>
        {children && (
          <p className="mt-2 text-[color:var(--color-on-koraal-sub)]">{children}</p>
        )}
      </div>
      <div className="shrink-0">{action}</div>
    </div>
  );
}

export function CTASoft({
  title,
  children,
  action,
}: {
  title: string;
  children?: ReactNode;
  action: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-goud bg-linnen-licht p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl md:text-3xl text-petrol">{title}</h2>
        {children && <p className="mt-2 text-petrol/75">{children}</p>}
      </div>
      <div className="shrink-0">{action}</div>
    </div>
  );
}
