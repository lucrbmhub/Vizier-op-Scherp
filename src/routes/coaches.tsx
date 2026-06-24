import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Label, CTASoft } from "../components/ui-blocks";
import maaikePhoto from "../assets/maaike.jpg.asset.json";
import liannePhoto from "../assets/lianne.jpg.asset.json";
import zelahPhoto from "../assets/zelah.jpg.asset.json";
import floorPhoto from "../assets/floor.jpg.asset.json";
import lucPhoto from "../assets/luc.jpg.asset.json";

const TITLE = "Onze coaches | Gecertificeerde loopbaancoaches | Vizier op Scherp";
const DESC =
  "Maak kennis met de loopbaancoaches van Vizier op Scherp: een klein, vast netwerk van gecertificeerde professionals met meerdere coachingopleidingen en nascholing, in Amsterdam, Haarlem en omgeving. Echte mensen, een eigen verhaal en een zorgvuldige match.";
const OG_TITLE = "Onze coaches, Vizier op Scherp";
const OG_DESC =
  "Een klein, vast netwerk van gecertificeerde loopbaancoaches. Je maakt eerst kennis, en kiest daarna pas.";

type Tag = { label: string; reg?: boolean };
type Coach = {
  photo: string;
  name: string;
  role: string;
  quote: string;
  bio: string;
  tags: Tag[];
  linkedin: string;
};

const coaches: Coach[] = [
  {
    photo: maaikePhoto.url,
    name: "Maaike Pannekoek-Hänschen",
    role: "Loopbaancoach, trainer & organisatieadviseur",
    quote: "Ik geloof dat er voor ieder mens een juiste plek is.",
    bio: "Maaike liep zelf ooit vast in een baan die niet bij haar paste, en weet hoe het is om de vraag te stellen: wat wil ik nou eigenlijk? Ze werkt veel met mensen in onderwijs en zorg, met jonge ouders en met leidinggevenden. Rustig, betrokken en altijd gericht op een concrete volgende stap.",
    tags: [
      { label: "Onderwijs & zorg" },
      { label: "Jonge ouders" },
      { label: "Leidinggevenden" },
    ],
    linkedin:
      "https://www.linkedin.com/in/maaike-pannekoek-h%C3%A4nschen-6093b094/",
  },
  {
    photo: liannePhoto.url,
    name: "Lianne Both",
    role: "Loopbaancoach, trainer & psycholoog",
    quote: "Kom in beweging en ontdek waar je blij van wordt.",
    bio: "Psycholoog en yogadocent. Lianne helpt je om van binnenuit te voelen wat je nodig hebt, zodat je keuzes maakt vanuit wat echt bij je past, en niet vanuit wat je omgeving verwacht. Ze werkt aan het evenwicht tussen denken, doen en voelen.",
    tags: [
      { label: "Psycholoog", reg: true },
      { label: "Persoonlijk leiderschap" },
      { label: "Energie in werk" },
    ],
    linkedin: "https://www.linkedin.com/in/lianneboth/",
  },
  {
    photo: zelahPhoto.url,
    name: "Zelah Dorrestijn",
    role: "Loopbaancoach, therapeut & trainer",
    quote:
      "Neem je volgende stap vanuit gevoel en het kennen van je behoeften.",
    bio: "Psychosociaal therapeut met een achtergrond in sociaal ondernemerschap, de creatieve industrie en het hoger onderwijs. Zelah helpt je je zelfinzicht en zelfvertrouwen te vergroten, zodat je je ontwikkeling vormgeeft op een manier die bij je past. Open, positief en analytisch. Werkt vanuit een eigen praktijk in het centrum van Amsterdam.",
    tags: [
      { label: "RBCZ-geregistreerd", reg: true },
      { label: "ACT & acceptance therapie" },
      { label: "Zingeving" },
      { label: "Amsterdam" },
    ],
    linkedin: "https://www.linkedin.com/in/zelah-dorrestijn/",
  },
  {
    photo: floorPhoto.url,
    name: "Floor van den Berg",
    role: "Loopbaancoach & trainer",
    quote: "Inzicht is pas waardevol als het leidt tot beweging.",
    bio: "Floor kijkt altijd breed: naar de samenhang tussen werk, leven en je loopbaanvraag. Ze viel acht jaar geleden zelf uit op haar werk omdat het niet meer klopte, en maakte daar een ander pad van. Ze brengt structuur aan in je verhaal, maakt patronen zichtbaar en vertaalt ze naar concrete stappen. Achtergrond in Positieve Gezondheid, NLP en het sociaal domein.",
    tags: [
      { label: "NOBCO", reg: true },
      { label: "Positieve Gezondheid" },
      { label: "NLP" },
      { label: "Onderwijs & sociaal domein" },
    ],
    linkedin: "https://www.linkedin.com/in/floor-van-den-berg",
  },
  {
    photo: lucPhoto.url,
    name: "Luc Buurman",
    role: "Loopbaancoach, trainer & intervisiebegeleider",
    quote:
      "Krijg scherp waar je talenten liggen en wat je belangrijk vindt. Dan kun je gerichte keuzes maken.",
    bio: "Luc kent vanuit zijn achtergrond als recruitment consultant de werkgeverskant van binnenuit. Hij begeleidt vooral eind-twintigers, dertigers en jonge professionals die richting zoeken en scherper willen weten waar ze voor staan. Open, nuchter, zo luchtig als mogelijk en zo serieus als nodig.",
    tags: [
      { label: "Noloc RL", reg: true },
      { label: "Richting & keuzes" },
      { label: "HR en recruitmentachtergrond" },
      { label: "Traineeships" },
    ],
    linkedin: "https://www.linkedin.com/in/lbuurman/",
  },
];

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Coaches van Vizier op Scherp",
  itemListElement: coaches.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: c.name,
      jobTitle: c.role,
      sameAs: c.linkedin,
      worksFor: {
        "@type": "ProfessionalService",
        name: "Vizier op Scherp",
      },
    },
  })),
};

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:site_name", content: "Vizier op Scherp" },
      { property: "og:url", content: "https://vizieropscherp.nl/coaches" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESC },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESC },
    ],
    links: [{ rel: "canonical", href: "https://vizieropscherp.nl/coaches" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(itemListLd) },
    ],
  }),
  component: Page,
});

