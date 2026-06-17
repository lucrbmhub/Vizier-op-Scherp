import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "../components/ui-blocks";

export const Route = createFileRoute("/coaching-voor-mij")({
  head: () => ({
    meta: [
      { title: "Coaching voor mij — Vizier op Scherp" },
      { name: "description", content: "Loopbaancoaching voor medewerkers en particulieren." },
    ],
    links: [{ rel: "canonical", href: "/coaching-voor-mij" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section>
      <Eyebrow>Voor medewerkers</Eyebrow>
      <h1 className="mt-4 font-display text-4xl md:text-5xl text-petrol">Coaching voor mij</h1>
      <p className="mt-4 text-petrol/75">Placeholder — inhoud volgt.</p>
    </Section>
  );
}
