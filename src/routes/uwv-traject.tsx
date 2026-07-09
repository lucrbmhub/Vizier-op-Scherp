import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, FAQ, CTASoft, Card } from "../components/ui-blocks";

const TITLE = "Werkfit Maken & Naar Werk via UWV | Vizier op Scherp";
const DESC =
  "Begeleiding bij Werkfit Maken en Naar Werk via UWV, in Amsterdam, Haarlem en omgeving. Persoonlijk en in jouw tempo, zonder ingewikkelde taal. UWV vergoedt het traject. Jij kiest zelf je begeleiding.";
const OG_TITLE = "Werkfit Maken & Naar Werk via UWV, Vizier op Scherp";
const OG_DESC =
  "Weer stappen zetten richting werk, in jouw tempo. Persoonlijke begeleiding bij UWV-trajecten in Amsterdam, Haarlem en omgeving.";

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Werkfit Maken en Naar Werk (UWV-trajecten)",
  serviceType: "Re-integratiebegeleiding",
  provider: {
    "@type": "ProfessionalService",
    name: "Vizier op Scherp",
    url: "https://vizieropscherp.nl/",
  },
  areaServed: [
    "Amsterdam",
    "Haarlem",
    "Amstelveen",
    "Hoofddorp",
    "Zaanstad",
    "Almere",
    "Diemen",
    "Hilversum",
  ],
};

const faqItems = [
  {
    q: "Kost het traject mij iets?",
    a: "Nee. UWV vergoedt het traject volledig. Voor jou zijn er geen kosten.",
  },
  {
    q: "Mag ik zelf kiezen wie mij begeleidt?",
    a: "Ja. Je kiest zelf bij welk bureau je het traject volgt. Wil je met ons werken, geef dat dan aan bij je contactpersoon bij UWV, of neem eerst contact met ons op, dan leggen we rustig uit hoe het werkt.",
  },
  {
    q: "Wat als ik nog niet zoveel aankan?",
    a: "Dat is precies waar het traject voor is. We beginnen waar jij staat en bouwen stap voor stap op, in een tempo dat bij je past. Je hoeft niets te forceren.",
  },
  {
    q: "Hoe lang duurt een traject?",
    a: "Dat verschilt per persoon en hangt af van de afspraken met UWV. Je coach neemt dit bij de start rustig met je door, zodat je precies weet waar je aan toe bent.",
  },
  {
    q: "Hoe meld ik me aan?",
    a: "Bespreek met je contactpersoon bij UWV dat je begeleiding wilt via Vizier op Scherp. Of neem eerst contact met ons op. We denken graag met je mee, ook over hoe de aanmelding werkt.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/uwv-traject")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:site_name", content: "Vizier op Scherp" },
      { property: "og:url", content: "https://vizieropscherp.nl/uwv-traject" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESC },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESC },
    ],
    links: [
      { rel: "canonical", href: "https://vizieropscherp.nl/uwv-traject" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
  component: Page,
});

const situaties = [
  {
    h: "Na een periode van ziekte",
    p: "Je bent een tijd uit de running geweest en wilt weer opbouwen. Maar waar begin je, en hoe voorkom je dat je te snel gaat?",
  },
  {
    h: "Al langer thuis",
    p: "Werken voelt ver weg. Het ritme is weg, het vertrouwen ook een beetje. Je wilt wel, maar de drempel is hoog geworden.",
  },
  {
    h: "Je oude werk past niet meer",
    p: "Terug naar wat je deed, kan of wil je niet. Maar wat dan wél past bij wat je nu aankunt. Dat is nog een zoektocht.",
  },
];

const stappen = [
  {
    h: "Kennismaken",
    p: "We drinken koffie (of bellen) en kijken of het klikt. Vrijblijvend, je beslist daarna pas.",
  },
  {
    h: "Samen een plan maken",
    p: "Wat wil je bereiken, en wat is een realistisch tempo? Dat leggen we samen vast, in begrijpelijke taal.",
  },
  {
    h: "Gesprekken in jouw tempo",
    p: "Je hebt een vaste coach. Jullie werken stap voor stap, soms praktisch, soms persoonlijk. Wat nodig is.",
  },
  {
    h: "Stappen richting werk",
    p: "Van oriënteren tot solliciteren: je coach blijft naast je staan tot de stap gezet is.",
  },
];

