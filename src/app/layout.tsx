import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Nunito_Sans, Sora } from "next/font/google";
import "./globals.css";
import AppProviders from "./app-providers";
import OfflineBanner from "./components/offline-banner";
import TopNav from "./components/top-nav";
import SiteFooter from "./components/site-footer";

const nunitoSans = Nunito_Sans({
  variable: "--font-body-sans",
  subsets: ["latin"],
  display: "swap",
});

const soraDisplay = Sora({
  variable: "--font-display-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-code-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Koydo — Learn Anything, Any Age, Any Language",
    template: "%s | Koydo",
  },
  description:
    "Free interactive learning platform for ages 3 to adult. Explore 200+ modules across math, science, language arts, coding, and career skills — in English and Spanish.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    siteName: "Koydo",
    title: "Koydo — Learn Anything, Any Age, Any Language",
    description:
      "Free interactive learning from Pre-K through College. Math, science, coding, career skills, and more — in English and Spanish.",
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koydo — Learn Anything, Any Age, Any Language",
    description:
      "Free interactive learning from Pre-K through College. 200+ modules in English and Spanish.",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    title: "Koydo",
    statusBarStyle: "default",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "education",
    "learning platform",
    "free learning",
    "math",
    "science",
    "coding",
    "language arts",
    "Pre-K",
    "homeschool",
    "bilingual education",
    "English",
    "Spanish",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Koydo",
        url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
        description:
          "Free interactive learning platform for ages 3 to adult. Math, science, coding, and career skills in English and Spanish.",
        sameAs: [],
      },
      {
        "@type": "WebSite",
        name: "Koydo",
        url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/modules?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://osnxbuusohdzzcrakavn.supabase.co" />
        <link rel="preconnect" href="https://js.stripe.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${nunitoSans.variable} ${soraDisplay.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <AppProviders>
          <OfflineBanner />
          <TopNav />
          {children}
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
