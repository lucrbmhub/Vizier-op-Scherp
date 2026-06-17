import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "../components/ui-blocks";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Vizier op Scherp" },
      { name: "description", content: "Over Vizier op Scherp." },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section>
      <Eyebrow>Over ons</Eyebrow>
      <h1 className="mt-4 font-display text-4xl md:text-5xl text-petrol">Over ons</h1>
      <p className="mt-4 text-petrol/75">Placeholder — inhoud volgt.</p>
    </Section>
  );
}
