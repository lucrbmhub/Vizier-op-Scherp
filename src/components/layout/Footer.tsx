import { Link } from "@tanstack/react-router";
import { LogoMark } from "./LogoMark";

const colHead =
  "font-sans text-xs font-medium uppercase tracking-[0.08em] text-goud mb-4";
const linkCls =
  "block py-1 text-sm text-mint-dof hover:text-linnen-licht transition-colors";

export function Footer() {
  return (
    <footer className="mt-24 bg-petrol text-mint-dof">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] pb-10 border-b border-mint-dof/20">
          <div>
            <LogoMark variant="symbol" light />
            <p className="mt-4 text-sm leading-relaxed max-w-[34ch]">
              Regionaal netwerk voor loopbaancoaching, voor werkgevers en hun medewerkers
              in Amsterdam, Haarlem en omgeving. Persoonlijk, professioneel en gericht op
              concrete stappen in werk.
            </p>
          </div>

          <div>
            <h2 className={colHead}>Doelgroepen</h2>
            <Link to="/voor-werkgevers" className={linkCls}>Voor werkgevers & HR</Link>
            <Link to="/coaching-voor-mij" className={linkCls}>Coaching voor mij</Link>
            <Link to="/uwv-traject" className={linkCls}>UWV-traject</Link>
            <Link to="/leiderschap" className={linkCls}>Leiderschap & talentontwikkeling</Link>
          </div>

          <div>
            <h2 className={colHead}>Bureau</h2>
            <Link to="/coaches" className={linkCls}>Onze coaches</Link>
            <Link to="/over-ons" className={linkCls}>Over ons</Link>
            <Link to="/kennismaken" className={linkCls}>Kennismaken</Link>
            <Link to="/inzichten" className="block py-1 text-sm text-goud hover:brightness-110 transition">
              Inzichten
            </Link>
          </div>

          <div>
            <h2 className={colHead}>Contact</h2>
            <address className="not-italic text-sm mb-3 leading-relaxed">
              <strong className="block font-medium text-mint">Haarlem, hoofdkantoor</strong>
              Klein Heiligland 84, 2011 EJ Haarlem
            </address>
            <address className="not-italic text-sm mb-3 leading-relaxed">
              <strong className="block font-medium text-mint">Amsterdam</strong>
              IJsbaanpad 9, 1076 CV Amsterdam
            </address>
            <a href="mailto:hallo@vizieropscherp.nl" className={linkCls}>
              hallo@vizieropscherp.nl
            </a>
            <a href="tel:+31611221424" className={linkCls}>06 11 22 14 24</a>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} Vizier op Scherp · KVK 81088701 · BTW NL003529887B45</span>
          <a
            href="https://www.linkedin.com/company/10002759/"
            rel="noopener"
            className="border-b border-mint-dof hover:text-linnen-licht"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
