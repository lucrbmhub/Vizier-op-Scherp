import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Label, FAQ, CTASoft } from "../components/ui-blocks";
import { WerkboekDownloadModal } from "../components/WerkboekDownloadModal";
import type { WorkbookKey } from "../lib/leads.functions";

const TITLE = "Loopbaancoaching voor jou | Vizier op Scherp Amsterdam & Haarlem";
const DESC =
  "Twijfel over je werk of zoek je richting in je loopbaan? Maak vrijblijvend kennis met een loopbaancoach in Amsterdam, Haarlem en omgeving. Persoonlijk, in jouw tempo, en wat je bespreekt blijft vertrouwelijk.";
const OG_TITLE = "Loopbaancoaching voor jou, Vizier op Scherp";
const OG_DESC =
  "Richting vinden, grip krijgen, concrete stappen zetten. Maak eerst vrijblijvend kennis met een coach die bij je past.";

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Loopbaancoaching voor medewerkers en particulieren",
  serviceType: "Loopbaancoaching",
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
    q: "Moet ik al weten wat ik wil voordat ik begin?",
    a: "Nee, juist niet. De meeste mensen beginnen met twijfel of een vaag gevoel dat het anders moet. Samen met je coach breng je eerst rust en overzicht aan, en ontdek je daarna wat je kunt en wilt. De richting komt onderweg.",
  },
  {
    q: "Wat vertellen jullie mijn werkgever?",
    a: "Alleen of het traject loopt: aanwezigheid, voortgang in algemene zin en afronding. De inhoud van jullie gesprekken blijft tussen jou en je coach. Die afspraak leggen we bij de start vast, voor jou én voor je werkgever.",
  },
  {
    q: "Wat als het niet klikt met mijn coach?",
    a: "Dan stellen we iemand anders voor. Zonder gedoe en zonder dat je je hoeft te verantwoorden. Daarom begint elk traject met een vrijblijvende kennismaking: een goede klik is de basis van alles wat daarna komt.",
  },
  {
    q: "Waar vinden de gesprekken plaats?",
    a: "In Haarlem, in Amsterdam-Zuid, online, of op een plek die voor jou goed werkt. Dat stem je gewoon af met je coach.",
  },
  {
    q: "Wat kost een traject?",
    a: "Vaak betaalt je werkgever. Vraag ernaar bij HR, veel organisaties hebben hier budget voor. Betaal je zelf, dan krijg je vooraf een heldere prijsafspraak, zodat je precies weet waar je aan toe bent.",
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

export const Route = createFileRoute("/coaching-voor-mij")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:site_name", content: "Vizier op Scherp" },
      { property: "og:url", content: "https://vizieropscherp.nl/coaching-voor-mij" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESC },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESC },
    ],
    links: [
      { rel: "canonical", href: "https://vizieropscherp.nl/coaching-voor-mij" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
  component: Page,
});

const momenten = [
  {
    h: "Het zondagavondgevoel",
    p: "Je werk is op papier prima, maar de energie is weg. Elke week voelt als dezelfde week. Je weet alleen niet of het aan de baan ligt, aan de organisatie, of aan iets anders.",
  },
  {
    h: "Doorgroeien of iets heel anders?",
    p: "Er liggen kansen, maar je twijfelt: is dit echt de richting die je wilt? Een volgende stap zetten zonder te weten waarom, voelt niet goed.",
  },
  {
    h: "Terug na een zware periode",
    p: "Na ziekte, mantelzorg of een moeilijke tijd wil je weer opbouwen, maar je oude tempo en je oude rol passen misschien niet meer.",
  },
  {
    h: "Doorverwezen, en nu?",
    p: "Je werkgever biedt je een coachtraject aan. Fijn, maar ook spannend. Wat kun je verwachten, en wat gebeurt er met wat je vertelt?",
  },
];

