## Doel
Vervang de letter-placeholders van de coaches door de geüploade portretfoto's, op zowel de homepage als `/coaches`.

## Stappen

1. **Upload de 5 foto's als Lovable Assets** (CDN) vanuit `/mnt/user-uploads/`:
   - `maaike.jpg`, `lianne.jpg`, `zelah.jpg`, `floor.jpg`, `luc.jpg` in `src/assets/`
   - Elk via `lovable-assets create` → `.asset.json` pointer (geen binaries in repo).

2. **`src/routes/coaches.tsx`** — vervang de cirkel met initiaal door een ronde portretfoto.
   - Voeg `photo` veld toe aan elke coach in de `coaches` array, gekoppeld aan de asset-URL.
   - Vervang de `w-20 h-20 ... initial` div door `<img src={c.photo} alt={c.name} className="w-20 h-20 rounded-full object-cover ..." />`. Verwijder `initial` veld.
   - Stijl en layout van de kaart blijven verder ongewijzigd.

3. **`src/routes/index.tsx`** (sectie "Ons coachnetwerk", regels 414–435) — vervang initiaalcirkel door foto.
   - Wijzig de array van `[initial, name, role]` naar `[photo, name, role]`.
   - Vervang de cirkel-div door `<img>` (zelfde 62×62, `rounded-full object-cover`).
   - Let op: homepage toont nu alleen 4 coaches (Maaike, Lianne, Floor, Luc) zonder Zelah. Ik **laat de selectie en volgorde ongewijzigd** — alleen de placeholders worden vervangen. Als Zelah er ook bij moet, hoor ik dat graag.

## Niet veranderen
- Teksten, kleuren, layout, kaartranden.
- Geen wijzigingen aan andere pagina's (`/over-ons` etc.).
