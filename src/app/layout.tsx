import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { manrope } from "./fonts";

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
      <body className="antialiased bg-primary">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
