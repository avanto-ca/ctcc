import Header from '@/app/components/Header';
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CTCC| Corporate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />{children}</body>
    </html>
  );
}