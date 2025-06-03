import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "REPROMOSELLE - Imprimerie, PLV et Signalétique à Metz",
  description: "Imprimeur numérique grand format depuis plus de 20 ans, spécialisé en imprimerie, PLV et signalétique à Metz, en Moselle et au Luxembourg.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
