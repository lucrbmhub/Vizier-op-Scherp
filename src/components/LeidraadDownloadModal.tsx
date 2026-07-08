import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { submitLeidraadLead } from "@/lib/leads.functions";

const PDF_URL = "/De-loopbaangesprek-leidraad.pdf";

function triggerDownload() {
  const a = document.createElement("a");
  a.href = PDF_URL;
  a.download = "De-loopbaangesprek-leidraad.pdf";
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

type Status = "idle" | "submitting" | "success" | "error";

export function LeidraadDownloadModal({
  open,
  onOpenChange,
  pagina,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pagina: string;
}) {
  const submit = useServerFn(submitLeidraadLead);
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setErrorMsg(null);
      setEmail("");
      setWebsite("");
      // Initial focus on email field
      setTimeout(() => emailRef.current?.focus(), 50);
    }
  }, [open]);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (!emailValid) {
      setErrorMsg("Vul een geldig e-mailadres in.");
      return;
    }

    setStatus("submitting");
    try {
      const result = await submit({
        data: { email: email.trim(), pagina, website },
      });
      if (!result?.ok) throw new Error("server-not-ok");
      setStatus("success");
      triggerDownload();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-linnen-licht border border-mint-dof">
        <DialogHeader>
          <span className="inline-block text-xs font-medium border border-koraal text-koraal rounded-full px-3 py-1 tracking-wide self-start mb-2">
            Gratis download
          </span>
          <DialogTitle className="font-display text-2xl text-petrol">
            De loopbaangesprek-leidraad
          </DialogTitle>
          <DialogDescription className="text-petrol/75 text-[0.95rem]">
            Laat uw e-mailadres achter, dan ontvangt u de leidraad direct. We
            sturen u af en toe een relevant inzicht en u kunt zich altijd weer
            afmelden.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-2">
            <p className="text-petrol font-medium">
              Bedankt, uw download start nu.
            </p>
            <p className="text-petrol/70 text-sm mt-2">
              Start hij niet automatisch?{" "}
              <a
                href={PDF_URL}
                download
                className="text-koraal hover:underline font-medium"
              >
                Klik hier om te downloaden
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <label
                htmlFor="leidraad-email"
                className="block text-sm font-medium text-petrol mb-1.5"
              >
                E-mailadres
              </label>
              <input
                ref={emailRef}
                id="leidraad-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="naam@organisatie.nl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "submitting"}
                aria-invalid={errorMsg ? true : undefined}
                aria-describedby={errorMsg ? "leidraad-email-err" : undefined}
                className="w-full rounded-md border border-mint-dof bg-paper px-3 py-2.5 text-petrol placeholder:text-petrol/40 focus:outline-none focus:ring-2 focus:ring-koraal/40 focus:border-koraal"
              />
              {errorMsg && (
                <p
                  id="leidraad-email-err"
                  className="mt-1.5 text-sm text-koraal"
                >
                  {errorMsg}
                </p>
              )}
            </div>

            {/* Honeypot */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-10000px",
                width: 1,
                height: 1,
                overflow: "hidden",
              }}
            >
              <label htmlFor="leidraad-website">Website</label>
              <input
                id="leidraad-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <p className="text-xs text-petrol/60">
              Door te verzenden gaat u akkoord met ons{" "}
              <a
                href="/privacy"
                className="text-koraal hover:underline"
              >
                privacybeleid
              </a>
              .
            </p>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex justify-center items-center rounded-md bg-koraal px-6 py-3 text-base font-medium text-[color:var(--color-on-koraal-title)] hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting"
                ? "Bezig met verzenden…"
                : "Verstuur en download"}
            </button>

            {status === "error" && (
              <div className="text-sm text-koraal">
                <p>
                  Er ging iets mis. Probeer het opnieuw, of mail ons op{" "}
                  <a
                    href="mailto:hallo@vizieropscherp.nl"
                    className="underline"
                  >
                    hallo@vizieropscherp.nl
                  </a>
                  .
                </p>
                <p className="mt-1">
                  Of{" "}
                  <a
                    href={PDF_URL}
                    download
                    className="underline font-medium"
                  >
                    download de leidraad direct
                  </a>
                  .
                </p>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
