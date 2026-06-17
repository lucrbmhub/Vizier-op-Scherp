import { Link } from "@tanstack/react-router";

type Props = {
  variant?: "primary" | "symbol";
  light?: boolean;
  size?: number;
};

export function LogoMark({ variant = "primary", light = false, size = 32 }: Props) {
  const mark =
    variant === "symbol" ? (
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
        <rect
          x="30"
          y="30"
          width="40"
          height="40"
          rx="6"
          fill="none"
          stroke="#E8714A"
          strokeWidth="9"
          transform="rotate(45 50 50)"
        />
        <circle cx="50" cy="50" r="9" fill="#F2C879" />
      </svg>
    ) : (
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
        <rect x="8" y="8" width="84" height="84" rx="22" fill="#1F3D3B" />
        <rect
          x="33"
          y="33"
          width="34"
          height="34"
          rx="5"
          fill="none"
          stroke="#E8714A"
          strokeWidth="7.5"
          transform="rotate(45 50 50)"
        />
        <circle cx="50" cy="50" r="7.5" fill="#F2C879" />
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
