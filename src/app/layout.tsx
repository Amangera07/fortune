import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Bodoni+Moda:opsz,wght@6..96,600;6..96,700;6..96,800&family=Cinzel+Decorative:wght@700&family=Cinzel:wght@700;800;900&family=Cormorant+Garamond:wght@600;700&family=Great+Vibes&family=Italiana&family=Montserrat:wght@400;500;600;700&family=Pinyon+Script&family=Playball&family=Playfair+Display:wght@700;800;900&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
