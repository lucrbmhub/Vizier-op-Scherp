import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "../components/ui-blocks";

export const Route = createFileRoute("/inzichten")({
  head: () => ({
    meta: [
      { title: "Inzichten — Vizier op Scherp" },
      { name: "description", content: "Inzichten en artikelen van Vizier op Scherp." },
    ],
    links: [{ rel: "canonical", href: "/inzichten" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section>
      <Eyebrow>Inzichten</Eyebrow>
      <h1 className="mt-4 font-display text-4xl md:text-5xl text-petrol">Inzichten</h1>
      <p className="mt-4 text-petrol/75">Placeholder — inhoud volgt.</p>
    </Section>
  );
}