function Page() {
  return (
    <>
      {/* HERO — licht */}
      <section
        aria-labelledby="hero-titel"
        className="relative overflow-hidden bg-linnen-licht border-b border-mint-dof"
      >
        <span aria-hidden="true" className="watermark watermark-light" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <span className="inline-block text-xs font-medium border border-koraal text-koraal rounded-full px-4 py-1.5 tracking-wide mb-6">
            UWV-traject · Werkfit Maken &amp; Naar Werk
          </span>
          <h1
            id="hero-titel"
            className="font-display text-3xl md:text-5xl leading-tight text-petrol max-w-[22ch]"
          >
            Weer stappen zetten r<span className="idot" style={{ ["--idot-bg" as never]: "#F5EFE3" }}>i</span>chting werk, in jouw tempo<span className="slotpunt">.</span>
          </h1>
          <p className="mt-5 text-petrol/75 max-w-[56ch] text-lg">
            Krijg je via UWV ondersteuning om weer aan het werk te gaan? Dan
            kun je kiezen wie je daarbij begeleidt. Bij Vizier op Scherp krijg
            je een vaste coach die naast je staat: persoonlijk, geduldig en
            zonder ingewikkelde taal. Geen procedures, maar gesprekken die je
            verder helpen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              to="/kennismaken"
              className="inline-block bg-koraal text-[color:var(--color-on-koraal-title)] font-medium rounded-md px-7 py-3.5 hover:brightness-95 transition"
            >
              Neem contact op
            </Link>
            <Link
              to="/coaches"
              className="inline-block border border-petrol text-petrol font-medium rounded-md px-7 py-3.5 hover:border-koraal hover:text-koraal transition-colors"
            >
              Bekijk wie je begeleidt
            </Link>
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <Section>
        <Eyebrow>Voor wie</Eyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[32ch]">
          Misschien herken je een van deze situaties
        </h2>
        <ul className="mt-10 border-t border-mint-dof">
          {situaties.map((s) => (
            <li
              key={s.h}
              className="grid gap-2 md:grid-cols-[260px_1fr] md:gap-8 py-6 border-b border-mint-dof"
            >
              <h3 className="font-display text-base text-petrol flex gap-2.5 items-start">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-koraal" />
                <span>{s.h}</span>
              </h3>
              <p className="text-petrol/75 text-[0.97rem] max-w-[62ch]">{s.p}</p>
            </li>
          ))}
        </ul>
        <p className="mt-9 font-display text-xl md:text-2xl text-petrol max-w-[54ch] leading-snug">
          Waar je ook staat: we beginnen daar.{" "}
          <span className="text-koraal">Niet waar je "zou moeten" staan.</span>
        </p>
      </Section>

      {/* WAT WE SAMEN DOEN */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Eyebrow>Wat we samen doen</Eyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[32ch]">
            Twee soorten trajecten, één manier van begeleiden
          </h2>
          <p className="mt-4 text-petrol/75 max-w-[64ch]">
            UWV kent verschillende trajecten. Welke voor jou geldt, staat in je
            afspraken met UWV. Je coach legt het je gewoon in normale taal uit.
            In het kort:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card tone="linnen">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Werkfit Maken
              </h3>
              <p className="text-petrol/75 mb-3">
                Eerst weer op krachten komen. We werken aan ritme, vertrouwen
                en aan wat je aankunt, stap voor stap. Je ontdekt wat voor werk
                bij je past en bouwt rustig op richting de volgende fase.
              </p>
              <p className="text-petrol/75">
                Denk aan: structuur in je week, weer onder de mensen komen,
                ontdekken waar je energie van krijgt.
              </p>
            </Card>
            <Card tone="linnen">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Naar Werk
              </h3>
              <p className="text-petrol/75 mb-3">
                Klaar voor de volgende stap: passend werk vinden. We helpen je
                met zoeken, solliciteren en netwerken, en met het gesprek over
                wat jij nodig hebt om het vol te houden.
              </p>
              <p className="text-petrol/75">
                Denk aan: je verhaal helder krijgen, sollicitaties voorbereiden,
                werkgevers benaderen die bij je passen.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* HOE HET WERKT */}
      <Section>
        <Eyebrow>Hoe het werkt</Eyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-petrol">
          In vier stappen
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stappen.map((s, i) => (
            <li key={s.h} className="anchor-card !p-6">
              <span className="inline-block font-display text-sm font-medium text-koraal border-b-2 border-goud pb-1 mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-base text-petrol mb-2">{s.h}</h3>
              <p className="text-[0.93rem] text-petrol/75">{s.p}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* GOED OM TE WETEN */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Eyebrow>Goed om te weten</Eyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-petrol">
            Eerlijk over hoe het geregeld is
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card tone="linnen">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Het kost jou niets, en jij kiest
              </h3>
              <p className="text-petrol/75">
                UWV vergoedt het traject volledig; voor jou zijn er geen
                kosten. En belangrijk: jij kiest zelf bij welk bureau je het
                traject doet. Wil je met ons werken? Geef dat aan bij je
                contactpersoon bij UWV, of neem eerst contact met ons op.
              </p>
            </Card>
            <Card tone="linnen">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Wat we wel en niet delen
              </h3>
              <p className="text-petrol/75">
                We houden UWV op de hoogte van de voortgang van je traject. Dat
                hoort erbij en dat weet je vooraf. Maar wat jij persoonlijk met
                je coach bespreekt, behandelen we zorgvuldig. Je coach legt je
                bij de start precies uit wat er wel en niet gedeeld wordt en
                blijft hierover met je in gesprek.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <Eyebrow>Veelgestelde vragen</Eyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-petrol mb-8">
          Vragen die we vaak krijgen
        </h2>
        <div className="max-w-3xl">
          <FAQ items={faqItems.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <CTASoft
          title="Eerst gewoon even praten?"
          action={
            <Link
              to="/kennismaken"
              className="inline-block bg-koraal text-[color:var(--color-on-koraal-title)] font-medium rounded-md px-7 py-3.5 hover:brightness-95 transition"
            >
              Neem contact op
            </Link>
          }
        >
          Bel of mail ons gerust. Geen formulieren, geen verplichtingen. Gewoon
          een gesprek over waar je staat en wat mogelijk is.
        </CTASoft>
      </Section>
    </>
  );
}
