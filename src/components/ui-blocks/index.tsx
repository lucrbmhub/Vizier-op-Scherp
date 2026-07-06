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

/** Eyebrow — klein koraal ruitje + uppercase tracked label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-petrol/75">
      <span aria-hidden="true" className="vs-diamond" />
      {children}
    </span>
  );
}

/** Alias voor bestaande roepplekken — zelfde optiek als Eyebrow. */
export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-koraal mb-2">
      <span aria-hidden="true" className="vs-diamond" />
      {children}
    </span>
  );
}

/** Goud rond slotpunt na hero-kop of CTA-titel. */
export function AccentDot() {
  return <span aria-hidden="true" className="vs-accent-dot" />;
}

/**
 * Vervangt de eerste losstaande "i" in `text` door een i-stem met een klein
 * koraal ruitje als punt. Alleen op hero-niveau H1's gebruiken.
 */
export function DiamondI({ text }: { text: string }) {
  const idx = text.search(/\bi\b/);
  if (idx === -1) {
    // fallback: eerste kleine i
    const fi = text.indexOf("i");
    if (fi === -1) return <>{text}</>;
    return (
      <>
        {text.slice(0, fi)}
        <span className="relative inline-block">
          <span className="opacity-0" aria-hidden="true">i</span>
          <span aria-hidden="true" className="absolute inset-x-0 top-[0.36em] mx-auto h-[0.5em] w-[0.09em] bg-current" />
          <span aria-hidden="true" className="vs-diamond-i" />
          <span className="sr-only">i</span>
        </span>
        {text.slice(fi + 1)}
      </>
    );
  }
  return (
    <>
      {text.slice(0, idx)}
      <span className="relative inline-block">
        <span className="opacity-0" aria-hidden="true">i</span>
        <span aria-hidden="true" className="absolute inset-x-0 top-[0.36em] mx-auto h-[0.5em] w-[0.09em] bg-current" />
        <span aria-hidden="true" className="vs-diamond-i" />
        <span className="sr-only">i</span>
      </span>
      {text.slice(idx + 1)}
    </>
  );
}

/** Standaard bullet: klein koraal ruitje. */
export function DiamondBullet() {
  return (
    <span
      aria-hidden="true"
      className="vs-diamond mt-[0.55em]"
      style={{ width: 8, height: 8 }}
    />
  );
}

/** Kernwaarde-bullet: petrol-outline ruitje met goud dot. */
export function ValueBullet() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className="mt-[0.35em] shrink-0"
    >
      <rect
        x="2.5"
        y="2.5"
        width="9"
        height="9"
        fill="none"
        stroke="#1F3D3B"
        strokeWidth="2"
        transform="rotate(45 7 7)"
      />
      <circle cx="7" cy="7" r="2.2" fill="#F2C879" />
    </svg>
  );
}

/** Processtap-bullet: mini "De Stap". */
export function StepBullet() {
  return (
    <svg
      aria-hidden="true"
      width="15"
      height="15"
      viewBox="0 0 120 120"
      className="mt-[0.35em] shrink-0"
    >
      <path
        d="M78 34 L104 60 L60 104 L16 60 L60 16 L62 18"
        fill="none"
        stroke="#1F3D3B"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="60" r="14" fill="#F2C879" />
      <circle cx="70" cy="26" r="14" fill="#E8714A" />
    </svg>
  );
}

type CardTone = "goud" | "petrol" | "koraal" | "linnen" | "feature" | "soft" | "warm";

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
    goud: "bg-goud text-[color:var(--color-on-goud-title)] rounded-2xl p-6 md:p-8",
    petrol: "bg-petrol text-linnen-licht rounded-2xl p-6 md:p-8",
    koraal: "bg-koraal text-[color:var(--color-on-koraal-title)] rounded-2xl p-6 md:p-8",
    linnen: "bg-linnen-licht text-petrol border border-petrol/10 rounded-2xl p-6 md:p-8",
    feature:
      "relative bg-linnen-licht text-petrol border-2 border-petrol rounded-[14px] p-6 md:p-8",
    soft: "relative bg-warm-card text-[color:var(--color-body-warm)] rounded-[14px] p-6 md:p-8",
    warm: "bg-warm-card text-[color:var(--color-body-warm)] rounded-[14px] p-6 md:p-8 border border-[color:var(--color-border-warm)]",
  };
  return (
    <div className={`${tones[tone]} ${className}`}>
      {tone === "feature" && (
        <>
          <span
            aria-hidden="true"
            className="absolute -top-[2px] left-[40%] h-[4px] w-[46px] bg-linnen"
          />
          <span
            aria-hidden="true"
            className="absolute -top-2 left-[calc(40%+16px)] h-[13px] w-[13px] rounded-full bg-koraal"
          />
        </>
      )}
      {tone === "soft" && (
        <span
          aria-hidden="true"
          className="absolute -top-[7px] left-[22px] h-[12px] w-[12px] rotate-45 bg-koraal"
          style={{ boxShadow: "0 0 0 5px var(--color-warm-card)" }}
        />
      )}
      {children}
    </div>
  );
}

