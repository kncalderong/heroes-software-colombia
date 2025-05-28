import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${manrope.className}} antialiased`}>{children}</body>
    </html>
  );
}