function CoachCard({ c }: { c: Coach }) {
  return (
    <article className="bg-linnen-licht border border-mint-dof rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6">
      <img
        src={c.photo}
        alt={c.name}
        loading="lazy"
        className="shrink-0 w-20 h-20 rounded-full object-cover"
      />

      <div className="flex-1">
        <h3 className="font-display text-xl text-petrol">{c.name}</h3>
        <span className="block text-sm text-koraal font-medium mt-1 mb-3">
          {c.role}
        </span>
        <blockquote className="font-display text-petrol italic border-l-2 border-goud pl-4 mb-3">
          "{c.quote}"
        </blockquote>
        <p className="text-petrol/75 text-[0.96rem] mb-4">{c.bio}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {c.tags.map((t) => (
            <span
              key={t.label}
              className={
                t.reg
                  ? "text-xs font-medium text-petrol bg-mint-dof border border-mint-dof rounded-full px-3 py-1"
                  : "text-xs text-petrol/70 border border-mint-dof rounded-full px-3 py-1"
              }
            >
              {t.label}
            </span>
          ))}
        </div>
        <a
          href={c.linkedin}
          rel="noopener"
          target="_blank"
          className="inline-block text-sm font-medium text-koraal hover:underline"
        >
          LinkedIn →
        </a>
      </div>
    </article>
  );
}

