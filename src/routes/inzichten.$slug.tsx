import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTAStrip } from "../components/ui-blocks";

/* ------------------------------------------------------------------ */
/*  Article registry — same data as inzichten.tsx                     */
/* ------------------------------------------------------------------ */

const ARTICLES = [
  {
    slug: "van-werven-naar-behouden",
    title: "Van werven naar behouden: de grote HR-verschuiving van 2026",
    summary:
      "De arbeidsmarkt kantelt: van werven naar behouden. Waarom medewerkers echt vertrekken — en het gaat niet om salaris — en hoe een goed gesprek op tijd het verschil maakt.",
    audience: "werkgever" as const,
    readMinutes: 5,
    featured: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Route definition                                                    */
/* ------------------------------------------------------------------ */

export const Route = createFileRoute("/inzichten/$slug")({
  head: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) return {};

    const canonical = `https://vizieropscherp.nl/inzichten/${article.slug}`;
    return {
      meta: [
        { title: `${article.title} | Inzichten | Vizier op Scherp` },
        { name: "description", content: article.summary },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "nl_NL" },
        { property: "og:url", content: canonical },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.summary },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center bg-linnen px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl text-petrol">Artikel niet gevonden</h1>
        <p className="mt-2 text-petrol/70">Dit artikel bestaat (nog) niet.</p>
        <div className="mt-6">
          <Link
            to="/inzichten"
            className="inline-flex items-center rounded-full bg-koraal px-4 py-2 text-sm font-medium text-[#4A1B0C]"
          >
            Terug naar inzichten
          </Link>
        </div>
      </div>
    </div>
  ),
});