/** Fotoframe met diagonaal rechtsboven en petrol-duotone overlay. */
export function PhotoFrame({
  src,
  alt,
  className = "",
  anchor = false,
  imgClassName = "",
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  anchor?: boolean;
  imgClassName?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 46px) 0, 100% 46px, 100% 100%, 0 100%)",
      }}
    >
      <img src={src} alt={alt} className={`block w-full h-full object-cover ${imgClassName}`} {...rest} />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(31,61,59,0.58) 0%, rgba(31,61,59,0.24) 55%, rgba(232,113,74,0.17) 100%)",
        }}
      />
      {anchor && (
        <span
          aria-hidden="true"
          className="absolute left-[18px] bottom-[18px] h-[13px] w-[13px] rotate-45 bg-koraal"
          style={{ boxShadow: "0 0 0 5px var(--color-linnen)" }}
        />
      )}
    </div>
  );
}

/** Pull-quote met verticale merkelementen aan de linkerkant. */
export function PullQuote({
  children,
  cite,
}: {
  children: ReactNode;
  cite?: string;
}) {
  return (
    <figure className="flex gap-5 md:gap-6 items-stretch">
      <div className="flex flex-col items-center pt-2 pb-2">
        <span aria-hidden="true" className="h-[10px] w-[10px] rotate-45 bg-koraal shrink-0" />
        <span aria-hidden="true" className="w-[2px] flex-1 bg-petrol my-2" />
        <span aria-hidden="true" className="h-[8px] w-[8px] rounded-full bg-goud shrink-0" />
      </div>
      <div>
        <blockquote className="font-display italic text-[1.4rem] md:text-[1.55rem] leading-snug text-petrol">
          {children}
        </blockquote>
        {cite && (
          <figcaption className="mt-3 text-sm text-petrol/65">— {cite}</figcaption>
        )}
      </div>
    </figure>
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
                <span className="flex items-center gap-3">
                  <span aria-hidden="true" className="vs-diamond" />
                  {item.q}
                </span>
                <span aria-hidden="true" className="text-koraal text-2xl leading-none">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-5 pr-10 pl-6 text-petrol/80 leading-relaxed"
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
    <div className="rounded-2xl bg-koraal p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="inline-flex items-center gap-2.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] mb-2 text-[color:var(--color-on-koraal-sub)]">
            <span aria-hidden="true" className="inline-block h-2 w-2 rotate-45 bg-[color:var(--color-on-koraal-title)]" />
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-on-koraal-title)]">
          {title}
          <AccentDot />
        </h2>
        {children && (
          <p className="mt-2 text-[color:var(--color-on-koraal-sub)]">{children}</p>
        )}
      </div>
      <div className="shrink-0">{action}</div>
    </div>
  );
}

/** Gefacetteerde CTA: dubbele afgeschuinde rand (goud → warm card). */
export function CTASoft({
  title,
  children,
  action,
}: {
  title: string;
  children?: ReactNode;
  action: ReactNode;
}) {
  const clipOuter =
    "polygon(22px 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%, 0 22px)";
  const clipInner =
    "polygon(21px 0, 100% 0, 100% calc(100% - 21px), calc(100% - 21px) 100%, 0 100%, 0 21px)";
  return (
    <div
      className="bg-goud p-[2px]"
      style={{ clipPath: clipOuter }}
    >
      <div
        className="p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        style={{
          clipPath: clipInner,
          background: "var(--color-warm-card)",
        }}
      >
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl text-petrol">
            {title}
            <AccentDot />
          </h2>
          {children && (
            <p className="mt-2 text-[color:var(--color-body-warm)]">{children}</p>
          )}
        </div>
        <div className="shrink-0">{action}</div>
      </div>
    </div>
  );
}
