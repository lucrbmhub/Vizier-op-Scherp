import { Link } from "@tanstack/react-router";
import { LogoMark } from "./LogoMark";

const colHead =
  "font-sans text-xs font-semibold uppercase tracking-[0.14em] mb-4";
const linkCls =
  "block py-1 text-sm transition-colors";

export function Footer() {
  return (
    <footer className="mt-24 bg-petrol" style={{ color: "#BFD0CB" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] pb-10 border-b border-mint-dof/20">
          <div>
            <LogoMark variant="symbol" light size={30} />
            <p className="mt-4 text-sm leading-relaxed max-w-[34ch]">
              Regionaal netwerk voor loopbaancoaching, voor werkgevers en hun medewerkers
              in Amsterdam, Haarlem en omgeving. Persoonlijk, professioneel en gericht op
              concrete stappen in werk.
            </p>
          </div>

          <div>
            <h2 className={colHead} style={{ color: "#F2C879" }}>Doelgroepen</h2>
            <Link to="/voor-werkgevers" className={linkCls} style={{ color: "#BFD0CB" }}>Voor werkgevers & HR</Link>
            <Link to="/coaching-voor-mij" className={linkCls} style={{ color: "#BFD0CB" }}>Coaching voor mij</Link>
            <Link to="/uwv-traject" className={linkCls} style={{ color: "#BFD0CB" }}>UWV-traject</Link>
            <Link to="/leiderschap" className={linkCls} style={{ color: "#BFD0CB" }}>Leiderschap & talentontwikkeling</Link>
          </div>

          <div>
            <h2 className={colHead} style={{ color: "#F2C879" }}>Bureau</h2>
            <Link to="/coaches" className={linkCls} style={{ color: "#BFD0CB" }}>Onze coaches</Link>
            <Link to="/over-ons" className={linkCls} style={{ color: "#BFD0CB" }}>Over ons</Link>
            <Link to="/kennismaken" className={linkCls} style={{ color: "#BFD0CB" }}>Kennismaken</Link>
            <Link to="/inzichten" className="block py-1 text-sm transition-colors" style={{ color: "#F2C879" }}>
              Inzichten
            </Link>
          </div>

          <div>
            <h2 className={colHead} style={{ color: "#F2C879" }}>Contact</h2>
            <address className="not-italic text-sm mb-3 leading-relaxed">
              <strong className="block font-medium" style={{ color: "#D8E5E2" }}>Haarlem</strong>
              Klein Heiligland 84, 2011 EJ Haarlem
            </address>
            <address className="not-italic text-sm mb-3 leading-relaxed">
              <strong className="block font-medium" style={{ color: "#D8E5E2" }}>Amsterdam</strong>
              IJsbaanpad 9, 1076 CV Amsterdam
            </address>
            <a href="mailto:hallo@vizieropscherp.nl" className={linkCls} style={{ color: "#BFD0CB" }}>
              hallo@vizieropscherp.nl
            </a>
            <a href="tel:+31202146466" className={linkCls} style={{ color: "#BFD0CB" }}>020 214 64 66</a>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap justify-between gap-3 text-xs" style={{ color: "#8FA6A0" }}>
          <span>© 2016 - {new Date().getFullYear()} Vizier op Scherp · KVK 81088701 · BTW NL003529887B45</span>
          <a
            href="https://www.linkedin.com/company/10002759/"
            rel="noopener"
            className="border-b border-mint-dof/40 hover:text-linnen-licht"
            style={{ color: "#8FA6A0" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
