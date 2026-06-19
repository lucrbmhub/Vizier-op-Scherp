import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTAStrip } from "../components/ui-blocks";

/* ------------------------------------------------------------------ */
/*  Article registry                                                  */
/* ------------------------------------------------------------------ */

type Article = {
  slug: string;
  title: string;
  summary: string;
  audience: "werkgever" | "medewerker";
  readMinutes: number;
  featured?: boolean;
};

const ARTICLES: Article[] = [
  {
    slug: "van-werven-naar-behouden",
    title: "Van werven naar behouden: de grote HR-verschuiving van 2026",
    summary:
      "De arbeidsmarkt kantelt: van werven naar behouden. Waarom medewerkers echt vertrekken — en het gaat niet om salaris — en hoe een goed gesprek op tijd het verschil maakt.",
    audience: "werkgever",
    readMinutes: 5,
    featured: true,
  },
  {
    slug: "richting-vinden-in-je-loopbaan",
    title: "Richting vinden in je loopbaan: weer weten welke kant je op wilt",
    summary:
      "Je doet je werk prima, maar het voelt niet meer als de goede plek. Lees hoe je je richting kunt kwijtraken, welke signalen je werk afgeeft en hoe je stap voor stap weer weet wat je wilt.",
    audience: "medewerker",
    readMinutes: 5,
  },
  {
    slug: "energie-en-motivatie-in-werk",
    title:
      "Energie en motivatie in werk: het verschil tussen moe zijn en leeglopen",
    summary:
      "Geen energie of motivatie meer voor je werk? Ontdek het verschil tussen moe zijn en leeglopen, en wat je eraan kunt doen voordat het groter wordt.",
    audience: "medewerker",
    readMinutes: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Per-slug head metadata                                             */
/* ------------------------------------------------------------------ */

function headForSlug(slug: string) {
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  const canonical = `https://vizieropscherp.nl/inzichten/${article.slug}`;

  if (article.slug === "richting-vinden-in-je-loopbaan") {
    const title =
      "Richting vinden in je loopbaan: weer weten wat je wilt | Vizier op Scherp";
    const description =
      "Geen idee welke kant je op wilt met je werk? Ontdek hoe je richting vindt in je loopbaan: signalen, concrete stappen en wanneer een coach helpt. Regio Amsterdam en Haarlem.";
    const ogTitle =
      "Richting vinden in je loopbaan: weer weten wat je wilt";
    const image = "https://vizieropscherp.nl/og-image.png";
    const imageAlt =
      "Vizier op Scherp, loopbaancoaching in Amsterdam, Haarlem en omgeving";

    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Richting vinden in je loopbaan: weer weten welke kant je op wilt",
      description,
      inLanguage: "nl-NL",
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      author: {
        "@type": "Organization",
        name: "Vizier op Scherp",
        url: "https://vizieropscherp.nl/",
      },
      publisher: {
        "@type": "Organization",
        name: "Vizier op Scherp",
        logo: { "@type": "ImageObject", url: image },
      },
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
      image,
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "nl_NL" },
        { property: "og:site_name", content: "Vizier op Scherp" },
        { property: "og:title", content: ogTitle },
        { property: "og:description", content: description },
        { property: "og:url", content: canonical },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: ogTitle },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(ld) },
      ],
    };
  }

  if (article.slug === "energie-en-motivatie-in-werk") {
    const title =
      "Energie en motivatie in je werk terugvinden | Vizier op Scherp";
    const description =
      "Geen energie of motivatie meer voor je werk? Ontdek het verschil tussen moe zijn en leeglopen, en wat je eraan kunt doen. Loopbaancoaching in Amsterdam en Haarlem.";
    const ogTitle = "Energie en motivatie in je werk terugvinden";
    const image = "https://vizieropscherp.nl/og-image.png";
    const imageAlt =
      "Vizier op Scherp, loopbaancoaching in Amsterdam, Haarlem en omgeving";

    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Energie en motivatie in werk: het verschil tussen moe zijn en leeglopen",
      description,
      inLanguage: "nl-NL",
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      author: {
        "@type": "Organization",
        name: "Vizier op Scherp",
        url: "https://vizieropscherp.nl/",
      },
      publisher: {
        "@type": "Organization",
        name: "Vizier op Scherp",
        logo: { "@type": "ImageObject", url: image },
      },
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
      image,
    };

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow" },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "nl_NL" },
        { property: "og:site_name", content: "Vizier op Scherp" },
        { property: "og:title", content: ogTitle },
        { property: "og:description", content: description },
        { property: "og:url", content: canonical },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: ogTitle },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(ld) },
      ],
    };
  }

  // Default (werkgever-artikel)
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
}

