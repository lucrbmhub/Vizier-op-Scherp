import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Eyebrow, Label, Section, Card } from "../components/ui-blocks";
import { supabase } from "@/integrations/supabase/client";


const TITLE = "Kennismaken | Plan een vrijblijvend gesprek | Vizier op Scherp";
const DESC =
  "Plan een vrijblijvend kennismakingsgesprek met Vizier op Scherp. Voor werkgevers, medewerkers en UWV-trajecten in Amsterdam, Haarlem en omgeving. Bel, mail of laat een bericht achter.";
const OG_TITLE = "Kennismaken met Vizier op Scherp";
const OG_DESC =
  "Een eerste gesprek is altijd vrijblijvend. Bel, mail of laat een bericht achter. We nemen snel contact op.";
const CANONICAL = "https://vizieropscherp.nl/kennismaken";
const WA_URL = "https://wa.me/31611221424";

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Kennismaken met Vizier op Scherp",
  url: CANONICAL,
};

export const Route = createFileRoute("/kennismaken")({
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
      { property: "og:image", content: "https://vizieropscherp.nl/og-image.png" },
      { property: "og:image:alt", content: "Vizier op Scherp. Persoonlijk voor de medewerker, georganiseerd voor HR." },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESC },
      { name: "twitter:image", content: "https://vizieropscherp.nl/og-image.png" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(contactLd) },
    ],
  }),
  component: Page,
});

const ROLE_OPTIONS = [
  "Voor jezelf",
  "Namens een medewerker",
  "Voor je organisatie",
  "Via UWV",
  "Anders",
] as const;

