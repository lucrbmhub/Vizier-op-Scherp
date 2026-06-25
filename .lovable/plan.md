# Plan: e-mailcapture vóór download leidraad

## Aanpak versus de prompt
De prompt vraagt om Supabase Edge Functions, maar dit project draait op TanStack Start. Volgens de projectstandaard gebruiken we voor app-interne logica `createServerFn` (geen edge functions). De rest van de prompt (modal, DB-opslag, Resend-mail, auto-download, toegankelijkheid) volg ik letterlijk.

Resend wordt via de Lovable connector-gateway aangeroepen — jij koppelt Resend later; tot die tijd faalt de mail-stap netjes (lead wordt wél opgeslagen, modal toont fout met fallback-downloadlink).

## Stappen

### 1. PDF in public
- Kopieer `De-loopbaangesprek-leidraadv2.pdf` naar `public/De-loopbaangesprek-leidraad.pdf` (URL: `/De-loopbaangesprek-leidraad.pdf`).
- Update bestaande `<a href="/loopbaangesprek-leidraad.pdf">` links naar dit pad (worden alsnog vervangen door modal-trigger, maar fallback link in modal gebruikt deze URL).

### 2. Database
Migratie `leads` tabel:
- `id uuid pk default gen_random_uuid()`, `email text not null`, `bron text not null`, `pagina text`, `created_at timestamptz default now()`
- GRANT INSERT op `public.leads` aan `anon` + `authenticated`; GRANT ALL aan `service_role`
- RLS aan, policy: `INSERT to anon, authenticated WITH CHECK (true)` — geen SELECT-policy (alleen service_role kan lezen)

### 3. Server function
`src/lib/leads.functions.ts` — `createServerFn({ method: 'POST' })`:
- `inputValidator` met Zod: `email` (geldig), `pagina` (string, optioneel), honeypot `website` (moet leeg zijn, anders stille succes-respons)
- Handler:
  1. Insert in `leads` via server-publishable Supabase client (RLS-policy staat anon insert toe)
  2. Resend-aanroep via gateway `https://connector-gateway.lovable.dev/resend/emails` met `LOVABLE_API_KEY` + `RESEND_API_KEY`. Onderwerp + body + `reply_to` zoals gespecificeerd. Bij ontbrekende keys of fout: log en retourneer `{ ok: true, mail: false }` (lead is veilig opgeslagen)
  3. Bij DB-fout: retourneer `{ ok: false }` en HTTP 500

### 4. Modal-component
`src/components/LeidraadDownloadModal.tsx` — gebouwd op shadcn `Dialog`:
- Eyebrow "Gratis download" (koraal-stijl), titel in Lora "De loopbaangesprek-leidraad", uitleg-tekst
- Form: label "E-mailadres", input `type=email required`, honeypot `name="website"` met `sr-only` + `tabIndex={-1}` + `autoComplete="off"`
- Inline foutmelding, koraal-knop "Verstuur en download" (laadtoestand "Bezig met verzenden…")
- Privacyregel met link naar `/privacy`
- Bij succes: kort "Bedankt, uw download start nu." + programmatische download via tijdelijk `<a download>`
- Bij fout: foutmelding + zichtbare fallback-downloadlink
- shadcn `Dialog` regelt `role=dialog`, `aria-modal`, focus-trap, Escape, klik-buiten, focus-restore. Initial focus op email-veld via `autoFocus`. Reduced motion via bestaande Tailwind motion-safe utilities.

### 5. Triggers
Op homepage (`src/routes/index.tsx` regel ~534) en werkgeverspagina (`src/routes/voor-werkgevers.tsx` regel ~586): vervang `<a href=…>Download de leidraad</a>` door een `<button>` die de modal opent. State via lokale `useState` per route, of via een gedeelde wrapper-component die de knop + modal samen rendert (kies wrapper voor DRY). `pagina`-veld wordt doorgegeven (`"/"` of `"/voor-werkgevers"`).

De prompt noemt ook "inzichten-pagina"; daar staat momenteel geen leidraad-CTA. Niet toegevoegd, tenzij je dat alsnog wilt.

## Handmatige stappen voor jou
1. Resend connector koppelen in Lovable (jij doet dit later).
2. In Resend: domein `vizieropscherp.nl` verifiëren en `noreply@vizieropscherp.nl` als afzender gebruiken.
3. Eventueel een `/privacy`-pagina toevoegen (link werkt nu naar 404 tot die bestaat).

## Niet in scope
- Geen `/privacy` pagina aanmaken (placeholder-link).
- Geen toevoeging van leidraad-CTA aan inzichten-pagina (stond er nog niet).
