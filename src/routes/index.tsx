import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LeidraadDownloadModal } from "@/components/LeidraadDownloadModal";
import { BrandIcon } from "@/components/BrandIcon";
import { Eyebrow, CTAStrip } from "../components/ui-blocks";
import heroImg from "../assets/coaching-gesprek.jpg.asset.json";
import maaikePhoto from "../assets/maaike.jpg.asset.json";
import liannePhoto from "../assets/lianne.jpg.asset.json";
import floorPhoto from "../assets/floor.jpg.asset.json";
import lucPhoto from "../assets/luc.jpg.asset.json";
import nobcoLogo from "../assets/keurmerk-nobco.png.asset.json";
import nolocLogo from "../assets/keurmerk-noloc.png.asset.json";

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vizier op Scherp",
  description:
    "Regionaal netwerk voor loopbaancoaching voor werkgevers en hun medewerkers in Amsterdam, Haarlem en omgeving. Individuele coachtrajecten, proactieve loopbaangesprekken en een coachingpool als jaarafspraak.",
  url: "https://vizieropscherp.nl/",
  email: "hallo@vizieropscherp.nl",
  telephone: "+31202146466",
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
  sameAs: ["https://www.linkedin.com/company/10002759/"],
  logo: "https://vizieropscherp.nl/og-image.png",
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
      { property: "og:url", content: "https://vizieropscherp.nl/" },
      {
        property: "og:title",
        content: "Loopbaancoaching georganiseerd voor HR | Vizier op Scherp",
      },
      {
        property: "og:description",
        content:
          "Persoonlijk voor de medewerker, georganiseerd voor HR. Loopbaancoaching in Amsterdam, Haarlem en omgeving, van losse trajecten tot een coachingpool als jaarafspraak.",
      },
      {
        name: "twitter:title",
        content: "Loopbaancoaching georganiseerd voor HR | Vizier op Scherp",
      },
      {
        name: "twitter:description",
        content:
          "Persoonlijk voor de medewerker, georganiseerd voor HR. Loopbaancoaching in Amsterdam, Haarlem en omgeving.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vizieropscherp.nl/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLdBusiness) },
    ],
  }),
  component: Home,
});

/* -------- atomic styles -------- */

const wrap = "mx-auto max-w-[1140px] px-6";
const sectionCls = "py-20 md:py-[84px]";
const h2Cls =
  "font-display text-3xl md:text-[2rem] leading-[1.25] text-petrol max-w-[26ch]";
const introCls = "mt-4 text-petrol/75 max-w-[64ch] text-base md:text-[1.05rem]";
const btnPrimary =
  "inline-flex items-center rounded-md bg-koraal px-7 py-3.5 text-base font-medium text-[color:var(--color-on-koraal-title)] hover:brightness-95 transition";
const btnOutline =
  "inline-flex items-center rounded-md border border-petrol px-6 py-3 text-[0.97rem] font-medium text-petrol hover:border-koraal hover:text-koraal transition";
const btnSecondaryOnDark =
  "inline-flex items-center rounded-md border border-mint-dof px-7 py-3.5 text-base font-medium text-linnen-licht hover:border-goud transition";

