import type { Metadata } from "next";
import {
  Playfair_Display,
  Cinzel,
  Cinzel_Decorative,
  Italiana,
  Bodoni_Moda,
  Satisfy,
  Playball,
  Alex_Brush,
  Great_Vibes,
  Pinyon_Script,
  Allura,
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800", "900"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["700", "800", "900"],
});

const cinzelDeco = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-deco",
  weight: ["700"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["600", "700", "800"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: ["400"],
});

const playball = Playball({
  subsets: ["latin"],
  variable: "--font-playball",
  weight: ["400"],
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex-brush",
  weight: ["400"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon",
  weight: ["400"],
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-allura",
  weight: ["400"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fortune Gourmet",
  description: "Fortune Gourmet Specialties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cinzel.variable} ${cinzelDeco.variable} ${italiana.variable} ${bodoni.variable} ${satisfy.variable} ${playball.variable} ${alexBrush.variable} ${greatVibes.variable} ${pinyonScript.variable} ${allura.variable} ${cormorant.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
