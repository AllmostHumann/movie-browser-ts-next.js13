import "./globals.css";
import Providers from "@/utils/provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/app/components/Header/Header";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movies browser",
  description: "Movies browser app created with Next.js 13 and TypeScript",
  keywords: [
    "Movies browser",
    "TypeScript",
    "TS",
    "Next.js 13",
    "Next.js",
    "Next",
    "13",
  ],
  openGraph: {
    title: "Movies Browser",
    description: "Movies browser app created with Next.js 13 and TypeScript",
    url: "https://movie-browser-ts-next-js13.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