/* ------------------------------------------------------------------ */
/*  Page component                                                      */
/* ------------------------------------------------------------------ */

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) throw notFound();

  const audienceLabel =
    article.audience === "werkgever" ? "Voor werkgevers" : "Voor medewerkers";

  return (
    <>
      {/* Hero */}
      <section className="bg-petrol text-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link
            to="/inzichten"
            className="inline-flex items-center text-sm text-mint-dof hover:text-goud transition"
          >
            ← Inzichten
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-goud px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.04em] text-[color:var(--color-on-goud-title)]">
              {audienceLabel}
            </span>
            <span className="text-xs text-mint-dof">
              {article.readMinutes} min lezen
            </span>
          </div>
          <h1 className="mt-5 font-display text-3xl md:text-4xl lg:text-[2.6rem] text-linnen-licht max-w-[28ch] leading-[1.2]">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <article className="bg-linnen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="prose-petrol">
            <p className="text-petrol/80 leading-relaxed text-[1.05rem]">
              Jarenlang ging bijna alle energie van HR naar werven. Vacatures
              vullen, krapte bestrijden, vechten om schaars talent. Maar het
              beeld kantelt. De vacaturecijfers dalen, en de vraag die nu echt
              knelt is een andere geworden. Niet hoe je nieuwe mensen binnenhaalt,
              maar hoe je de mensen die je al hebt aan boord houdt.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              De arbeidsmarkt koelt af, maar niet overal
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Eind 2025 waren er voor het eerst in vier jaar meer werklozen dan
              openstaande vacatures, meldt het CBS. Na jaren van extreme krapte
              voelt dat als lucht. Toch vertelt dat cijfer maar de helft van het
              verhaal. In de zorg, het onderwijs, bij gemeenten en in de techniek
              blijven de tekorten gewoon bestaan. Een afkoelende landelijke markt
              verandert daar weinig aan. En door de vergrijzing gaan er de
              komende jaren veel ervaren mensen met pensioen, terwijl er minder
              jonge instroom is om dat op te vangen.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Voor veel organisaties komt het hierop neer: een kleinere vijver om
              uit te vissen, en tegelijk een groep ervaren medewerkers die je je
              niet kunt veroorloven te verliezen. Precies daarom verschuift de
              aandacht van binnenhalen naar binnenhouden. In recent onderzoek
              onder HR-professionals staat duurzame inzetbaarheid voor het eerst
              bovenaan de lijst met prioriteiten voor 2026. Nog vóór werving.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              Waarom mensen weggaan, en waarom dat hoopvol is
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Wie wil behouden, moet weten waarom mensen vertrekken. En daar zit
              goed nieuws in. De belangrijkste reden dat medewerkers hun werk
              verlaten is niet het salaris, maar het gebrek aan perspectief.
              Geen zicht op ontwikkeling, geen volgende stap, het gevoel vast te
              zitten. Ongeveer een derde noemt dit als hoofdreden.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Dat is hoopvoller dan het klinkt. Een hoger salaris bij de buurman
              is moeilijk te beïnvloeden. Maar of iemand richting en perspectief
              ervaart in zijn werk, daar heb je als werkgever wél invloed op. En
              vaak zit dat verschil niet in een groot programma, maar in aandacht
              op het juiste moment.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              Wat we in de praktijk zien
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Neem het onderwijs, een wereld die we van binnenuit kennen. Daar
              gebeurt het regelmatig dat een docent denkt: ik wil iets anders.
              De energie is eruit, het werk voelt als een sleur, en de gedachte
              aan vertrek sluipt binnen. Logisch dat een schoolbestuur daarvan
              schrikt, want goede docenten zijn niet zomaar vervangen.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Wat we dan vaak zien als zo iemand met een coach in gesprek gaat,
              is dat de vraag verschuift. Het blijkt lang niet altijd het vak te
              zijn waar de onvrede zit. Soms is het de manier van werken, de
              verhouding tot collega&apos;s, of een vastgeroest beeld van zichzelf.
              Door daar rustig naar te kijken, ontdekt iemand vaak dat er binnen
              het werk meer ruimte en richting te vinden is dan gedacht. Niet
              zelden blijft een docent die op het punt stond te vertrekken, en
              gaat hij of zij met meer plezier en eigenaarschap verder. Dat is
              precies waar het ons om gaat. Niet vasthouden om het vasthouden,
              maar mensen helpen opnieuw te zien wat hun werk hun kan brengen.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              Behoud begint met een gesprek, niet met een exit
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Hier wringt het in veel organisaties. Er wordt pas écht over
              iemands loopbaan gepraat als het te laat is. Tijdens het
              exitgesprek, als de keuze al gemaakt is. Onderzoek van Gallup laat
              zien dat ruim veertig procent van het vrijwillige vertrek in
              principe te voorkomen was. Vaak simpelweg omdat er in de maanden
              ervoor geen gesprek werd gevoerd over hoe het echt ging en waar
              iemand naartoe wilde.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Het alternatief is eenvoudig, maar het vraagt om timing. Het
              gesprek vóór het probleem. Niet wachten tot iemand uitvalt,
              twijfelt of al met één been buiten staat, maar op tijd ruimte
              maken om stil te staan bij energie, motivatie en richting. Dat is
              geen luxe. Het is een van de meest directe manieren om mensen
              duurzaam inzetbaar én betrokken te houden.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              Begin klein
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              De sprong van &quot;we willen meer aan behoud doen&quot; naar een
              uitgewerkt loopbaanbeleid voelt vaak groot. Dat hoeft het niet te
              zijn. Een mooie manier om te beginnen is een ronde
              laagdrempelige loopbaangesprekken. Een van onze coaches gaat in
              gesprek met een aantal van je medewerkers over wat hen drijft,
              waar ze tegenaan lopen en welke stap bij hen past. Jij krijgt op
              hoofdlijnen terug wat er speelt, binnen duidelijke
              privacyafspraken, want wat in die gesprekken wordt besproken blijft
              vertrouwelijk.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Vaak is zo&apos;n eerste ronde het begin van iets bestendigers.
              Blijkt de behoefte groter, dan kunnen losse trajecten volgen voor
              wie daar baat bij heeft. En wordt loopbaanbegeleiding een vast
              onderdeel van je beleid, dan kun je dat onderbrengen in een
              jaarafspraak. Een vaste coachingpool waarbinnen je medewerkers
              terechtkunnen, met heldere afspraken over intake, matching,
              begeleiding en evaluatie. Zo groeit de samenwerking mee met wat je
              nodig hebt, zonder dat je je vooraf vastlegt.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              Tot slot
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              De arbeidsmarkt van 2026 vraagt iets anders dan die van de
              afgelopen jaren. Niet harder werven, maar zorgvuldiger behouden.
              De organisaties die hun mensen op tijd ondersteunen, bij twijfel,
              groei of een nieuwe richting, staan het sterkst.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Bij Vizier op Scherp helpen we werkgevers in Amsterdam, Haarlem
              en omgeving daarbij. We zijn een klein team van gecertificeerde
              coaches, aangesloten bij Noloc en NOBCO, die je medewerkers
              persoonlijk begeleiden. Wil je verkennen wat bij jouw organisatie
              past? Begin met een vrijblijvend gesprek of een eerste ronde
              loopbaangesprekken. Dan merk je zelf wat het oplevert.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-mint-dof">
            <CTAStrip
              title="Een vraag over behoud of loopbaangesprekken?"
              action={
                <Link
                  to="/kennismaken"
                  className="inline-flex items-center rounded-full bg-petrol px-6 py-3 font-medium text-linnen-licht hover:bg-petrol/90 transition-colors"
                >
                  Plan een kennismakingsgesprek
                </Link>
              }
            >
              We denken graag mee, vrijblijvend en zonder verkooppraat.
            </CTAStrip>
          </div>
        </div>
      </article>
    </>
  );
}
