## Doel

`src/routes/voor-werkgevers.tsx` exact laten overeenkomen met `voor-werkgevers.html`. Alleen tekstuele/structurele afwijkingen herstellen; design tokens, fonts, gedeelde Header/Footer en andere routes blijven onaangetast.

## Geconstateerde verschillen

1. **Hero — 3e meta-stat**
   - Nu: `Noloc & NOBCO / gecertificeerde coaches`
   - HTML: `Gecertificeerde coaches / met een brede opleidingsachtergrond`

2. **Werkwijze-sectie volledig anders**
   - Nu: kop "Vijf stappen, van kennismaking tot evaluatie" + chips-rij met losse labels (Kennismaking / Intake met de medewerker / Matching … / Begeleiding / Evaluatie) + andere intro.
   - HTML: kop **"Vijf stappen, en wat wij bij elke stap regelen"**, intro **"Of het nu om één medewerker gaat of om een coachingpool: u heeft er nauwelijks omkijken naar. Wij verzorgen elke stap, van de match tot de facturatie, en houden u op procesniveau op de hoogte."**, en een verticale `<ol>` met 5 items die elk een nummer + **strong-titel** + beschrijving hebben:
     - 01 Kennismaking en vraag — "Wij verhelderen uw vraag, de context en het doel. U geeft de aanleiding, wij pakken de rest op."
     - 02 Matching binnen vijf werkdagen — "Wij selecteren een passende coach op vraag, vakgebied en persoon. Geen wachtlijst, geen anonieme database."
     - 03 Persoonlijke kennismaking — "De medewerker ontmoet de coach en kiest mee, met heldere privacyafspraken vooraf. Klikt het niet, dan regelen wij een ander."
     - 04 Begeleiding — "De coach werkt met de medewerker aan concrete stappen. U krijgt terugkoppeling op procesniveau, de inhoud blijft vertrouwelijk."
     - 05 Evaluatie en afronding — "Wij sluiten af met een korte evaluatie en regelen de administratie. Eén aanspreekpunt, één factuur."

3. **Kwaliteit-sectie — 1e stat**
   - Nu: `Noloc & NOBCO / elke coach is gecertificeerd en geregistreerd`
   - HTML: `Gecertificeerd / met een brede opleidingsachtergrond`

4. **Leadmagnet-band ontbreekt** (tussen FAQ en CTA)
   - Toevoegen: lichte kaart met `goud`-rand, label "Gratis voor HR", kop "Nog niet toe aan een gesprek?", tekst "Download de loopbaangesprek-leidraad: een praktische gids om zelf het goede gesprek te voeren met uw medewerkers, met voorbeeldvragen en do's en don'ts.", knop "Download de leidraad" → `<a href="/loopbaangesprek-leidraad.pdf" download>` met petrol-achtergrond.

## Wat ongewijzigd blijft

- Alle andere teksten, koppen, CTA's en sectievolgorde komen al overeen en blijven zoals ze zijn.
- Hero, situaties (6 kaarten + slotzin), aanbod (3 kaarten + coachingpool-uitlicht), vertrouwen-duo, kwaliteit-intro + testimonials, info-balk medewerkers, FAQ (6 items), CTA-strip: niets aanpassen behalve de hierboven genoemde punten.
- Head/SEO, JSON-LD, canonical, og-tags: blijven zoals ze zijn (matchen al).
- Gedeelde Header, Footer, design tokens, fonts: ongemoeid.

## Bestand

- `src/routes/voor-werkgevers.tsx` — vier puntsgewijze edits via `code--line_replace`.
