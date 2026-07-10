# DECISIONS.md — omzetting nieuwe HTML-ontwerpen naar de bestaande stack

Twijfelkeuzes tijdens de zelfstandige uitvoering, met per keuze één regel uitleg.
Beslisregel: bij twijfel de meest conservatieve optie (minste verandering aan
bestaande code).

1. **Basisbranch = `design-pass-2`, niet `main`** — de aangeleverde HTML
   veronderstelt de i-dot-fix en het hero-watermerk die alleen op die (nog
   ongemergde) branch staan; bouwen op main zou die regressies terugbrengen.
2. **Geen centrale contentfile geïntroduceerd** — die bestaat niet in de huidige
   codebase en alle teksten in de HTML zijn 1-op-1 gelijk aan de teksten die al
   in de route-bestanden staan; een contentfile-refactor zou méér bestaande code
   wijzigen dan deze visuele omzetting vraagt.
3. **HTML als visuele richtlijn gebruikt** (template-keuze stond open) — teksten,
   routes, SEO-metadata en de bestaande sectie-achtergrondritmes van de site
   blijven leidend; alleen de vormgeving is overgenomen.
4. **Nieuwe pagina's vervangen bestaande routes** (index, coaching-voor-mij,
   coaches, inzichten) — er zijn geen nieuwe routes; `Iconen.dc.html` is een
   specificatie en is omgezet naar het herbruikbare `BrandIcon`-component.
5. **Coachfoto's behouden i.p.v. initiaal-avatars** — de comment in coaches.html
   schrijft dit expliciet voor ("vervangen door de bestaande portretten").
6. **Keurmerken blijven de echte NOBCO/Noloc-logo's** — de HTML toont tekstuele
   seals, maar de bestaande logo-afbeeldingen zijn informatiever en dit is de
   kleinste wijziging.
7. **Coach-citaten behouden het quote-rail-motief** — de HTML gebruikt een
   simpeler `.coach-quote`-lijntje; de rail is bestaand merkonderdeel en al
   overal toegepast.
8. **Logo (LogoMark) bijgewerkt naar de scherpere variant** (rx 10, miter-ruit,
   vierkant gouden hart) — alle vijf aangeleverde bestanden gebruiken hem
   consistent in header én footer, dus dit is een bedoelde merk-update.
9. **Open-card-notchkleuren volgen de werkelijke achtergrond van de app-sectie**
   waar die afwijkt van de HTML-sectiekleur (paper vs. linnen), zodat de
   "opening" in de rand naadloos blijft.
10. **Werkboek- en leidraad-knoppen blijven functionele modal-buttons** met de
    bestaande leads-flow (Supabase); de statische knoppen uit de HTML zouden
    functionaliteit verwijderen.
11. **voor-werkgevers, uwv-traject, over-ons, kennismaken en leiderschap zijn
    niet aangeraakt** — daarvoor is geen nieuwe HTML aangeleverd.
12. **Homepage-statistieken als inline regel met ruit-scheiders** conform de
    HTML; de teksten zelf zijn ongewijzigd.
13. **Niet gepusht naar remote** — expliciete instructie (geen Netlify-credits);
    alle werk staat lokaal op branch `feature/html-redesign-import`.
14. **`.step`-, `.mark-gold`- en `.float-card`-stijlen** komen uit de
    referentie-stylesheet van het ontwerp (site-v2/styles.css) en zijn
    toegevoegd aan de bestaande merkmotieven-laag in `src/styles.css`
    (float-card, mark-gold) of inline met bestaande Tailwind-tokens gebouwd
    (steps, bigstats); er zijn geen nieuwe kleuren of fontgroottes
    geïntroduceerd.
