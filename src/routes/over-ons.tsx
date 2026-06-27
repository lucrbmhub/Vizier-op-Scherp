import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, Label, Card, CTAStrip } from "../components/ui-blocks";
import teamAsset from "../assets/team-vizier-op-scherp.png.asset.json";

const TITLE = "Over Vizier op Scherp | Regionaal netwerk voor loopbaancoaching";
const DESC =
  "Vizier op Scherp is een regionaal netwerk voor loopbaancoaching in Amsterdam, Haarlem en omgeving. Ontstaan als persoonlijke coachpraktijk, uitgegroeid tot ontwikkelpartner voor werkgevers, met behoud van de persoonlijke aanpak.";
const OG_TITLE = "Over Vizier op Scherp";
const OG_DESC =
  "Een klein, regionaal netwerk van gecertificeerde coaches. Professioneel voor HR en menselijk voor de medewerker.";
const CANONICAL = "https://vizieropscherp.nl/over-ons";

const orgLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vizier op Scherp",
  description: "Een klein, regionaal netwerk van gecertificeerde coaches. Professioneel voor HR en menselijk voor de medewerker.",
  url: "https://vizieropscherp.nl/",
  areaServed: [
    "Amsterdam",
    "Haarlem",
    "Amstelveen",
    "Hoofddorp",
    "Zaanstad",
    "Almere",
    "Diemen",
    "Hilversum",
    "Heemstede",
  ],
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
};

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:url", content: CANONICAL },
      { property: "og:site_name", content: "Vizier op Scherp" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESC },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESC },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgLd),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      {/* HERO licht */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Eyebrow>Over ons</Eyebrow>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-petrol max-w-4xl leading-[1.1]">
            Professioneel voor HR en menselijk voor de medewerker.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-petrol/75 leading-relaxed">
            Die ene zin is onze lat, voor elke coach, elk traject en elke
            afspraak die we maken. Vizier op Scherp is een regionaal netwerk
            voor loopbaancoaching in Amsterdam, Haarlem en omgeving: klein
            genoeg om iedereen persoonlijk te kennen, georganiseerd genoeg om
            werkgevers volledig te ontzorgen.
          </p>
        </div>
      </section>

      {/* Ons verhaal */}
      <Section>
        <Label>Ons verhaal</Label>
        <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
          Van persoonlijke praktijk naar netwerkbureau
        </h2>
        <div className="mt-8 max-w-[68ch] space-y-5 text-petrol/80 leading-relaxed">
          <p>
            Vizier op Scherp is in 2016 ontstaan als persoonlijke coachpraktijk,
            gebouwd op een warme en ontwikkelgerichte visie op
            loopbaanbegeleiding: zorgvuldig luisteren, aandacht voor
            zelfkennis, en begeleiding met een duidelijke methodische opbouw.
          </p>
          <p>
            In de loop van de jaren is daar iets bijgekomen: de vraag van
            werkgevers. Organisaties die hun medewerkers goed willen
            begeleiden bij loopbaanvragen, motivatie en duurzame
            inzetbaarheid, maar daar zelf de tijd, capaciteit of neutrale
            positie niet voor hebben. Voor hen zijn we uitgegroeid tot wat we
            nu zijn:{" "}
            <strong className="font-medium text-petrol">
              een regionaal netwerkbureau dat loopbaancoaching organiseert
              voor werkgevers en hun medewerkers.
            </strong>
          </p>
          <p>
            Wat in die groei bewust is gebleven: de persoonlijke aanpak, echte
            kennismakingen, betrokken coaches en kwalitatieve begeleiding.
          </p>
        </div>
      </Section>

      {/* Waar we in geloven */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Label>Waar we in geloven</Label>
          <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
            Op tijd ondersteunen werkt beter dan repareren
          </h2>
          <p className="mt-6 max-w-3xl text-petrol/75 leading-relaxed">
            Werk verandert snel. Organisaties hebben te maken met krapte,
            werkdruk en professionals die richting zoeken. Wij geloven dat
            organisaties sterker worden wanneer zij hun mensen op tijd goed
            begeleiden, niet pas wanneer iemand uitvalt of vertrekt, maar
            juist eerder: bij twijfel, groei, verandering of nieuwe
            verantwoordelijkheden.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card tone="goud">
              <h3 className="font-display text-xl mb-3 text-[color:var(--color-on-goud-title)]">
                Persoonlijke aandacht
              </h3>
              <p className="text-[color:var(--color-on-goud-sub)] leading-relaxed">
                We zien de mens achter de vraag. Elke begeleiding sluit aan
                bij tempo, situatie en wat iemand werkelijk nodig heeft, niet
                bij een standaardprogramma.
              </p>
            </Card>
            <Card tone="petrol">
              <h3 className="font-display text-xl mb-3 text-linnen-licht">
                Professionele betrouwbaarheid
              </h3>
              <p className="text-mint leading-relaxed">
                Heldere afspraken, zorgvuldige processen, discretie en doen
                wat we beloven. Zeker richting werkgevers moet kwaliteit niet
                alleen gevoeld worden, maar ook georganiseerd zijn.
              </p>
            </Card>
            <Card tone="koraal">
              <h3 className="font-display text-xl mb-3 text-[color:var(--color-on-koraal-title)]">
                Concrete beweging
              </h3>
              <p className="text-[color:var(--color-on-koraal-sub)] leading-relaxed">
                Coaching moet niet alleen inzicht geven, maar ook leiden tot
                stappen in de praktijk: een gesprek, een keuze, een
                sollicitatie, ander gedrag. Daar sturen we op.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Het netwerk */}
      <Section>
        <Label>Het netwerk</Label>
        <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
          Bewust klein, zorgvuldig samengesteld
        </h2>
        <div className="mt-8 max-w-[68ch] space-y-5 text-petrol/80 leading-relaxed">
          <p>
            Vizier op Scherp werkt met een netwerk van zelfstandige coaches:
            nu vijf, en bewust nooit meer dan acht tot twaalf. Dat is geen
            beperking maar een keuze: zo kennen we elke coach persoonlijk,
            blijft de kwaliteit hoog en weet u als opdrachtgever precies wie
            er bij uw medewerkers aan tafel zit.
          </p>
          <p>
            Onze coaches zijn gecertificeerd en aangesloten bij een erkende
            beroepsvereniging of kwaliteitsregister, zoals Noloc, NOBCO of een
            vergelijkbaar register. Ze hebben achtergronden in coaching,
            psychologie, HR, recruitment en maatschappelijk werk. Samen
            begeleidden zij meer dan duizend trajecten rond loopbaan, coaching,
            werkfitheid en professionele groei, in onder meer onderwijs, zorg,
            overheid en zakelijke dienstverlening. Binnen het netwerk borgen we
            kwaliteit met intervisie en evalueren we elk traject.
          </p>
          <img
            src={teamAsset.url}
            alt="Team Vizier op Scherp"
            className="mt-8 w-full rounded-2xl object-cover"
          />
          <p>
            <Link
              to="/coaches"
              className="text-koraal border-b border-koraal hover:opacity-80"
            >
              Maak kennis met onze coaches
            </Link>
          </p>
        </div>
      </Section>

      {/* Waar we werken */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Label>Waar we werken</Label>
          <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
            Twee locaties, één regio
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card tone="linnen">
              <h3 className="font-display text-xl text-petrol mb-3">
                Haarlem, hoofdkantoor
              </h3>
              <p className="text-petrol/80">
                Klein Heiligland 84
                <br />
                2011 EJ Haarlem
              </p>
              <p className="mt-3 text-petrol/75 leading-relaxed">
                Een rustige plek in het centrum van Haarlem voor
                kennismakingen en coachgesprekken.
              </p>
            </Card>
            <Card tone="linnen">
              <h3 className="font-display text-xl text-petrol mb-3">
                Amsterdam
              </h3>
              <p className="text-petrol/80">
                IJsbaanpad 9
                <br />
                1076 CV Amsterdam
              </p>
              <p className="mt-3 text-petrol/75 leading-relaxed">
                Goed bereikbare locatie in Amsterdam-Zuid. Gesprekken kunnen
                ook bij u op kantoor of online.
              </p>
            </Card>
          </div>

          <p className="mt-10 max-w-3xl text-petrol/75 leading-relaxed">
            Ons werkgebied: Amsterdam, Haarlem en omgeving: waaronder
            Amstelveen, Hoofddorp, Zaanstad, Almere, Diemen, Hilversum,
            Heemstede en de omliggende gemeenten.
          </p>
        </div>
      </section>

      {/* En verder */}
      <Section className="pb-12 md:pb-16">
        <div className="max-w-[68ch]">
          <h3 className="font-display text-2xl text-petrol mb-4">En verder</h3>
          <p className="text-petrol/80 leading-relaxed">
            Naast loopbaancoaching voor werkgevers begeleiden we mensen met
            een UWV-traject (
            <Link
              to="/uwv-traject"
              className="text-koraal border-b border-koraal hover:opacity-80"
            >
              Werkfit Maken en Naar Werk
            </Link>
            ) en voeren we enkele lopende programma's uit op het gebied van{" "}
            <Link
              to="/leiderschap"
              className="text-koraal border-b border-koraal hover:opacity-80"
            >
              leiderschap en talentontwikkeling
            </Link>
            . Particulieren met een loopbaanvraag zijn eveneens welkom.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Eens kennismaken?"
            action={
              <Link
                to="/kennismaken"
                className="inline-flex items-center rounded-full bg-petrol px-6 py-3 font-medium text-linnen-licht hover:bg-petrol/90 transition-colors"
              >
                Plan een kennismakingsgesprek
              </Link>
            }
          >
            Een vrijblijvend gesprek van een half uur, persoonlijk of online.
            We luisteren naar uw vraag en denken mee, ook als u nog niet
            precies weet wat u zoekt.
          </CTAStrip>
        </div>
      </section>
    </>
  );
}