function Home() {
  const [leidraadOpen, setLeidraadOpen] = useState(false);
  return (
    <>
      {/* HERO */}
      <section aria-labelledby="hero-titel" className="relative overflow-hidden bg-petrol text-linnen-licht">
        <span aria-hidden="true" className="watermark" />
        <div className={`relative z-10 ${wrap} py-16 md:py-20 grid gap-10 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr] items-center`}>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#56716B] px-4 py-2 text-[11.5px] font-medium uppercase tracking-[0.16em] text-mint mb-6">
              Loopbaancoaching · Amsterdam, Haarlem en omgeving
            </span>
            <h1
              id="hero-titel"
              className="font-display text-[2.05rem] md:text-[2.7rem] leading-[1.18] text-linnen-licht max-w-[18ch]"
            >
              Persoonl<span className="idot" style={{ ["--idot-bg" as never]: "#1F3D3B" }}>i</span>jk voor de medewerker.{" "}
              <em className="not-italic text-goud">Georganiseerd voor HR.</em>
            </h1>
            <p className="mt-6 text-mint text-[1.08rem] max-w-[50ch] leading-relaxed">
              Vizier op Scherp helpt organisaties hun mensen krachtig, effectief en
              duurzaam inzetbaar te maken: met meer energie en in lijn met talenten. En
              als blijkt dat het echt niet meer past, begeleiden we de stap naar een plek
              buiten de organisatie. Met een&nbsp;klein netwerk van gecertificeerde
              coaches, één aanspreekpunt en heldere afspraken over proces, prijs en
              privacy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link to="/voor-werkgevers" className={btnPrimary}>
                Bekijk het aanbod voor werkgevers
              </Link>
              <Link to="/coaching-voor-mij" className={btnSecondaryOnDark}>
                Ik ben doorverwezen of zoek zelf coaching
              </Link>
            </div>
            <ul
              role="list"
              className="mt-10 flex flex-wrap items-center gap-x-[18px] gap-y-3 text-sm text-mint-dof"
            >
              {[
                ["1.000+", "trajecten begeleid door ons netwerk"],
                ["Gecertificeerde coaches", "met een brede opleidingsachtergrond en unieke specialisaties"],
                ["5 werkdagen", "van intake tot match"],
              ].map(([k, v], i) => (
                <li key={k} className="flex items-center gap-x-[18px]">
                  {i > 0 && (
                    <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-koraal shrink-0" />
                  )}
                  <span>
                    <strong className="font-display font-semibold text-lg text-linnen-licht">
                      {k}
                    </strong>{" "}
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-[2] -mb-20 lg:-mb-[120px]">
            <div className="photo-duotone photo-duotone-anchor">
              <img
                src={heroImg.url}
                alt="Loopbaancoach in gesprek met een medewerker in een rustige werkomgeving"
                width={1280}
                height={832}
                className="w-full h-[340px] md:h-[440px] object-cover"
              />
            </div>
            <div className="float-card">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-goudlabel">
                Ons leadproduct
              </span>
              <h2 className="font-display text-xl text-petrol mt-1.5 mb-2">
                De coachingpool als jaarafspraak
              </h2>
              <p className="text-[13.5px] text-[color:var(--color-body-warm)] leading-relaxed">
                Eén geformaliseerde jaarlijkse overeenkomst waarmee uw medewerkers het hele
                jaar door kunnen instromen. Intake, matching, begeleiding en evaluatie:
                georganiseerd, voorspelbaar en zonder losse offertes per geval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TWEE RICHTINGEN */}
      <section
        aria-labelledby="twee-richtingen-titel"
        className="bg-linnen pb-20 md:pb-[84px] pt-[150px] lg:pt-[200px]"
      >
        <div className={wrap}>
          <Eyebrow>Twee richtingen</Eyebrow>
          <h2 id="twee-richtingen-titel" className={h2Cls}>
            Sterker in je huidige rol, en verder als je wilt
          </h2>
          <p className="mt-5 text-petrol/75 max-w-[64ch] leading-relaxed">
            Loopbaancoaching wordt vaak gelezen als 'de deur uit'. In een groot
            deel van onze trajecten blijkt juist dat een aanpassing in de
            huidige situatie al veel verandert: een ander perspectief, ander
            gedrag, een passender takenpakket of een frissere kijk op het werk.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
            <article className="open-card h-full">
              <h3 className="font-display text-xl text-petrol mb-3">
                Sterker in je huidige rol
              </h3>
              <p className="text-petrol/75 leading-relaxed">
                Weer energie en plezier, heldere prioriteiten, effectiever samenwerken.
                Voor wie op zijn plek zit en daar beter wil functioneren en zichzelf wil
                blijven ontwikkelen.
              </p>
            </article>
            <article className="anchor-card h-full">
              <h3 className="font-display text-xl text-petrol mb-3">
                Een nieuwe richting
              </h3>
              <p className="text-petrol/75 leading-relaxed">
                Twijfel ordenen, ontdekken wat past, een volgende stap zetten. Intern waar
                het kan, extern waar dat beter is, op het tempo van de medewerker.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* HERKENBAAR */}
      <section aria-labelledby="herkenbaar-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <div className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16 items-start">
            <div>
              <Eyebrow>Herkenbaar?</Eyebrow>
              <h2 id="herkenbaar-titel" className={h2Cls}>
                Loopbaanvragen blijven vaak liggen. Tot het te laat is
              </h2>
            </div>
            <div>
              <div className="border-t border-mint-dof">
                {[
                  ["De stille twijfelaar", "Een goede medewerker twijfelt al maanden over een volgende stap. Niemand weet het, tot de ontslagbrief er ligt."],
                  ["De vastgelopen professional", "Iemand zit niet meer op de juiste plek, maar weet zelf ook niet waar dan wél. De motivatie zakt, het team merkt het, en HR heeft de capaciteit niet om dit zelf op te pakken."],
                  ["De HR-afdeling zonder vaste partner", "U wilt medewerkers loopbaanbegeleiding kunnen aanbieden, maar elke keer opnieuw een coach zoeken, offertes vergelijken en kwaliteit beoordelen kost te veel tijd. En de kwaliteit wisselt."],
                ].map(([t, p]) => (
                  <div
                    key={t}
                    className="grid gap-2 md:gap-8 md:grid-cols-[220px_1fr] py-6 border-b border-mint-dof"
                  >
                    <h3 className="font-display text-[1.05rem] text-petrol flex gap-2.5 items-start">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-koraal" />
                      <span>{t}</span>
                    </h3>
                    <p className="text-petrol/70 max-w-[62ch] text-[0.98rem]">{p}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 font-display text-[1.25rem] md:text-[1.4rem] leading-[1.45] text-petrol max-w-[52ch]">
                Eén goed gesprek op het juiste moment maakt het verschil. Vizier op Scherp
                organiseert dat moment,{" "}
                <span className="mark-gold">vóórdat iemand uitvalt of vertrekt.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AANBOD — trapleuning */}
      <section aria-labelledby="aanbod-titel" className={`${sectionCls} bg-linnen-licht`}>
        <div className={wrap}>
          <Eyebrow>Ons aanbod voor werkgevers</Eyebrow>
          <h2 id="aanbod-titel" className={h2Cls}>
            Drie vormen van loopbaancoaching, één werkwijze
          </h2>
          <p className={introCls}>
            Waar u ook instapt, de werkwijze is altijd dezelfde: intake, matching met een passende coach,
            begeleiding en evaluatie op procesniveau, met vooraf heldere privacyafspraken.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Vorm 1 */}
            <article className="anchor-card tone-warm flex flex-col gap-3.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-goudlabel">
                Stap 1 · Laagdrempelig kennismaken
              </span>
              <h3 className="font-display text-[1.3rem] leading-snug text-petrol">
                Proactieve loopbaangesprekken
              </h3>
              <p className="text-[0.95rem] text-[color:var(--color-body-warm)]">
                Een ronde gesprekken met een groep medewerkers over energie, motivatie en
                ontwikkelbehoefte. U ziet wat er speelt vóór iemand vastloopt.
              </p>
              <span className="text-sm font-medium mt-auto pt-2.5 text-goudlabel">
                Voor organisaties die willen beginnen
              </span>
            </article>

            {/* Vorm 2 */}
            <article className="rounded-2xl p-7 md:p-8 bg-petrol flex flex-col gap-3.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-goud">
                Stap 2 · Per medewerker
              </span>
              <h3 className="font-display text-[1.3rem] leading-snug text-linnen-licht">
                Individuele coachtrajecten
              </h3>
              <p className="text-[0.95rem] text-mint">
                Loopbaancoaching voor een medewerker die u doorverwijst. Eén traject, één
                heldere prijsafspraak, één vast aanspreekpunt.
              </p>
              <span className="text-sm font-medium mt-auto pt-2.5 text-goud">
                Voor concrete, actuele loopbaanvragen
              </span>
            </article>

            {/* Vorm 3 — leadproduct */}
            <article className="rounded-2xl p-7 md:p-8 bg-goud flex flex-col gap-3.5 shadow-[0_16px_36px_rgba(31,61,59,0.16)] md:-translate-y-2.5">
              <span className="self-start text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(250,246,239,0.5)] text-[color:var(--color-on-goud-title)]">
                Leadproduct
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-on-goud-title)]">
                Stap 3 · Structureel geregeld
              </span>
              <h3 className="font-display text-[1.3rem] leading-snug text-[color:var(--color-on-goud-title)]">
                Coachingpool als jaarafspraak
              </h3>
              <p className="text-[0.95rem] text-[color:var(--color-on-goud-sub)]">
                Eén jaarlijkse overeenkomst, medewerkers stromen het hele jaar door in.
                Voorspelbaar in kosten, georganiseerd in proces.
              </p>
              <span className="text-sm font-medium mt-auto pt-2.5 text-[color:var(--color-on-goud-title)]">
                Voor organisaties die het goed willen regelen
              </span>
            </article>
          </div>

          <p className="mt-7 flex items-center gap-3 text-[0.92rem] text-petrol/70 max-w-[64ch]">
            <span aria-hidden="true" className="inline-block w-12 h-0.5 bg-goud shrink-0" />
            Veel van onze opdrachtgevers beginnen met een gespreksronde en groeien door naar
            een jaarafspraak, in hun eigen tempo.
          </p>

          <div className="mt-9 text-center">
            <p className={`${introCls} mx-auto mb-5`}>
              De coachingpool is onze meest gekozen vorm voor organisaties die
              loopbaanbegeleiding structureel willen organiseren.
            </p>
            <Link to="/voor-werkgevers" className={btnPrimary}>
              Meer over de coachingpool
            </Link>
          </div>
        </div>
      </section>

      {/* MEDEWERKERS */}
      <section aria-labelledby="medewerkers-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <div className="open-card !rounded-[18px] !p-8 md:!p-[52px] grid gap-10 lg:gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <Eyebrow>Voor medewerkers</Eyebrow>
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
              <ul className="dia-checklist mt-5 mb-7 text-[0.96rem] text-petrol">
                {[
                  "Je maakt eerst kennis met je coach, voordat er iets vastligt",
                  "Klikt het niet? Dan stellen we iemand anders voor",
                  "Geen anonieme database. Echte mensen, met een eigen verhaal",
                  "Begeleiding in jouw tempo, gericht op concrete stappen",
                ].map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              <Link to="/coaching-voor-mij" className={btnOutline}>
                Lees hoe coaching bij ons werkt
              </Link>
            </div>
            <div className="rounded-2xl bg-warm p-7 md:p-8">
              <BrandIcon name="vertrouwelijk" size={44} className="mb-4" />
              <h3 className="font-display text-[1.1rem] text-petrol mb-2.5">
                Wat je bespreekt, blijft vertrouwelijk
              </h3>
              <p className="text-[0.94rem] text-[color:var(--color-body-warm)]">
                Ook als je werkgever het traject betaalt, blijft de inhoud tussen jou en je coach.
                Je werkgever hoort alleen óf het loopt, nooit waarover het gaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEWIJS — stats + testimonials */}
      <section aria-labelledby="bewijs-titel" className={`${sectionCls} bg-petrol text-linnen-licht`}>
        <div className={wrap}>
          <Eyebrow onPetrol>Waarom Vizier op Scherp</Eyebrow>
          <h2 id="bewijs-titel" className="font-display text-3xl md:text-[2rem] leading-[1.25] text-linnen-licht max-w-[26ch]">
            Een klein netwerk met bewezen ervaring
          </h2>
          <p className="mt-4 text-mint max-w-[64ch] text-base md:text-[1.05rem]">
            Geen grote organisatie met wisselende gezichten, maar een bewust klein netwerk. Zo weet u precies wie er bij uw medewerkers aan tafel zit.
          </p>

          <div className="my-12 grid gap-8 grid-cols-2 lg:grid-cols-4">
            {[
              ["1.000+", "trajecten begeleid door ons coachnetwerk, in onder meer onderwijs, zorg, overheid en zakelijke dienstverlening"],
              ["8–12", "coaches. Bewust klein gehouden, zorgvuldig geselecteerd"],
              ["100%", "gecertificeerde coaches, met achtergronden in coaching, psychologie, HR en recruitment"],
              ["2 locaties", "Haarlem en Amsterdam, en coaching op uw eigen locatie of online"],
            ].map(([k, v]) => (
              <div key={v as string}>
                <strong className="block font-display font-medium text-[2.1rem] text-goud leading-[1.15] mb-1.5">
                  {k}
                </strong>
                <span className="text-[0.9rem] text-mint">{v}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-7 md:grid-cols-2">
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
              <figure key={c} className="m-0">
                <blockquote className="quote-rail quote-rail-on-petrol font-display text-[1.05rem] md:text-[1.08rem] text-linnen-licht leading-relaxed mb-4">
                  “{q}”
                  <span className="quote-dot" aria-hidden="true" />
                </blockquote>
                <figcaption className="pl-8">
                  <cite className="not-italic text-[0.9rem] text-mint-dof">{c}</cite>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section aria-labelledby="team-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <Eyebrow>Het team</Eyebrow>
          <h2 id="team-titel" className={h2Cls}>
            Ons coachnetwerk
          </h2>
          <p className={introCls}>
            Vizier op Scherp werkt met een klein, vast netwerk van zelfstandige coaches.
            Elke coach is gecertificeerd en heeft meerdere coachingopleidingen en
            nascholing gedaan, met achtergronden in coaching, psychologie, maatschappelijk
            werk en HR. De ingang is vaak de werkcontext. De begeleiding
            is persoonlijk en gaat de diepte in.
          </p>

          <ul className="mt-12 grid gap-5 grid-cols-2 sm:grid-cols-4">
            {[
              [maaikePhoto.url, "Maaike", "Coaching · onderwijs, zorg, leidinggevenden"],
              [liannePhoto.url, "Lianne", "Coaching · persoonlijk leiderschap, loopbaan"],
              [floorPhoto.url, "Floor", "Loopbaancoaching · Positieve Gezondheid"],
              [lucPhoto.url, "Luc", "Loopbaancoaching · richting, young professionals"],
            ].map(([photo, name, role]) => (
              <li
                key={name}
                className="bg-linnen-licht border border-mint-dof rounded-2xl p-6 text-center"
              >
                <img
                  src={photo}
                  alt={name}
                  loading="lazy"
                  className="mx-auto mb-3.5 w-[62px] h-[62px] rounded-full object-cover"
                />
                <h3 className="font-display text-[1rem] text-petrol mb-1">{name}</h3>
                <span className="text-[0.84rem] text-petrol/70">{role}</span>
              </li>
            ))}
          </ul>


          <div className="mt-9 flex flex-wrap gap-6 items-center">
            <Link to="/coaches" className={btnOutline}>
              Bekijk alle coachprofielen
            </Link>
            <p className="text-[0.94rem] text-petrol/70 max-w-[52ch]">
              Elke coach heeft een eigen profiel met verhaal, aanpak en achtergrond.
              Zodat medewerkers weten met wie ze kennismaken.
            </p>
          </div>
        </div>
      </section>

      {/* REGIO */}
      <section aria-labelledby="regio-titel" className={`${sectionCls} bg-linnen-licht`}>
        <div className={wrap}>
          <Eyebrow>Werkgebied</Eyebrow>
          <h2 id="regio-titel" className={h2Cls}>
            Loopbaancoaching in Amsterdam, Haarlem en omgeving
          </h2>
          <p className={introCls}>
            Wij werken voor organisaties en medewerkers in de hele regio, vanuit onze
            locaties in Haarlem en Amsterdam-Zuid. Coaching vindt plaats op een van onze
            locaties of online. Wat het beste past bij de medewerker.
          </p>
          <p className="mt-6 text-petrol/70 max-w-[68ch]">
            Ons werkgebied omvat onder meer{" "}
            <strong className="text-petrol font-medium">
              Amsterdam, Haarlem, Amstelveen, Hoofddorp, Zaanstad, Almere, Diemen, Hilversum,
              Heemstede, Aalsmeer, Uithoorn en Purmerend
            </strong>
            : en de omliggende gemeenten.
          </p>
        </div>
      </section>


      {/* LEADMAGNET */}
      <section aria-labelledby="leadmagnet-titel" className="pt-10 pb-4 bg-linnen">
        <div className={wrap}>
          <div className="anchor-card tone-warm !px-6 !py-7 md:!px-10 md:!py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-[640px]">
              <Eyebrow>Gratis voor HR</Eyebrow>
              <h2
                id="leadmagnet-titel"
                className="font-display text-[1.35rem] text-petrol leading-snug mt-1.5 mb-2"
              >
                Nog niet klaar om een coach in te schakelen?
              </h2>
              <p className="text-[0.97rem] text-petrol/70 leading-relaxed">
                Download de loopbaangesprek-leidraad: een praktische gids om zelf het goede
                gesprek te voeren met uw medewerkers, met voorbeeldvragen en do's en don'ts.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLeidraadOpen(true)}
              className="inline-flex items-center rounded-md bg-petrol px-7 py-3.5 text-base font-medium text-linnen-licht hover:bg-[#16302E] transition shrink-0"
            >
              Download de leidraad
            </button>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section aria-label="Kennismaken" className="pt-10 pb-24 bg-linnen">
        <div className={wrap}>
          <CTAStrip
            title="Benieuwd wat dit voor uw organisatie kan betekenen?"
            action={
              <Link
                to="/kennismaken"
                className="inline-flex items-center rounded-md bg-petrol px-6 py-3 text-base font-medium text-linnen-licht hover:bg-[#16302E] transition shrink-0"
              >
                Plan een kennismakingsgesprek
              </Link>
            }
          >
            Plan een vrijblijvend kennismakingsgesprek. We luisteren eerst, denken dan
            mee, en komen met een concreet voorstel dat past bij uw situatie en budget.
          </CTAStrip>
        </div>
      </section>

      {/* KEURMERKEN */}
      <section aria-label="Beroepsregisters" className="bg-linnen pb-16 md:pb-20">
        <div className={wrap}>
          <p className="text-center text-[0.95rem] text-petrol/70 max-w-[60ch] mx-auto">
            Coaches in ons netwerk zijn aangesloten bij erkende beroepsregisters, waaronder:
          </p>
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-10 md:gap-16">
            <img
              src={nobcoLogo.url}
              alt="NOBCO, Nederlandse orde van beroepscoaches"
              className="h-[52px] md:h-[62px] w-auto"
            />
            <img
              src={nolocLogo.url}
              alt="NOLOC, Register Loopbaan Professional, Noloc gecertificeerd"
              className="h-[52px] md:h-[62px] w-auto"
            />
          </div>
        </div>
      </section>
      <LeidraadDownloadModal
        open={leidraadOpen}
        onOpenChange={setLeidraadOpen}
        pagina="/"
      />
    </>
  );
}
