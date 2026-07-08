import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/coaching-werkgever.jpg.asset.json";
import { Section, Eyebrow, FAQ, CTAStrip, Card } from "../components/ui-blocks";
import { LeidraadDownloadModal } from "@/components/LeidraadDownloadModal";

const TITLE = "Loopbaancoaching voor uw medewerkers | Vizier op Scherp";
const DESC =
  "Loopbaancoaching voor werkgevers in Amsterdam, Haarlem en omgeving. Individuele trajecten, proactieve loopbaangesprekken of een coachingpool als jaarafspraak. Gecertificeerde coaches, één aanspreekpunt, heldere prijsafspraken.";
const OG_TITLE = "Loopbaancoaching voor uw medewerkers, Vizier op Scherp";
const OG_DESC =
  "Van een eerste gespreksronde tot een coachingpool als jaarafspraak. Eén aanspreekpunt, gecertificeerde coaches, heldere afspraken over proces, prijs en privacy.";

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Loopbaancoaching voor werkgevers",
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
  audience: {
    "@type": "BusinessAudience",
    name: "Werkgevers en HR-afdelingen",
  },
};

const faqItems = [
  {
    q: "Wat kost loopbaancoaching voor onze organisatie?",
    a: "Dat hangt af van de vorm: een gespreksronde, een individueel traject of een coachingpool als jaarafspraak. Na het kennismakingsgesprek ontvangt u een helder voorstel met vaste prijzen per vorm. Geen open einde, geen verrassingen achteraf.",
  },
  {
    q: "Hoe snel kan een medewerker starten?",
    a: "Na de intake stellen wij binnen vijf werkdagen een passende coach voor. De medewerker maakt eerst kennis; daarna kan het traject direct starten.",
  },
  {
    q: "Wat krijgen wij teruggekoppeld over het traject?",
    a: "Terugkoppeling gebeurt op procesniveau: aanwezigheid, voortgang in algemene zin en afronding. De inhoud van de gesprekken blijft vertrouwelijk tussen medewerker en coach. Die afspraak maken we vooraf expliciet met alle betrokkenen.",
  },
  {
    q: "Wat als het niet klikt tussen medewerker en coach?",
    a: "Dan stellen wij kosteloos een andere coach voor. De kennismaking vooraf is er juist om dit te ondervangen. Een goede klik is voorwaarde voor resultaat.",
  },
  {
    q: "Waar vinden de gesprekken plaats?",
    a: "Op onze locaties in Haarlem, Amsterdam of online. Wat het beste past bij de medewerker en de situatie.",
  },
  {
    q: "Kunnen we klein beginnen voordat we een jaarafspraak maken?",
    a: "Ja, dat raden we zelfs aan. Veel opdrachtgevers starten met een ronde proactieve loopbaangesprekken of een enkel traject, en groeien daarna door naar een coachingpool als jaarafspraak, in hun eigen tempo.",
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

export const Route = createFileRoute("/voor-werkgevers")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:site_name", content: "Vizier op Scherp" },
      { property: "og:url", content: "https://vizieropscherp.nl/voor-werkgevers" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESC },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESC },
    ],
    links: [
      { rel: "canonical", href: "https://vizieropscherp.nl/voor-werkgevers" },
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
    h: "Een loopbaanvraag die intern blijft liggen",
    p: "Een medewerker wil doorgroeien, twijfelt over zijn richting of vraagt om begeleiding, en u heeft intern niet de tijd of de neutrale positie om dat goed op te pakken.",
  },
  {
    h: "Motivatie die wegzakt bij een goede kracht",
    p: "U ziet het gebeuren: minder energie, minder initiatief. Voordat het verzuim of vertrek wordt, kan een loopbaantraject helpen om weer grip en richting te vinden.",
  },
  {
    h: "Een afdeling in verandering",
    p: "Reorganisatie, nieuwe rollen, ander werk. Medewerkers die richting zoeken zijn gebaat bij een onafhankelijke gesprekspartner buiten de lijn.",
  },
  {
    h: "Young professionals die u wilt behouden",
    p: "Jong talent blijft waar het zich kan ontwikkelen. Loopbaancoaching laat zien dat u investeert, en voorkomt dat de volgende stap buiten de deur wordt gezocht.",
  },
  {
    h: "Gesprekscyclus die vragen oplevert",
    p: "Uit ontwikkel- of functioneringsgesprekken komen loopbaanvragen die om opvolging vragen. Wij pakken ze professioneel op, met terugkoppeling op procesniveau.",
  },
  {
    h: "U wilt het vóór zijn",
    p: "Niet wachten tot iemand vastloopt, maar medewerkers op tijd laten stilstaan bij energie, motivatie en ontwikkeling. Daarvoor is de proactieve gespreksronde.",
  },
];


