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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { title: "sEU Salão de beleza — em Belo Horizonte MG" },
      { name: "description", content: "Salão de beleza no Bairro da Glória, Belo Horizonte MG. Cabelos, unhas, estética facial e corporal. Atendimento personalizado. Agende pelo WhatsApp." },
      { name: "author", content: "Salão de beleza Espaço de Beleza" },
      { name: "keywords", content: "salão de beleza Belo Horizonte, cabelos Belo Horizonte, manicure Belo Horizonte, estética Belo Horizonte, salão Bairro da Glória" },
      { property: "og:title", content: "Salão de beleza — Salão de Beleza no Centro, Belo Horizonte MG" },
      { property: "og:description", content: "Salão de beleza no Bairro da Glória, Belo Horizonte MG. Cabelos, unhas, estética facial e corporal. Atendimento personalizado. Agende pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Salão de Beleza" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Seu Salão de Beleza em Belo Horizonte MG" },
      { name: "twitter:description", content: "Salão de beleza no Centro, Belo Horizonte MG. Cabelos, unhas, estética facial e corporal. Atendimento personalizado. Agende pelo WhatsApp." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e2cd4e6e-c6e6-4e8e-af7a-9f936a8fc174/id-preview-5443593d--c5db0dc8-cbd3-4b38-82f9-f1883f2f0793.lovable.app-1780712328673.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e2cd4e6e-c6e6-4e8e-af7a-9f936a8fc174/id-preview-5443593d--c5db0dc8-cbd3-4b38-82f9-f1883f2f0793.lovable.app-1780712328673.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        name: "Seu Salão de Beleza",
        image: "",
        telephone: "+5531995251154",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av Amazonas, 486",
          addressLocality: "Belo Horizonte",
          addressRegion: "MG",
          postalCode: "00000-000",
          addressCountry: "BR",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "41" },
        openingHours: "Tu-Sa 09:00-19:00",
        sameAs: ["https://instagram.com/espacoaquitemcharme"],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
