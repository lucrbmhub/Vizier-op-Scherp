## Probleem
Op `/inzichten` hebben de badges "Voor medewerkers" en "Voor werkgevers & HR" nu dezelfde mint-kleur, omdat alle werkgevers-artikelen `badgeTone: "mint"` hebben en `badgeClassesFor` daardoor de mint-stijl gebruikt in plaats van de goud-stijl.

## Aanpassing (alleen visueel, in `src/routes/inzichten.index.tsx`)

1. **Werkgevers-badge** → goud omlijnd op linnen achtergrond:
   - `bg-linnen-licht text-petrol border border-goud`
2. **Medewerkers-badge** → ongewijzigd, zonder rand:
   - `bg-mint text-petrol` (geen border)
3. `badgeTone: "mint"` en `badgeLabel: "Voor werkgevers & HR"` op de werkgevers-artikelen verwijderen, zodat `badgeClassesFor` puur op `audience` differentieert en het label via `audienceLabel` consistent "Voor werkgevers" wordt (of we behouden het langere label — zie vraag hieronder).

## Open vraag
Wil je het werkgevers-label houden als **"Voor werkgevers & HR"** (langere variant), of mag het terug naar **"Voor werkgevers"** zoals `audienceLabel` standaard geeft? Ik ga er nu vanuit dat je **"Voor werkgevers & HR"** wilt houden — dan laat ik `badgeLabel` staan en verwijder alleen `badgeTone`.

Geen andere wijzigingen.
