import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from "./component/BootstrapClient";
import "./globals.css";
import "./responsive.css";
// import "./responsive.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Produk Katalog",
  description: "Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'${geistSans.variable} ${geistMono.variable} antialiased'}
      >
        {children}
        <BootstrapClient></BootstrapClient>
      </body>
    </html>
  );
}
