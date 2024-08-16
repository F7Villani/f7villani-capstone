import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "@next/font/google"

export const metadata: Metadata = {
  title: "Felipe Villani",
};

const inter = Inter({
  weight: ['100','200','300','400','500','600','700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
