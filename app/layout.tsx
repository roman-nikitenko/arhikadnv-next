import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

const WEB_URL = "https://arhikadnv.com/";
const WEB_NAME = "Архікад НВ";
const WEB_TITLE =
  "Архікад НВ - Архітектурні послуги в Бучі, оформлення документів";
const WEB_DESCRIPTION =
  "Архікад НВ – архітектурні послуги в Бучі та Київській області: документи на будинок під ключ, будпаспорт, проєкти, МАФ, топозйомка, геодезія";
const WEB_IMAGE = WEB_URL + "arhicadnv.jpg";
const WEB_EMAIL = "arhicadnv@ukr.net";

export const metadata: Metadata = {
  title: WEB_TITLE,
  description: WEB_DESCRIPTION,
  applicationName: WEB_NAME,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "архітектурні послуги в Бучі",
    "оформлення документів Буча",
    "будівельний паспорт Буча",
    "проєкти на будинки Буча",
    "МАФ Буча",
    "рекламні носії Буча",
    "топозйомка Буча",
    "геодезія Буча",
    "кадастрові документи Буча",
    "архітектура Буча",
    "архітектурне проектування Буча",
    "будівництво Буча",
    "дизайн інтер'єру Буча",
    "реконструкція Буча",
    "ремонт Буча",
    "архітектурна студія Буча",
    "проектна документація Буча",
    "земельні роботи Буча",
    "геодезичні послуги Буча",
    "кадастровий облік Буча",
    "архітектурні рішення Буча",
    "будівельні послуги Буча",
    "проектування будинків Буча",
    "архітектурний проект Буча",
    "дизайн проект Буча",
  ],
  metadataBase: new URL(WEB_URL),

  openGraph: {
    title: WEB_TITLE,
    description: WEB_DESCRIPTION,
    url: WEB_URL,
    countryName: "Ukraine",
    locale: "uk_UA",
    siteName: WEB_NAME,
    type: "website",
    images: [
      {
        url: WEB_IMAGE,
        width: 1200,
        height: 630,
        alt: "Архікад НВ – архітектурні послуги в Бучі",
      },
    ],
  },

  creator: "Banzaifun",

  twitter: {
    card: "summary_large_image",
    title: WEB_TITLE,
    description: WEB_DESCRIPTION,
    images: WEB_IMAGE,
  },
  verification: {
    google: "google",
    other: {
      me: [WEB_EMAIL, WEB_URL],
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: WEB_NAME,
    url: WEB_URL,
    logo: WEB_IMAGE,
    description: WEB_DESCRIPTION,
    keywords: [
      "архітектурні послуги в Бучі",
      "оформлення документів Буча",
      "будівельний паспорт Буча",
      "проєкти на будинки Буча",
      "МАФ Буча",
      "рекламні носії Буча",
      "топозйомка Буча",
      "геодезія Буча",
      "кадастрові документи Буча",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Буча",
      addressRegion: "Київська область",
      addressCountry: "UA",
    },
    areaServed: {
      "@type": "City",
      name: "Буча",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Буча",
        addressRegion: "Київська область",
        addressCountry: "UA",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380980055404",
      contactType: "customer service",
      areaServed: "Буча",
      availableLanguage: "Ukrainian",
      email: WEB_EMAIL,
    },
    sameAs: [WEB_URL],
  };
  return (
    <html lang="uk">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={WEB_DESCRIPTION} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LTC4VQYJB9"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'G-LTC4VQYJB9');
            `,
          }}
        ></script>
      </head>
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
