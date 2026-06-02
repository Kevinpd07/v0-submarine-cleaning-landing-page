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
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
