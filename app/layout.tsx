import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: {
    default: "Aurora Bistro | Современный ресторан авторской кухни",
    template: "%s | Aurora Bistro"
  },
  description:
    "Aurora Bistro - премиальный ресторан авторской кухни, сезонное меню, уютная атмосфера и онлайн-бронирование столиков.",
  keywords: ["ресторан", "авторская кухня", "бронирование", "меню", "Aurora Bistro"],
  metadataBase: new URL("https://aurora-bistro.example"),
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Aurora Bistro",
    description: "Современный ресторан авторской кухни для особенных вечеров.",
    type: "website",
    locale: "ru_RU"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
