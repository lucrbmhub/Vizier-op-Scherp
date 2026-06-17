import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/coaching-gesprek.jpg.asset.json";

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vizier op Scherp",
  description:
    "Regionaal netwerk voor loopbaancoaching voor werkgevers en hun medewerkers in Amsterdam, Haarlem en omgeving. Individuele coachtrajecten, proactieve loopbaangesprekken en een coachingpool als jaarafspraak.",
  url: "https://vizieropscherp.nl/",
  email: "hallo@vizieropscherp.nl",
  telephone: "+31611221424",
  vatID: "NL003529887B45",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Klein Heiligland 84",
      postalCode: "2011 EJ",
      addressLocality: "Haarlem",
      addressCountry: "NL",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "IJsbaanpad 9",
      postalCode: "1076 CV",
      addressLocality: "Amsterdam",
      addressCountry: "NL",
    },
  ],
  areaServed: [
    "Amsterdam","Haarlem","Amstelveen","Hoofddorp","Zaanstad","Almere",
    "Diemen","Hilversum","Heemstede","Aalsmeer","Uithoorn","Purmerend",
  ],
  knowsAbout: [
    "loopbaancoaching","loopbaanbegeleiding","coachingpool",
    "duurzame inzetbaarheid","loopbaangesprekken",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Loopbaancoaching voor werkgevers | Amsterdam & Haarlem | Vizier op Scherp",
      },
      {
        name: "description",
        content:
          "Vizier op Scherp organiseert loopbaancoaching voor werkgevers in Amsterdam, Haarlem en omgeving. Van proactieve loopbaangesprekken tot een coachingpool als jaarafspraak. Gecertificeerde coaches, heldere afspraken.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      {
        property: "og:title",
        content: "Loopbaancoaching voor werkgevers, Vizier op Scherp",
      },
      {
        property: "og:description",
        content:
          "Persoonlijk voor de medewerker, georganiseerd voor HR. Loopbaancoaching in Amsterdam, Haarlem en omgeving, van losse trajecten tot een coachingpool als jaarafspraak.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Loopbaancoaching voor werkgevers, Vizier op Scherp",
      },
      {
        name: "twitter:description",
        content:
          "Persoonlijk voor de medewerker, georganiseerd voor HR. Loopbaancoaching in Amsterdam, Haarlem en omgeving.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLdBusiness) },
    ],
  }),
  component: Home,
});

/* -------- atomic styles -------- */

const wrap = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const sectionCls = "py-20 md:py-24";
const labelCls =
  "block text-xs font-medium uppercase tracking-[0.1em] text-koraal mb-3";
const h2Cls =
  "font-display text-3xl md:text-[2rem] leading-[1.25] text-petrol max-w-[26ch]";
const introCls = "mt-4 text-petrol/75 max-w-[64ch] text-base md:text-[1.05rem]";
const btnPrimary =
  "inline-flex items-center rounded-md bg-koraal px-6 py-3 text-base font-medium text-[color:var(--color-on-koraal-title)] hover:brightness-95 transition";
const btnOutline =
  "inline-flex items-center rounded-md border border-petrol px-6 py-3 text-base font-medium text-petrol hover:border-koraal hover:text-koraal transition";
const btnSecondaryOnDark =
  "inline-flex items-center rounded-md border border-mint-dof px-6 py-3 text-base font-medium text-linnen-licht hover:border-goud transition";

