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
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:url", content: CANONICAL },
      { property: "og:site_name", content: "Vizier op Scherp" },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESC },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(contactLd) },
    ],
  }),
  component: Page,
});

const ROLE_OPTIONS = [
  "Werkgever / HR",
  "Medewerker of particulier",
  "Via UWV",
  "Anders",
] as const;

function Page() {
  return (
    <>
      {/* HERO licht */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Eyebrow>Kennismaken</Eyebrow>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-petrol max-w-4xl leading-[1.1]">
            Een eerste gesprek is altijd vrijblijvend.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-petrol/75 leading-relaxed">
            We luisteren eerst, denken dan mee, en u of jij beslist daarna pas.
            Bel, mail of laat hieronder een bericht achter; we nemen snel
            contact op.
          </p>
        </div>
      </section>

      {/* Direct contact */}
      <Section>
        <Label>Direct contact</Label>
        <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
          Bel, mail of kom langs
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card tone="linnen">
            <h3 className="font-display text-xl text-petrol mb-3">Telefoon</h3>
            <p className="text-petrol/75 leading-relaxed">
              Bereikbaar op werkdagen. Geen gehoor? We bellen terug.
            </p>
            <a
              href="tel:+31611221424"
              className="mt-3 inline-block font-display text-lg text-petrol hover:text-koraal transition-colors"
            >
              06 11 22 14 24
            </a>
          </Card>
          <Card tone="linnen">
            <h3 className="font-display text-xl text-petrol mb-3">E-mail</h3>
            <p className="text-petrol/75 leading-relaxed">
              Vertel kort wat er speelt. Een paar zinnen is genoeg.
            </p>
            <a
              href="mailto:hallo@vizieropscherp.nl"
              className="mt-3 inline-block font-display text-lg text-petrol hover:text-koraal transition-colors break-all"
            >
              hallo@vizieropscherp.nl
            </a>
          </Card>
          <Card tone="linnen">
            <h3 className="font-display text-xl text-petrol mb-3">Locaties</h3>
            <p className="text-petrol/80">Klein Heiligland 84, Haarlem</p>
            <p className="text-petrol/80">IJsbaanpad 9, Amsterdam-Zuid</p>
            <p className="mt-2 text-petrol/75">
              Gesprekken kunnen ook online of bij u op kantoor.
            </p>
          </Card>
        </div>
      </Section>

      {/* Drie soorten gesprekken */}
      <section className="bg-linnen-licht">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Label>Wat kunt u verwachten?</Label>
          <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
            Drie soorten gesprekken
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card tone="petrol">
              <span className="block text-xs font-medium uppercase tracking-[0.14em] text-goud mb-3">
                Voor werkgevers &amp; HR
              </span>
              <h3 className="font-display text-xl text-linnen-licht mb-3">
                Verkenningsgesprek
              </h3>
              <p className="text-mint leading-relaxed">
                U vertelt wat er speelt in uw organisatie; wij laten zien hoe
                wij dat zouden aanpakken, van een gespreksronde tot een
                coachingpool. Daarna ontvangt u een concreet voorstel met
                heldere prijzen. Geen verplichtingen.
              </p>
            </Card>
            <Card tone="goud">
              <span className="block text-xs font-medium uppercase tracking-[0.14em] mb-3 text-[color:var(--color-on-goud-sub)]">
                Voor medewerkers &amp; particulieren
              </span>
              <h3 className="font-display text-xl mb-3 text-[color:var(--color-on-goud-title)]">
                Kennismaking met een coach
              </h3>
              <p className="text-[color:var(--color-on-goud-sub)] leading-relaxed">
                Je vertelt wat er speelt; wij stellen een coach voor die bij je
                past. Jullie maken vrijblijvend kennis. Klikt het, dan plannen
                jullie samen het traject. Klikt het niet, dan stellen we iemand
                anders voor.
              </p>
            </Card>
            <Card tone="koraal">
              <span className="block text-xs font-medium uppercase tracking-[0.14em] mb-3 text-[color:var(--color-on-koraal-sub)]">
                Via UWV
              </span>
              <h3 className="font-display text-xl mb-3 text-[color:var(--color-on-koraal-title)]">
                Rustig oriëntatiegesprek
              </h3>
              <p className="text-[color:var(--color-on-koraal-sub)] leading-relaxed">
                We leggen uit hoe een Werkfit- of Naar Werk-traject bij ons
                werkt, in normale taal. Daarna beslis je zelf, en helpen we je
                desgewenst met de aanmelding via je contactpersoon bij UWV.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulier */}
      <Section>
        <Label>Of laat een bericht achter</Label>
        <h2 className="font-display text-3xl md:text-4xl text-petrol max-w-3xl">
          We nemen snel contact op
        </h2>
        <ContactForm />
      </Section>
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
      organization: (String(fd.get("organization") ?? "").trim() || null) as
        | string
        | null,
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
          We hebben het ontvangen en nemen snel contact op, doorgaans binnen
          één werkdag. Liever direct iets vragen? Bel{" "}
          <a className="text-koraal border-b border-koraal" href="tel:+31611221424">
            06 11 22 14 24
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
    "w-full rounded-md border border-petrol/20 bg-linnen-licht px-3.5 py-3 text-petrol placeholder:text-petrol/40 focus:outline-none focus:border-koraal focus:ring-2 focus:ring-koraal/30";

  return (
    <form onSubmit={onSubmit} noValidate className="mt-10 max-w-2xl">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-petrol mb-1.5">
            Naam <span aria-hidden="true">*</span>
            <span className="sr-only">(verplicht)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-petrol mb-1.5">
            E-mailadres <span aria-hidden="true">*</span>
            <span className="sr-only">(verplicht)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-petrol mb-1.5">
            Telefoonnummer
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
          />
        </div>

        <div>
          <label
            htmlFor="organization"
            className="block text-sm font-medium text-petrol mb-1.5"
          >
            Organisatie (optioneel)
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-petrol mb-1.5">
            Ik neem contact op als
          </label>
          <select id="role" name="role" defaultValue={ROLE_OPTIONS[0]} className={inputCls}>
            {ROLE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-petrol mb-1.5"
          >
            Waar kunnen we bij helpen?
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Een paar zinnen is genoeg. We vragen door in het gesprek."
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
        {status === "submitting" ? "Versturen…" : "Verstuur bericht"}
      </button>

      <p className="mt-5 text-sm text-petrol/70 leading-relaxed">
        Liever direct? Mail naar{" "}
        <a className="text-koraal border-b border-koraal" href="mailto:hallo@vizieropscherp.nl">
          hallo@vizieropscherp.nl
        </a>{" "}
        of bel{" "}
        <a className="text-koraal border-b border-koraal" href="tel:+31611221424">
          06 11 22 14 24
        </a>
        . We gaan zorgvuldig om met uw gegevens en gebruiken ze alleen om
        contact op te nemen.
      </p>
    </form>
  );
}
