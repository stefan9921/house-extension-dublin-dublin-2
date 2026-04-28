import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://house-extension-dublin-dublin-2.vercel.app"),
  title: {
    default: "House Extension Dublin | Kitchen, Attic & Home Extensions Ireland",
    template: "%s | House Extension Dublin",
  },
  description:
    "House Extension Dublin builds kitchen extensions, attic conversions and home renovations across Dublin and Ireland. Free quotes, fixed prices, fully insured. Call +353 1 230 8892.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${jakarta.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
