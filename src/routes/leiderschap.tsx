import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "../components/ui-blocks";

export const Route = createFileRoute("/leiderschap")({
  head: () => ({
    meta: [
      { title: "Leiderschap — Vizier op Scherp" },
      { name: "description", content: "Leiderschap." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Section>
      <Eyebrow>Leiderschap</Eyebrow>
      <h1 className="mt-4 font-display text-4xl md:text-5xl text-petrol">Leiderschap</h1>
      <p className="mt-4 text-petrol/75">Placeholder — inhoud volgt.</p>
    </Section>
  );
}