function Page() {
  return (
    <>
      
      {/* HERO licht */}
      <section className="bg-linnen-licht" aria-labelledby="hero-titel">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Eyebrow>Kennismaken</Eyebrow>
          <h1
            id="hero-titel"
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-petrol max-w-4xl leading-[1.1]"
          >
            Laten we kenn<span className="idot" style={{ ["--idot-bg" as never]: "#F5EFE3" }}>i</span>smaken<span className="slotpunt">.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-petrol/75 leading-relaxed">
            Vertel wat er speelt, voor jezelf of in de organisatie. Dan kijken we
            samen wat helpt. Een eerste gesprek is zo gebeurd, en vaak verrassend
            verhelderend.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#bericht-form"
              className="inline-flex items-center rounded-full bg-koraal px-6 py-3 font-medium text-[color:var(--color-on-koraal-title)] hover:opacity-90 transition-opacity"
            >
              Laat iets achter
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-petrol/30 px-6 py-3 font-medium text-petrol hover:border-koraal hover:text-koraal transition-colors"
            >
              Of WhatsApp ons
            </a>
          </div>
          <p className="mt-4 text-petrol/70">
            Liever mailen?{" "}
            <a
              href="mailto:hallo@vizieropscherp.nl"
              className="text-koraal font-medium border-b border-koraal"
            >
              hallo@vizieropscherp.nl
            </a>
          </p>
        </div>
      </section>

      {/* Even contact */}
      <Section>
        <Label>Even contact</Label>
        <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
          Hoe wil je iets laten weten?
        </h2>
        <p className="mt-2 text-petrol/70 text-lg max-w-2xl">
          Bellen, appen of mailen, het mag allemaal. Je hoort snel van ons,
          meestal dezelfde of de volgende werkdag.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card tone="linnen">
            <h3 className="font-display text-xl text-petrol mb-3">Bellen</h3>
            <p className="text-petrol/75 leading-relaxed">
              Op werkdagen bereikbaar. Krijg je ons niet te pakken, dan bellen we
              terug.
            </p>
            <a
              href="tel:+31202146466"
              className="mt-3 inline-block font-display text-lg text-petrol hover:text-koraal transition-colors"
            >
              020 214 64 66
            </a>
          </Card>
          <Card tone="linnen">
            <h3 className="font-display text-xl text-petrol mb-3">WhatsApp</h3>
            <p className="text-petrol/75 leading-relaxed">
              Een kort berichtje is vaak het makkelijkst. We reageren op
              werkdagen.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-display text-lg text-petrol hover:text-koraal transition-colors"
            >
              Stuur een bericht
            </a>
          </Card>
          <Card tone="linnen">
            <h3 className="font-display text-xl text-petrol mb-3">Mailen</h3>
            <p className="text-petrol/75 leading-relaxed">
              Een paar zinnen over wat er speelt is genoeg.
            </p>
            <a
              href="mailto:hallo@vizieropscherp.nl"
              className="mt-3 inline-block font-display text-lg text-petrol hover:text-koraal transition-colors break-all"
            >
              hallo@vizieropscherp.nl
            </a>
          </Card>
        </div>

        <div className="mt-7 rounded-xl border border-mint-dof bg-linnen-licht px-6 py-5">
          <h3 className="font-display text-petrol text-lg">Of kom langs</h3>
          <p className="mt-1 text-petrol/75 leading-relaxed">
            Klein Heiligland 84, Haarlem &nbsp;·&nbsp; IJsbaanpad 9,
            Amsterdam-Zuid. Een gesprek kan ook online of bij jullie op kantoor.
          </p>
        </div>
      </Section>

      {/* De gesprekken */}
      <section className="bg-linnen-licht" aria-labelledby="route-titel">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Label>De gesprekken</Label>
          <h2
            id="route-titel"
            className="font-display text-3xl md:text-4xl text-petrol max-w-3xl"
          >
            Waar wil je het over hebben?
          </h2>
          <p className="mt-2 text-petrol/70 text-lg max-w-2xl">
            Drie manieren waarop een eerste gesprek eruit kan zien. Kies wat
            past, of laat het ons weten en we wijzen je de weg.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card tone="petrol">
              <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud mb-3">
                Voor werkgevers &amp; HR
              </span>
              <h3 className="font-display text-xl text-linnen-licht mb-3">
                Verkennen wat past
              </h3>
              <p className="text-mint leading-relaxed">
                Je vertelt wat er speelt in de organisatie, wij denken mee over
                de aanpak: van een gespreksronde tot een coachingpool. Daarna
                krijg je een concreet voorstel met heldere prijzen.
              </p>
            </Card>
            <Card tone="goud">
              <span className="block text-xs font-medium uppercase tracking-[0.14em] mb-3 text-[color:var(--color-on-goud-sub)]">
                Voor jezelf
              </span>
              <h3 className="font-display text-xl mb-3 text-[color:var(--color-on-goud-title)]">
                Kennismaken met een coach
              </h3>
              <p className="text-[color:var(--color-on-goud-sub)] leading-relaxed">
                Je vertelt wat er speelt, wij stellen een coach voor die bij je
                past. Klikt het, dan ga je verder. Klikt het niet, dan zoeken we
                iemand anders.
              </p>
            </Card>
            <Card tone="koraal">
              <span className="block text-xs font-medium uppercase tracking-[0.14em] mb-3 text-[color:var(--color-on-koraal-sub)]">
                Via UWV
              </span>
              <h3 className="font-display text-xl mb-3 text-[color:var(--color-on-koraal-title)]">
                Rustig je opties verkennen
              </h3>
              <p className="text-[color:var(--color-on-koraal-sub)] leading-relaxed">
                We leggen in gewone taal uit hoe een Werkfit- of Naar Werk-traject
                werkt. Daarna kijk je rustig wat je wilt, en helpen we met de
                aanmelding als je dat prettig vindt.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulier */}
      <section id="bericht-form" aria-labelledby="form-titel">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Label>Of laat iets achter</Label>
          <h2
            id="form-titel"
            className="font-display text-3xl md:text-4xl text-petrol max-w-3xl"
          >
            Laat iets achter
          </h2>
          <p className="mt-2 text-petrol/70 text-lg max-w-2xl">
            Je naam, je mailadres en waar je het over wilt hebben. De rest
            bespreken we wel.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: (String(fd.get("phone") ?? "").trim() || null) as string | null,
      organization: null as string | null,
      role: String(fd.get("role") ?? "").trim(),
      message: (String(fd.get("message") ?? "").trim() || null) as string | null,
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setErrorMsg("Vul je naam en e-mailadres in.");
      return;
    }

    const { error } = await supabase.from("contact_submissions").insert(payload);
    if (error) {
      console.error(error);
      setStatus("error");
      setErrorMsg(
        "Er ging iets mis bij het versturen. Probeer het opnieuw of mail rechtstreeks naar hallo@vizieropscherp.nl.",
      );
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mt-10 max-w-2xl rounded-2xl border border-goud bg-linnen-licht p-8"
      >
        <h3 className="font-display text-2xl text-petrol">Bedankt voor je bericht.</h3>
        <p className="mt-3 text-petrol/80 leading-relaxed">
          We hebben het ontvangen en nemen snel contact op. Liever direct iets
          vragen? Bel{" "}
          <a className="text-koraal border-b border-koraal" href="tel:+31202146466">
            020 214 64 66
          </a>{" "}
          of mail{" "}
          <a
            className="text-koraal border-b border-koraal"
            href="mailto:hallo@vizieropscherp.nl"
          >
            hallo@vizieropscherp.nl
          </a>
          .
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-md border border-mint-dof bg-linnen-licht px-3.5 py-3 text-petrol placeholder:text-petrol/40 focus:outline-none focus:border-koraal focus:ring-2 focus:ring-koraal/30";

  return (
    <form onSubmit={onSubmit} noValidate className="mt-10 max-w-2xl">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-petrol mb-1.5">
            Je naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={200}
            autoComplete="name"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-petrol mb-1.5">
            Je e-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={320}
            autoComplete="email"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-petrol mb-1.5">
            Telefoon (als je liever gebeld wordt)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={30}
            autoComplete="tel"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-petrol mb-1.5">
            Je komt
          </label>
          <select id="role" name="role" defaultValue={ROLE_OPTIONS[0]} className={inputCls}>
            {ROLE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-sm text-petrol/65">
            Zo zorgen we dat de juiste persoon contact met je opneemt.
          </p>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-petrol mb-1.5"
          >
            Waar wil je het over hebben?
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            maxLength={5000}
            placeholder="Een paar zinnen is genoeg."
            className={`${inputCls} resize-y min-h-32`}
          />
        </div>
      </div>

      {errorMsg && (
        <p role="alert" className="mt-5 text-sm text-koraal">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex items-center rounded-full bg-koraal px-7 py-3 font-medium text-[color:var(--color-on-koraal-title)] hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Versturen…" : "Versturen"}
      </button>

      <p className="mt-3.5 text-sm text-petrol/65">
        We gaan netjes om met je gegevens en gebruiken ze alleen om contact op te
        nemen.
      </p>
    </form>
  );
}
