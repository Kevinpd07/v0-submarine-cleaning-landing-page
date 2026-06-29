import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WhatsAppProvider } from "@/components/whatsapp-context";
import { LanguageProvider } from "@/components/language-context";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Star Service | Professional Underwater Cleaning",
   description:
     "Professional underwater cleaning services for ships in Miami. Hull inspection, polishing, anti-fouling painting, propeller repairs and more.",
   keywords: [
     "Hull cleaning",
     "Marine",
     "Underwater",
     "Diver",
     "Dock",
     "Zincs replacement",
     "Sterndrive",
     "Zincs anode installation",
     "Boat",
     "Boat maintenance",
     "Underwater light",
     "Boat captain",
     "Boat bottom cleaning",
     "Propeller maintenance",
     "Sacrificial anodes",
   ],
   generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favi-icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favi-icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favi-icon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/favi-icon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <WhatsAppProvider>
            {children}
            <WhatsAppButton />
          </WhatsAppProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
