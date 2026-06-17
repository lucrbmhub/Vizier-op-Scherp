import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "../components/ui-blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vizier op Scherp — Loopbaancoaching Amsterdam & Haarlem" },
      {
        name: "description",
        content:
          "Loopbaancoaching voor werkgevers, medewerkers en UWV-cliënten in Amsterdam, Haarlem en omgeving.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Section>
      <Eyebrow>Placeholder</Eyebrow>
      <h1 className="mt-4 font-display text-4xl md:text-5xl text-petrol">Vizier op Scherp</h1>
      <p className="mt-4 max-w-xl text-petrol/75">
        Inhoud volgt. Dit is de tijdelijke homepage tijdens de bouw van het fundament.
      </p>
    </Section>
  );
}