function Page() {
  return (
    <>
      {/* HERO */}
      <section
        aria-labelledby="hero-titel"
        className="bg-linnen-licht border-b border-mint-dof"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <span className="inline-block text-xs font-medium border border-koraal text-koraal rounded-full px-4 py-1.5 tracking-wide mb-6">
            Het team
          </span>
          <h1
            id="hero-titel"
            className="font-display text-3xl md:text-5xl leading-tight text-petrol max-w-[22ch]"
          >
            Echte mensen, geen anonieme database.
          </h1>
          <p className="mt-5 text-petrol/75 max-w-[60ch] text-lg">
            Vizier op Scherp werkt met een klein, vast netwerk van zelfstandige
            coaches. Bewust maximaal acht tot twaalf. Stuk voor stuk
            gecertificeerd, met meerdere coachingopleidingen en nascholing, en
            met een eigen achtergrond, een eigen verhaal en een eigen manier
            van werken. Je maakt altijd eerst kennis, voordat er iets vastligt.
          </p>
        </div>
      </section>

      {/* COACHES */}
      <Section>
        <Label>Onze coaches</Label>
        <h2 className="font-display text-2xl md:text-3xl text-petrol">
          Met wie je kunt kennismaken
        </h2>
        <p className="mt-4 text-petrol/75 max-w-[64ch]">
          Elke coach heeft eigen accenten en een eigen verhaal. Bij de matching
          kijken we naar jouw vraag, jouw situatie, en naar wie daar als mens
          bij past.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {coaches.map((c) => (
            <CoachCard key={c.name} c={c} />
          ))}
        </div>
      </Section>

      {/* KWALITEIT — donker */}
      <section
        aria-labelledby="netwerk-titel"
        className="bg-petrol text-linnen-licht"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud mb-3">
            Eén netwerk, één manier van werken
          </span>
          <h2
            id="netwerk-titel"
            className="font-display text-2xl md:text-3xl text-linnen-licht max-w-[32ch]"
          >
            Verschillende mensen, dezelfde zorg en kwaliteit
          </h2>
          <p className="mt-4 text-mint max-w-[64ch]">
            Iedere coach heeft een eigen stijl, maar de werkwijze blijft
            herkenbaar. Wie je coach ook is. Binnen het netwerk houden we de
            kwaliteit samen hoog.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              [
                "Gecertificeerde coaches",
                "met een brede opleidingsachtergrond en unieke specialisaties",
              ],
              [
                "Intervisie",
                "We scherpen elkaar met regelmatige intervisie en blijven zo leren van de praktijk.",
              ],
              [
                "Evaluatie",
                "Elk traject sluiten we af met een evaluatie, zodat we de kwaliteit blijven verbeteren.",
              ],
            ].map(([t, d]) => (
              <div key={t}>
                <strong className="block font-display text-xl text-goud font-medium mb-2">
                  {t}
                </strong>
                <span className="text-sm text-mint leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHING */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Label>Hoe de match werkt</Label>
          <h2 className="font-display text-2xl md:text-3xl text-petrol">
            Eerst kennismaken, dan pas kiezen
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-linnen border border-mint-dof rounded-2xl p-8">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Zo komen we tot een goede match
              </h3>
              <p className="text-petrol/75 mb-3">
                Na de intake stellen wij een coach voor die past bij je vraag,
                je situatie en je persoonlijkheid. Je maakt eerst vrijblijvend
                kennis. Pas daarna beslis je of je met deze coach verder wilt.
              </p>
              <p className="text-petrol/75">
                Een goede klik is geen luxe, maar de basis van een traject dat
                werkt.
              </p>
            </div>
            <div className="bg-linnen border border-mint-dof rounded-2xl p-8">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                En als het niet klikt?
              </h3>
              <p className="text-petrol/75 mb-3">
                Dan stellen we iemand anders voor. Zonder gedoe en zonder dat
                je je hoeft te verantwoorden. Je zit nergens aan vast voordat
                de kennismaking goed voelt.
              </p>
              <p className="text-petrol/75">
                Liever zelf een voorkeur aangeven? Dat kan; vertel het ons
                gewoon bij de aanmelding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section>
        <CTASoft
          title="Benieuwd wie bij jou past?"
          action={
            <Link
              to="/kennismaken"
              className="inline-block bg-koraal text-white font-medium rounded-md px-7 py-3.5 hover:bg-[#D4623B] transition-colors"
            >
              Plan een kennismaking
            </Link>
          }
        >
          Vertel ons kort wat er speelt. Wij stellen een coach voor en plannen
          een vrijblijvende kennismaking.
        </CTASoft>
      </Section>
    </>
  );
}
