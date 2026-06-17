import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "../components/ui-blocks";

export const Route = createFileRoute("/uwv-traject")({
  head: () => ({
    meta: [
      { title: "UWV-traject — Vizier op Scherp" },
      { name: "description", content: "Loopbaanbegeleiding voor UWV-cliënten." },
    ],
    links: [{ rel: "canonical", href: "/uwv-traject" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section>
      <Eyebrow>UWV-traject</Eyebrow>
      <h1 className="mt-4 font-display text-4xl md:text-5xl text-petrol">UWV-traject</h1>
      <p className="mt-4 text-petrol/75">Placeholder — inhoud volgt.</p>
    </Section>
  );
}
