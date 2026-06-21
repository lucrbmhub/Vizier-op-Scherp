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
      "De arbeidsmarkt kantelt: van werven naar behouden. Waarom medewerkers echt vertrekken, en het gaat niet om salaris, en hoe een goed gesprek op tijd het verschil maakt.",
    audience: "werkgever",
    readMinutes: 5,
    featured: true,
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
      "Richting vinden in je loopbaan: waarom je niet bij de vacaturesite moet beginnen | Vizier op Scherp";
    const description =
      "Weet je dat je iets anders wilt, maar niet wat? Richting vind je zelden op een vacaturesite, maar door te ontdekken wat je energie geeft en wat je drijft. Praktische handvatten van Vizier op Scherp, loopbaancoaching in de regio Amsterdam en Haarlem.";
    const ogTitle =
      "Richting vinden in je loopbaan: waarom je niet bij de vacaturesite moet beginnen";
    const twitterDescription =
      "Richting vind je zelden op een vacaturesite, maar door te ontdekken wat je energie geeft en wat je drijft. Praktische handvatten voor je loopbaan.";
    const image = "https://vizieropscherp.nl/og-image.png";
    const imageAlt =
      "Vizier op Scherp, loopbaancoaching in Amsterdam, Haarlem en omgeving";

    const blogLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: ogTitle,
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
      dateModified: "2026-06-21",
      image,
    };

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Hoe weet ik welke kant ik op wil met mijn loopbaan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Begin niet bij vacatures, maar bij jezelf. Kijk naar wat je energie geeft, wat je drijft en waar je goed in bent. Vaak zit daar een rode draad in die naar een richting wijst, ook als je nog geen functietitel kunt bedenken. Pas daarna ga je verkennen welk werk daarbij past.",
          },
        },
        {
          "@type": "Question",
          name: "Moet ik mijn hele carrière omgooien om gelukkiger te worden in mijn werk?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Meestal niet. De richting die je zoekt zit vaak in een ander accent, een andere omgeving of een rol die dichter bij je drijfveren ligt. Een grote overstap is soms het antwoord, maar lang niet altijd. Kleine verschuivingen maken vaak al veel verschil.",
          },
        },
        {
          "@type": "Question",
          name: "Ik weet wel wat ik niet meer wil, maar niet wat ik wel wil. Wat nu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dat is een heel normaal startpunt. Weten wat niet meer past, is al waardevolle informatie. De volgende stap is terugkijken naar momenten waarop je de tijd vergat of energie kreeg, en daarin een patroon zoeken. Dat patroon wijst vaak een richting aan die je nog niet onder woorden had.",
          },
        },
        {
          "@type": "Question",
          name: "Kan een loopbaancoach helpen bij het vinden van richting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Je zit vaak te dicht op je eigen verhaal om je rode draad te zien. Een coach stelt de vragen die je jezelf niet stelt en helpt je een vaag verlangen te vertalen naar concrete stappen, in jouw tempo.",
          },
        },
      ],
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
        { name: "twitter:description", content: twitterDescription },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(blogLd) },
        { type: "application/ld+json", children: JSON.stringify(faqLd) },
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

  if (article.slug === "solliciteren-en-arbeidsmarkt") {
    const title =
      "Solliciteren: waarom meer sollicitaties zelden het antwoord is | Vizier op Scherp";
    const description =
      "Hoor je niets terug op je sollicitaties? Vaak ligt het niet aan jou, maar aan het kanaal. Waarom netwerken en zichtbaarheid meer opleveren dan stapels brieven, met arbeidsmarktcijfers van UWV. Loopbaancoaching in de regio Amsterdam en Haarlem.";
    const ogTitle =
      "Solliciteren: waarom meer sollicitaties zelden het antwoord is";
    const twitterDescription =
      "Hoor je niets terug op je sollicitaties? Vaak ligt het aan het kanaal, niet aan jou. Waarom netwerken en zichtbaarheid meer opleveren dan stapels brieven.";
    const image = "https://vizieropscherp.nl/og-image.png";
    const imageAlt =
      "Vizier op Scherp, loopbaancoaching in Amsterdam, Haarlem en omgeving";

    const blogLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: ogTitle,
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
      dateModified: "2026-06-21",
      image,
    };

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is solliciteren via vacatures zinloos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nee, maar het is meestal niet het meest effectieve kanaal. Op een online vacature reageren tientallen tot honderden mensen, en je wordt op papier beoordeeld. Reageren op vacatures mag een deel van je aanpak zijn, maar het werkt het best in combinatie met netwerken, waar veel kansen ontstaan die nooit online komen.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe begin ik met netwerken als ik dat niet gewend ben?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Begin klein en zonder iets te vragen. Benader een paar mensen die werken in de richting die jou interesseert, en vraag of je ze kort mag spreken over hun vak. Je hoeft niet om een baan te vragen. Je leert wat er speelt, je wordt zichtbaar, en gesprekken leiden vaker tot kansen dan een brief.",
          },
        },
        {
          "@type": "Question",
          name: "Waarom hoor ik niets terug op mijn sollicitaties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vaak ligt het niet aan jou, maar aan het kanaal. Bij online vacatures is de concurrentie groot en beslist men op papier. Het helpt om je verhaal scherper te maken, je sterke punten concreter te benoemen, en meer in te zetten op contact en netwerken dan op het aantal sollicitaties.",
          },
        },
        {
          "@type": "Question",
          name: "Kan een loopbaancoach helpen bij solliciteren?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Een coach helpt je scherp krijgen wat je te bieden hebt, je verhaal helder te vertellen en een aanpak te kiezen die past bij jou en de arbeidsmarkt. Juist omdat je je eigen kwaliteiten makkelijk onderschat, is een buitenstaander die de juiste vragen stelt waardevol.",
          },
        },
      ],
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
        { name: "twitter:description", content: twitterDescription },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(blogLd) },
        { type: "application/ld+json", children: JSON.stringify(faqLd) },
      ],
    };
  }


  if (article.slug === "duurzame-inzetbaarheid-werkgever") {
    const title =
      "Duurzame inzetbaarheid: waarom het vitaliteitsprogramma vaak niet werkt, en wat wel | Vizier op Scherp";
    const description =
      "Een vitaliteitsprogramma voor iedereen raakt vaak niet de kern van duurzame inzetbaarheid. Met cijfers van TNO en UWV: waarom dat zo is, en wat voor werkgevers in de regio Amsterdam en Haarlem wél werkt.";
    const ogTitle =
      "Duurzame inzetbaarheid: waarom het vitaliteitsprogramma vaak niet werkt, en wat wel";
    const twitterDescription =
      "Een vitaliteitsprogramma voor iedereen raakt vaak niet de kern. Met cijfers van TNO en UWV: wat werkgevers in de regio Amsterdam en Haarlem wél kunnen doen aan duurzame inzetbaarheid.";
    const image = "https://vizieropscherp.nl/og-image.png";
    const imageAlt =
      "Vizier op Scherp, loopbaancoaching voor werkgevers in Amsterdam, Haarlem en omgeving";

    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: ogTitle,
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
      dateModified: "2026-06-21",
      image,
    };

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wat is duurzame inzetbaarheid precies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Duurzame inzetbaarheid betekent dat medewerkers gezond, gemotiveerd en productief hun werk kunnen blijven doen, nu en in de toekomst. Het gaat zowel om het voorkomen van uitval als om het versterken van mensen die goed functioneren, zodat zij zich kunnen blijven ontwikkelen.",
          },
        },
        {
          "@type": "Question",
          name: "Werkt een vitaliteitsprogramma dan niet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Een vitaliteitsprogramma kan waarde hebben, maar als het voor iedereen hetzelfde is, raakt het vaak niet de kern. Onderzoek van TNO laat zien dat de grootste knelpunten mentale vermoeidheid en gebrek aan eigen regie zijn. Die vragen om maatwerk en om gesprekken per medewerker, niet om een algemene aanpak.",
          },
        },
        {
          "@type": "Question",
          name: "Wat levert een loopbaangesprek een werkgever op?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "U hoort vroeg wat er bij een medewerker speelt, nog voordat het tot verzuim of vertrek leidt. De medewerker voelt zich gezien en krijgt grip op de eigen koers. In een krappe arbeidsmarkt is dat een effectieve en relatief goedkope manier om mensen te behouden.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe begint u hier als organisatie mee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Een laagdrempelige eerste stap is een ronde loopbaangesprekken met een afgebakende groep medewerkers, uitgevoerd door onafhankelijke coaches, met een korte terugkoppeling op hoofdlijnen. Zo ziet u wat het oplevert voordat u een breder traject inricht.",
          },
        },
      ],
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
        { name: "twitter:description", content: twitterDescription },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(ld) },
        { type: "application/ld+json", children: JSON.stringify(faqLd) },
      ],
    };
  }

  if (article.slug === "persoonlijke-effectiviteit") {
    const title =
      "Persoonlijke effectiviteit: waarom je grootste zwakte vaak je sterkste kant is | Vizier op Scherp";
    const description =
      "Effectiever worden begint niet bij meer discipline, maar bij weten wat je wilt en waar je goed in bent. Over perfectionisme, keuzes maken en je sterke kanten op het juiste moment inzetten. Loopbaancoaching in de regio Amsterdam en Haarlem.";
    const ogTitle =
      "Persoonlijke effectiviteit: waarom je grootste zwakte vaak je sterkste kant is";
    const ogDescription =
      "Effectiever worden begint niet bij meer discipline, maar bij weten wat je wilt en waar je goed in bent. Over perfectionisme, keuzes maken en je sterke kanten op het juiste moment inzetten.";
    const twitterDescription =
      "Effectiever worden begint niet bij meer discipline, maar bij weten wat je wilt en waar je goed in bent. Over perfectionisme, keuzes maken en je sterke kanten gericht inzetten.";
    const image = "https://vizieropscherp.nl/og-image.png";
    const imageAlt =
      "Vizier op Scherp, loopbaancoaching in Amsterdam, Haarlem en omgeving";

    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Persoonlijke effectiviteit: waarom je grootste zwakte vaak je sterkste kant is",
      description: ogDescription,
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
      dateModified: "2026-06-21",
      image,
    };

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "nl-NL",
      mainEntity: [
        {
          "@type": "Question",
          name: "Wat is persoonlijke effectiviteit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Persoonlijke effectiviteit gaat erover dat je je tijd, energie en kwaliteiten zo inzet dat je bereikt wat je belangrijk vindt, zonder jezelf uit te putten. Het draait minder om harder werken en meer om bewustere keuzes: weten wat je wilt, waar je goed in bent, en wanneer iets goed genoeg is.",
          },
        },
        {
          "@type": "Question",
          name: "Is perfectionisme een probleem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Niet per se. Perfectionisme is in de kern een sterk gevoel voor kwaliteit. Het wordt pas een probleem als het altijd aanstaat, ook bij taken waar dat niet nodig is, en je daardoor blijft hangen of leegloopt. De kunst is niet om het af te leren, maar om te kiezen wanneer je het inzet.",
          },
        },
        {
          "@type": "Question",
          name: "Hoe word ik besluitvaardiger?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vaak helpt het om eerst helder te krijgen wat je echt wilt en waar je goed in bent. Twijfel komt regelmatig voort uit onduidelijkheid over je eigen drijfveren, niet uit een gebrek aan opties. Wie zijn waarden en kwaliteiten scherp heeft, kiest makkelijker. Een gesprek met een coach kan daarbij helpen.",
          },
        },
        {
          "@type": "Question",
          name: "Kan een coach helpen bij persoonlijke effectiviteit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Je eigen patronen zijn voor jezelf het lastigst te zien, omdat ze normaal voelen. Een coach helpt je herkennen welke sterke kant onder een zwakte zit, en hoe je die gerichter inzet, zodat je met minder moeite meer bereikt.",
          },
        },
      ],
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
        { property: "og:description", content: ogDescription },
        { property: "og:url", content: canonical },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: imageAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: ogTitle },
        { name: "twitter:description", content: twitterDescription },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(ld) },
        { type: "application/ld+json", children: JSON.stringify(faqLd) },
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
  if (article.slug === "solliciteren-en-arbeidsmarkt") {
    return <SolliciterenArticle article={article} />;
  }
  if (article.slug === "duurzame-inzetbaarheid-werkgever") {
    return <DuurzameInzetbaarheidWerkgeverArticle article={article} />;
  }
  if (article.slug === "persoonlijke-effectiviteit") {
    return <PersoonlijkeEffectiviteitArticle article={article} />;
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
  const para = "mt-4 text-petrol/80 leading-relaxed text-[1.05rem]";
  const h2 = "mt-12 font-display text-2xl md:text-[1.7rem] text-petrol";

  const faq = [
    {
      q: "Hoe weet ik welke kant ik op wil met mijn loopbaan?",
      a: "Begin niet bij vacatures, maar bij jezelf. Kijk naar wat je energie geeft, wat je drijft en waar je goed in bent. Vaak zit daar een rode draad in die naar een richting wijst, ook als je nog geen functietitel kunt bedenken. Pas daarna ga je verkennen welk werk daarbij past.",
    },
    {
      q: "Moet ik mijn hele carrière omgooien om gelukkiger te worden in mijn werk?",
      a: "Meestal niet. De richting die je zoekt zit vaak in een ander accent, een andere omgeving of een rol die dichter bij je drijfveren ligt. Een grote overstap is soms het antwoord, maar lang niet altijd. Kleine verschuivingen maken vaak al veel verschil.",
    },
    {
      q: "Ik weet wel wat ik niet meer wil, maar niet wat ik wel wil. Wat nu?",
      a: "Dat is een heel normaal startpunt. Weten wat niet meer past, is al waardevolle informatie. De volgende stap is terugkijken naar momenten waarop je de tijd vergat of energie kreeg, en daarin een patroon zoeken. Dat patroon wijst vaak een richting aan die je nog niet onder woorden had.",
    },
    {
      q: "Kan een loopbaancoach helpen bij het vinden van richting?",
      a: "Ja. Je zit vaak te dicht op je eigen verhaal om je rode draad te zien. Een coach stelt de vragen die je jezelf niet stelt en helpt je een vaag verlangen te vertalen naar concrete stappen, in jouw tempo.",
    },
  ];

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
          <h1 className="mt-5 font-display text-3xl md:text-4xl lg:text-[2.6rem] text-petrol leading-[1.2] max-w-[28ch]">
            {article.title}
          </h1>
          <p className="mt-6 text-petrol/75 leading-relaxed text-[1.1rem] max-w-[62ch]">
            Je weet dat je iets anders wilt, maar niet wat. Dus open je een
            vacaturesite, scrolt door honderden functies, en klapt hem
            gefrustreerd weer dicht, want niets voelt goed. Dat is logisch.
            Richting vind je namelijk zelden door naar vacatures te kijken. Je
            vindt hem door eerst naar binnen te kijken.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-petrol/65">
            <span>Voor medewerkers</span>
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-koraal"
            />
            <span>{article.readMinutes} min lezen</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-linnen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-petrol/85 leading-relaxed text-[1.1rem]">
            In dit stuk lees je waarom de zoektocht naar richting beter binnen
            begint dan bij de vacatures, en hoe je je eigen rode draad
            terugvindt.
          </p>

          <h2 className={h2}>Beginnen bij vacatures is beginnen bij het einde</h2>
          <p className={para}>
            Een vacaturesite laat zien wat er bestaat, niet wat bij jou past.
            Je scrolt langs functies die anderen hebben bedacht en probeert
            jezelf in een van die hokjes te passen. Vaak werkt dat averechts:
            je voelt dat het niet helemaal klopt, maar je weet ook niet wat
            dan wel.
          </p>
          <p className={para}>
            Een vacature is het eindpunt, niet het startpunt. Eerst bepaal je
            de richting, daarna pas de route. Andersom blijf je hangen in een
            keuze tussen opties die er toevallig zijn, in plaats van te kijken
            wat bij jou past.
          </p>

          <h2 className={h2}>
            Richting begint bij wat energie geeft, niet bij wat er te krijgen is
          </h2>
          <p className={para}>
            De vraag is niet wat er te krijgen is op de arbeidsmarkt, maar wat
            wil ik en waar ben ik goed in. Onderzoek naar loopbaanontwikkeling
            laat steeds zien dat reflectie op je drijfveren en kwaliteiten
            vooraf gaat aan het verkennen van werk: eerst naar binnen, dan
            naar buiten.
          </p>
          <p className={para}>
            Drijfveren ontstaan vroeg en gaan een leven lang mee. Twee mensen
            met dezelfde baan kunnen die om hele verschillende redenen fijn
            vinden. Wie zicht heeft op wat hem of haar drijft, herkent
            sneller welk werk past en welk werk vooral energie kost.
          </p>

          {/* Uitgelicht blok — zoek je rode draad */}
          <section
            aria-labelledby="rode-draad"
            className="mt-12 rounded-2xl border-l-[6px] border-koraal bg-goud/15 p-7 md:p-9"
          >
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-koraal">
              Een praktische oefening
            </span>
            <h2
              id="rode-draad"
              className="mt-2 font-display text-2xl md:text-[1.6rem] text-petrol"
            >
              Zoek je rode draad
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed">
              Denk terug aan momenten waarop je de tijd vergat, op je werk en
              daarbuiten. Schrijf er vijf of zes op. Zoek vervolgens wat ze
              gemeen hebben: ging het om iets maken, mensen helpen, iets
              uitzoeken, leiding nemen? Dat patroon zegt meer over een
              passende richting dan welke functietitel dan ook.
            </p>
          </section>

          <h2 className={h2}>Het hoeft geen complete ommezwaai te zijn</h2>
          <p className={para}>
            Richting is niet alles of niets. Vaak zit de stap die je zoekt
            niet in een hele nieuwe carrière, maar in een ander accent, een
            andere omgeving of een rol die dichter bij je drijfveren ligt. De
            vraag is dan: welk deel van wat ik nu doe geeft mij energie, en
            hoe krijg ik daar meer van.
          </p>
          <p className={para}>
            Soms betekent dat een grotere stap, maar lang niet altijd. Vaak
            verandert er meer dan je denkt door één rol, één project of één
            werkplek anders in te richten.
          </p>

          <h2 className={h2}>Waarom dit lastig alleen te doen is</h2>
          <p className={para}>
            Je zit te dicht op je eigen verhaal. Wat voor jou vanzelfsprekend
            is, zie je niet meer als talent, terwijl het juist een aanwijzing
            kan zijn. Een goede gesprekspartner stelt de vragen die je jezelf
            niet stelt en helpt je een vaag verlangen te vertalen naar
            haalbare stappen.
          </p>
          <p className={para}>
            Dat is wat loopbaancoaching doet: niet vertellen wat je moet
            worden, maar ontdekken wat er al in je zit en wat daar bij past.
          </p>

          {/* Kernzin — petrol vlak */}
          <aside className="mt-14 rounded-2xl bg-petrol px-7 py-9 md:px-10 md:py-11">
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud">
              In het kort
            </span>
            <p className="mt-3 font-display text-xl md:text-2xl text-linnen-licht leading-snug">
              Richting vind je niet door te kijken wat er te krijgen is, maar
              door te ontdekken wat je energie geeft. De rest volgt daaruit.
            </p>
          </aside>

          {/* Bronnenregel */}
          <p className="mt-10 border-t border-petrol/15 pt-4 text-xs text-petrol/60 leading-relaxed">
            Met inzichten uit onderzoek naar loopbaancompetenties (Kuijpers)
            en uit de loopbaanpsychologie rond drijfveren en levensverhaal.
          </p>

          {/* FAQ */}
          <section aria-labelledby="faq-kop" className="mt-14">
            <h2 id="faq-kop" className="font-display text-2xl md:text-[1.7rem] text-petrol">
              Veelgestelde vragen
            </h2>
            <div className="mt-6 space-y-7">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-display text-lg text-petrol">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-petrol/80 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* CTA-strip koraal */}
      <section aria-labelledby="cta-kop" className="bg-koraal">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <h2
            id="cta-kop"
            className="font-display text-2xl md:text-3xl text-[color:var(--color-on-koraal-title,#4A1B0C)]"
          >
            Benieuwd welke richting bij jou past?
          </h2>
          <p className="mt-4 text-[color:var(--color-on-koraal-sub,#712B13)] leading-relaxed text-[1.05rem]">
            Bij Vizier op Scherp ontdek je samen met een coach wat je energie
            geeft, wat je drijft en welke stap daarbij past. Geen kant-en-klaar
            antwoord, maar de juiste vragen, in jouw tempo. Wat je bespreekt
            blijft tussen jou en je coach.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/kennismaken"
              className="inline-flex items-center rounded-full bg-petrol px-6 py-3 font-medium text-linnen-licht hover:brightness-110 transition"
            >
              Maak kennis met een coach
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

/* ------------------------------------------------------------------ */
/*  Medewerker-artikel — Solliciteren en arbeidsmarkt                  */
/* ------------------------------------------------------------------ */

function SolliciterenArticle({ article }: { article: Article }) {
  const para = "mt-4 text-petrol/80 leading-relaxed text-[1.05rem]";
  const h2 = "mt-12 font-display text-2xl md:text-[1.7rem] text-petrol";

  const faq = [
    {
      q: "Is solliciteren via vacatures zinloos?",
      a: "Nee, maar het is meestal niet het meest effectieve kanaal. Op een online vacature reageren tientallen tot honderden mensen, en je wordt op papier beoordeeld. Reageren op vacatures mag een deel van je aanpak zijn, maar het werkt het best in combinatie met netwerken, waar veel kansen ontstaan die nooit online komen.",
    },
    {
      q: "Hoe begin ik met netwerken als ik dat niet gewend ben?",
      a: "Begin klein en zonder iets te vragen. Benader een paar mensen die werken in de richting die jou interesseert, en vraag of je ze kort mag spreken over hun vak. Je hoeft niet om een baan te vragen. Je leert wat er speelt, je wordt zichtbaar, en gesprekken leiden vaker tot kansen dan een brief.",
    },
    {
      q: "Waarom hoor ik niets terug op mijn sollicitaties?",
      a: "Vaak ligt het niet aan jou, maar aan het kanaal. Bij online vacatures is de concurrentie groot en beslist men op papier. Het helpt om je verhaal scherper te maken, je sterke punten concreter te benoemen, en meer in te zetten op contact en netwerken dan op het aantal sollicitaties.",
    },
    {
      q: "Kan een loopbaancoach helpen bij solliciteren?",
      a: "Ja. Een coach helpt je scherp krijgen wat je te bieden hebt, je verhaal helder te vertellen en een aanpak te kiezen die past bij jou en de arbeidsmarkt. Juist omdat je je eigen kwaliteiten makkelijk onderschat, is een buitenstaander die de juiste vragen stelt waardevol.",
    },
  ];

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
          <h1 className="mt-5 font-display text-3xl md:text-4xl lg:text-[2.6rem] text-petrol leading-[1.2] max-w-[28ch]">
            {article.title}
          </h1>
          <p className="mt-6 text-petrol/75 leading-relaxed text-[1.1rem] max-w-[62ch]">
            Je hebt je dertigste sollicitatie verstuurd en weer niets gehoord.
            Het ligt waarschijnlijk niet aan jou, en ook niet aan te weinig
            doorzettingsvermogen. Het ligt vaak aan de methode. De meeste
            mensen steken hun energie in precies het kanaal dat het minst
            oplevert: reageren op online vacatures.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-petrol/65">
            <span>Voor medewerkers</span>
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-koraal"
            />
            <span>{article.readMinutes} min lezen</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-linnen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-petrol/85 leading-relaxed text-[1.1rem]">
            In dit stuk lees je waarom stapels sollicitaties vaak tegenvallen,
            en wat op deze arbeidsmarkt wél werkt.
          </p>

          <h2 className={h2}>Het ligt niet aan jou, het ligt aan je aanpak</h2>
          <p className={para}>
            Als sollicitaties niets opleveren, is de reflex om er nog een
            schepje bovenop te doen: nog meer brieven, nog meer reacties op
            vacatures. Begrijpelijk, maar het werkt vaak niet. Het probleem
            zit zelden in hoe hard je werkt, maar in waar je je tijd aan
            besteedt.
          </p>
          <p className={para}>
            Online vacatures trekken tientallen tot honderden reacties per
            stuk. Je wordt op papier beoordeeld, in een korte selectie, naast
            veel andere kandidaten. En juist daar gaat bij de meeste mensen
            de meeste energie naartoe.
          </p>

          <h2 className={h2}>
            Waarom netwerken werkt en stapels sollicitaties niet
          </h2>
          <p className={para}>
            Onderzoek naar loopbaanontwikkeling laat zien dat netwerken sterk
            samenhangt met loopbaansucces. Een belangrijke reden: veel werk
            wordt via contact en aanbevelingen ingevuld, voordat een vacature
            ooit online komt. Als je alleen reageert op wat je ziet, mis je
            een groot deel van wat er feitelijk speelt.
          </p>
          <p className={para}>
            De cijfers helpen je positie te begrijpen. Volgens UWV is de
            arbeidsmarkt op dit moment krap tot zeer krap. Landelijk staan er
            ongeveer drieënhalf keer zoveel vacatures open als er
            kortdurend werkzoekenden zijn, en in Groot-Amsterdam is de markt
            zeer krap. Jouw positie is sterker dan het vaak voelt. Het gaat
            er vooral om dat de juiste mensen weten dat je er bent en wat je
            kunt.
          </p>

          {/* Uitgelicht blok — 25/75 vuistregel */}
          <section
            aria-labelledby="vuistregel"
            className="mt-12 rounded-2xl border-l-[6px] border-koraal bg-goud/15 p-7 md:p-9"
          >
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-koraal">
              Een vuistregel
            </span>
            <h2
              id="vuistregel"
              className="mt-2 font-display text-2xl md:text-[1.6rem] text-petrol"
            >
              Draai de verhouding om: 25% solliciteren, 75% netwerken
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed">
              Besteed ongeveer een kwart van je tijd aan gericht reageren op
              vacatures en driekwart aan netwerken en relaties opbouwen.
              Netwerken is geen banen bedelen, het is gesprekken voeren.
              Vraag een paar mensen die werken waar jij naartoe wilt om tien
              minuten over hun vak. Je leert wat er speelt, je wordt
              zichtbaar, en je hoort over kansen die nooit online komen.
            </p>
          </section>

          <h2 className={h2}>Zorg dat ze weten welke oplossing jij bent</h2>
          <p className={para}>
            Of je nu netwerkt of solliciteert: je moet in een paar zinnen
            kunnen vertellen wie je bent, wat je goed kunt en wat je zoekt.
            Veel mensen onderschatten hun eigen kwaliteiten. Wat voor jou
            vanzelfsprekend is, is voor een ander vaak juist de gezochte
            waarde.
          </p>
          <p className={para}>
            Breng je verhaal terug tot drie zinnen en scherp ze aan voor je
            naar buiten gaat. Een helder, kort verhaal maakt dat anderen je
            kunnen helpen, jou kunnen aanbevelen of aan je kunnen denken
            wanneer er iets voorbijkomt.
          </p>

          <h2 className={h2}>Lang niet gesolliciteerd? Oefen je verhaal opnieuw</h2>
          <p className={para}>
            Wie jaren niet heeft gesolliciteerd, ervaart het al snel als een
            vak dat je opnieuw moet leren. Dat is logisch. Krijg vooral je
            voorbeelden scherp: concrete situaties met wat jij deed en wat
            het opleverde. Een paar sterke verhalen zijn waardevoller dan een
            volledig cv kunnen opdreunen.
          </p>

          {/* Kernzin — petrol vlak */}
          <aside className="mt-14 rounded-2xl bg-petrol px-7 py-9 md:px-10 md:py-11">
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud">
              In het kort
            </span>
            <p className="mt-3 font-display text-xl md:text-2xl text-linnen-licht leading-snug">
              Een baan vinden gaat zelden over harder solliciteren. Het gaat
              erover dat de juiste mensen weten wie je bent en wat je kunt.
            </p>
          </aside>

          {/* Bronnenregel */}
          <p className="mt-10 border-t border-petrol/15 pt-4 text-xs text-petrol/60 leading-relaxed">
            Met inzichten uit onderzoek naar loopbaancompetenties (Kuijpers)
            en uit arbeidsmarktcijfers van UWV.
          </p>

          {/* FAQ */}
          <section aria-labelledby="faq-kop-soll" className="mt-14">
            <h2
              id="faq-kop-soll"
              className="font-display text-2xl md:text-[1.7rem] text-petrol"
            >
              Veelgestelde vragen
            </h2>
            <div className="mt-6 space-y-7">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-display text-lg text-petrol">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-petrol/80 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* CTA-strip koraal */}
      <section aria-labelledby="cta-kop-soll" className="bg-koraal">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <h2
            id="cta-kop-soll"
            className="font-display text-2xl md:text-3xl text-[color:var(--color-on-koraal-title,#4A1B0C)]"
          >
            Klaar voor een effectievere aanpak?
          </h2>
          <p className="mt-4 text-[color:var(--color-on-koraal-sub,#712B13)] leading-relaxed text-[1.05rem]">
            Bij Vizier op Scherp helpt een coach je scherp te krijgen wat je
            te bieden hebt, hoe je dat vertelt en welke aanpak op deze
            arbeidsmarkt werkt. In jouw tempo, en wat je bespreekt blijft
            tussen jou en je coach.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/kennismaken"
              className="inline-flex items-center rounded-full bg-petrol px-6 py-3 font-medium text-linnen-licht hover:brightness-110 transition"
            >
              Maak kennis met een coach
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
/*  Werkgever-artikel — Duurzame inzetbaarheid                          */
/* ------------------------------------------------------------------ */

function DuurzameInzetbaarheidWerkgeverArticle({
  article,
}: {
  article: Article;
}) {
  const faq: { q: string; a: string }[] = [
    {
      q: "Wat is duurzame inzetbaarheid precies?",
      a: "Duurzame inzetbaarheid betekent dat medewerkers gezond, gemotiveerd en productief hun werk kunnen blijven doen, nu en in de toekomst. Het gaat zowel om het voorkomen van uitval als om het versterken van mensen die goed functioneren, zodat zij zich kunnen blijven ontwikkelen.",
    },
    {
      q: "Werkt een vitaliteitsprogramma dan niet?",
      a: "Een vitaliteitsprogramma kan waarde hebben, maar als het voor iedereen hetzelfde is, raakt het vaak niet de kern. Onderzoek van TNO laat zien dat de grootste knelpunten mentale vermoeidheid en gebrek aan eigen regie zijn. Die vragen om maatwerk en om gesprekken per medewerker, niet om een algemene aanpak.",
    },
    {
      q: "Wat levert een loopbaangesprek een werkgever op?",
      a: "U hoort vroeg wat er bij een medewerker speelt, nog voordat het tot verzuim of vertrek leidt. De medewerker voelt zich gezien en krijgt grip op de eigen koers. In een krappe arbeidsmarkt is dat een effectieve en relatief goedkope manier om mensen te behouden.",
    },
    {
      q: "Hoe begint u hier als organisatie mee?",
      a: "Een laagdrempelige eerste stap is een ronde loopbaangesprekken met een afgebakende groep medewerkers, uitgevoerd door onafhankelijke coaches, met een korte terugkoppeling op hoofdlijnen. Zo ziet u wat het oplevert voordat u een breder traject inricht.",
    },
  ];

  return (
    <>
      {/* HERO donker (werkgever-register) */}
      <section className="bg-petrol text-linnen-licht">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            to="/inzichten"
            className="inline-flex items-center text-sm text-mint-dof hover:text-goud transition"
          >
            ← Inzichten
          </Link>
          <span className="mt-6 inline-block rounded-full bg-mint border border-mint-dof px-4 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.06em] text-petrol">
            Voor werkgevers &amp; HR
          </span>
          <h1 className="mt-5 font-display text-3xl md:text-4xl lg:text-[2.6rem] text-linnen-licht max-w-[30ch] leading-[1.15]">
            {article.title}
          </h1>
          <p className="mt-6 text-mint text-[1.1rem] leading-relaxed max-w-[62ch]">
            De arbeidsmarkt in onze regio is al jaren krap en werkstress
            neemt toe. Goede mensen behouden is daarmee belangrijker dan
            ooit. Toch raakt de meest gekozen oplossing, een
            vitaliteitsprogramma voor de hele organisatie, vaak niet de kern
            van het probleem.
          </p>
          <div className="mt-6 flex items-center gap-2.5 text-sm text-mint-dof">
            <span>Voor werkgevers &amp; HR</span>
            <span aria-hidden="true" className="inline-block h-1 w-1 rounded-full bg-koraal" />
            <span>{article.readMinutes} min lezen</span>
          </div>
        </div>
      </section>

      {/* BODY linnen */}
      <article className="bg-linnen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-petrol/70 text-[1.05rem] leading-relaxed">
            In dit stuk leest u waarom een generiek programma vaak
            tekortschiet, en wat voor werkgevers in Amsterdam, Haarlem en
            omgeving wél het verschil maakt. Met cijfers van TNO en UWV.
          </p>

          <h2 className="mt-12 font-display text-2xl md:text-[1.7rem] text-petrol">
            De rekensom die elke HR-afdeling in de regio kent
          </h2>
          <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
            Volgens cijfers van UWV (Regio in Beeld Groot-Amsterdam) is de
            arbeidsmarkt in onze regio al jaren krap tot zeer krap, met
            tienduizenden openstaande vacatures, vooral in zorg, onderwijs,
            techniek en ICT. Vervangen is duur en traag.
          </p>
          <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
            Tegelijkertijd laten TNO en CBS via de Nationale Enquête
            Arbeidsomstandigheden zien dat ongeveer een op de vijf
            werknemers burn-outklachten ervaart, onder werknemers tot 35
            jaar zelfs ongeveer een op de vier. De behoefte aan maatregelen
            is het grootst in zorg en onderwijs. TNO schat de verzuimkosten
            door werkstress jaarlijks op miljarden.
          </p>
          <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
            De optelsom is helder: vervangen is moeilijk, uitval is duur,
            en mensen behouden is daarmee geen luxe, maar risicobeheer.
          </p>

          <h2 className="mt-12 font-display text-2xl md:text-[1.7rem] text-petrol">
            Waarom een vitaliteitsprogramma voor iedereen vaak niet werkt
          </h2>
          <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
            Generieke vitaliteitsprogramma's zijn voor iedereen gelijk, maar
            het probleem is dat niet. De DIX-benchmark van TNO, gebaseerd
            op ruim 15.000 werknemers, laat zien dat organisaties relatief
            sterk scoren op kennis en werkplezier, maar zwak op mentale
            vermoeidheid en eigen regie. Meer bewegen of een fruitmand
            helpt niet bij iemand die mentaal leegloopt of weinig grip
            ervaart op het eigen werk.
          </p>

          {/* Uitgelicht goud blok */}
          <aside className="mt-10 rounded-2xl border-l-[6px] border-koraal bg-goud/20 p-7 md:p-9">
            <span className="block text-koraal text-[0.74rem] font-semibold tracking-[0.12em] uppercase mb-2">
              Het echte knelpunt
            </span>
            <p className="font-display text-[1.2rem] md:text-[1.3rem] leading-[1.5] text-petrol">
              Veel werknemers willen wél aan hun inzetbaarheid werken, maar
              weten niet hóe. Tussen willen en doen zit een gat, en dat vult
              u niet met een algemeen programma.
            </p>
          </aside>

          <h2 className="mt-12 font-display text-2xl md:text-[1.7rem] text-petrol">
            Het knelpunt is zelden motivatie, maar weten hoe
          </h2>
          <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
            Een hardnekkig misverstand is dat stilstand bij medewerkers een
            motivatieprobleem is. De TNO-cijfers wijzen een andere kant
            op: mensen willen wel, ze weten alleen niet goed waar ze
            moeten beginnen. De oplossing zit dan niet in nóg een oproep
            om meer eigen regie te nemen, maar in begeleiding bij het hoe.
          </p>
          <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
            Daar is een loopbaangesprek voor bedoeld: iemand de ruimte
            geven om hardop na te denken over zijn werk, samen met een
            onafhankelijke gesprekspartner die helpt om vage twijfels om
            te zetten in een eerste, concrete stap.
          </p>

          <h2 className="mt-12 font-display text-2xl md:text-[1.7rem] text-petrol">
            Wat wel werkt: het goede gesprek, op tijd
          </h2>
          <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
            Wat in de praktijk het verschil maakt, is het gerichte
            loopbaangesprek met een onafhankelijke gesprekspartner,
            vóórdat er een probleem ontstaat. Dat levert drie dingen
            tegelijk op: vroege signalen voor u als organisatie, een
            medewerker die zich gezien voelt, en de mogelijkheid om
            gericht bij te sturen. Het is daarmee bijna altijd goedkoper
            dan een traject na verzuim of vertrek.
          </p>
          <p className="mt-4 text-petrol/80 leading-relaxed text-[1.05rem]">
            Onze eigen aanpak sluit daarop aan. Een laagdrempelige eerste
            stap is een ronde proactieve loopbaangesprekken met een
            afgebakende groep medewerkers, uitgevoerd door onafhankelijke
            coaches, met een korte terugkoppeling op hoofdlijnen aan HR.
            Zo ziet u wat het oplevert voordat u een breder traject
            inricht.
          </p>

          {/* Kernzin petrol */}
          <aside className="mt-12 rounded-2xl bg-petrol p-8 md:p-10 text-linnen-licht">
            <span className="block text-goud text-[0.74rem] font-semibold tracking-[0.12em] uppercase mb-3">
              In het kort
            </span>
            <p className="font-display text-[1.3rem] md:text-[1.4rem] leading-[1.45] text-linnen-licht">
              Duurzame inzetbaarheid valt of staat niet bij een programma,
              maar bij de vraag of iemand op tijd het goede gesprek voert.
            </p>
          </aside>

          {/* Bronnenregel */}
          <p className="mt-10 border-t border-petrol/15 pt-4 text-[0.85rem] text-petrol/60 leading-relaxed">
            Bronnen: Nationale Enquête Arbeidsomstandigheden (TNO en CBS);
            DIX-benchmark 2022 tot 2025 (TNO); Regio in Beeld
            Groot-Amsterdam (UWV).
          </p>

          {/* FAQ */}
          <section aria-labelledby="faq-di-kop" className="mt-14">
            <h2
              id="faq-di-kop"
              className="font-display text-2xl md:text-[1.7rem] text-petrol"
            >
              Veelgestelde vragen
            </h2>
            <div className="mt-6 space-y-7">
              {faq.map((item) => (
                <div key={item.q}>
                  <h3 className="font-display text-[1.15rem] text-petrol">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-petrol/80 leading-relaxed text-[1.02rem]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* CTA-strip koraal */}
      <section aria-labelledby="cta-di-kop" className="bg-koraal">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2
            id="cta-di-kop"
            className="font-display text-2xl md:text-[2rem] text-[color:var(--color-on-koraal-title,#4A1B0C)]"
          >
            Benieuwd wat een gesprek op tijd uw organisatie oplevert?
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-[color:var(--color-on-koraal-sub,#712B13)] max-w-[62ch]">
            We denken graag met u mee over duurzame inzetbaarheid in uw
            team. Zonder groot programma, met een concrete eerste stap die
            past bij uw organisatie en uw mensen.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Link
              to="/kennismaken"
              className="inline-flex items-center rounded-full bg-petrol px-6 py-3 font-medium text-linnen-licht hover:brightness-110 transition"
            >
              Plan een kennismaking
            </Link>
            <Link
              to="/voor-werkgevers"
              className="inline-flex items-center rounded-full border-[1.5px] border-[color:var(--color-on-koraal-sub,#712B13)] px-6 py-3 font-medium text-[color:var(--color-on-koraal-title,#4A1B0C)] hover:border-[color:var(--color-on-koraal-title,#4A1B0C)] transition"
            >
              Lees meer voor werkgevers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Medewerker-artikel — Persoonlijke effectiviteit                    */
/* ------------------------------------------------------------------ */

function PersoonlijkeEffectiviteitArticle({ article }: { article: Article }) {
  const para = "mt-4 text-petrol/80 leading-relaxed text-[1.05rem]";
  const h2 = "mt-12 font-display text-2xl md:text-[1.7rem] text-petrol";

  const faq = [
    {
      q: "Wat is persoonlijke effectiviteit?",
      a: "Persoonlijke effectiviteit gaat erover dat je je tijd, energie en kwaliteiten zo inzet dat je bereikt wat je belangrijk vindt, zonder jezelf uit te putten. Het draait minder om harder werken en meer om bewustere keuzes: weten wat je wilt, waar je goed in bent, en wanneer iets goed genoeg is.",
    },
    {
      q: "Is perfectionisme een probleem?",
      a: "Niet per se. Perfectionisme is in de kern een sterk gevoel voor kwaliteit. Het wordt pas een probleem als het altijd aanstaat, ook bij taken waar dat niet nodig is, en je daardoor blijft hangen of leegloopt. De kunst is niet om het af te leren, maar om te kiezen wanneer je het inzet.",
    },
    {
      q: "Hoe word ik besluitvaardiger?",
      a: "Vaak helpt het om eerst helder te krijgen wat je echt wilt en waar je goed in bent. Twijfel komt regelmatig voort uit onduidelijkheid over je eigen drijfveren, niet uit een gebrek aan opties. Wie zijn waarden en kwaliteiten scherp heeft, kiest makkelijker. Een gesprek met een coach kan daarbij helpen.",
    },
    {
      q: "Kan een coach helpen bij persoonlijke effectiviteit?",
      a: "Ja. Je eigen patronen zijn voor jezelf het lastigst te zien, omdat ze normaal voelen. Een coach helpt je herkennen welke sterke kant onder een zwakte zit, en hoe je die gerichter inzet, zodat je met minder moeite meer bereikt.",
    },
  ];

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
            Persoonlijke effectiviteit: waarom je grootste zwakte vaak je sterkste kant is
          </h1>
          <p className="mt-6 text-petrol/75 leading-relaxed text-[1.1rem] max-w-[58ch]">
            Je werkt hard, levert goed werk en bent kritisch op jezelf. En toch
            heb je het gevoel dat je niet vooruitkomt, of dat het nooit goed
            genoeg is. Vaak ligt dat niet aan een gebrek aan discipline, maar
            aan een sterke kant die op het verkeerde moment tegen je werkt.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-petrol/65">
            <span>Voor medewerkers</span>
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-koraal"
            />
            <span>{article.readMinutes} min lezen</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-linnen">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-petrol/85 leading-relaxed text-[1.1rem]">
            In dit stuk lees je waarom effectiever worden zelden gaat over
            jezelf veranderen, en meestal over je eigen kwaliteiten op het
            juiste moment inzetten.
          </p>

          <h2 className={h2}>Je doet alles goed, en toch komt het niet</h2>
          <p className={para}>
            Een patroon dat we vaak tegenkomen: iemand die nauwkeurig werkt,
            hoge eisen aan zichzelf stelt en zelden iets half doet. Op papier
            precies wat je wilt zijn. Maar in de praktijk kost het diegene
            veel. Beslissingen duren lang, want elke optie moet eerst helemaal
            kloppen. Iets afronden voelt ongemakkelijk, want het kan altijd
            beter. En complimenten glijden eraf, want de lat ligt zo hoog dat
            goed nooit echt goed voelt.
          </p>
          <p className={para}>
            Dit is geen kwestie van te weinig kunnen. Vaak juist het
            tegenovergestelde. Het is een kwestie van een eigenschap die zo
            sterk is dat hij begint te remmen in plaats van te helpen.
          </p>

          <h2 className={h2}>
            Je zwakte is vaak je kracht op het verkeerde moment
          </h2>
          <p className={para}>
            Veel van wat je als zwakte ziet, is een sterke kant die is
            doorgeschoten of op het verkeerde moment opduikt. Perfectionisme is
            een groot gevoel voor kwaliteit dat geen rem kent. Besluiteloosheid
            is grondigheid die te lang doorgaat. "Ik ben te gestructureerd" is
            in werkelijkheid een talent voor plannen en overzicht. "Ik ben te
            kritisch" is een scherp oog dat dingen ziet die anderen missen.
          </p>
          <p className={para}>
            Dat klinkt als een woordspelletje, maar dat is het niet. Het
            verandert namelijk wat je ermee doet. Zolang je iets als een gebrek
            ziet, wil je het wegpoetsen, en dat lukt zelden. Zie je het als een
            kwaliteit met een knop ervoor, dan gaat het niet meer om afleren,
            maar om doseren: wanneer zet je die scherpte aan, en wanneer mag
            het wat losser?
          </p>

          {/* Uitgelicht handvat — zacht goud met dikke koraal linkerrand */}
          <section
            aria-labelledby="zeven-kop"
            className="mt-12 rounded-2xl bg-goud/15 border-l-4 border-koraal p-7 md:p-9"
          >
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-koraal">
              Een praktische oefening
            </span>
            <h2
              id="zeven-kop"
              className="mt-2 font-display text-2xl md:text-[1.6rem] text-petrol"
            >
              Durf een 7 in te leveren
            </h2>
            <p className="mt-4 text-petrol/80 leading-relaxed">
              Een eenvoudige oefening voor wie de lat altijd op een 10 legt:
              kies bewust een taak waar een 7 volstaat, en lever die op een 7.
              Een interne mail, een eerste opzet, een voorbereiding die niet
              perfect hoeft. Merk wat er gebeurt. Meestal: niets ergs. De
              wereld draait door, en jij houdt energie over voor de dingen
              waar een 9 er wél toe doet.
            </p>
            <p className="mt-4 text-petrol/80 leading-relaxed">
              Het doel is niet om slordig te worden. Het doel is leren kiezen
              wanneer perfectie loont, en wanneer ze vooral tijd en rust kost.
            </p>
          </section>

          <h2 className={h2}>
            Effectiever worden begint bij weten wat je wilt, niet bij meer
            discipline
          </h2>
          <p className={para}>
            De gangbare reflex bij "ik wil effectiever zijn" is meer systeem:
            strakkere lijstjes, meer discipline, een nieuwe app. Soms helpt
            dat. Maar vaak zit het probleem een laag dieper. Als je niet scherp
            hebt wat je echt wilt en waar je goed in bent, blijf je twijfelen,
            hoe goed je planning ook is.
          </p>
          <p className={para}>
            Onderzoek naar loopbaanontwikkeling laat zien dat reflectie
            voorafgaat aan regie. Pas als je nadenkt over je drijfveren, dus
            wat wil ik, en je kwaliteiten, dus waar ben ik goed in, kun je
            gericht keuzes maken en stappen zetten. De volgorde doet ertoe:
            eerst weten, dan sturen. Daar komt bij dat mensen die actief grip
            nemen op hun loopbaan, volgens onderzoek van onder meer TNO en de
            Universiteit van Amsterdam, minder stress ervaren en meer controle
            voelen over hun werk. Regie is dus niet alleen prettig, het geeft
            ook rust.
          </p>

          <h2 className={h2}>Je kunt jezelf niet kietelen</h2>
          <p className={para}>
            Er is een reden waarom dit lastig alleen te doen is. Je eigen
            patronen zie je het slechtst. Precies de dingen die je doen
            vastlopen, voelen voor jou volkomen normaal, want je doet ze al
            jaren. Een buitenstaander die de juiste vragen stelt, ziet vaak in
            een paar gesprekken wat jij over het hoofd ziet, en helpt je een
            sterke kant anders in te zetten in plaats van die te bestrijden.
          </p>
          <p className={para}>
            Dat is waar een coach voor is. Niet om je te vertellen wat je fout
            doet, maar om samen te ontdekken welke kwaliteit eronder zit, en
            hoe je die slimmer gebruikt.
          </p>

          {/* Kernzin — petrol vlak */}
          <aside className="mt-14 rounded-2xl bg-petrol px-7 py-9 md:px-10 md:py-11">
            <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud">
              In het kort
            </span>
            <p className="mt-3 font-display text-xl md:text-2xl text-linnen-licht leading-snug">
              Effectiever worden gaat zelden over jezelf veranderen. Meestal
              gaat het over je eigen sterke kanten op het juiste moment
              inzetten.
            </p>
          </aside>

          {/* Bronnen */}
          <div className="mt-10 border-t border-petrol/15 pt-4">
            <p className="text-sm text-petrol/60 leading-relaxed">
              Met inzichten uit onderzoek naar loopbaancompetenties (Kuijpers)
              en naar proactief loopbaangedrag (TNO en de Universiteit van
              Amsterdam).
            </p>
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq-kop-pe" className="mt-14">
            <h2
              id="faq-kop-pe"
              className="font-display text-2xl md:text-[1.7rem] text-petrol"
            >
              Veelgestelde vragen
            </h2>
            <div className="mt-6 divide-y divide-petrol/15 border-y border-petrol/15">
              {faq.map((item) => (
                <div key={item.q} className="py-5">
                  <h3 className="font-display text-lg text-petrol">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-petrol/80 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* CTA-strip koraal */}
      <section aria-labelledby="cta-kop-pe" className="bg-koraal">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <h2
            id="cta-kop-pe"
            className="font-display text-2xl md:text-3xl text-[color:var(--color-on-koraal-title,#4A1B0C)]"
          >
            Benieuwd welke kracht er onder jouw 'zwakte' zit?
          </h2>
          <p className="mt-4 text-[color:var(--color-on-koraal-sub,#712B13)] leading-relaxed text-[1.05rem]">
            Bij Vizier op Scherp kijk je samen met een coach naar wat je goed
            kunt, wat je tegenhoudt, en hoe je je sterke kanten op het juiste
            moment inzet. In jouw tempo, en wat je bespreekt blijft tussen jou
            en je coach.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/kennismaken"
              className="inline-flex items-center rounded-full bg-petrol px-6 py-3 font-medium text-linnen-licht hover:brightness-110 transition"
            >
              Maak kennis met een coach
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