function Page() {
  const [leidraadOpen, setLeidraadOpen] = useState(false);
  return (
    <>
      {/* HERO — petrol */}
      <section aria-labelledby="hero-titel" className="bg-petrol text-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid gap-10 md:gap-14 md:grid-cols-[1.15fr_0.85fr] items-center">
            <div>
              <span className="inline-block text-xs font-medium border border-goud text-goud rounded-full px-4 py-1.5 tracking-wide mb-6">
                Voor werkgevers &amp; HR · Amsterdam, Haarlem en omgeving
              </span>
              <h1
                id="hero-titel"
                className="font-display text-3xl md:text-5xl leading-tight text-linnen-licht max-w-[20ch]"
              >
                Loopbaancoach<span className="idot" style={{ ["--idot-bg" as never]: "#1F3D3B" }}>i</span>ng die u ontzorgt, en uw mensen{" "}
                <em className="not-italic text-goud">in beweging brengt.</em>
              </h1>
              <p className="mt-5 text-mint max-w-[52ch]">
                U wilt medewerkers goed begeleiden bij loopbaanvragen, zonder er
                zelf een dagtaak aan te hebben. Vizier op Scherp regelt het:
                intake, matching met een gecertificeerde coach, begeleiding
                gericht op concrete stappen, en terugkoppeling op procesniveau.
                Eén aanspreekpunt, heldere prijsafspraken.
              </p>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Link
                  to="/kennismaken"
                  className="inline-block bg-koraal text-[color:var(--color-on-koraal-title)] font-medium rounded-md px-7 py-3.5 hover:brightness-95 transition"
                >
                  Plan een kennismakingsgesprek
                </Link>
                <a
                  href="#coachingpool"
                  className="inline-block border border-mint-dof text-linnen-licht font-medium rounded-md px-7 py-3.5 hover:border-goud transition-colors"
                >
                  Bekijk de coachingpool
                </a>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
                {[
                  { s: "5 werkdagen", l: "van intake tot voorstel coach" },
                  { s: "1.000+", l: "trajecten begeleid door ons netwerk" },
                  { s: "Gecertificeerde coaches", l: "met een brede opleidingsachtergrond en unieke specialisaties" },
                ].map((m) => (
                  <div key={m.s}>
                    <dt className="font-display text-xl text-linnen-licht leading-tight">
                      {m.s}
                    </dt>
                    <dd className="text-sm text-mint-dof">{m.l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-linnen rounded-2xl overflow-hidden border border-mint/25">
              <div className="photo-duotone photo-duotone-anchor">
                <img
                  src={heroImg.url}
                  alt="Loopbaancoach in gesprek met een medewerker"
                  width={560}
                  height={300}
                  loading="eager"
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
              <div className="p-6 md:p-7">
                <span className="inline-block bg-goud text-[color:var(--color-on-goud-title)] text-xs font-medium rounded-full px-3 py-1 mb-3 tracking-wide">
                  Meest gekozen door HR
                </span>
                <h2 className="font-display text-lg text-petrol mb-2">
                  De coachingpool als jaarafspraak
                </h2>
                <p className="text-sm text-petrol/75">
                  Eén overeenkomst voor het hele jaar. Medewerkers stromen in
                  wanneer dat nodig is. U hoeft nooit meer per geval een coach
                  te zoeken of offertes te vergelijken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATIES */}
      <Section>
        <Eyebrow>Wanneer schakelt u ons in?</Eyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[28ch]">
          Zes situaties waarin een loopbaancoach het verschil maakt
        </h2>
        <ul className="mt-10 border-t border-mint-dof">
          {situaties.map((s) => (
            <li
              key={s.h}
              className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-8 py-6 border-b border-mint-dof"
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
          In al deze situaties geldt:{" "}
          <span className="text-koraal">
            één goed gesprek op het juiste moment
          </span>{" "}
          is goedkoper dan verzuim, verloop of een vacature.
        </p>
      </Section>

      {/* AANBOD */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Eyebrow>Het aanbod</Eyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[32ch]">
            Drie vormen: u stapt in waar het past, en groeit in uw eigen tempo
          </h2>
          <p className="mt-4 text-petrol/75 max-w-[64ch]">
            De werkwijze is altijd dezelfde: zorgvuldige intake, matching met
            een passende coach, begeleiding gericht op concrete stappen, en
            evaluatie op procesniveau. Het verschil zit in de vorm en de schaal.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Goud */}
            <article className="rounded-2xl p-7 bg-goud flex flex-col gap-3.5 text-[color:var(--color-on-goud-sub)]">
              <span className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-on-goud-title)]">
                Vorm 1 · De laagdrempelige start
              </span>
              <h3 className="font-display text-xl text-[color:var(--color-on-goud-title)] leading-snug">
                Proactieve loopbaangesprekken
              </h3>
              <p className="text-[0.95rem]">
                Een ronde gesprekken met een groep medewerkers, bijvoorbeeld
                tien, over energie, motivatie en ontwikkelbehoefte. Vaste prijs
                per ronde. U ontvangt een korte rapportage op procesniveau: wat
                speelt er, welke thema's komen terug, waar is opvolging gewenst.
              </p>
              <p className="text-[0.95rem]">
                Medewerkers ervaren dat ontwikkeling bespreekbaar is. U ziet wat
                er leeft, vóórdat iemand vastloopt.
              </p>
              <span className="text-sm font-medium mt-auto pt-2 text-[color:var(--color-on-goud-title)]">
                Ideaal als eerste kennismaking met onze werkwijze
              </span>
            </article>

            {/* Petrol */}
            <article className="rounded-2xl p-7 bg-petrol flex flex-col gap-3.5 text-mint">
              <span className="text-xs font-medium uppercase tracking-wider text-goud">
                Vorm 2 · Per medewerker
              </span>
              <h3 className="font-display text-xl text-linnen-licht leading-snug">
                Individuele coachtrajecten
              </h3>
              <p className="text-[0.95rem]">
                Loopbaancoaching voor een medewerker die u doorverwijst, bij
                twijfel over de volgende stap, motivatievragen of de wens om
                duurzaam inzetbaar te blijven. Eén traject, één heldere
                prijsafspraak vooraf.
              </p>
              <p className="text-[0.95rem]">
                De medewerker maakt eerst kennis met de coach en kiest mee. Dat
                vergroot het draagvlak en daarmee het resultaat.
              </p>
              <span className="text-sm font-medium mt-auto pt-2 text-goud">
                Voor concrete, actuele loopbaanvragen
              </span>
            </article>

            {/* Koraal — leadproduct */}
            <article className="rounded-2xl p-7 bg-koraal flex flex-col gap-3.5 text-[color:var(--color-on-koraal-sub)]">
              <span className="self-start bg-goud text-[color:var(--color-on-goud-title)] text-xs font-medium rounded-full px-3 py-1">
                Leadproduct
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-on-koraal-title)]">
                Vorm 3 · Structureel geregeld
              </span>
              <h3 className="font-display text-xl text-[color:var(--color-on-koraal-title)] leading-snug">
                Coachingpool als jaarafspraak
              </h3>
              <p className="text-[0.95rem]">
                Eén geformaliseerde jaarlijkse overeenkomst. Medewerkers stromen
                het hele jaar door in; wij verzorgen intake, matching,
                begeleiding en evaluatie. Voorspelbaar in kosten, georganiseerd
                in proces.
              </p>
              <p className="text-[0.95rem]">
                U hoeft nooit meer per geval een coach te zoeken, offertes te
                vergelijken of kwaliteit te beoordelen.
              </p>
              <span className="text-sm font-medium mt-auto pt-2 text-[color:var(--color-on-koraal-title)]">
                Voor organisaties die het goed willen regelen
              </span>
            </article>
          </div>

          {/* Coachingpool uitgelicht */}
          <div
            id="coachingpool"
            className="mt-14 bg-petrol text-linnen-licht rounded-2xl p-8 md:p-12 grid gap-10 md:grid-cols-[1.25fr_0.75fr]"
          >
            <div>
              <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud mb-3">
                De coachingpool uitgelicht
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-linnen-licht max-w-[26ch] mb-4">
                Hoe een jaar met Vizier op Scherp eruitziet
              </h3>
              <ul className="my-6 space-y-0">
                {[
                  ["Jaarafspraak", "we leggen samen het kader vast: verwachte omvang, prijsafspraken, privacykaders en wie bij u het aanspreekpunt is."],
                  ["Instroom", "een medewerker aanmelden kost u één bericht. Wij plannen de intake en stellen binnen vijf werkdagen een passende coach voor."],
                  ["Begeleiding", "de coach voert het traject uit; u ontvangt terugkoppeling op procesniveau. Bijzonderheden signaleren we tijdig."],
                  ["Jaarevaluatie", "we kijken samen terug: aantallen, tevredenheid, thema's die terugkomen, en wat dit betekent voor het komende jaar."],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="py-2.5 border-b border-mint/20 text-mint text-[0.96rem] flex gap-3"
                  >
                    <span aria-hidden="true" className="shrink-0 mt-2 h-2 w-2 rotate-45 bg-koraal" />
                    <span>
                      <strong className="font-medium text-linnen-licht">{k}</strong>: {v}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kennismaken"
                className="inline-block bg-koraal text-[color:var(--color-on-koraal-title)] font-medium rounded-md px-7 py-3.5 hover:brightness-95 transition"
              >
                Vraag een voorstel aan
              </Link>
            </div>
            <div className="md:border-l md:border-mint/25 md:pl-10 flex flex-col md:flex-col gap-6 md:justify-center border-t md:border-t-0 border-mint/25 pt-7 md:pt-0">
              {[
                ["1 contact", "voor uw hele organisatie, het hele jaar door"],
                ["1 offerte", "Alles valt binnen de jaarafspraak"],
                ["Vast coachteam", "die uw mensen en organisatie leren kennen en proactief meedenken"],
              ].map(([s, l]) => (
                <div key={s}>
                  <strong className="block font-display text-2xl text-goud font-medium leading-tight">
                    {s}
                  </strong>
                  <span className="text-sm text-mint-dof">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WERKWIJZE */}
      <Section>
        <Eyebrow>Werkwijze per traject</Eyebrow>
        <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[32ch]">
          Vijf stappen, en wat wij bij elke stap regelen
        </h2>
        <p className="mt-4 text-petrol/75 max-w-[64ch]">
          Of het nu om één medewerker gaat of om een coachingpool: u heeft er
          nauwelijks omkijken naar. Wij verzorgen elke stap, van de match tot
          de facturatie, en houden u op procesniveau op de hoogte.
        </p>
        <ol className="mt-8 flex flex-col gap-3.5">
          {[
            ["Kennismaking en vraag", "Wij verhelderen uw vraag, de context en het doel. U geeft de aanleiding, wij pakken de rest op."],
            ["Matching binnen vijf werkdagen", "Wij selecteren een passende coach op vraag, vakgebied en persoon. Geen wachtlijst, geen anonieme database."],
            ["Persoonlijke kennismaking", "De medewerker ontmoet de coach en kiest mee, met heldere privacyafspraken vooraf. Klikt het niet, dan regelen wij een ander."],
            ["Begeleiding", "De coach werkt met de medewerker aan concrete stappen. U krijgt terugkoppeling op procesniveau, de inhoud blijft vertrouwelijk."],
            ["Evaluatie en afronding", "Wij sluiten af met een korte evaluatie en regelen de administratie. Eén aanspreekpunt, één factuur."],
          ].map(([title, desc], i) => (
            <li
              key={title}
              className="flex items-start gap-4 bg-linnen-licht border border-mint-dof rounded-xl px-5 py-4"
            >
              <span className="text-base font-display font-medium text-koraal border-b-2 border-goud pb-0.5 shrink-0 mt-0.5 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <strong className="block font-display font-medium text-petrol text-[1.05rem] mb-1">
                  {title}
                </strong>
                <p className="text-petrol/75 text-[0.95rem] leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* VERTROUWEN */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Eyebrow>Heldere afspraken</Eyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[32ch]">
            Duidelijk over privacy, en over wat we níet doen
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card tone="linnen">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Privacy: inhoud is vertrouwelijk, proces is deelbaar
              </h3>
              <p className="text-petrol/75 mb-3">
                Wat een medewerker met de coach bespreekt, blijft tussen hen.
                Richting u koppelen wij terug op procesniveau: aanwezigheid,
                voortgang in algemene zin en afronding. Die afspraak maken we
                bij de start expliciet, met u én met de medewerker.
              </p>
              <p className="text-petrol/75">
                Het resultaat: de medewerker spreekt vrijuit, en u weet toch
                waar het traject staat. Precies die combinatie maakt coaching
                effectief.
              </p>
            </Card>
            <Card tone="linnen">
              <h3 className="font-display text-lg text-petrol mb-3.5">
                Wat wij bewust niet doen
              </h3>
              <p className="text-petrol/75 mb-3">
                Vizier op Scherp is een bureau voor loopbaancoaching, geen
                verzuim- of re-integratiepartij. Wij doen daarom geen:
              </p>
              <ul className="dia-bullets text-petrol/75 text-[0.95rem]">
                {[
                  "verzuimbegeleiding of casemanagement",
                  "2e spoor re-integratie of Poortwachtertrajecten",
                  "klassiek outplacement of arbodienstverlening",
                ].map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <p className="text-petrol/75 mt-3">
                Komt uw vraag daar wél op neer? Dan verwijzen we u zorgvuldig door.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* KWALITEIT — donker */}
      <section className="bg-petrol text-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Eyebrow onPetrol>Kwaliteit, georganiseerd</Eyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-linnen-licht max-w-[32ch]">
            Een klein netwerk waar u op kunt bouwen
          </h2>
          <p className="mt-4 text-mint max-w-[64ch]">
            Geen landelijke pool met wisselende gezichten, maar een bewust klein
            gehouden netwerk van acht tot twaalf coaches. Wij kennen elke coach
            persoonlijk, en u weet precies wie er bij uw medewerkers aan tafel
            zit.
          </p>
          <div className="mt-12 grid gap-8 grid-cols-2 md:grid-cols-4">
            {[
              ["Gecertificeerde coaches", "met een brede opleidingsachtergrond en unieke specialisaties"],
              ["Intervisie", "structurele kwaliteitsbewaking binnen het netwerk"],
              ["Evaluatie", "na elk traject meten we tevredenheid en resultaat"],
              ["8–12", "coaches, bewust klein, zorgvuldig geselecteerd"],
            ].map(([s, l]) => (
              <div key={s}>
                <strong className="block font-display text-2xl text-goud font-medium leading-tight mb-1.5">
                  {s}
                </strong>
                <span className="text-sm text-mint">{l}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            <figure className="border border-mint/20 rounded-2xl p-8">
              <blockquote className="quote-rail quote-rail-on-petrol font-display text-[1.06rem] text-linnen-licht leading-relaxed mb-4">
                "Wij zetten Vizier op Scherp structureel in voor medewerkers met
                loopbaanvragen. Korte lijnen, professionele coaches en altijd
                een zorgvuldige match. Dat scheelt ons als HR enorm."
                <span className="quote-dot" aria-hidden="true" />
              </blockquote>
              <figcaption className="text-sm text-mint-dof not-italic">
                <cite className="not-italic">
                  Marleen B., HR-manager, zorginstelling
                </cite>
              </figcaption>
            </figure>
            <figure className="border border-mint/20 rounded-2xl p-8">
              <blockquote className="quote-rail quote-rail-on-petrol font-display text-[1.06rem] text-linnen-licht leading-relaxed mb-4">
                "Het traject heeft me geholpen om rustig te kijken naar wat ik
                echt wilde. Geen druk, wel concrete stappen. Ik heb nu een rol
                die beter past bij wat ik kan en wil."
                <span className="quote-dot" aria-hidden="true" />
              </blockquote>
              <figcaption className="text-sm text-mint-dof not-italic">
                <cite className="not-italic">
                  Anouk V., Beleidsadviseur, publieke sector (deelnemer)
                </cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ROUTEWIJZER MEDEWERKER */}
      <Section>
        <Card tone="linnen" className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-xl md:text-2xl text-petrol">
              Ook uw medewerker moet overtuigd zijn
            </h2>
            <p className="mt-2 text-petrol/75 max-w-[60ch]">
              Medewerkers kiezen vaak zelf uit meerdere bureaus. Daarom hebben
              wij een eigen pagina voor hen: warm, persoonlijk en met een
              duidelijke privacybelofte. Stuur die gerust door bij een
              doorverwijzing.
            </p>
          </div>
          <Link
            to="/coaching-voor-mij"
            className="inline-block border border-petrol text-petrol rounded-md px-6 py-3 font-medium hover:border-koraal hover:text-koraal transition-colors shrink-0"
          >
            Bekijk de pagina voor medewerkers
          </Link>
        </Card>
      </Section>

      {/* FAQ */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Eyebrow>Veelgestelde vragen</Eyebrow>
          <h2 className="font-display text-2xl md:text-3xl text-petrol max-w-[32ch] mb-8">
            Wat HR ons het vaakst vraagt
          </h2>
          <div className="max-w-3xl">
            <FAQ items={faqItems.map((f) => ({ q: f.q, a: f.a }))} />
          </div>
        </div>
      </section>

      {/* LEADMAGNET */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7 bg-linnen-licht border border-goud rounded-2xl px-8 py-7 md:px-10">
          <div className="max-w-2xl">
            <Eyebrow>Gratis voor HR</Eyebrow>
            <h2 className="font-display text-xl md:text-2xl text-petrol mb-2 leading-snug">
              Nog niet klaar om een coach in te schakelen?
            </h2>
            <p className="text-petrol/75 text-[0.97rem] leading-relaxed">
              Download de loopbaangesprek-leidraad: een praktische gids om zelf
              het goede gesprek te voeren met uw medewerkers, met voorbeeldvragen
              en do's en don'ts.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLeidraadOpen(true)}
            className="inline-block bg-petrol text-linnen-licht font-medium rounded-md px-7 py-3.5 hover:bg-[#16302E] transition-colors shrink-0"
          >
            Download de leidraad
          </button>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTAStrip
          title="Benieuwd wat dit voor uw organisatie kan betekenen?"
          action={
            <Link
              to="/kennismaken"
              className="inline-block bg-petrol text-linnen-licht font-medium rounded-md px-7 py-3.5 hover:bg-[#16302E] transition-colors"
            >
              Plan een kennismakingsgesprek
            </Link>
          }
        >
          Plan een vrijblijvend kennismakingsgesprek. We luisteren eerst, denken
          dan mee, en komen met een concreet voorstel dat past bij uw situatie
          en budget.
        </CTAStrip>
      </Section>
      <LeidraadDownloadModal
        open={leidraadOpen}
        onOpenChange={setLeidraadOpen}
        pagina="/voor-werkgevers"
      />
    </>
  );
}
