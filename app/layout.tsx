import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/context/Context";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Архікад-НВ - Архітектурні послуги, оформлення документів",
  description: "Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.",
  applicationName: 'Архікад-НВ',
  creator: 'Banzaifun',
  openGraph: {
    title: 'Архікад-НВ - Архітектурні послуги, оформлення документів',
    description: 'Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.',
    url: 'https://arhikadnv.com/',
    countryName: 'Ukraine',
    images: 'https://www.arhikadnv.com/arhicadnv.jpg',
    siteName: 'arhikadnv',
    phoneNumbers: '+380980055404',
    emails: 'arhicadnv@ukr.net',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Архікад-НВ - Архітектурні послуги, оформлення документів',
    description: 'Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.',
    images: 'https://www.arhikadnv.com/arhicadnv.jpg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
