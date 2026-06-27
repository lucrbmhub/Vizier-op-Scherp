Maak de drie aanbod-kaarten op `/voor-werkgevers` even hoog.

**Wijziging in `src/routes/voor-werkgevers.tsx` (regels 252–323):**

1. Regel 252: verwijder `md:items-end` uit de grid-classes, zodat de kaarten standaard `stretch` worden (gelijke hoogte per rij).
2. Regel 277: verwijder de extra `md:pb-14` van de petrol-kaart (stap 2).
3. Regel 300: verwijder de extra `md:pb-20` van de koraal-kaart (stap 3).

Doordat elke kaart al `flex flex-col` is met `mt-auto` op het laatste label, blijft de onderste regel netjes onderaan staan. Resultaat: stap 1, 2 en 3 zijn op desktop precies even hoog.