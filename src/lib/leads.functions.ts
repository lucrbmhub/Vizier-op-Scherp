import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const WORKBOOKS = {
  "wat-wil-ik": {
    title: "Wat wil ik nu eigenlijk?",
    path: "/werkboek-wat-wil-ik.pdf",
  },
  "vind-werk": {
    title: "Vind werk via mensen, niet via vacatures",
    path: "/werkboek-vind-werk-via-mensen.pdf",
  },
  "aan-het-roer": {
    title: "Aan het roer van je werk",
    path: "/werkboek-aan-het-roer.pdf",
  },
} as const;

export type WorkbookKey = keyof typeof WORKBOOKS;
export const workbooks = WORKBOOKS;

const inputSchema = z.object({
  email: z.string().trim().email().max(320),
  pagina: z.string().trim().max(200).optional(),
  website: z.string().max(200).optional(), // honeypot
});

export const submitLeidraadLead = createServerFn({ method: "POST" })
  .validator((data) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    // Silently succeed on honeypot — don't tip off bots.
    if (data.website && data.website.length > 0) {
      return { ok: true, mail: false };
    }

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        auth: {
          storage: undefined,
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );

    const { error: insertError } = await supabase.from("leads").insert({
      email: data.email,
      bron: "leidraad-download",
      pagina: data.pagina ?? null,
    });

    if (insertError) {
      console.error("[leads] insert failed", insertError);
      throw new Error("Kon lead niet opslaan");
    }

    // Notify via Resend through the Lovable connector gateway.
    let mailSent = false;
    const lovableKey = process.env.LOVABLE_API_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    if (lovableKey && resendKey) {
      try {
        const when = new Date().toLocaleString("nl-NL", {
          timeZone: "Europe/Amsterdam",
        });
        const escHtml = (s: string) =>
          s
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        const res = await fetch(
          "https://connector-gateway.lovable.dev/resend/emails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": resendKey,
            },
            body: JSON.stringify({
              from: "Vizier op Scherp <noreply@vizieropscherp.nl>",
              to: ["hallo@vizieropscherp.nl"],
              reply_to: data.email,
              subject: `Nieuwe download leidraad: ${data.email}`,
              html: `<p>Er is een nieuwe download van de loopbaangesprek-leidraad.</p>
<ul>
  <li><strong>E-mailadres:</strong> ${escHtml(data.email)}</li>
  <li><strong>Datum/tijd:</strong> ${escHtml(when)}</li>
  <li><strong>Bron:</strong> De loopbaangesprek-leidraad</li>
  <li><strong>Pagina:</strong> ${escHtml(data.pagina ?? "(onbekend)")}</li>
</ul>`,
            }),
          },
        );
        if (!res.ok) {
          console.error(
            "[leads] resend failed",
            res.status,
            await res.text().catch(() => ""),
          );
        } else {
          mailSent = true;
        }
      } catch (err) {
        console.error("[leads] resend error", err);
      }
    } else {
      console.warn("[leads] LOVABLE_API_KEY or RESEND_API_KEY missing");
    }

    return { ok: true, mail: mailSent };
  });

const werkboekInputSchema = z.object({
  email: z.string().trim().email().max(320),
  workbook: z.enum(["wat-wil-ik", "vind-werk", "aan-het-roer"]),
  pagina: z.string().trim().max(200).optional(),
  website: z.string().max(200).optional(),
});

export const submitWerkboekLead = createServerFn({ method: "POST" })
  .validator((data) => werkboekInputSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      return { ok: true, mail: false };
    }

    const wb = WORKBOOKS[data.workbook];

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        auth: {
          storage: undefined,
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );

    const { error: insertError } = await supabase.from("leads").insert({
      email: data.email,
      bron: `werkboek-${data.workbook}`,
      pagina: data.pagina ?? null,
    });

    if (insertError) {
      console.error("[leads] werkboek insert failed", insertError);
      throw new Error("Kon lead niet opslaan");
    }

    let mailSent = false;
    const lovableKey = process.env.LOVABLE_API_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    if (lovableKey && resendKey) {
      try {
        const when = new Date().toLocaleString("nl-NL", {
          timeZone: "Europe/Amsterdam",
        });
        const escHtml = (s: string) =>
          s
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        const res = await fetch(
          "https://connector-gateway.lovable.dev/resend/emails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${lovableKey}`,
              "X-Connection-Api-Key": resendKey,
            },
            body: JSON.stringify({
              from: "Vizier op Scherp <noreply@vizieropscherp.nl>",
              to: ["hallo@vizieropscherp.nl"],
              reply_to: data.email,
              subject: `Nieuwe download werkboek: ${wb.title}`,
              html: `<p>Er is een nieuw werkboek gedownload.</p>
<ul>
  <li><strong>Werkboek:</strong> ${escHtml(wb.title)}</li>
  <li><strong>E-mailadres:</strong> ${escHtml(data.email)}</li>
  <li><strong>Datum/tijd:</strong> ${escHtml(when)}</li>
  <li><strong>Bron:</strong> werkboek-${escHtml(data.workbook)}</li>
  <li><strong>Pagina:</strong> ${escHtml(data.pagina ?? "(onbekend)")}</li>
</ul>`,
            }),
          },
        );
        if (!res.ok) {
          console.error(
            "[leads] werkboek resend failed",
            res.status,
            await res.text().catch(() => ""),
          );
        } else {
          mailSent = true;
        }
      } catch (err) {
        console.error("[leads] werkboek resend error", err);
      }
    } else {
      console.warn("[leads] LOVABLE_API_KEY or RESEND_API_KEY missing");
    }

    return { ok: true, mail: mailSent, path: wb.path, title: wb.title };
  });