/* ------------------------------------------------------------------ */
/*  Route definition                                                    */
/* ------------------------------------------------------------------ */

export const Route = createFileRoute("/inzichten/$slug")({
  head: ({ params }) => headForSlug(params.slug),
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center bg-linnen px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl text-petrol">
          Artikel niet gevonden
        </h1>
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

  if (article.slug === "richting-vinden-in-je-loopbaan") {
    return <RichtingVindenArticle article={article} />;
  }
  if (article.slug === "energie-en-motivatie-in-werk") {
    return <EnergieMotivatieArticle article={article} />;
  }
  return <WervenNaarBehoudenArticle article={article} />;
}

/* ------------------------------------------------------------------ */
/*  Werkgever-artikel — bestaande layout (donkere hero)                */
/* ------------------------------------------------------------------ */

function WervenNaarBehoudenArticle({ article }: { article: Article }) {
  const audienceLabel =
    article.audience === "werkgever" ? "Voor werkgevers" : "Voor medewerkers";

  return (
    <>
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

      <article className="bg-linnen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="prose-petrol">
            <p className="text-petrol/80 leading-relaxed text-[1.05rem]">
              Jarenlang ging bijna alle energie van HR naar werven. Vacatures
              vullen, krapte bestrijden, vechten om schaars talent. Maar het
              beeld kantelt. De vacaturecijfers dalen, en de vraag die nu echt
              knelt is een andere geworden. Niet hoe je nieuwe mensen
              binnenhaalt, maar hoe je de mensen die je al hebt aan boord houdt.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              De arbeidsmarkt koelt af, maar niet overal
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Eind 2025 waren er voor het eerst in vier jaar meer werklozen dan
              openstaande vacatures, meldt het CBS. Na jaren van extreme krapte
              voelt dat als lucht. Toch vertelt dat cijfer maar de helft van het
              verhaal. In de zorg, het onderwijs, bij gemeenten en in de
              techniek blijven de tekorten gewoon bestaan. Een afkoelende
              landelijke markt verandert daar weinig aan. En door de vergrijzing
              gaan er de komende jaren veel ervaren mensen met pensioen,
              terwijl er minder jonge instroom is om dat op te vangen.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Voor veel organisaties komt het hierop neer: een kleinere vijver
              om uit te vissen, en tegelijk een groep ervaren medewerkers die je
              je niet kunt veroorloven te verliezen. Precies daarom verschuift
              de aandacht van binnenhalen naar binnenhouden. In recent
              onderzoek onder HR-professionals staat duurzame inzetbaarheid
              voor het eerst bovenaan de lijst met prioriteiten voor 2026. Nog
              vóór werving.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              Waarom mensen weggaan, en waarom dat hoopvol is
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Wie wil behouden, moet weten waarom mensen vertrekken. En daar
              zit goed nieuws in. De belangrijkste reden dat medewerkers hun
              werk verlaten is niet het salaris, maar het gebrek aan
              perspectief. Geen zicht op ontwikkeling, geen volgende stap, het
              gevoel vast te zitten. Ongeveer een derde noemt dit als
              hoofdreden.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Dat is hoopvoller dan het klinkt. Een hoger salaris bij de
              buurman is moeilijk te beïnvloeden. Maar of iemand richting en
              perspectief ervaart in zijn werk, daar heb je als werkgever wél
              invloed op. En vaak zit dat verschil niet in een groot programma,
              maar in aandacht op het juiste moment.
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
              is dat de vraag verschuift. Het blijkt lang niet altijd het vak
              te zijn waar de onvrede zit. Soms is het de manier van werken, de
              verhouding tot collega&apos;s, of een vastgeroest beeld van
              zichzelf. Door daar rustig naar te kijken, ontdekt iemand vaak
              dat er binnen het werk meer ruimte en richting te vinden is dan
              gedacht. Niet zelden blijft een docent die op het punt stond te
              vertrekken, en gaat hij of zij met meer plezier en eigenaarschap
              verder. Dat is precies waar het ons om gaat. Niet vasthouden om
              het vasthouden, maar mensen helpen opnieuw te zien wat hun werk
              hun kan brengen.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              Behoud begint met een gesprek, niet met een exit
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Hier wringt het in veel organisaties. Er wordt pas écht over
              iemands loopbaan gepraat als het te laat is. Tijdens het
              exitgesprek, als de keuze al gemaakt is. Onderzoek van Gallup
              laat zien dat ruim veertig procent van het vrijwillige vertrek in
              principe te voorkomen was. Vaak simpelweg omdat er in de maanden
              ervoor geen gesprek werd gevoerd over hoe het echt ging en waar
              iemand naartoe wilde.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Het alternatief is eenvoudig, maar het vraagt om timing. Het
              gesprek vóór het probleem. Niet wachten tot iemand uitvalt,
              twijfelt of al met één been buiten staat, maar op tijd ruimte
              maken om stil te staan bij energie, motivatie en richting. Dat
              is geen luxe. Het is een van de meest directe manieren om mensen
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
              privacyafspraken, want wat in die gesprekken wordt besproken
              blijft vertrouwelijk.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Vaak is zo&apos;n eerste ronde het begin van iets bestendigers.
              Blijkt de behoefte groter, dan kunnen losse trajecten volgen voor
              wie daar baat bij heeft. En wordt loopbaanbegeleiding een vast
              onderdeel van je beleid, dan kun je dat onderbrengen in een
              jaarafspraak. Een vaste coachingpool waarbinnen je medewerkers
              terechtkunnen, met heldere afspraken over intake, matching,
              begeleiding en evaluatie. Zo groeit de samenwerking mee met wat
              je nodig hebt, zonder dat je je vooraf vastlegt.
            </p>

            <h2 className="mt-12 font-display text-2xl text-petrol">
              Tot slot
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              De arbeidsmarkt van 2026 vraagt iets anders dan die van de
              afgelopen jaren. Niet harder werven, maar zorgvuldiger behouden.
              De organisaties die hun mensen op tijd ondersteunen, bij
              twijfel, groei of een nieuwe richting, staan het sterkst.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
              Bij Vizier op Scherp helpen we werkgevers in Amsterdam, Haarlem
              en omgeving daarbij. Onze coaches zijn gecertificeerd en
              aangesloten bij een erkende beroepsvereniging of
              kwaliteitsregister, zoals Noloc, NOBCO of een vergelijkbaar
              register, en begeleiden je medewerkers persoonlijk. Wil je
              verkennen wat bij jouw organisatie past? Begin met een
              vrijblijvend gesprek of een eerste ronde loopbaangesprekken. Dan
              merk je zelf wat het oplevert.
            </p>
          </div>

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

/* ------------------------------------------------------------------ */
/*  Medewerker-artikel — lichte hero, goud kader, petrol-kernzin       */
/* ------------------------------------------------------------------ */

function RichtingVindenArticle({ article }: { article: Article }) {
  const para =
    "mt-4 text-petrol/80 leading-relaxed text-[1.05rem]";
  const h2 = "mt-12 font-display text-2xl md:text-[1.7rem] text-petrol";
  const h3 = "mt-8 font-display text-xl text-petrol";

  return (
    <>
      {/* Lichte hero */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-20">
          <Link
            to="/inzichten"
            className="inline-flex items-center text-sm text-petrol/70 hover:text-koraal transition"
          >
            ← Inzichten
          </Link>
          <div className="mt-6">
            <span className="inline-flex items-center rounded-full bg-goud px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.04em] text-[color:var(--color-on-goud-title)]">
              Voor medewerkers
            </span>
          </div>
          <h1 className="mt-5 font-display text-3xl md:text-4xl lg:text-[2.6rem] text-petrol leading-[1.2] max-w-[26ch]">
            {article.title}
          </h1>
          <p className="mt-6 text-petrol/75 leading-relaxed text-[1.1rem] max-w-[58ch]">
            Je doet je werk prima, maar het voelt niet meer als de goede plek.
            Of je zit al een tijd te twijfelen zonder dat je precies weet
            waarover. Dat is een vervelend gevoel, juist omdat er vaak niets
            concreets mis is.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-petrol/65">
            <span>Loopbaan &amp; richting</span>
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-koraal"
            />
            <span>{article.readMinutes} min leestijd</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-linnen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-petrol/85 leading-relaxed text-[1.1rem]">
            Je bent niet ongelukkig, maar ook niet op je plek. In dit artikel
            lees je waarom je je richting kunt kwijtraken en hoe je die stap
            voor stap weer terugvindt.
          </p>

          <h2 className={h2}>Waarom je je richting kwijt kunt raken</h2>
          <p className={para}>
            Richting kwijtraken in je werk is normaler dan je denkt. Werk
            verandert, jij verandert, en wat een paar jaar geleden goed paste,
            sluit nu misschien niet meer aan. Soms is je functie langzaam
            veranderd zonder dat je het doorhad. Soms ben jij gegroeid en is
            je werk gelijk gebleven. En soms is er geen duidelijke reden, maar
            merk je gewoon dat de energie weg is.
          </p>
          <p className={para}>
            Belangrijk om te weten: twijfelen betekent niet dat je een
            verkeerde keuze hebt gemaakt. Het betekent meestal dat je toe bent
            aan een nieuwe afweging. Hoe eerder je daar rustig naar kijkt, hoe
            meer keuze je houdt.
          </p>

          {/* Goud kader */}
          <section
            aria-labelledby="signalen-kop"
            className="mt-12 rounded-2xl border border-goud bg-goud/15 p-7 md:p-9"
          >
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-koraal">
              Herken je dit?
            </span>
            <h2
              id="signalen-kop"
              className="mt-2 font-display text-2xl md:text-[1.6rem] text-petrol"
            >
              Signalen dat je toe bent aan een nieuwe richting
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed">
              Je hoeft niet te wachten tot je echt vastloopt. Vaak geeft je
              werk eerder al signalen af. Herken je een paar van deze?
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Je kijkt op tegen de werkweek zonder dat je kunt benoemen waarom.",
                "Je doet je werk op de automatische piloot en mist de voldoening van vroeger.",
                "Je denkt vaak \u201Cis dit het nou\u201D, maar je weet niet wat je dan wél wilt.",
                "Je ziet collega's of vrienden stappen zetten en voelt onrust, geen blijdschap.",
                "Je schuift nadenken over je loopbaan steeds voor je uit, omdat het te groot voelt.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-petrol/80 leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-2 w-2 shrink-0 rotate-45 bg-koraal"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-petrol/80 leading-relaxed">
              Een paar van deze herkennen is geen reden tot paniek. Het is een
              goed moment om er bewust bij stil te staan, voordat de onrust
              groter wordt.
            </p>
          </section>

          <h2 className={h2}>
            Richting vinden begint bij jou, niet bij vacatures
          </h2>
          <p className={para}>
            De meeste mensen beginnen verkeerd: ze gaan vacatures lezen in de
            hoop dat er iets uitspringt. Maar als je nog niet weet wat je
            zoekt, word je daar vooral onrustiger van. Richting vinden begint
            niet buiten, maar bij jezelf. Drie ingangen helpen daarbij.
          </p>

          <h3 className={h3}>Kijk eerst naar je energie</h3>
          <p className={para}>
            Let een week of twee bewust op je werkdagen. Welke taken geven je
            energie, en welke kosten je energie? Dat is vaak veelzeggender dan
            nadenken over functietitels. Je merkt al snel patronen: misschien
            krijg je energie van contact met mensen en kost het je moeite om
            lang alleen te werken, of juist andersom.
          </p>

          <h3 className={h3}>Onderzoek wat je echt belangrijk vindt</h3>
          <p className={para}>
            Richting heeft te maken met wat je waardevol vindt in werk. Voor
            de een is dat zekerheid en rust, voor de ander vrijheid, betekenis
            of erkenning. Als je werk botst met wat je belangrijk vindt, voelt
            het nooit helemaal goed, ook niet als je het goed kunt. Helder
            krijgen wat voor jou telt, maakt een keuze meteen overzichtelijker.
          </p>

          <h3 className={h3}>Breng je talenten in kaart</h3>
          <p className={para}>
            Waar ben je goed in zonder dat het je veel moeite kost? Dat zijn
            vaak dingen die je zelf gewoon vindt, maar die anderen in je
            waarderen. Je talenten zijn een belangrijke aanwijzing voor werk
            dat bij je past en je energie geeft in plaats van leegtrekt.
          </p>

          <h2 className={h2}>Van inzicht naar concrete stappen</h2>
          <p className={para}>
            Inzicht alleen brengt je nog niet verder. De kunst is om het te
            vertalen naar kleine, concrete stappen. Dat hoeft geen grote sprong
            te zijn. Vaak werkt het beter om eerst te onderzoeken dan om
            meteen te beslissen.
          </p>
          <p className={para}>
            Denk aan een paar haalbare stappen: praat met iemand die het werk
            doet dat je aanspreekt, probeer een nieuwe taak of project in je
            huidige baan, of test een richting klein uit voordat je iets
            groots verandert. Zo bouw je zekerheid op zonder onnodig risico.
          </p>

          {/* Kernzin — petrol vlak */}
          <aside className="mt-14 rounded-2xl bg-petrol px-7 py-9 md:px-10 md:py-11">
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud">
              In het kort
            </span>
            <p className="mt-3 font-display text-xl md:text-2xl text-linnen-licht leading-snug">
              Richting vinden is meestal geen plotselinge keuze, maar een
              opbouw: eerst rust en overzicht, dan zicht op je talenten en
              waarden, dan een richting, en pas daarna concrete stappen in
              werk.
            </p>
          </aside>

          <h2 className={h2}>Je hoeft het niet alleen uit te zoeken</h2>
          <p className={para}>
            In je eentje blijf je makkelijk in dezelfde cirkels denken. Een
            goed gesprek met iemand die de juiste vragen stelt, brengt je vaak
            sneller verder dan weken alleen piekeren. Een loopbaancoach helpt
            je je energie, waarden en talenten scherp te krijgen en die te
            vertalen naar een stap die bij je past, in jouw tempo. Wat je in
            zo&apos;n traject bespreekt, blijft vertrouwelijk.
          </p>
        </div>
      </article>

      {/* CTA-strip koraal */}
      <section
        aria-labelledby="cta-kop"
        className="bg-koraal"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <h2
            id="cta-kop"
            className="font-display text-2xl md:text-3xl text-[color:var(--color-on-koraal-title,#4A1B0C)]"
          >
            Samen je richting scherp krijgen
          </h2>
          <p className="mt-4 text-[color:var(--color-on-koraal-sub,#712B13)] leading-relaxed text-[1.05rem]">
            Steeds meer werkgevers bieden hun medewerkers loopbaancoaching aan.
            Werk je bij zo&apos;n organisatie? Vraag bij je leidinggevende of
            HR of het voor jou mogelijk is. Ben je zelf HR of leidinggevende
            en wil je dit voor je team aanbieden?{" "}
            <Link
              to="/voor-werkgevers"
              className="font-medium underline text-[color:var(--color-on-koraal-title,#4A1B0C)]"
            >
              Lees meer over onze loopbaancoaching voor werkgevers
            </Link>
            .
          </p>
          <p className="mt-4 text-[color:var(--color-on-koraal-sub,#712B13)] leading-relaxed text-[1.05rem]">
            Bij Vizier op Scherp werk je met een klein team van ervaren,
            gecertificeerde coaches in Amsterdam, Haarlem en omgeving. Je leert
            je coach eerst kennen voordat je begint, zodat je weet dat het
            klikt.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/kennismaken"
              className="inline-flex items-center rounded-full bg-petrol px-6 py-3 font-medium text-linnen-licht hover:brightness-110 transition"
            >
              Maak vrijblijvend kennis
            </Link>
            <Link
              to="/coaches"
              className="inline-flex items-center rounded-full border-[1.5px] border-[color:var(--color-on-koraal-sub,#712B13)] px-6 py-3 font-medium text-[color:var(--color-on-koraal-title,#4A1B0C)] hover:border-[color:var(--color-on-koraal-title,#4A1B0C)] transition"
            >
              Bekijk onze coaches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Medewerker-artikel — Energie en motivatie                          */
/* ------------------------------------------------------------------ */

function EnergieMotivatieArticle({ article }: { article: Article }) {
  const para = "mt-4 text-petrol/80 leading-relaxed text-[1.05rem]";
  const h2 = "mt-12 font-display text-2xl md:text-[1.7rem] text-petrol";
  const h3 = "mt-8 font-display text-xl text-petrol";

  return (
    <>
      {/* Lichte hero */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-16 md:pb-20">
          <Link
            to="/inzichten"
            className="inline-flex items-center text-sm text-petrol/70 hover:text-koraal transition"
          >
            ← Inzichten
          </Link>
          <div className="mt-6">
            <span className="inline-flex items-center rounded-full bg-goud px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.04em] text-[color:var(--color-on-goud-title)]">
              Voor medewerkers
            </span>
          </div>
          <h1 className="mt-5 font-display text-3xl md:text-4xl lg:text-[2.6rem] text-petrol leading-[1.2] max-w-[26ch]">
            {article.title}
          </h1>
          <p className="mt-6 text-petrol/75 leading-relaxed text-[1.1rem] max-w-[58ch]">
            Aan het eind van de werkdag ben je leeg, en in het weekend kom je
            maar net bij. Je doet je werk nog wel, maar de fut is eruit. Veel
            mensen denken dan dat ze gewoon moe zijn. Maar moe zijn en je
            energie kwijt zijn, zijn twee verschillende dingen.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-petrol/65">
            <span>Energie &amp; motivatie</span>
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-koraal"
            />
            <span>{article.readMinutes} min leestijd</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-linnen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-petrol/85 leading-relaxed text-[1.1rem]">
            In dit artikel lees je hoe je het verschil herkent, hoe je ontdekt
            waar je energie heen gaat, en wat je eraan kunt doen voordat het
            groter wordt.
          </p>

          <h2 className={h2}>Moe zijn gaat over, energieverlies blijft</h2>
          <p className={para}>
            Moe zijn hoort erbij. Na een drukke week of een groot project ben
            je op, en dat is normaal: na een weekend of een paar avonden rust
            ben je weer de oude. Energie kwijt zijn voelt anders. Je rust uit,
            maar je begint de week alweer met een lege tank. Het zit niet in
            je uren, maar in je werk zelf.
          </p>
          <p className={para}>
            Datzelfde geldt voor motivatie. Als je drive wegzakt, is dat
            zelden luiheid. Het is vaker een signaal dat er iets niet meer
            klopt tussen jou en je werk: je taken, je rol, of de manier waarop
            je dag is ingericht. Dat serieus nemen helpt je meer dan jezelf
            voorhouden dat je je er gewoon doorheen moet zetten.
          </p>

          {/* Goud kader */}
          <section
            aria-labelledby="signalen-kop"
            className="mt-12 rounded-2xl border border-goud bg-goud/15 p-7 md:p-9"
          >
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-koraal">
              Herken je dit?
            </span>
            <h2
              id="signalen-kop"
              className="mt-2 font-display text-2xl md:text-[1.6rem] text-petrol"
            >
              Signalen dat je energie structureel wegzakt
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed">
              Een drukke periode is iets anders dan een patroon dat weken
              aanhoudt. Let op of je een paar van deze langere tijd herkent:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Je begint de week al moe, ook na een vrij weekend.",
                "Taken die je vroeger leuk vond, kosten je nu moeite.",
                "Je doet het minimale en mist de drive om er meer van te maken.",
                "Je stelt vaker dingen uit of bent sneller afgeleid dan voorheen.",
                "Je werkt op de automatische piloot en voelt weinig voldoening.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-petrol/80 leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-2 w-2 shrink-0 rotate-45 bg-koraal"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-petrol/80 leading-relaxed">
              Eén drukke maand is geen reden tot zorg. Een patroon dat blijft
              hangen, is wel het moment om er bewust naar te kijken.
            </p>
          </section>

          <h2 className={h2}>Ontdek waar je energie heen gaat</h2>
          <p className={para}>
            Niet alle vermoeidheid is hetzelfde. Sommige taken vullen je op,
            ook al kosten ze inspanning. Andere trekken je leeg, hoe kort ze
            ook duren. Als je dat onderscheid scherp krijgt, snap je vaak in
            één keer waarom je dag zo voelt.
          </p>

          <h3 className={h3}>Je energiegevers</h3>
          <p className={para}>
            Dit zijn de taken waarbij je de tijd vergeet. Je krijgt er energie
            van, ook al kosten ze moeite. Vaak sluiten ze aan bij waar je goed
            in bent en wat je belangrijk vindt. Het zijn niet per se de
            makkelijke taken, maar wel de taken waar je iets voor terugkrijgt.
          </p>

          <h3 className={h3}>Je energievreters</h3>
          <p className={para}>
            Dit zijn de taken die je uitputten, los van hoeveel tijd ze kosten.
            Soms zijn het dingen die botsen met je natuurlijke manier van
            werken: veel schakelen terwijl je juist diepgang zoekt, of lang
            alleen werken terwijl je energie haalt uit contact. Een halfuur
            van zo&apos;n taak kan zwaarder voelen dan een hele ochtend van iets
            anders.
          </p>

          <h3 className={h3}>Het gaat om de balans</h3>
          <p className={para}>
            Het doel is niet om nul energievreters te hebben, want die horen
            bij elk werk. Het gaat om de verhouding. Staan er genoeg gevers
            tegenover de vreters, dan houd je het goed vol. Staat die balans
            te lang te scheef, dan raakt je motivatie op, ook als je je werk
            nog steeds goed kunt.
          </p>
          <p className={para}>
            Een simpele manier om dit zichtbaar te maken: houd twee weken per
            dagdeel bij of je energie omhoog of omlaag ging, en bij welke
            taak. De patronen springen er meestal snel uit.
          </p>

          {/* Kernzin — petrol vlak */}
          <aside className="mt-14 rounded-2xl bg-petrol px-7 py-9 md:px-10 md:py-11">
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud">
              In het kort
            </span>
            <p className="mt-3 font-display text-xl md:text-2xl text-linnen-licht leading-snug">
              Energieverlies in werk is zelden luiheid. Het is meestal een
              signaal dat de balans tussen wat je werk je kost en wat het je
              teruggeeft, te lang scheef staat.
            </p>
          </aside>

          <h2 className={h2}>
            Kleine bijsturingen die vaak al verschil maken
          </h2>
          <p className={para}>
            Je hoeft je werk niet meteen om te gooien. Vaak helpt het al om
            kleiner bij te sturen:
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Wissel energievreters af met gevers, in plaats van ze op te stapelen.",
              "Bouw bewust korte herstelmomenten in op een werkdag, niet alleen in het weekend.",
              "Bespreek met je leidinggevende of taken anders verdeeld kunnen worden. Er is vaak meer mogelijk dan je denkt.",
              "Begin met één aanpassing die je deze week al kunt doen, en kijk wat het doet.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-petrol/80 leading-relaxed"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-2 w-2 shrink-0 rotate-45 bg-koraal"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={para}>
            Kleine veranderingen werken beter dan een grote die je toch niet
            volhoudt. Het gaat erom dat de balans langzaam de goede kant op
            beweegt.
          </p>

          <h2 className={h2}>Wanneer het meer is dan een dip</h2>
          <p className={para}>
            Soms is een dip tijdelijk en helpt bijsturen al. Maar houden de
            klachten weken of maanden aan, en merk je dat het ook je slaap, je
            stemming of je leven buiten werk raakt, neem dat dan serieus. Dat
            is geen teken van zwakte, maar een goed moment om er met je
            huisarts of een professional naar te kijken. Op tijd aan de bel
            trekken voorkomt dat je verder leegloopt.
          </p>

          <h2 className={h2}>Je hoeft het niet alleen uit te zoeken</h2>
          <p className={para}>
            In je eentje blijf je vaak hangen in &quot;het hoort er nu eenmaal
            bij&quot;. Een gesprek met iemand die de juiste vragen stelt,
            helpt je scherp te krijgen waar je energie heen gaat en wat je
            werk je weer kan geven. Een loopbaancoach kijkt daar samen met je
            naar, in jouw tempo. Wat je bespreekt, blijft vertrouwelijk.
          </p>
        </div>
      </article>

      {/* CTA-strip koraal */}
      <section aria-labelledby="cta-kop-em" className="bg-koraal">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <h2
            id="cta-kop-em"
            className="font-display text-2xl md:text-3xl text-[color:var(--color-on-koraal-title,#4A1B0C)]"
          >
            Samen je energie weer op peil krijgen
          </h2>
          <p className="mt-4 text-[color:var(--color-on-koraal-sub,#712B13)] leading-relaxed text-[1.05rem]">
            Steeds meer werkgevers bieden hun medewerkers proactieve
            loopbaangesprekken of coaching aan, juist om op tijd bij te sturen
            voordat iemand vastloopt. Werk je bij zo&apos;n organisatie? Vraag
            bij je leidinggevende of HR naar de mogelijkheden. Ben je zelf HR
            of leidinggevende en wil je dit voor je team aanbieden?{" "}
            <Link
              to="/voor-werkgevers"
              className="font-medium underline text-[color:var(--color-on-koraal-title,#4A1B0C)]"
            >
              Lees meer over onze loopbaancoaching voor werkgevers
            </Link>
            .
          </p>
          <p className="mt-4 text-[color:var(--color-on-koraal-sub,#712B13)] leading-relaxed text-[1.05rem]">
            Bij Vizier op Scherp werk je met een klein team van ervaren,
            gecertificeerde coaches in Amsterdam, Haarlem en omgeving. Je
            leert je coach eerst kennen voordat je begint, zodat je weet dat
            het klikt.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/kennismaken"
              className="inline-flex items-center rounded-full bg-petrol px-6 py-3 font-medium text-linnen-licht hover:brightness-110 transition"
            >
              Maak vrijblijvend kennis
            </Link>
            <Link
              to="/coaches"
              className="inline-flex items-center rounded-full border-[1.5px] border-[color:var(--color-on-koraal-sub,#712B13)] px-6 py-3 font-medium text-[color:var(--color-on-koraal-title,#4A1B0C)] hover:border-[color:var(--color-on-koraal-title,#4A1B0C)] transition"
            >
              Bekijk onze coaches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
