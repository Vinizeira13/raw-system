import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RAW SYSTEM — Software cru. Sistemas de verdade.",
  description:
    "Sites, lojas virtuais, sistemas internos e aplicativos feitos do zero para a sua empresa. Sem template pronto, sem enrolação.",
  metadataBase: new URL("https://raw-system.vercel.app"),
  openGraph: {
    title: "RAW SYSTEM — Software cru. Sistemas de verdade.",
    description:
      "Sites, lojas virtuais, sistemas internos e aplicativos feitos do zero para a sua empresa.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${mono.variable} ${display.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
