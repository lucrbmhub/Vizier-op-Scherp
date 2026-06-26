import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Label, Eyebrow, CTAStrip } from "../components/ui-blocks";

const TITLE = "Inzichten over werk en loopbaan | Vizier op Scherp";
const DESC =
  "Korte, praktische inzichten over werk, loopbaan en ontwikkeling, voor medewerkers en particulieren die nadenken over een volgende stap, en voor HR-afdelingen die hun mensen op tijd willen begeleiden.";
const OG_TITLE = "Inzichten over werk en loopbaan, Vizier op Scherp";
const OG_DESC =
  "Korte, praktische stukken over werk, loopbaan en ontwikkeling. Voor wie nadenkt over een volgende stap, en voor HR.";
const CANONICAL = "https://vizieropscherp.nl/inzichten";

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Inzichten",
  description:
    "Korte, praktische inzichten over werk, loopbaan en ontwikkeling.",
  url: CANONICAL,
  isPartOf: {
    "@type": "WebSite",
    name: "Vizier op Scherp",
    url: "https://vizieropscherp.nl/",
  },
  publisher: {
    "@type": "ProfessionalService",
    name: "Vizier op Scherp",
    url: "https://vizieropscherp.nl/",
  },
};

export const Route = createFileRoute("/inzichten/")({
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
      { type: "application/ld+json", children: JSON.stringify(collectionLd) },
    ],
  }),
  component: Page,
});

/**
 * Artikelopzet (voor later)
 * --------------------------------
 * Voorlopig is dit een lokale array zodat de pagina werkt zonder backend.
 * Wanneer er echte artikelen komen, kunnen ze hier landen of vanuit een
 * Lovable Cloud tabel `articles` worden gelezen met velden:
 *   - slug (text, uniek)        → URL onder /inzichten/{slug}
 *   - title (text)
 *   - summary (text)
 *   - audience (enum: "medewerker" | "werkgever")
 *   - read_minutes (int)
 *   - published_at (timestamptz, alleen tonen als gevuld en in verleden)
 *   - featured (bool, max één)
 * Elk artikel krijgt straks zijn eigen detailpagina onder
 * src/routes/inzichten.$slug.tsx.
 *
 * Zolang er nog niets gepubliceerd is, toont de pagina de lege staat.
 */
type Audience = "medewerker" | "werkgever";
type Article = {
  slug: string;
  title: string;
  summary: string;
  audience: Audience;
  readMinutes: number;
  featured?: boolean;
  badgeTone?: "mint";
  badgeLabel?: string;
};

