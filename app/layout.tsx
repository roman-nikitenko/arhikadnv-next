import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

const WEB_URL = "https://arhikadnv-next.vercel.app/";
const WEB_NAME = "Архікад-НВ";
const WEB_TITLE = "Архікад-НВ - Архітектурні послуги, оформлення документів";
const WEB_DESCRIPTION = "Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.";
const WEB_IMAGE = WEB_URL + 'arhicadnv.jpg'

export const metadata: Metadata = {
  title: WEB_TITLE,
  description: WEB_DESCRIPTION,
  applicationName: WEB_NAME,
  robots: "index, follow",
  keywords: "архітектурні послуги, оформлення документів, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка, геодезія, кадастрові документи, архітектура",

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
    description: WEB_DESCRIPTION ,
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
      </head>
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
