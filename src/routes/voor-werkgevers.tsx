import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "../components/ui-blocks";

export const Route = createFileRoute("/voor-werkgevers")({
  head: () => ({
    meta: [
      { title: "Voor werkgevers & HR — Vizier op Scherp" },
      { name: "description", content: "Ontwikkelpartner voor werkgevers en HR in Amsterdam, Haarlem en omgeving." },
    ],
    links: [{ rel: "canonical", href: "/voor-werkgevers" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section>
      <Eyebrow>Voor werkgevers & HR</Eyebrow>
      <h1 className="mt-4 font-display text-4xl md:text-5xl text-petrol">Voor werkgevers & HR</h1>
      <p className="mt-4 text-petrol/75">Placeholder — inhoud volgt.</p>
    </Section>
  );
}
