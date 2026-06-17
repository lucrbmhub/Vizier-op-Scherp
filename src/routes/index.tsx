import { createFileRoute, Link } from "@tanstack/react-router";
import { FAQ } from "../components/ui-blocks";
import heroImg from "../assets/hero.jpg";

const faqItems = [
  {
    q: "Hoe snel kunnen jullie starten met een medewerker?",
    a: "Doorgaans is er binnen vijf werkdagen na uw aanmelding een intake gepland en een passende coach voorgesteld. In drukke periodes loopt dat soms iets uit, dan koppelen we dat vooraf terug.",
  },
  {
    q: "Wat kost een loopbaantraject?",
    a: "Een individueel traject heeft een vaste prijs per traject, geen uurtje-factuurtje. Bij een coachingpool maken we vooraf een jaarafspraak met een afgesproken volume en tarief. Vraag een offerte op maat aan tijdens de kennismaking.",
  },
  {
    q: "Wat is een coachingpool precies?",
    a: "Eén geformaliseerde jaarlijkse overeenkomst waarmee medewerkers het hele jaar door kunnen instromen voor loopbaancoaching. Voorspelbaar in kosten, georganiseerd in proces, geen losse offertes per geval.",
  },
  {
    q: "Wat gebeurt er met wat een medewerker bespreekt?",
    a: "Inhoudelijk blijft het tussen de medewerker en de coach. De werkgever hoort alleen óf het traject loopt en op procesniveau hoe het verloopt — nooit waarover de gesprekken gaan. Die afspraak leggen we bij de start schriftelijk vast.",
  },
  {
    q: "Klikt het niet met de coach?",
    a: "Dan stellen we kosteloos iemand anders voor. De kennismaking is vrijblijvend; pas als er een match is, start het traject formeel.",
  },
  {
    q: "Werken jullie ook met UWV-cliënten?",
    a: "Ja, voor Werkfit Maken en Naar Werk. Die route loopt apart van ons werkgeversaanbod — lees er rustig over op de UWV-pagina.",
  },
];

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

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: typeof f.a === "string" ? f.a : "" },
  })),
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
      { name: "twitter:card", content: "summary" },
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
      { type: "application/ld+json", children: JSON.stringify(jsonLdFaq) },
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
              Loopbaancoaching voor werkgevers · Amsterdam, Haarlem en omgeving
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
                ["Noloc & NOBCO", "gecertificeerde coaches"],
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
              src={heroImg}
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

      {/* AANBOD / TRAPLEUNING */}
      <section aria-labelledby="aanbod-titel" className={`${sectionCls} bg-linnen-licht`}>
        <div className={wrap}>
          <span className={labelCls}>Ons aanbod voor werkgevers</span>
          <h2 id="aanbod-titel" className={h2Cls}>
            Drie vormen van loopbaancoaching, één werkwijze
          </h2>
          <p className={introCls}>
            Waar u ook instapt, een gespreksronde, een los traject of een vaste
            jaarafspraak: de werkwijze is altijd dezelfde. Intake, matching met een passende
            coach, begeleiding en evaluatie op procesniveau, met vooraf heldere
            privacyafspraken.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-end">
            <article className="rounded-2xl p-7 md:p-8 bg-goud flex flex-col gap-3.5 md:min-h-[300px]">
              <span className="text-[0.76rem] font-medium uppercase tracking-[0.08em] text-[color:var(--color-on-goud-title)]">
                Stap 1 · Laagdrempelig kennismaken
              </span>
              <h3 className="font-display text-[1.3rem] leading-snug text-[color:var(--color-on-goud-title)]">
                Proactieve loopbaangesprekken
              </h3>
              <p className="text-[0.95rem] text-[color:var(--color-on-goud-sub)]">
                Een ronde gesprekken met een groep medewerkers over energie, motivatie en
                ontwikkelbehoefte. U ziet wat er speelt vóór iemand vastloopt.
              </p>
              <span className="mt-auto pt-3 text-[0.86rem] font-medium text-[color:var(--color-on-goud-title)]">
                Voor organisaties die willen beginnen
              </span>
            </article>

            <article className="rounded-2xl p-7 md:p-8 bg-petrol flex flex-col gap-3.5 md:pb-12 md:min-h-[340px]">
              <span className="text-[0.76rem] font-medium uppercase tracking-[0.08em] text-goud">
                Stap 2 · Per medewerker
              </span>
              <h3 className="font-display text-[1.3rem] leading-snug text-linnen-licht">
                Individuele coachtrajecten
              </h3>
              <p className="text-[0.95rem] text-mint">
                Loopbaancoaching voor een medewerker die u doorverwijst. Eén traject, één
                heldere prijsafspraak, één vast aanspreekpunt.
              </p>
              <span className="mt-auto pt-3 text-[0.86rem] font-medium text-goud">
                Voor concrete, actuele loopbaanvragen
              </span>
            </article>

            <article className="rounded-2xl p-7 md:p-8 bg-koraal flex flex-col gap-3.5 md:pb-16 md:min-h-[380px]">
              <span className="self-start text-[0.78rem] font-medium px-3 py-1 rounded-full bg-linnen-licht/45 text-[color:var(--color-on-koraal-title)]">
                Leadproduct
              </span>
              <span className="text-[0.76rem] font-medium uppercase tracking-[0.08em] text-[color:var(--color-on-koraal-title)]">
                Stap 3 · Structureel geregeld
              </span>
              <h3 className="font-display text-[1.3rem] leading-snug text-[color:var(--color-on-koraal-title)]">
                Coachingpool als jaarafspraak
              </h3>
              <p className="text-[0.95rem] text-[color:var(--color-on-koraal-sub)]">
                Eén jaarlijkse overeenkomst, medewerkers stromen het hele jaar door in.
                Voorspelbaar in kosten, georganiseerd in proces.
              </p>
              <span className="mt-auto pt-3 text-[0.86rem] font-medium text-[color:var(--color-on-koraal-title)]">
                Voor organisaties die het goed willen regelen
              </span>
            </article>
          </div>

          <p className="mt-8 flex items-center gap-3 text-sm text-petrol/70">
            <span aria-hidden="true" className="inline-block w-12 h-0.5 bg-goud shrink-0" />
            Veel van onze opdrachtgevers beginnen met een gespreksronde en groeien door
            naar een jaarafspraak, in hun eigen tempo.
          </p>

          {/* coachingpool deepdive */}
          <div
            id="coachingpool"
            className="mt-14 rounded-2xl bg-petrol text-linnen-licht p-8 md:p-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]"
          >
            <div>
              <span className="block text-xs font-medium uppercase tracking-[0.1em] text-goud mb-3">
                Leadproduct uitgelicht
              </span>
              <h3 className="font-display text-[1.5rem] md:text-[1.7rem] text-linnen-licht mb-4 max-w-[24ch]">
                De coachingpool als jaarafspraak
              </h3>
              <p className="text-mint max-w-[54ch] mb-3">
                Eén overeenkomst, één tarief, één aanspreekpunt. Medewerkers met een
                loopbaanvraag stromen het hele jaar door in, zonder dat HR per geval
                offertes hoeft op te vragen.
              </p>
              <ul className="mt-5 mb-2">
                {[
                  "Vaste jaarafspraak met afgesproken volume en tarief",
                  "Eén contactpersoon voor intake, matching en evaluatie",
                  "Coaches uit een vast, klein netwerk van gecertificeerde professionals",
                  "Voortgangsrapportage op procesniveau, nooit op gespreksinhoud",
                  "Eenvoudig op- of afschalen aan het einde van de looptijd",
                ].map((li) => (
                  <li
                    key={li}
                    className="py-2.5 border-b border-mint/20 text-[0.95rem] text-mint flex gap-3"
                  >
                    <span aria-hidden="true" className="text-goud">—</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:border-l lg:border-mint/25 lg:pl-10 flex flex-row flex-wrap lg:flex-col gap-8 lg:gap-7 justify-center">
              <div>
                <strong className="block font-display text-[1.5rem] md:text-[1.7rem] text-goud leading-tight">
                  1 contract
                </strong>
                <span className="text-sm text-mint-dof">geen losse offertes per medewerker</span>
              </div>
              <div>
                <strong className="block font-display text-[1.5rem] md:text-[1.7rem] text-goud leading-tight">
                  5 werkdagen
                </strong>
                <span className="text-sm text-mint-dof">van aanmelding tot intake</span>
              </div>
              <div>
                <strong className="block font-display text-[1.5rem] md:text-[1.7rem] text-goud leading-tight">
                  Op procesniveau
                </strong>
                <span className="text-sm text-mint-dof">rapportage, nooit op inhoud</span>
              </div>
            </div>
          </div>

          <div className="mt-9 text-center">
            <p className="text-petrol/75 max-w-[64ch] mx-auto mb-4">
              De coachingpool is onze meest gekozen vorm voor organisaties die
              loopbaanbegeleiding structureel willen organiseren.
            </p>
            <Link to="/voor-werkgevers" className={btnPrimary}>
              Meer over de coachingpool
            </Link>
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <section aria-labelledby="werkwijze-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <span className={labelCls}>Hoe wij werken</span>
          <h2 id="werkwijze-titel" className={h2Cls}>
            Vijf stappen, vooraf duidelijk
          </h2>
          <p className={introCls}>
            Of het nu om één medewerker of om een jaarafspraak gaat: u weet vooraf wie wat
            doet, wanneer en tegen welke prijs. Geen verrassingen tussendoor.
          </p>

          <ol className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Aanmelding", "U meldt een medewerker aan of bespreekt een jaarafspraak. Eén vast aanspreekpunt."],
              ["02", "Intake", "Kort gesprek over de vraag, context en wat er nodig is. Heldere scope, geen ruis."],
              ["03", "Matching", "Wij stellen één coach voor die past bij de vraag en de persoon. Klikt het niet, dan een ander."],
              ["04", "Begeleiding", "Het traject loopt in een afgesproken aantal sessies. Tussentijdse check op proces, niet op inhoud."],
              ["05", "Evaluatie", "Aan het einde een korte evaluatie met de medewerker, en met u op procesniveau."],
            ].map(([n, t, p]) => (
              <li key={n}>
                <span className="inline-block font-display text-[0.95rem] font-medium text-koraal pb-2 mb-3 border-b-2 border-goud">
                  Stap {n}
                </span>
                <h3 className="font-display text-[1.05rem] text-petrol mb-1.5">{t}</h3>
                <p className="text-sm text-petrol/70">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VERTROUWEN */}
      <section aria-labelledby="vertrouwen-titel" className={`${sectionCls} bg-linnen-licht`}>
        <div className={wrap}>
          <span className={labelCls}>Wat u van ons mag verwachten</span>
          <h2 id="vertrouwen-titel" className={h2Cls}>
            Heldere afspraken, scherpe grenzen
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-linnen border border-mint-dof p-8">
              <h3 className="font-display text-[1.2rem] text-petrol mb-3">
                Privacy: vooraf vastgelegd
              </h3>
              <p className="text-petrol/75 mb-3">
                De inhoud van wat een medewerker met een coach bespreekt, blijft daar.
                U hoort op procesniveau hoe het traject verloopt, nooit waarover de
                gesprekken gaan.
              </p>
              <ul>
                {[
                  "Privacyafspraken bij de start schriftelijk vastgelegd",
                  "Rapportage uitsluitend op proces: status, sessies, afronding",
                  "Inhoud wordt niet gedeeld met werkgever of HR",
                  "Verwerking conform AVG, geen doorverkoop van gegevens",
                ].map((li) => (
                  <li
                    key={li}
                    className="text-[0.94rem] text-petrol/75 py-2 flex gap-3 items-baseline"
                  >
                    <span aria-hidden="true" className="text-koraal">—</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-linnen border border-mint-dof p-8">
              <h3 className="font-display text-[1.2rem] text-petrol mb-3">
                Wat we niet doen
              </h3>
              <p className="text-petrol/75 mb-3">
                Wij zijn loopbaancoaches. Niet meer en niet minder. Dat houdt het scherp
                en eerlijk.
              </p>
              <ul>
                {[
                  "Geen therapie of medisch-psychologische behandeling",
                  "Geen functioneringsoordeel of beoordelingsrapport voor de werkgever",
                  "Geen werving en selectie, geen plaatsingsverplichting",
                  "Geen massa-aanpak: nooit meer trajecten dan ons netwerk goed aankan",
                ].map((li) => (
                  <li
                    key={li}
                    className="text-[0.94rem] text-petrol/75 py-2 flex gap-3 items-baseline"
                  >
                    <span aria-hidden="true" className="text-koraal">—</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MEDEWERKERS */}
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

      {/* BEWIJS */}
      <section aria-labelledby="bewijs-titel" className={`${sectionCls} bg-petrol text-linnen-licht`}>
        <div className={wrap}>
          <span className="block text-xs font-medium uppercase tracking-[0.1em] text-goud mb-3">
            Waarom Vizier op Scherp
          </span>
          <h2 id="bewijs-titel" className="font-display text-3xl md:text-[2rem] leading-[1.25] text-linnen-licht max-w-[26ch]">
            Een klein netwerk met bewezen ervaring
          </h2>
          <p className="mt-4 text-mint max-w-[64ch] text-base md:text-[1.05rem]">
            Geen grote organisatie met wisselende gezichten, maar een bewust klein gehouden
            netwerk. Daardoor kennen wij elke coach persoonlijk, en weet u precies wie er
            bij uw medewerkers aan tafel zit.
          </p>

          <div className="my-12 grid gap-8 grid-cols-2 lg:grid-cols-4">
            {[
              ["1.000+", "trajecten begeleid door ons coachnetwerk, in onder meer onderwijs, zorg, overheid en zakelijke dienstverlening"],
              ["8–12", "coaches. Bewust klein gehouden, zorgvuldig geselecteerd"],
              ["100%", "Noloc- en/of NOBCO-gecertificeerd, met achtergronden in coaching, psychologie en maatschappelijk werk"],
              ["2 locaties", "Haarlem en Amsterdam, en coaching op uw eigen locatie of online"],
            ].map(([k, v]) => (
              <div key={k}>
                <strong className="block font-display font-medium text-[1.9rem] md:text-[2.1rem] text-goud leading-tight mb-1.5">
                  {k}
                </strong>
                <span className="text-sm text-mint">{v}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
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

      {/* TEAM */}
      <section aria-labelledby="team-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <span className={labelCls}>Het team</span>
          <h2 id="team-titel" className={h2Cls}>
            Ons coachnetwerk
          </h2>
          <p className={introCls}>
            Vizier op Scherp werkt met een klein, vast netwerk van zelfstandige coaches.
            Allemaal Noloc- en/of NOBCO-gecertificeerd, met achtergronden in coaching,
            psychologie, maatschappelijk werk en therapeutisch werk. De ingang is vaak de
            werkcontext. De begeleiding is persoonlijk en gaat de diepte in.
          </p>

          <ul className="mt-12 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ["M", "Maaike", "Loopbaancoaching · onderwijs en publieke sector"],
              ["L", "Lianne", "Loopbaancoaching · duurzame inzetbaarheid"],
              ["Z", "Zelah", "Coaching · persoonlijke effectiviteit"],
              ["F", "Floor", "Loopbaancoaching · werkfit en herstel"],
              ["L", "Luc", "Loopbaancoaching · HR-achtergrond"],
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
              Elke coach heeft een eigen profiel met verhaal, aanpak en achtergrond. Zodat
              medewerkers weten met wie ze kennismaken.
            </p>
          </div>
        </div>
      </section>

      {/* REGIO */}
      <section aria-labelledby="regio-titel" className={`${sectionCls} bg-linnen-licht`}>
        <div className={wrap}>
          <span className={labelCls}>Werkgebied</span>
          <h2 id="regio-titel" className={h2Cls}>
            Loopbaancoaching in Amsterdam, Haarlem en omgeving
          </h2>
          <p className={introCls}>
            Wij werken voor organisaties en medewerkers in de hele regio, vanuit onze
            locaties in Haarlem en Amsterdam-Zuid. Coaching vindt plaats op een van onze
            locaties, op uw eigen kantoor, of online. Wat het beste past bij de medewerker.
          </p>
          <p className="mt-6 text-petrol/75 max-w-[68ch]">
            Ons werkgebied omvat onder meer{" "}
            <strong className="font-medium text-petrol">
              Amsterdam, Haarlem, Amstelveen, Hoofddorp, Zaanstad, Almere, Diemen,
              Hilversum, Heemstede, Aalsmeer, Uithoorn en Purmerend
            </strong>
            : en de omliggende gemeenten.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <span className={labelCls}>Veelgestelde vragen</span>
          <h2 id="faq-titel" className={h2Cls}>
            Vragen die HR vaak als eerste stelt
          </h2>
          <div className="mt-10 max-w-[820px]">
            <FAQ items={faqItems} />
          </div>
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
                Wij begeleiden ook mensen bij Werkfit Maken en Naar Werk. Persoonlijk, in
                je eigen tempo en zonder ingewikkelde taal. Op een aparte pagina lees je
                rustig hoe dat werkt en wie je daarbij begeleidt.
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
                Benieuwd wat dit voor uw organisatie kan betekenen?
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
