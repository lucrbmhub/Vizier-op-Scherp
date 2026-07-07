import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { LogoMark } from "./LogoMark";

const navItems = [
  { to: "/voor-werkgevers", label: "Voor werkgevers & HR" },
  { to: "/coaching-voor-mij", label: "Coaching voor mij" },
  { to: "/uwv-traject", label: "UWV-traject" },
  { to: "/coaches", label: "Onze coaches" },
  { to: "/over-ons", label: "Over ons" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40"
      style={{
        background: "rgba(250, 246, 239, 0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid #EDE5D4",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 flex items-center justify-between h-[68px]">
        <LogoMark size={34} />

        <nav aria-label="Hoofdnavigatie" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[14.5px] text-petrol/85 hover:text-petrol transition-colors py-1"
              activeProps={{
                className:
                  "text-petrol font-medium border-b-2 border-koraal pb-[2px]",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kennismaken"
            className="inline-flex items-center rounded-full bg-koraal px-5 py-2.5 text-sm font-medium text-[#3A241A] hover:brightness-95 transition"
          >
            Kennismaken
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-petrol"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobiele navigatie"
        hidden={!open}
        className="lg:hidden border-t border-lijn-soft bg-paper"
        style={{ background: "#FAF6EF" }}
      >
        <ul className="px-5 sm:px-8 py-3 flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-petrol/90 hover:text-petrol"
                activeProps={{ className: "text-petrol font-medium" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/kennismaken"
              onClick={() => setOpen(false)}
              className="block text-center rounded-full bg-koraal px-4 py-3 font-medium text-[#3A241A]"
            >
              Kennismaken
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
