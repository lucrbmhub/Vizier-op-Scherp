## Doel

Een nieuw blog-artikel toevoegen voor medewerkers: "Richting vinden in je loopbaan: weer weten welke kant je op wilt", inclusief overzichtskaart op `/inzichten` en eigen detailpagina onder `/inzichten/richting-vinden-in-je-loopbaan`. Hergebruik bestaande Header/Footer en design tokens (petrol, koraal, goud, linnen, linnen-licht, mint, mint-dof). Geen nieuwe kleuren/fonts, geen nieuwe routes elders, geen wijzigingen aan hoofdnavigatie.

## Wijzigingen per bestand

### 1. `src/routes/inzichten.tsx`
- Voeg een tweede item toe aan `ARTICLES`:
  - `slug: "richting-vinden-in-je-loopbaan"`
  - `title: "Richting vinden in je loopbaan: weer weten welke kant je op wilt"`
  - `summary: "Je doet je werk prima, maar het voelt niet meer als de goede plek. Lees hoe je je richting kunt kwijtraken, welke signalen je werk afgeeft en hoe je stap voor stap weer weet wat je wilt."`
  - `audience: "medewerker"`
  - `readMinutes: 5`
  - **niet** `featured` (uitgelichte blijft "Van werven naar behouden")
- Geen verdere wijzigingen — bestaande grid toont het tweede artikel automatisch met **gouden "Voor medewerkers"-badge** (logica zit er al in `badgeClasses` / `audienceLabel`).
- Publicatiedatum wordt al niet getoond.

### 2. `src/routes/inzichten.$slug.tsx`
- Zelfde `ARTICLES`-registry uitbreiden met hetzelfde tweede item (slug + metadata) zodat `head()` en `notFoundComponent` werken.
- Pagina-component opsplitsen zodat de juiste body per slug rendert:
  - `van-werven-naar-behouden` → huidige werkgever-bodylayout (donkere petrol-hero, prose op linnen, bestaande CTA). Onveranderd.
  - `richting-vinden-in-je-loopbaan` → nieuwe medewerker-layout volgens prompt en HTML-referentie.
- `head()`: voeg per slug extra meta toe (og:image 1200x630 + alt, twitter:card summary_large_image + image + title/description, og:site_name, meta robots index/follow) en een BlogPosting JSON-LD `<script>` (productie-URLs, datums 2026-06-19).
- `notFoundComponent` blijft.

### 3. Nieuwe medewerker-pagina-layout (binnen `inzichten.$slug.tsx`)

Sectievolgorde, exact zoals in de HTML-referentie:

```text
1. Lichte hero op linnen-licht (géén donker petrol-vlak)
   - "← Inzichten" terugknop (petrol/70)
   - Gouden pill-badge "Voor medewerkers" (tekst in donkere goud-variant)
   - H1 in petrol, font-display
   - Lead in petrol/75
   - Meta-regel: "Loopbaan & richting · 5 min leestijd" met koraal puntje
2. Intro-paragraaf (linnen, leeskolom max-w-3xl)
3. Sectie "Waarom je je richting kwijt kunt raken" (2 alinea's)
4. Goud kader (rounded-2xl, border-goud, bg-goud/10):
   - koraal label "Herken je dit?"
   - H2 "Signalen dat je toe bent aan een nieuwe richting"
   - intro-zin
   - 5 bullets met koraal ruit-marker (kleine gedraaide vierkant via ::before of inline span)
   - slot-zin
5. Sectie "Richting vinden begint bij jou, niet bij vacatures" met 3 H3-blokken: Energie / Waarden / Talenten
6. Sectie "Van inzicht naar concrete stappen" (2 alinea's)
7. Kernzin — donker petrol-vlak (volle breedte binnen kolom, of full-bleed):
   - gouden label "In het kort"
   - grote Lora-zin in linnen-licht
8. Sectie "Je hoeft het niet alleen uit te zoeken" (1 alinea)
9. Koraal CTA-strip (full-bleed sectie, bg-koraal):
   - H2 "Samen je richting scherp krijgen" in donkere koraal-titelkleur
   - Body in koraal-sub kleur, met inline link naar /voor-werkgevers
   - Tweede alinea over coachteam
   - Twee knoppen: primair (petrol) "Maak vrijblijvend kennis" → /kennismaken, secundair (omrand) "Bekijk onze coaches" → /coaches
```

Alle teksten letterlijk uit de prompt/HTML overnemen.

### 4. Meta / SEO details voor het nieuwe artikel
- title: `Richting vinden in je loopbaan: weer weten wat je wilt | Vizier op Scherp` (volgens prompt — niet de generieke `${title} | Inzichten | ...` template)
- description: zoals in prompt
- canonical: `https://vizieropscherp.nl/inzichten/richting-vinden-in-je-loopbaan`
- og:image: `https://vizieropscherp.nl/og-image.png` + width 1200, height 630, alt "Vizier op Scherp, loopbaancoaching in Amsterdam, Haarlem en omgeving"
- twitter:card summary_large_image + title/description/image
- meta robots: index, follow
- JSON-LD BlogPosting zoals in prompt (inLanguage nl-NL, organization author/publisher, datePublished/dateModified 2026-06-19)
- Voor het bestaande werkgever-artikel laat ik de huidige head() ongemoeid (buiten scope van deze taak).

### 5. Wat NIET wijzigt
- Header / hoofdnavigatie: "Inzichten" blijft alleen in footer.
- Footer: ongewijzigd ("Inzichten" staat er al).
- Geen nieuwe routes, geen nieuwe componenten/bestanden, geen nieuwe dependencies, geen design-tokens toegevoegd.
- Geen wijziging aan het bestaande artikel `van-werven-naar-behouden`.
- Geen koppeling naar `/uwv-traject` op deze pagina.

## Acceptatiecheck

- `/inzichten` toont nu 2 kaarten: featured "Van werven naar behouden" (mint badge "Voor werkgevers") + nieuwe kaart met **gouden badge "Voor medewerkers"**, geen datum.
- `/inzichten/richting-vinden-in-je-loopbaan` rendert de medewerker-pagina met lichte hero, alle 7 inhoudssecties in juiste volgorde en register, werkende interne links naar `/voor-werkgevers`, `/kennismaken`, `/coaches`.
- Page title, canonical, OG/Twitter en JSON-LD komen overeen met de prompt.
- Geen verboden woorden, geen Noloc/NOBCO-claim op deze pagina, geen gedachtestreepjes in lopende tekst.
