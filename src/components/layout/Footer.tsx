import { Link } from "@tanstack/react-router";
import { LogoMark } from "./LogoMark";

const colHead = "font-display text-[1rem] mb-3 text-goud";
const linkCls = "block py-1 text-mint hover:text-linnen-licht transition-colors";

export function Footer() {
  return (
    <footer className="mt-24 bg-petrol text-linnen-licht">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <LogoMark variant="symbol" light />
          <p className="mt-4 text-sm text-mint leading-relaxed max-w-xs">
            Loopbaancoaching in Amsterdam, Haarlem en omgeving. Ontwikkelpartner voor werkgevers en
            ruimte voor mensen die opnieuw scherp willen krijgen wat ze willen.
          </p>
        </div>

        <div>
          <h3 className={colHead}>Doelgroepen</h3>
          <Link to="/voor-werkgevers" className={linkCls}>Voor werkgevers & HR</Link>
          <Link to="/coaching-voor-mij" className={linkCls}>Voor medewerkers</Link>
          <Link to="/uwv-traject" className={linkCls}>UWV-traject</Link>
        </div>

        <div>
          <h3 className={colHead}>Bureau</h3>
          <Link to="/over-ons" className={linkCls}>Over ons</Link>
          <Link to="/coaches" className={linkCls}>Onze coaches</Link>
          <Link to="/inzichten" className={linkCls}>Inzichten</Link>
        </div>

        <div>
          <h3 className={colHead}>Contact</h3>
          <Link to="/kennismaken" className={linkCls}>Kennismaken</Link>
          <p className="text-sm text-mint-dof mt-2 leading-relaxed">
            Amsterdam, Haarlem<br />en omgeving
          </p>
        </div>
      </div>

      <div className="border-t border-mint-dof/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-mint-dof">
          © {new Date().getFullYear()} Vizier op Scherp
        </div>
      </div>
    </footer>
  );
}