function Home() {
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-titel" className="bg-petrol text-linnen-licht">
        <div className={`${wrap} py-16 md:py-20 grid gap-10 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr] items-center`}>
          <div>
            <span className="inline-block text-xs font-medium tracking-[0.03em] text-goud border border-goud rounded-full px-4 py-1.5 mb-6">
              Loopbaancoaching · Amsterdam, Haarlem en omgeving
            </span>
            <h1
              id="hero-titel"
              className="font-display text-[2rem] sm:text-4xl md:text-[2.7rem] leading-[1.18] text-linnen-licht max-w-[18ch]"
            >
              Persoonlijk voor de medewerker.{" "}
              <em className="not-italic text-goud">Georganiseerd voor HR.</em>
            </h1>
            <p className="mt-6 text-mint text-[1.05rem] max-w-[50ch] leading-relaxed">
              Vizier op Scherp helpt organisaties om medewerkers op belangrijke momenten in
              hun werk goed te begeleiden. Met een klein, vast netwerk van gecertificeerde
              loopbaancoaches, één aanspreekpunt en heldere afspraken over proces, prijs en
              privacy, van een eerste gespreksronde tot een coachingpool als jaarafspraak.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/voor-werkgevers" className={btnPrimary}>
                Bekijk het aanbod voor werkgevers
              </Link>
              <Link to="/coaching-voor-mij" className={btnSecondaryOnDark}>
                Ik ben doorverwezen of zoek zelf coaching
              </Link>
            </div>
            <ul role="list" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                ["1.000+", "trajecten begeleid door ons netwerk"],
                ["Gecertificeerd", "en beroepsgeregistreerd"],
                ["5 werkdagen", "van intake tot match"],
              ].map(([k, v]) => (
                <li key={k}>
                  <strong className="block font-display font-medium text-[1.4rem] text-linnen-licht leading-tight">
                    {k}
                  </strong>
                  <span className="text-sm text-mint-dof">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl overflow-hidden bg-linnen border border-mint/25">
            <img
              src={heroImg.url}
              alt="Loopbaancoach in gesprek met een medewerker in een rustige werkomgeving"
              width={1280}
              height={832}
              className="w-full h-[230px] md:h-[320px] object-cover"
            />
            <div className="p-6 md:p-7">
              <span className="inline-block bg-goud text-[color:var(--color-on-goud-title)] text-xs font-medium tracking-[0.02em] px-3 py-1 rounded-full mb-3">
                Ons leadproduct
              </span>
              <h2 className="font-display text-[1.15rem] text-petrol mb-2">
                De coachingpool als jaarafspraak
              </h2>
              <p className="text-[0.94rem] text-petrol/70 leading-relaxed">
                Eén geformaliseerde jaarlijkse overeenkomst waarmee uw medewerkers het hele
                jaar door kunnen instromen. Intake, matching, begeleiding en evaluatie:
                georganiseerd, voorspelbaar en zonder losse offertes per geval.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* HERKENBAAR */}
      <section aria-labelledby="herkenbaar-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <span className={labelCls}>Herkenbaar?</span>
          <h2 id="herkenbaar-titel" className={h2Cls}>
            Loopbaanvragen blijven vaak liggen. Tot het te laat is
          </h2>

          <div className="mt-10 border-t border-mint-dof">
            {[
              ["De stille twijfelaar", "Een goede medewerker functioneert prima, maar twijfelt al maanden over de volgende stap. Niemand weet het. Tot de ontslagbrief op tafel ligt. Een loopbaangesprek op tijd had het verschil gemaakt."],
              ["De vastgelopen professional", "Iemand zit niet meer op de juiste plek, maar weet zelf ook niet waar dan wél. De motivatie zakt, het team merkt het, en HR heeft de capaciteit niet om dit zelf op te pakken."],
              ["De HR-afdeling zonder vaste partner", "U wilt medewerkers loopbaanbegeleiding kunnen aanbieden, maar elke keer opnieuw een coach zoeken, offertes vergelijken en kwaliteit beoordelen kost te veel tijd. En de kwaliteit wisselt."],
            ].map(([t, p]) => (
              <div
                key={t}
                className="grid gap-2 md:gap-8 md:grid-cols-[200px_1fr] py-7 border-b border-mint-dof"
              >
                <h3 className="font-display text-[1.05rem] text-petrol">{t}</h3>
                <p className="text-petrol/70 max-w-[62ch]">{p}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 font-display text-[1.25rem] md:text-[1.4rem] leading-[1.45] text-petrol max-w-[52ch]">
            Eén goed gesprek op het juiste moment maakt het verschil. Vizier op Scherp
            organiseert dat moment,{" "}
            <span className="text-koraal">vóórdat iemand uitvalt of vertrekt.</span>
          </p>
        </div>
      </section>

      {/* AANBOD — korte kaarten + één-zin werkwijze + één-zin coachingpool */}
      <section aria-labelledby="aanbod-titel" className={`${sectionCls} bg-linnen-licht`}>
        <div className={wrap}>
          <span className={labelCls}>Ons aanbod voor werkgevers</span>
          <h2 id="aanbod-titel" className={h2Cls}>
            Drie vormen van loopbaancoaching
          </h2>
          <p className={introCls}>
            Onze werkwijze is altijd dezelfde: intake, matching, begeleiding en evaluatie,
            met vooraf heldere privacyafspraken.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
            <article className="rounded-2xl p-7 md:p-8 bg-goud flex flex-col gap-3">
              <span className="text-[0.76rem] font-medium uppercase tracking-[0.08em] text-[color:var(--color-on-goud-title)]">
                Stap 1 · Laagdrempelig
              </span>
              <h3 className="font-display text-[1.25rem] leading-snug text-[color:var(--color-on-goud-title)]">
                Proactieve loopbaangesprekken
              </h3>
              <p className="text-[0.94rem] text-[color:var(--color-on-goud-sub)]">
                Een ronde gesprekken met medewerkers over energie, motivatie en
                ontwikkelbehoefte.
              </p>
            </article>

            <article className="rounded-2xl p-7 md:p-8 bg-petrol flex flex-col gap-3">
              <span className="text-[0.76rem] font-medium uppercase tracking-[0.08em] text-goud">
                Stap 2 · Per medewerker
              </span>
              <h3 className="font-display text-[1.25rem] leading-snug text-linnen-licht">
                Individuele coachtrajecten
              </h3>
              <p className="text-[0.94rem] text-mint">
                Coaching voor een medewerker die u doorverwijst — één traject, één heldere
                prijsafspraak.
              </p>
            </article>

            <article className="rounded-2xl p-7 md:p-8 bg-koraal flex flex-col gap-3">
              <span className="self-start text-[0.78rem] font-medium px-3 py-1 rounded-full bg-linnen-licht/45 text-[color:var(--color-on-koraal-title)]">
                Leadproduct
              </span>
              <h3 className="font-display text-[1.25rem] leading-snug text-[color:var(--color-on-koraal-title)]">
                Coachingpool als jaarafspraak
              </h3>
              <p className="text-[0.94rem] text-[color:var(--color-on-koraal-sub)]">
                Eén jaarlijkse overeenkomst, medewerkers stromen het hele jaar door in.
              </p>
            </article>
          </div>

          <p className="mt-8 flex items-center gap-3 text-sm text-petrol/70 max-w-[64ch]">
            <span aria-hidden="true" className="inline-block w-12 h-0.5 bg-goud shrink-0" />
            Veel opdrachtgevers beginnen met een gespreksronde en groeien door naar een
            jaarafspraak, in hun eigen tempo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/voor-werkgevers" className={btnPrimary}>
              Meer over de coachingpool
            </Link>
            <span className="text-sm text-petrol/70 max-w-[42ch]">
              Het volledige verhaal voor HR — werkwijze, jaarcyclus, prijsafspraken en
              FAQ — staat op de werkgeverspagina.
            </span>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section aria-labelledby="team-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <span className={labelCls}>Het team</span>
          <h2 id="team-titel" className={h2Cls}>
            Ons coachnetwerk
          </h2>
          <p className={introCls}>
            Vizier op Scherp werkt met een klein, vast netwerk van zelfstandige coaches.
            Onze coaches zijn gecertificeerd en aangesloten bij een erkende beroepsvereniging
            of kwaliteitsregister, zoals Noloc, NOBCO of een vergelijkbaar register.
            Met achtergronden in coaching, psychologie, maatschappelijk werk en therapeutisch werk.
          </p>

          <ul className="mt-12 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ["M", "Maaike", "Onderwijs, zorg en leidinggevenden"],
              ["L", "Lianne", "Psycholoog · persoonlijk leiderschap"],
              ["Z", "Zelah", "Therapeut · ACT en zingeving"],
              ["F", "Floor", "Positieve Gezondheid en NLP"],
              ["L", "Luc", "Richting, keuzes en HR-achtergrond"],
            ].map(([initial, name, role]) => (
              <li
                key={name}
                className="bg-linnen-licht border border-mint-dof rounded-2xl p-6 text-center"
              >
                <div
                  aria-hidden="true"
                  className="mx-auto mb-3.5 w-[62px] h-[62px] rounded-full bg-petrol text-goud flex items-center justify-center font-display text-[1.15rem]"
                >
                  {initial}
                </div>
                <h3 className="font-display text-[1rem] text-petrol mb-1">{name}</h3>
                <span className="text-[0.84rem] text-petrol/70">{role}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-6 items-center">
            <Link to="/coaches" className={btnOutline}>
              Bekijk alle coachprofielen
            </Link>
            <p className="text-sm text-petrol/70 max-w-[52ch]">
              Elke coach heeft een eigen profiel met verhaal, aanpak en achtergrond.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section aria-labelledby="bewijs-titel" className={`${sectionCls} bg-petrol text-linnen-licht`}>
        <div className={wrap}>
          <span className="block text-xs font-medium uppercase tracking-[0.1em] text-goud mb-3">
            Waarom Vizier op Scherp
          </span>
          <h2 id="bewijs-titel" className="font-display text-3xl md:text-[2rem] leading-[1.25] text-linnen-licht max-w-[26ch]">
            Een klein netwerk met bewezen ervaring
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              [
                "Wij zetten Vizier op Scherp structureel in voor medewerkers met loopbaanvragen. Korte lijnen, professionele coaches en altijd een zorgvuldige match. Dat scheelt ons als HR enorm.",
                "Marleen B., HR-manager, zorginstelling",
              ],
              [
                "Het traject heeft me geholpen om rustig te kijken naar wat ik echt wilde. Geen druk, wel concrete stappen. Ik heb nu een rol die beter past bij wat ik kan en wil.",
                "Anouk V., Beleidsadviseur, publieke sector",
              ],
            ].map(([q, c]) => (
              <figure
                key={c}
                className="rounded-2xl border border-mint/20 p-8"
              >
                <blockquote className="font-display text-[1.05rem] md:text-[1.08rem] text-linnen-licht leading-relaxed mb-4">
                  “{q}”
                </blockquote>
                <figcaption>
                  <cite className="not-italic text-sm text-mint-dof">{c}</cite>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* MEDEWERKERS — bevat het enige privacyblok op de homepage */}
      <section aria-labelledby="medewerkers-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <div className="rounded-2xl border border-goud bg-linnen-licht p-8 md:p-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <span className={labelCls}>Voor medewerkers</span>
              <h2
                id="medewerkers-titel"
                className="font-display text-[1.6rem] md:text-[1.8rem] text-petrol max-w-[26ch]"
              >
                Doorverwezen door je werkgever? Dan kies jij alsnog zelf.
              </h2>
              <p className="mt-4 text-petrol/75 max-w-[54ch]">
                Misschien heeft je werkgever je een lijstje met coachbureaus gegeven. Of
                misschien oriënteer je je zelf en kwam je hier terecht. In beide gevallen
                geldt: jij bepaalt met wie je in zee gaat, en dat hoort ook zo.
              </p>
              <ul className="mt-5 mb-7">
                {[
                  "Je maakt eerst kennis met je coach, voordat er iets vastligt",
                  "Klikt het niet? Dan stellen we iemand anders voor",
                  "Geen anonieme database. Echte mensen, met een eigen verhaal",
                  "Begeleiding in jouw tempo, gericht op concrete stappen",
                ].map((li) => (
                  <li
                    key={li}
                    className="py-2 text-[0.96rem] text-petrol flex gap-3 items-baseline"
                  >
                    <span aria-hidden="true" className="text-koraal font-medium">✓</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <Link to="/coaching-voor-mij" className={btnOutline}>
                Lees hoe coaching bij ons werkt
              </Link>
            </div>
            <div className="rounded-xl bg-goud p-7">
              <h3 className="font-display text-[1.1rem] text-[color:var(--color-on-goud-title)] mb-2.5">
                Wat je bespreekt, blijft vertrouwelijk
              </h3>
              <p className="text-[0.94rem] text-[color:var(--color-on-goud-sub)]">
                Ook als je werkgever het traject betaalt: de inhoud van jullie gesprekken
                blijft tussen jou en je coach. Je werkgever hoort alleen óf het traject
                loopt, nooit waarover het gaat. Die afspraak leggen we bij de start vast,
                zodat jij vrijuit kunt spreken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGIO — kort */}
      <section aria-labelledby="regio-titel" className={`${sectionCls} bg-linnen-licht`}>
        <div className={wrap}>
          <span className={labelCls}>Werkgebied</span>
          <h2 id="regio-titel" className={h2Cls}>
            Loopbaancoaching in Amsterdam, Haarlem en omgeving
          </h2>
          <p className={introCls}>
            Wij werken voor organisaties en medewerkers in de hele regio, vanuit onze
            locaties in Haarlem en Amsterdam-Zuid. Coaching vindt plaats op een van onze
            locaties, op uw eigen kantoor, of online.
          </p>
        </div>
      </section>

      {/* UWV ROUTEWIJZER */}
      <section aria-labelledby="uwv-titel" className="pb-8 bg-linnen">
        <div className={wrap}>
          <div className="rounded-2xl border border-mint-dof p-7 md:p-9 flex flex-wrap justify-between items-center gap-6">
            <div className="max-w-[58ch]">
              <h2 id="uwv-titel" className="font-display text-[1.25rem] text-petrol mb-2">
                Kom je via UWV?
              </h2>
              <p className="text-petrol/70 text-[0.96rem]">
                Wij begeleiden ook mensen bij Werkfit Maken en Naar Werk. Op een aparte
                pagina lees je rustig hoe dat werkt.
              </p>
            </div>
            <Link to="/uwv-traject" className={`${btnOutline} whitespace-nowrap`}>
              Lees over UWV-trajecten
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section aria-labelledby="cta-titel" className="pt-10 pb-24 bg-linnen">
        <div className={wrap}>
          <div className="rounded-3xl bg-koraal p-8 md:p-14 flex flex-wrap justify-between items-center gap-8">
            <div>
              <h2
                id="cta-titel"
                className="font-display text-[1.5rem] md:text-[1.75rem] text-[color:var(--color-on-koraal-title)] leading-[1.25] max-w-[22ch]"
              >
                Klaar om loopbaancoaching goed te regelen?
              </h2>
              <p className="mt-2.5 text-[color:var(--color-on-koraal-sub)] max-w-[46ch]">
                Plan een vrijblijvend kennismakingsgesprek. We luisteren eerst, denken dan
                mee, en komen met een concreet voorstel dat past bij uw situatie en budget.
              </p>
            </div>
            <Link
              to="/kennismaken"
              className="inline-flex items-center rounded-md bg-petrol px-6 py-3 text-base font-medium text-linnen-licht hover:bg-[#16302E] transition shrink-0"
            >
              Plan een kennismakingsgesprek
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
