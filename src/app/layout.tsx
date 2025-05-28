import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";

const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heroes Software Colombia",
  description: "Heroes Software Colombia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
