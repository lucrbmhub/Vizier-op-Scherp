import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { LogoMark } from "./LogoMark";

const navItems = [
  { to: "/voor-werkgevers", label: "Voor werkgevers & HR" },
  { to: "/coaching-voor-mij", label: "Voor medewerkers" },
  { to: "/uwv-traject", label: "UWV-traject" },
  { to: "/coaches", label: "Onze coaches" },
  { to: "/over-ons", label: "Over ons" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-linnen/90 backdrop-blur border-b border-petrol/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <LogoMark />

        <nav aria-label="Hoofdnavigatie" className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-petrol/85 hover:text-petrol transition-colors"
              activeProps={{ className: "text-petrol font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kennismaken"
            className="inline-flex items-center rounded-full bg-koraal px-4 py-2 text-sm font-medium text-[#4A1B0C] hover:brightness-95 transition"
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

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobiele navigatie"
          className="lg:hidden border-t border-petrol/10 bg-linnen"
        >
          <ul className="px-4 sm:px-6 py-3 flex flex-col gap-1">
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
                className="block text-center rounded-full bg-koraal px-4 py-3 font-medium text-[#4A1B0C]"
              >
                Kennismaken
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
