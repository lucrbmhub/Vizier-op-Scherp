import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Section } from "../components/ui-blocks";

const TITLE = "Leiderschap & talentontwikkeling | Vizier op Scherp";
const DESC =
  "Vizier op Scherp voert lopende programma's uit op het gebied van leiderschap en talentontwikkeling, waaronder coaching voor startende managers en trainees.";
const CANONICAL = "https://vizieropscherp.nl/leiderschap";
const OG_TITLE = "Leiderschap & talentontwikkeling, Vizier op Scherp";
const OG_DESC =
  "Lopende programma's op het gebied van leiderschap en talentontwikkeling: coaching voor startende managers en begeleiding van trainees.";

export const Route = createFileRoute("/leiderschap")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex, follow" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:url", content: CANONICAL },
      { property: "og:title", content: OG_TITLE },
      { property: "og:description", content: OG_DESC },
      { name: "twitter:title", content: OG_TITLE },
      { name: "twitter:description", content: OG_DESC },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-linnen-licht">
        <span aria-hidden="true" className="watermark watermark-light" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Eyebrow>Achtergrond</Eyebrow>
          <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-petrol max-w-4xl leading-[1.1]">
            Le<span className="idot" style={{ ["--idot-bg" as never]: "#F5EFE3" }}>i</span>derschap &amp; talentontwikkeling
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-petrol/75 leading-relaxed">
            Naast loopbaancoaching voert Vizier op Scherp enkele lopende
            programma's uit op het gebied van leiderschap en
            talentontwikkeling.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-[68ch]">
          <h2 className="font-display text-2xl text-petrol mb-4">
            Wat we uitvoeren
          </h2>
          <div className="space-y-5 text-petrol/80 leading-relaxed">
            <p>
              Het gaat om coaching voor startende managers, begeleiding van
              trainees en trainingen binnen traineeships, onder meer binnen
              een meerjarig opleidingsprogramma voor een zakelijke
              dienstverlener, met thema's als feedback, gespreksvoering,
              stressmanagement, samenwerking en persoonlijk leiderschap.
            </p>
            <p>
              Deze programma's voeren we met dezelfde zorg en kwaliteit uit
              als al ons werk: ervaren, gecertificeerde coaches, een
              duidelijke opbouw en concrete toepassing in de praktijk.
            </p>
            <p>
              Heeft u een vraag in deze richting?{" "}
              <Link
                to="/kennismaken"
                className="text-koraal border-b border-koraal hover:opacity-80"
              >
                Neem contact op
              </Link>
              . Dan bespreken we persoonlijk wat mogelijk is.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
