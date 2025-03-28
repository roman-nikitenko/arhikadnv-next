import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Архікад-НВ - Архітектурні послуги, оформлення документів",
  description:
    "Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.",
  applicationName: "Архікад-НВ",
  creator: "Banzaifun",
  openGraph: {
    title: "Архікад-НВ - Архітектурні послуги, оформлення документів",
    description:
      "Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.",
    url: "https://arhikadnv.com/",
    countryName: "Ukraine",
    images: "https://www.arhikadnv.com/arhicadnv.jpg",
    siteName: "arhikadnv",
    phoneNumbers: "+380980055404",
    emails: "arhicadnv@ukr.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "Архікад-НВ - Архітектурні послуги, оформлення документів",
    description:
      "Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.",
    images: "https://www.arhikadnv.com/arhicadnv.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <meta
        property="og:title"
        content="Архікад-НВ - Архітектурні послуги, оформлення документів"
      />
      <meta
        property="og:description"
        content="Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи."
      />
      <meta
        property="og:image"
        content="https://www.arhikadnv.com/arhicadnv.jpg"
      />
      <meta property="og:url" content="https://www.arhikadnv.com/" />
      <meta property="og:type" content="website" />
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
