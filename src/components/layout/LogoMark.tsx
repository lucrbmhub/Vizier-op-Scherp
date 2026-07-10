import { Link } from "@tanstack/react-router";

type Props = {
  variant?: "primary" | "symbol";
  light?: boolean;
  size?: number;
};

export function LogoMark({ variant = "primary", light = false, size = 34 }: Props) {
  const isSymbol = variant === "symbol";
  const bgFill = isSymbol ? "#F5EFE3" : "#1F3D3B";
  const strokeColor = isSymbol ? "#1F3D3B" : "#E8714A";
  const dotFill = isSymbol ? "#E8714A" : "#F2C879";

  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="8" y="8" width="84" height="84" rx="10" fill={bgFill} />
      <path
        d="M50 26 L74 50 L50 74 L26 50 Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinejoin="miter"
      />
      <rect
        x="44"
        y="44"
        width="12"
        height="12"
        fill={dotFill}
        transform="rotate(45 50 50)"
      />
    </svg>
  );

  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 no-underline"
      aria-label="Vizier op Scherp — naar de homepage"
    >
      {mark}
      <span
        className="font-display"
        style={{
          fontWeight: 500,
          fontSize: isSymbol ? "1.125rem" : "1.1875rem",
          letterSpacing: "-0.015em",
          color: light ? "#F5EFE3" : "#1F3D3B",
        }}
      >
        Vizier op Scherp
      </span>
    </Link>
  );
}