const ARTICLES: Article[] = [
  {
    slug: "van-werven-naar-behouden",
    title:
      "Van werven naar behouden: waarom medewerkers vertrekken om stilstand, niet om salaris",
    summary:
      "Medewerkers verlaten hun werkgever zelden om meer salaris. Gebrek aan ontwikkeling en doorgroei is de voornaamste reden. Wat werkgevers in de regio Amsterdam en Haarlem kunnen doen, onderbouwd met actuele UWV- en CBS-cijfers.",
    audience: "werkgever",
    readMinutes: 6,
    featured: true,
    badgeTone: "mint",
    badgeLabel: "Voor werkgevers & HR",
  },
  {
    slug: "richting-vinden-in-je-loopbaan",
    title:
      "Richting vinden in je loopbaan: waarom je niet bij de vacaturesite moet beginnen",
    summary:
      "Je weet dat je iets anders wilt, maar niet wat. Richting vind je zelden op een vacaturesite, maar door te ontdekken wat je energie geeft en wat je drijft. Praktische handvatten en een oefening om je rode draad terug te vinden.",
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
  {
    slug: "solliciteren-en-arbeidsmarkt",
    title:
      "Solliciteren: waarom meer sollicitaties zelden het antwoord is",
    summary:
      "Hoor je niets terug op je sollicitaties? Vaak ligt het niet aan jou, maar aan het kanaal. Waarom netwerken en zichtbaarheid meer opleveren dan stapels brieven, met arbeidsmarktcijfers van UWV.",
    audience: "medewerker",
    readMinutes: 5,
  },
  {
    slug: "duurzame-inzetbaarheid-werkgever",
    title:
      "Duurzame inzetbaarheid: waarom het vitaliteitsprogramma vaak niet werkt, en wat wel",
    summary:
      "Een vitaliteitsprogramma voor iedereen raakt vaak niet de kern. Met cijfers van TNO en UWV: waarom dat zo is, en wat voor werkgevers in Amsterdam en Haarlem wél werkt.",
    audience: "werkgever",
    readMinutes: 6,
    badgeTone: "mint",
    badgeLabel: "Voor werkgevers & HR",
  },
  {
    slug: "persoonlijke-effectiviteit",
    title:
      "Persoonlijke effectiviteit: waarom je grootste zwakte vaak je sterkste kant is",
    summary:
      "Effectiever worden begint niet bij meer discipline, maar bij weten wat je wilt en waar je goed in bent. Over perfectionisme, keuzes maken en je sterke kanten op het juiste moment inzetten.",
    audience: "medewerker",
    readMinutes: 5,
  },
  {
    slug: "loopbaangesprek-met-medewerker",
    title:
      "Het loopbaangesprek met uw medewerker: waarom het exitgesprek te laat is",
    summary:
      "Het beste loopbaangesprek voert u niet bij het exitgesprek, maar als er nog niets aan de hand is. Waarom een onafhankelijk loopbaangesprek talent behoudt en zichtbaar maakt.",
    audience: "werkgever",
    readMinutes: 6,
    badgeTone: "mint",
    badgeLabel: "Voor werkgevers & HR",
  },
  {
    slug: "goede-loopbaancoach-kiezen",
    title:
      "Een goede loopbaancoach kiezen: waarom de klik belangrijker is dan het cv",
    summary:
      "Niet de methode of het diploma maakt het verschil, maar de klik. Lees waar je echt op let als je een coach kiest.",
    audience: "medewerker",
    readMinutes: 5,
  },
  {
    slug: "impostersyndroom-twijfel-als-kracht",
    title: "Je voelt je een bedrieger? Dat zegt iets goeds over je",
    summary:
      "Het impostersyndroom treft juist mensen die hun werk serieus nemen. Lees waarom twijfel een kracht kan zijn.",
    audience: "medewerker",
    readMinutes: 5,
  },

];


function Page() {
  const featured = ARTICLES.find((a) => a.featured);
  const recent = ARTICLES.filter((a) => a !== featured);
  const hasContent = ARTICLES.length > 0;

  return (
    <>
      {/* HERO donker */}
      <section className="bg-petrol text-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <span className="inline-flex items-center rounded-full border border-mint-dof/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-mint">
            Inzichten
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-linnen-licht max-w-[18ch] leading-[1.1]">
            Korte stukken over werk, loopbaan en ontwikkeling
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-mint leading-relaxed">
            Praktische inzichten voor wie nadenkt over een volgende stap, en
            voor HR-afdelingen die hun mensen op tijd willen begeleiden. Geen
            lange theorie, wel concrete handvatten.
          </p>
        </div>
      </section>

      {hasContent ? (
        <>
          {/* Uitgelicht */}
          {featured && (
            <Section>
              <Label>Uitgelicht</Label>
              <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
                Om mee te beginnen
              </h2>
              <FeaturedCard article={featured} />
            </Section>
          )}

          {/* Recent */}
          <section className="bg-linnen-licht">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
              <Label>Recent</Label>
              <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
                Meer inzichten
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recent.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <Section>
          <div className="rounded-2xl border border-dashed border-petrol/25 px-6 py-14 text-center">
            <h2 className="font-display text-2xl text-petrol">
              Binnenkort vind je hier onze inzichten
            </h2>
            <p className="mt-3 mx-auto max-w-[48ch] text-petrol/75 leading-relaxed">
              We werken aan korte, praktische stukken over werk, loopbaan en
              ontwikkeling. Houd deze pagina in de gaten.
            </p>
          </div>
        </Section>
      )}

      {/* Thema's — donker */}
      <section className="bg-petrol text-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud mb-2">
            Waar we over schrijven
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-linnen-licht max-w-3xl">
            Thema's die terugkomen
          </h2>
          <p className="mt-6 max-w-3xl text-mint leading-relaxed">
            Onze stukken gaan over de vragen die we dagelijks in de praktijk
            tegenkomen, bij medewerkers, particulieren en in gesprekken met HR.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              "Richting vinden in je loopbaan",
              "Energie en motivatie in werk",
              "Duurzaam inzetbaar blijven",
              "Solliciteren en arbeidsmarkt",
              "Persoonlijke effectiviteit",
              "Een coach kiezen",
              "Zelfvertrouwen en twijfel",

              "Medewerkers begeleiden als HR",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-mint-dof/40 px-4 py-2 text-sm text-mint"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Een vraag over een van deze thema's?"
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
      </section>
    </>
  );
}

function badgeClassesFor(article: Article) {
  return article.audience === "werkgever"
    ? "bg-linnen-licht text-petrol border border-goud"
    : "bg-mint text-petrol";
}

function audienceLabel(audience: Audience) {
  return audience === "werkgever" ? "Voor werkgevers" : "Voor medewerkers";
}

function badgeLabelFor(article: Article) {
  return article.badgeLabel ?? audienceLabel(article.audience);
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/inzichten/${article.slug}`}
      aria-label={`Lees: ${article.title}`}
      className="group relative flex flex-col gap-3 rounded-2xl border border-petrol/15 bg-linnen-licht p-7 transition-[transform,border-color] duration-150 hover:border-goud motion-safe:hover:-translate-y-1"
    >
      <span
        className={`self-start rounded-full px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.04em] ${badgeClassesFor(article)}`}
      >
        {badgeLabelFor(article)}
      </span>
      <h3 className="font-display text-xl text-petrol leading-tight">
        {article.title}
      </h3>
      <p className="text-petrol/75 leading-relaxed text-[0.96rem]">
        {article.summary}
      </p>
      <span className="text-xs text-petrol/60">
        {article.readMinutes} min lezen
      </span>
      <span className="mt-auto pt-2 text-sm font-medium text-koraal">
        Lees verder →
      </span>
    </Link>
  );
}

function FeaturedCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/inzichten/${article.slug}`}
      aria-label={`Lees het uitgelichte artikel: ${article.title}`}
      className="group mt-10 grid overflow-hidden rounded-2xl border border-petrol/15 md:grid-cols-[1.2fr_1fr] motion-safe:transition-transform motion-safe:hover:-translate-y-1"
    >
      <div className="bg-linnen-licht p-8 md:p-12">
        <span className="text-xs text-petrol/60 uppercase tracking-[0.08em]">
          {audienceLabel(article.audience)} · {article.readMinutes} min lezen
        </span>
        <h3 className="mt-4 font-display text-2xl md:text-3xl text-petrol leading-tight">
          {article.title}
        </h3>
        <p className="mt-4 text-petrol/75 leading-relaxed max-w-[52ch]">
          {article.summary}
        </p>
      </div>
      <div className="bg-petrol p-8 md:p-12 text-linnen-licht flex flex-col gap-4 justify-center">
        <span className="self-start rounded-full bg-goud px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.04em] text-[color:var(--color-on-goud-title)]">
          Uitgelicht
        </span>
        <p className="text-mint leading-relaxed text-[0.96rem]">
          Het artikel om mee te beginnen als je nadenkt over behoud van talent in jouw organisatie.
        </p>
        <span className="text-sm font-medium text-goud">Lees verder →</span>
      </div>

    </Link>
  );
}

// Voorkomt 'unused' waarschuwing voor de Eyebrow-helper als hij elders nog niet gebruikt wordt.
void Eyebrow;
