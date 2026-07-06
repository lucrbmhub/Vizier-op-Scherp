import { Link } from "@tanstack/react-router";

type Props = {
  variant?: "primary" | "symbol";
  light?: boolean;
  size?: number;
};

/**
 * Merkicoon "De Stap" — een open pentagon-achtige stap-vorm,
 * met een goud "doel" in het hart en een koraal "opening"-punt.
 */
export function LogoMark({ variant = "primary", light = false, size = 34 }: Props) {
  const stroke = light ? "#F5EFE3" : "#1F3D3B";
  const s = variant === "symbol" ? size - 4 : size;

  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 no-underline"
      aria-label="Vizier op Scherp — naar de homepage"
    >
      <svg
        width={s}
        height={s}
        viewBox="0 0 120 120"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M78 34 L104 60 L60 104 L16 60 L60 16 L62 18"
          fill="none"
          stroke={stroke}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="60" r="11" fill="#F2C879" />
        <circle cx="70" cy="26" r="11" fill="#E8714A" />
      </svg>
      <span
        className="font-display text-[1.15rem]"
        style={{
          fontWeight: 500,
          color: light ? "#F5EFE3" : "#1F3D3B",
        }}
      >
        Vizier op Scherp
      </span>
    </Link>
  );
}

/**
 * Woordmerk-variant: "vizier op scherp" lowercase Lora,
 * met een koraal ruitje als i-punt en een goud rond slotpunt.
 * Voor plekken zonder icoon-ruimte.
 */
export function Wordmark({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`vs-wordmark ${className}`}
      style={{ color: light ? "#F5EFE3" : "#1F3D3B" }}
    >
      v<span className="vs-idot">ı</span>zier op scherp
      <span className="vs-end-dot" aria-hidden="true" />
    </span>
  );
}
