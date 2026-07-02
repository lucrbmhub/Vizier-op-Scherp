import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LeidraadDownloadModal } from "@/components/LeidraadDownloadModal";
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
const labelCls =
  "block text-[0.82rem] font-medium uppercase tracking-[0.1em] text-koraal mb-3";
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
      <section aria-labelledby="hero-titel" className="bg-petrol text-linnen-licht">
        <div className={`${wrap} py-16 md:py-20 grid gap-10 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr] items-center`}>
          <div>
            <span className="inline-block text-[0.82rem] font-medium tracking-[0.03em] text-goud border border-goud rounded-full px-4 py-1.5 mb-6">
              Loopbaancoaching · Amsterdam, Haarlem en omgeving
            </span>
            <h1
              id="hero-titel"
              className="font-display text-[2.05rem] md:text-[2.7rem] leading-[1.18] text-linnen-licht max-w-[18ch]"
            >
              Persoonlijk voor de medewerker.{" "}
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
            <ul role="list" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-9 gap-y-6">
              {[
                ["1.000+", "trajecten begeleid door ons netwerk"],
                ["Gecertificeerde coaches", "met een brede opleidingsachtergrond en unieke specialisaties"],
                ["5 werkdagen", "van intake tot match"],
              ].map(([k, v]) => (
                <li key={k}>
                  <strong className="block font-display font-medium text-[1.45rem] text-linnen-licht leading-tight">
                    {k}
                  </strong>
                  <span className="text-[0.86rem] text-mint-dof">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl overflow-hidden bg-linnen border border-mint/25">
            <img
              src={heroImg.url}
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

      {/* TWEE RICHTINGEN */}
      <section aria-labelledby="twee-richtingen-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <span className={labelCls}>Twee richtingen</span>
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
            {[
              {
                title: "Sterker in je huidige rol",
                text: "Weer energie en plezier, heldere prioriteiten, effectiever samenwerken. Voor wie op zijn plek zit en daar beter wil functioneren en zichzelf wil blijven ontwikkelen.",
              },
              {
                title: "Een nieuwe richting",
                text: "Twijfel ordenen, ontdekken wat past, een volgende stap zetten. Intern waar het kan, extern waar dat beter is, op het tempo van de medewerker.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="h-full bg-linnen-licht border border-mint-dof border-t-2 border-t-koraal rounded-2xl p-7 md:p-8"
              >
                <h3 className="font-display text-xl text-petrol mb-3">{c.title}</h3>
                <p className="text-petrol/75 leading-relaxed">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HERKENBAAR */}
      <section aria-labelledby="herkenbaar-titel" className={`${sectionCls} bg-linnen`}>
        <div className={wrap}>
          <span className={labelCls}>Herkenbaar?</span>
          <h2 id="herkenbaar-titel" className={h2Cls}>
            Loopbaanvragen blijven vaak liggen. Tot het te laat is
          </h2>

          <div className="mt-11 border-t border-mint-dof">
            {[
              ["De stille twijfelaar", "Een goede medewerker twijfelt al maanden over een volgende stap. Niemand weet het, tot de ontslagbrief er ligt."],
              ["De vastgelopen professional", "Iemand zit niet meer op de juiste plek, maar weet zelf ook niet waar dan wél. De motivatie zakt, het team merkt het, en HR heeft de capaciteit niet om dit zelf op te pakken."],
              ["De HR-afdeling zonder vaste partner", "U wilt medewerkers loopbaanbegeleiding kunnen aanbieden, maar elke keer opnieuw een coach zoeken, offertes vergelijken en kwaliteit beoordelen kost te veel tijd. En de kwaliteit wisselt."],
            ].map(([t, p]) => (
              <div
                key={t}
                className="grid gap-2 md:gap-8 md:grid-cols-[200px_1fr] py-7 border-b border-mint-dof"
              >
                <h3 className="font-display text-[1.05rem] text-petrol">{t}</h3>
                <p className="text-petrol/70 max-w-[62ch] text-[0.98rem]">{p}</p>
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

      {/* AANBOD — trapleuning */}
      <section aria-labelledby="aanbod-titel" className={`${sectionCls} bg-linnen-licht`}>
        <div className={wrap}>
          <span className={labelCls}>Ons aanbod voor werkgevers</span>
          <h2 id="aanbod-titel" className={h2Cls}>
            Drie vormen van loopbaancoaching, één werkwijze
          </h2>
          <p className={introCls}>
            Waar u ook instapt, de werkwijze is altijd dezelfde: intake, matching met een passende coach,
            begeleiding en evaluatie op procesniveau, met vooraf heldere privacyafspraken.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-end">
            {/* Trede 1 */}
            <article className="rounded-2xl p-7 md:p-8 bg-goud flex flex-col gap-3.5">
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
              <span className="text-[0.86rem] font-medium mt-auto pt-2.5 text-[color:var(--color-on-goud-title)]">
                Voor organisaties die willen beginnen
              </span>
            </article>

            {/* Trede 2 */}
            <article className="rounded-2xl p-7 md:p-8 pb-10 md:pb-14 bg-petrol flex flex-col gap-3.5">
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
              <span className="text-[0.86rem] font-medium mt-auto pt-2.5 text-goud">
                Voor concrete, actuele loopbaanvragen
              </span>
            </article>

            {/* Trede 3 */}
            <article className="rounded-2xl p-7 md:p-8 pb-12 md:pb-[78px] bg-koraal flex flex-col gap-3.5">
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
              <span className="text-[0.86rem] font-medium mt-auto pt-2.5 text-[color:var(--color-on-koraal-title)]">
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
          <div className="rounded-2xl border border-goud bg-linnen-licht p-8 md:p-[52px] grid gap-10 lg:gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
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
          <span className="block text-[0.82rem] font-medium uppercase tracking-[0.1em] text-goud mb-3">
            Waarom Vizier op Scherp
          </span>
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
              <figure key={c} className="rounded-2xl border border-mint/20 p-8">
                <blockquote className="font-display text-[1.05rem] md:text-[1.08rem] text-linnen-licht leading-relaxed mb-4">
                  “{q}”
                </blockquote>
                <figcaption>
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
          <span className={labelCls}>Het team</span>
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
          <span className={labelCls}>Werkgebied</span>
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
          <div className="rounded-2xl border border-goud bg-linnen-licht px-6 py-7 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-[640px]">
              <span className={labelCls}>Gratis voor HR</span>
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
