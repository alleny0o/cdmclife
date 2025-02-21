import type { Metadata } from "next";
import { Open_Sans, Geist, Geist_Mono, Handlee } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const handlee = Handlee({
  variable: "--font-handlee",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Christ Disciple Mission Church",
  description:
    "Join a community that lives out the teachings of Christ through dynamic ministries, missions, and outreach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overscroll-none">
      <body className={`${geistSans.variable} ${geistMono.variable} ${handlee.variable} ${openSans.variable} antialiased overflow-x-hidden flex-col`}>
        <Header />
        <main className="relative min-h-full w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
