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
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">{children}</div>
    </As>
  );
}

export function Eyebrow({
  children,
  onPetrol = false,
}: {
  children: ReactNode;
  onPetrol?: boolean;
}) {
  return (
    <span className={`eyebrow ${onPetrol ? "eyebrow-on-petrol" : ""}`}>
      {children}
    </span>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <span
      className="block text-[11px] font-semibold uppercase tracking-[0.18em] mb-2"
      style={{ color: "#A8834B" }}
    >
      {children}
    </span>
  );
}

type CardTone = "goud" | "petrol" | "koraal" | "linnen" | "warm" | "paper";

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
    linnen: "anchor-card",
    warm: "anchor-card tone-warm",
    paper: "anchor-card tone-paper",
  };
  const baseRadius =
    tone === "linnen" || tone === "warm" || tone === "paper"
      ? ""
      : "rounded-2xl p-6 md:p-8";
  return (
    <div className={`${baseRadius} ${tones[tone]} ${className}`}>{children}</div>
  );
}

type FAQItem = { q: string; a: ReactNode };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <ul className="list-none p-0 m-0">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;
        return (
          <li key={i} className="border-t border-[#E4DCC8] last:border-b last:border-b-[#E4DCC8]">
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-[19px] text-petrol"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="text-koraal text-2xl leading-none transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-5 pr-10 text-[color:var(--color-body)] leading-relaxed"
            >
              {item.a}
            </div>
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
    <div className="facet-cta">
      <div className="facet-inner flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="eyebrow mb-3" style={{ color: "#A8834B" }}>
              {eyebrow}
            </span>
          )}
          <h2 className="font-display text-2xl md:text-[34px] text-petrol m-0">
            {title}
          </h2>
          {children && (
            <p className="mt-3 text-[color:var(--color-body-warm)]">{children}</p>
          )}
        </div>
        <div className="shrink-0">{action}</div>
      </div>
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
    <div className="facet-cta">
      <div className="facet-inner flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl md:text-[34px] text-petrol m-0">
            {title}
          </h2>
          {children && (
            <p className="mt-3 text-[color:var(--color-body-warm)]">{children}</p>
          )}
        </div>
        <div className="shrink-0">{action}</div>
      </div>
    </div>
  );
}
