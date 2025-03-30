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
    images: [
      {
        url: "https://www.arhikadnv.com/arhicadnv.jpg",
        width: 1200,
        height: 630,
        alt: "Архікад-НВ – архітектурні послуги",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Архікад-НВ - Архітектурні послуги, оформлення документів",
    description:
      "Архікад-НВ – оформлення документів на будинок під ключ, будівельний паспорт, проєкти на будинки, МАФ, рекламні носії, топозйомка 1:500, геодезія, кадастрові документи.",
    images: ["https://www.arhikadnv.com/arhicadnv.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
