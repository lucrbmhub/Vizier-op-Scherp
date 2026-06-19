## Probleem

`src/routes/inzichten.tsx` + `src/routes/inzichten.$slug.tsx` maken samen een parent/child-paar in TanStack Router. De parent (`inzichten.tsx`) hoort dan alleen `<Outlet />` te renderen, maar rendert nu de volledige overzichtspagina. Daardoor blijft de overzichtspagina zichtbaar op `/inzichten/{slug}` en lijkt "Lees verder" niet te werken — de URL klopt, de detailpagina rendert wel maar wordt nooit getoond.

## Oplossing

Het overzicht verplaatsen naar een eigen index-route, zodat `/inzichten` een echte leaf is en `/inzichten/$slug` los staat.

### Wijzigingen

1. **Hernoemen**: `src/routes/inzichten.tsx` → `src/routes/inzichten.index.tsx`.
   - De inhoud (component + `head()` + JSON-LD + `ARTICLES`) blijft 1-op-1 hetzelfde.
   - `createFileRoute("/inzichten")` blijft hetzelfde — de generator mapt `inzichten.index.tsx` ook naar `/inzichten`.
2. **`src/routes/inzichten.$slug.tsx`**: ongewijzigd. Blijft `/inzichten/$slug`.
3. **`src/routeTree.gen.ts`**: wordt automatisch opnieuw gegenereerd door de Vite-plugin — niet handmatig aanpassen.

### Waarom deze aanpak en niet "voeg `<Outlet />` toe aan `inzichten.tsx`"

Een `<Outlet />` toevoegen zou de overzichtspagina én de detailpagina tegelijk renderen op `/inzichten/{slug}`. Dat willen we niet — de detailpagina moet de volledige pagina zijn. Door de overzichtspagina naar `inzichten.index.tsx` te verplaatsen wordt het een sibling-leaf van de slug-route in plaats van een parent, en rendert elke URL exact één pagina.

### Acceptatiecheck

- `/inzichten` toont nog steeds de 3 kaarten (featured + 2 recent).
- Klik op "Lees verder" bij "Richting vinden in je loopbaan" → toont de medewerker-artikel-layout (lichte hero, signalen-kader, koraal CTA).
- Klik op "Lees verder" bij "Energie en motivatie in werk" → toont dat artikel.
- Klik op de uitgelichte kaart → toont "Van werven naar behouden".
- Niet-bestaande slug → bestaande `notFoundComponent` blijft werken.
