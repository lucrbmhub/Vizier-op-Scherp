import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linnen px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-petrol">404</h1>
        <h2 className="mt-4 font-display text-xl text-petrol">Pagina niet gevonden</h2>
        <p className="mt-2 text-sm text-petrol/70">
          Deze pagina bestaat niet of is verplaatst.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-koraal px-4 py-2 text-sm font-medium text-[#4A1B0C]"
          >
            Naar home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-linnen px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl text-petrol">Deze pagina laadde niet</h1>
        <p className="mt-2 text-sm text-petrol/70">
          Er ging iets mis. Probeer opnieuw of ga terug naar de homepagina.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-koraal px-4 py-2 text-sm font-medium text-[#4A1B0C]"
          >
            Probeer opnieuw
          </button>
          <a
            href="/"
            className="rounded-full border border-petrol/20 bg-linnen-licht px-4 py-2 text-sm text-petrol"
          >
            Naar home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vizier op Scherp — Loopbaancoaching Amsterdam & Haarlem" },
      {
        name: "description",
        content:
          "Loopbaancoaching en ontwikkelpartner voor werkgevers, medewerkers en UWV-cliënten in Amsterdam, Haarlem en omgeving.",
      },
      { property: "og:site_name", content: "Vizier op Scherp" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Vizier op Scherp — Loopbaancoaching Amsterdam & Haarlem" },
      { name: "twitter:title", content: "Vizier op Scherp — Loopbaancoaching Amsterdam & Haarlem" },
      { name: "description", content: "Vizier Site Foundation builds the core structure for a career coaching agency website." },
      { property: "og:description", content: "Vizier Site Foundation builds the core structure for a career coaching agency website." },
      { name: "twitter:description", content: "Vizier Site Foundation builds the core structure for a career coaching agency website." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab7f664a-2872-4c84-9e2a-1672e0c741cf/id-preview-128013eb--3534c832-3967-4a9d-8684-855c0b04f3f5.lovable.app-1781683598012.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab7f664a-2872-4c84-9e2a-1672e0c741cf/id-preview-128013eb--3534c832-3967-4a9d-8684-855c0b04f3f5.lovable.app-1781683598012.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:wght@500;600&family=Inter:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="skip-link">Direct naar inhoud</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
