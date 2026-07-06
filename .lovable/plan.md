
# Plan — Visuele restyle "De Stap"

Puur visueel. Geen wijzigingen aan copy, routes, secties of content. Alleen styling, markup-uitbreidingen waar decoratieve elementen dat vereisen (spans/svg's rond bestaande tekst), en één logo-vervanging.

## 1. Design tokens & fonts (`src/styles.css`)

- Voeg nieuwe kleur-tokens toe naast bestaande (bestaande hex-waarden matchen al grotendeels):
  - `--color-papier: #FAF6EF` (alias van linnen, semantisch voor nav/pagina-bg)
  - `--color-warm-card: #FBF1D7`
  - `--color-salie: #D8E5E2`, `--color-salie-dof: #BFD0CB`
  - `--color-goud-dof: #A8834B` (label op linnen)
  - `--color-footer-meta: #8FA6A0`
  - `--color-border-warm: #EDE5D4`, `--color-border-warm-2: #E4DCC8`, `--color-border-warm-3: #DED5C2`
  - `--color-body-light: #4A5550`, `--color-body-light-2: #3D4A44`
  - `--color-body-warm: #5A5442`
  - `--color-meta-mute: #7A7466`, `--color-meta-mute-2: #9A9284`
  - `--color-on-koraal-text: #3A241A` (voor knoppen)
- Bestaande koraal/petrol/goud/linnen/mint tokens blijven.
- Voeg Google Fonts `Lora` (400/500/600) en `Inter` (400/500) toe via `<link>` in `src/routes/__root.tsx` head (Tailwind v4-regel: geen `@import` van URL). Fonts blijven `--font-display: Lora` en `--font-sans: Inter`.
- Typo-schaal: hero H1 clamp(64,7vw,80) / lh 1.08 / Lora 500; H2 40–44 / lh 1.2; H3 21–28; body 15–16.5 / lh 1.65; eyebrow 12.5 / uppercase / tracking 0.18em.

## 2. Nieuw merkicoon "De Stap" (`src/components/layout/LogoMark.tsx`)

Vervang volledig — geen ruit-in-vierkant meer. Eén SVG met viewBox `0 0 120 120`:
- Path `M78 34 L104 60 L60 104 L16 60 L60 16 L62 18`, fill none, stroke-width 10, linecap/join round.
- Stroke = petrol op licht / linnen-licht op donker (via `light` prop).
- Vaste stipjes (kleur onafhankelijk van variant):
  - `<circle cx="60" cy="60" r="11" fill="#F2C879" />`
  - `<circle cx="70" cy="26" r="11" fill="#E8714A" />`
- Sizes: nav 34px, footer 30px, favicon vervangen (nieuwe `public/favicon.svg` met dezelfde vorm, monochroom linnen-licht op petrol).
- Woordmerk-variant: nieuwe kleine helper `<Wordmark />` — "vizier op scherp" lowercase Lora 500, waar de eerste "i" een koraal ruitje als punt krijgt (absolute-positioned span), afgesloten met goud rond stipje. Alleen gebruikt in Footer-tekstregel; nav houdt de bestaande titelcasing.

## 3. Herbruikbare merkelementen (`src/components/ui-blocks/index.tsx` uitbreiden)

Voeg nieuwe componenten toe, laat bestaande blijven:
- `<DiamondBullet />` — 7–8px koraal ruitje (span, rotate 45°).
- `<ValueBullet />` — 9–10px petrol-outline ruitje met goud dot binnenin (SVG).
- `<StepBullet />` — mini "De Stap" 15px SVG.
- `<Eyebrow>` uitbreiden: klein 7px koraal ruitje links + 9px gap + bestaande uppercase label.
- `<AccentDot />` — 10–12px goud rond stipje, inline; te plaatsen na laatste woord van hero H1's en CTA-titels.
- `<DiamondI text="…" />` — helper die eerste losstaande "i" in een string vervangt door span met stem + absolute-positioned koraal ruitje. Alleen op hero H1's.
- `<PullQuote>` — links een verticale kolom (koraal ruitje / 2px petrol lijn / goud dot), citaat Lora italic 22–24px.
- Kaart-varianten:
  - `<Card tone="feature">` — 2px petrol border, radius 14, met "opening" via een pseudo-element (`::before`: 46×4px in paginakleur, 40% vanaf links op de top-rand; `::after`: koraal 13px cirkel daar bovenop).
  - `<Card tone="soft">` — geen rand, warm-card of linnen vulling, radius 14, met linksboven-hangend 11px koraal ruitje + ring-shadow in kaartkleur (offset -7px, box-shadow `0 0 0 5px var(--card-bg)`).
  - `<Card tone="cta">` — dubbele gefacetteerde rand: buitenste div goud (2px), binnenste warm-card, beide `clip-path: polygon(...)` met ~22px afgesneden hoeken. Vervangt bestaande `CTASoft` visueel (zelfde API/props).
- `<PhotoFrame src alt anchor?>` — wrapper: `clip-path` polygon met rechtsboven ~46px diagonaal, ::after overlay `linear-gradient(160deg, rgba(31,61,59,.58), rgba(31,61,59,.24) 55%, rgba(232,113,74,.17))`, optioneel anchor-ruitje op een hoek met ring-shadow.

Alle bestaande roepplekken hoeven niet te wijzigen als de API compatibel blijft; waar tone-strings veranderen, mappen we oude naar nieuwe (bijv. `tone="linnen"` → visueel = soft).

## 4. Navigatie & footer

- `Header.tsx`: nieuwe `LogoMark` gebruiken. Actieve link krijgt `activeProps={{ className: "text-petrol font-medium border-b-2 border-koraal pb-0.5" }}`. Overige links blijven `text-petrol/70` regular. Primary-CTA-knop krijgt nieuwe knopstijl (zie §5).
- `Footer.tsx`: nieuwe `LogoMark variant="symbol" light`. Meta-regel (kvk/btw) krijgt kleur `--color-footer-meta`. Kolomkoppen blijven goud. Op één plek onder het logo de `<Wordmark />` variant tonen.

## 5. Knoppen (globaal via utility-classes)

Voeg twee utilities toe in `styles.css` (v4 `@utility`):
- `btn-primary`: `bg-koraal text-[#3A241A] font-medium rounded-[10px] px-[26px] py-[14px] hover:brightness-95 transition`.
- `btn-outline`: `border-[1.5px] border-petrol text-petrol rounded-[10px] px-[26px] py-[14px] bg-transparent hover:bg-petrol/5`. Op donker: variant `btn-outline-light` met salie border/text.

Vervang alleen classes op bestaande knop-elementen. Tekst niet aanraken.

## 6. Sectie-overlap

Waar een hero-foto of uitgelichte kaart onderaan een sectie staat (o.a. `/`, `/voor-werkgevers`, `/coaching-voor-mij` hero-fotoblokken): geef die `-mb-16 md:-mb-24` en de opvolgende sectie `pt-24 md:pt-32`. Geen structuurwijziging, alleen spacing-classes.

## 7. Toepassing per route (alleen class/markup-wraps, geen tekst)

Per pagina langs de heros en secties lopen om:
- Hero H1: eerste "i" via `<DiamondI>`; laatste woord gevolgd door `<AccentDot>`.
- Elke sectiekop: `<Eyebrow>` met ruitje ervoor.
- Bullet-lijsten omzetten naar juiste variant (standaard / kernwaarden / processtappen) door bullet-component in te voegen; `<li>`-tekst blijft ongewijzigd.
- Fotoblokken wrappen in `<PhotoFrame>`.
- Bestaande CTA-blokken (`CTAStrip` / `CTASoft`) intern hun styling laten evolueren naar de nieuwe kaart-CTA met dubbele rand + clip-path.
- Pull-quotes (getuigenissen) omhullen met `<PullQuote>`.

Routes die dit raakt: `src/routes/index.tsx`, `voor-werkgevers.tsx`, `coaching-voor-mij.tsx`, `uwv-traject.tsx`, `coaches.tsx`, `over-ons.tsx`, `kennismaken.tsx`, `leiderschap.tsx`, `inzichten.index.tsx`, `inzichten.$slug.tsx`.

## 8. Favicon

`public/favicon.svg` vervangen: viewBox 0 0 120 120, petrol vierkant (rx 22) achtergrond + De-Stap-pad in linnen-licht, met dezelfde twee stipjes (goud + koraal) — bewust wél in kleur zodat het merkteken herkenbaar blijft in tabbladen.

## 9. Verificatie

Na build: Playwright headless op `/`, `/voor-werkgevers`, `/coaching-voor-mij`, `/inzichten` en één artikel-detail; screenshots op 1280×1800 vergelijken op:
- nieuw logo in nav/footer,
- ruitje op eerste "i" in hero + goud stipje aan het eind,
- eyebrows met ruitje,
- kaart-varianten (feature-opening, soft hang-ruitje, CTA gefacet),
- fotoframes met diagonaal + duotone,
- actieve nav-link met koraal onderrand.

## Technische details

- Tailwind v4 (dit project): tokens in `@theme`, custom utilities via `@utility`, geen `tailwind.config.js`.
- Fonts via `<link>` in `__root.tsx` `head()` — nooit `@import` van remote URL in `styles.css`.
- Geen wijzigingen aan `routeTree.gen.ts`, supabase-integratie, of server functions.
- Geen nieuwe packages nodig.
- Alle nieuwe SVG-decoratie is inline (geen assets), zodat kleur/size in code te sturen is.
- `clip-path`-hoeken worden als CSS variabelen op de kaart gezet zodat responsief tuning simpel is.

## Buiten scope

- Copy, koppen, alt-teksten, meta-tags, JSON-LD, routes en contentstructuur blijven exact zoals nu.
- Geen animatie-toevoegingen (motion library) — puur statische styling.