const fasen = [
  {
    h: "Rust en overzicht",
    p: "Eerst even landen. Wat speelt er, in je hoofd én in je lijf? Waar zit de onrust precies? Je hoeft nog niets op te lossen, alleen helder krijgen waar je staat.",
  },
  {
    h: "Zicht op wat je kunt en wilt",
    p: "Je onderzoekt je talenten, je waarden en waar je energie van krijgt. Vaak weet je meer dan je denkt. Het is alleen nog nooit op een rij gezet.",
  },
  {
    h: "Richting kiezen",
    p: "Met dat inzicht bepaal je je richting: in je huidige werk, in een andere rol, of ergens anders. Geen overhaaste keuzes, wel een keuze die van jou is.",
  },
  {
    h: "Concrete stappen zetten",
    p: "Gesprekken voeren, solliciteren, netwerken, ander gedrag oefenen. Je coach blijft erbij tot je stappen in de praktijk staan, niet alleen op papier.",
  },
];

function Page() {
  const [activeWorkbook, setActiveWorkbook] = useState<WorkbookKey | null>(null);

  const werkboeken: { key: WorkbookKey; titel: string; tekst: string }[] = [
    {
      key: "wat-wil-ik",
      titel: "Je richting scherp krijgen",
      tekst:
        "Kom je er niet uit wat je nu echt wilt? In vijf korte oefeningen ontdek je waar je energie zit, wat je kunt en welke richting bij je past.",
    },
    {
      key: "vind-werk",
      titel: "Vind werk via mensen, niet via vacatures",
      tekst:
        "Blijf je solliciteren zonder resultaat? Dit doe-werkboek helpt je werk te vinden via je netwerk, met kleine, haalbare stappen.",
    },
    {
      key: "aan-het-roer",
      titel: "Aan het roer van je werk",
      tekst:
        "Wil je meer grip op je werk en je ontwikkeling? Vijf oefeningen om de regie te pakken over je tijd, je energie en je groei.",
    },
  ];

  return (
    <>
      {/* HERO — licht */}
      <section
        aria-labelledby="hero-titel"
        className="bg-linnen-licht border-b border-mint-dof"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <span className="inline-block text-xs font-medium border border-koraal text-koraal rounded-full px-4 py-1.5 tracking-wide mb-6">
            Voor medewerkers en particulieren
          </span>
          <h1
            id="hero-titel"
            className="font-display text-3xl md:text-5xl leading-tight text-petrol max-w-[22ch]"
          >
            Even n<span className="idot" style={{ ["--idot-bg" as never]: "#F5EFE3" }}>i</span>et weten welke kant je op wilt, daar begint het vaak<span className="slotpunt">.</span>
          </h1>
          <p className="mt-5 text-petrol/75 max-w-[56ch] text-lg">
            Misschien ben je doorverwezen door je werkgever. Misschien loop je
            er zelf al een tijdje mee rond. Hoe je hier ook komt: je hoeft nog
            niets te weten of te kunnen. Een loopbaantraject begint gewoon met
            een goed gesprek, en met een coach die bij je past.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              to="/kennismaken"
              className="inline-block bg-koraal text-[color:var(--color-on-koraal-title)] font-medium rounded-md px-7 py-3.5 hover:brightness-95 transition"
            >
              Maak vrijblijvend kennis
            </Link>
            <Link
              to="/coaches"
              className="inline-block border border-petrol text-petrol font-medium rounded-md px-7 py-3.5 hover:border-koraal hover:text-koraal transition-colors"
            >
              Bekijk eerst onze coaches
            </Link>
          </div>
        </div>
      </section>

      {/* HERKEN JE DIT */}
      <Section>
        <Label>Herken je dit?</Label>
        <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[28ch]">
          Vier momenten waarop coaching helpt
        </h2>
        <ul className="mt-10 border-t border-mint-dof">
          {momenten.map((m) => (
            <li
              key={m.h}
              className="grid gap-2 md:grid-cols-[260px_1fr] md:gap-8 py-6 border-b border-mint-dof"
            >
              <h3 className="font-display text-base text-petrol">{m.h}</h3>
              <p className="text-petrol/75 text-[0.97rem] max-w-[62ch]">{m.p}</p>
            </li>
          ))}
        </ul>
        <p className="mt-9 font-display text-xl md:text-2xl text-petrol max-w-[54ch] leading-snug">
          Wat deze momenten gemeen hebben: je hoeft het niet alleen uit te
          zoeken. <span className="text-koraal">Samen kijken werkt beter.</span>
        </p>
      </Section>

      {/* DOORVERWEZEN */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <Label>Doorverwezen door je werkgever?</Label>
              <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[24ch]">
                Dan kies jij alsnog zelf.
              </h2>
              <p className="mt-4 text-petrol/75">
                Veel werkgevers geven je een lijstje met bureaus. Wat je daarvan
                moet weten: jij bepaalt met wie je in zee gaat, en zo hoort het
                ook. Bij ons werkt dat zo:
              </p>
              <ul className="mt-5 mb-7 space-y-0">
                {[
                  "Je maakt eerst kennis met je coach, voordat er iets vastligt",
                  "Klikt het niet? Dan stellen we iemand anders voor",
                  "Geen anonieme database: echte mensen, met een eigen verhaal en aanpak",
                  "Begeleiding in jouw tempo, gericht op concrete stappen",
                ].map((l) => (
                  <li
                    key={l}
                    className="py-2 text-petrol text-[0.96rem] flex gap-3"
                  >
                    <span className="text-koraal font-medium shrink-0">✓</span>
                    {l}
                  </li>
                ))}
              </ul>
              <Link
                to="/coaches"
                className="inline-block border border-petrol text-petrol font-medium rounded-md px-6 py-3 hover:border-koraal hover:text-koraal transition-colors"
              >
                Leer onze coaches kennen
              </Link>
            </div>
            <aside className="bg-goud rounded-2xl p-7 md:p-8 text-[color:var(--color-on-goud-sub)]">
              <h3 className="font-display text-lg text-[color:var(--color-on-goud-title)] mb-3">
                Wat je bespreekt, blijft vertrouwelijk
              </h3>
              <p className="text-[0.95rem]">
                Ook als je werkgever het traject betaalt, blijft de inhoud tussen jou en je coach.
                Je werkgever hoort alleen óf het loopt, nooit waarover het gaat.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* TRAJECT IN 4 FASEN */}
      <Section>
        <Label>Hoe een traject eruitziet</Label>
        <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[32ch]">
          Van onrust naar concrete stappen, in vier fasen
        </h2>
        <p className="mt-4 text-petrol/75 max-w-[64ch]">
          Elk traject is anders, want elk mens is anders. Maar de opbouw is
          herkenbaar. Hoeveel gesprekken je nodig hebt en in welk tempo, stem je
          af met je coach.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fasen.map((f) => (
            <div key={f.h} className="border-t-[3px] border-goud pt-4">
              <h3 className="font-display text-base text-petrol mb-2">{f.h}</h3>
              <p className="text-[0.93rem] text-petrol/75">{f.p}</p>
            </div>
          ))}
        </div>

      </Section>

      {/* WERKBOEKEN — gratis download */}
      <Section className="pt-0">
        <div className="rounded-2xl border border-goud bg-linnen-licht p-8 md:p-12">
          <Label>Gratis aan de slag</Label>
          <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[32ch]">
            Drie werkboeken om zelf te beginnen
          </h2>
          <p className="mt-3 text-petrol/75 max-w-[64ch]">
            Drie werkboeken die je meteen zelf kunt invullen, zonder kosten en
            zonder verplichting.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {werkboeken.map((w) => (
              <div
                key={w.key}
                className="flex flex-col bg-linnen border border-mint-dof rounded-2xl p-6 md:p-7"
              >
                <h3 className="font-display text-lg text-petrol mb-2.5">
                  {w.titel}
                </h3>
                <p className="text-[0.95rem] text-petrol/75">{w.tekst}</p>
                <button
                  type="button"
                  onClick={() => setActiveWorkbook(w.key)}
                  className="mt-6 inline-flex justify-center items-center rounded-md bg-koraal px-5 py-3 text-[0.95rem] font-medium text-[color:var(--color-on-koraal-title)] hover:brightness-95 transition"
                >
                  Download het werkboek
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>



      {/* PRAKTISCH + TESTIMONIALS */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Label>Praktisch</Label>
          <h2 className="font-display text-2xl md:text-3xl text-petrol">
            Goed om te weten
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-linnen border border-mint-dof rounded-2xl p-8">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Waar en hoe
              </h3>
              <p className="text-petrol/75">
                Gesprekken vinden plaats in Haarlem (Klein Heiligland), in
                Amsterdam-Zuid (IJsbaanpad), online, of op een plek die voor
                jou goed werkt. Je spreekt af in een tempo dat bij je past,
                coaching is geen sprint.
              </p>
            </div>
            <div className="bg-linnen border border-mint-dof rounded-2xl p-8">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Wie betaalt het traject?
              </h3>
              <p className="text-petrol/75 mb-3">
                Vaak je werkgever. Veel organisaties hebben budget voor
                ontwikkeling en duurzame inzetbaarheid. Vraag ernaar bij HR; we
                denken graag mee over hoe je dat aankaart.
              </p>
              <p className="text-petrol/75">
                Betaal je zelf? Ook dan ben je welkom. Je krijgt vooraf een
                heldere prijsafspraak, zodat je precies weet waar je aan toe
                bent.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="border border-mint-dof rounded-2xl p-8 bg-linnen-licht">
              <blockquote className="font-display text-[1.06rem] text-petrol leading-relaxed mb-4">
                "Het traject heeft me geholpen om rustig te kijken naar wat ik
                echt wilde. Geen druk, wel concrete stappen. Ik heb nu een rol
                die beter past bij wat ik kan en wil."
              </blockquote>
              <figcaption className="text-sm text-petrol/65 not-italic">
                <cite className="not-italic">
                  Anouk V., Beleidsadviseur, publieke sector
                </cite>
              </figcaption>
            </figure>
            <figure className="border border-mint-dof rounded-2xl p-8 bg-linnen-licht">
              <blockquote className="font-display text-[1.06rem] text-petrol leading-relaxed mb-4">
                "Wij zetten Vizier op Scherp structureel in voor medewerkers met
                loopbaanvragen. Korte lijnen, professionele coaches en altijd
                een zorgvuldige match."
              </blockquote>
              <figcaption className="text-sm text-petrol/65 not-italic">
                <cite className="not-italic">
                  Marleen B., HR-manager, zorginstelling
                </cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <Label>Veelgestelde vragen</Label>
        <h2 className="font-display text-2xl md:text-3xl text-petrol mb-8">
          Wat mensen ons vooraf vragen
        </h2>
        <div className="max-w-3xl">
          <FAQ items={faqItems.map((f) => ({ q: f.q, a: f.a }))} />
        </div>
      </Section>

      {/* UWV */}
      <section className="bg-linnen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="rounded-2xl border border-mint-dof p-7 md:p-9 flex flex-wrap justify-between items-center gap-6 bg-linnen-licht">
            <div className="max-w-[58ch]">
              <h2 className="font-display text-[1.25rem] text-petrol mb-2">
                Kom je via UWV?
              </h2>
              <p className="text-petrol/70 text-[0.96rem]">
                Wij begeleiden ook mensen bij UWV Werkfit en Naar Werk trajecten. Persoonlijk, in je
                eigen tempo en zonder ingewikkelde taal. Hier lees je hoe dat werkt en wie je daarbij begeleidt.
              </p>
            </div>
            <Link
              to="/uwv-traject"
              className="inline-flex items-center rounded-md border border-petrol px-6 py-3 text-[0.97rem] font-medium text-petrol hover:border-koraal hover:text-koraal transition whitespace-nowrap"
            >
              Lees over UWV-trajecten
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — zacht */}
      <Section className="pt-0">
        <CTASoft
          title="Gewoon eens kennismaken?"
          action={
            <Link
              to="/kennismaken"
              className="inline-block bg-koraal text-[color:var(--color-on-koraal-title)] font-medium rounded-md px-7 py-3.5 hover:brightness-95 transition"
            >
              Plan een kennismaking
            </Link>
          }
        >
          Een eerste gesprek is vrijblijvend en verplicht je tot niets. Je
          vertelt wat er speelt, wij vertellen hoe we werken, en daarna beslis
          jij.
        </CTASoft>
      </Section>

      <WerkboekDownloadModal
        open={activeWorkbook !== null}
        onOpenChange={(o) => {
          if (!o) setActiveWorkbook(null);
        }}
        workbook={activeWorkbook}
        pagina="/coaching-voor-mij"
      />
    </>
  );
}
