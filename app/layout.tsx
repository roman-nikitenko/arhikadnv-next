import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

const WEB_URL = "https://arhikadnv-next.vercel.app/";
const WEB_NAME = "Архікад-НВ";
const WEB_TITLE = "Архікад-НВ - Архітектурні послуги, оформлення документів";
const WEB_DESCRIPTION =
  "Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.";
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
  keywords:
    "архітектурні послуги, оформлення документів, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка, геодезія, кадастрові документи, архітектура",
  metadataBase: new URL(WEB_URL),

  openGraph: {
    title: WEB_TITLE,
    description: WEB_DESCRIPTION,
    url: WEB_URL,
    countryName: "Ukraine",
    images: [
      {
        url: WEB_IMAGE,
        width: 1200,
        height: 630,
        alt: "Архікад-НВ – архітектурні послуги",
      },
    ],
    siteName: WEB_NAME,
    type: "website",
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380980055404",
      contactType: "customer service",
      areaServed: "UA",
      availableLanguage: "Ukrainian",
    },
  };
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LTC4VQYJB9"
        ></script>
        <script>
          
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-LTC4VQYJB9');
        </script>
      </head>
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
