import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RadioPlayer from "@/components/RadioPlayer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "TOP tv + | L'actualité en direct",
  description: "L'information de référence, rigoureuse et indépendante. Politique, Économie, Sport, Culture, et Société.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main style={{ minHeight: '60vh', paddingBottom: '80px' }}>
          {children}
        </main>
        <Footer />
        <RadioPlayer />
      </body>
    </html>
  );
}
