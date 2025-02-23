import { Open_Sans, Geist, Geist_Mono, Handlee } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  title: {
    default: "Christ Disciple Mission Church",
    template: "%s | Christ Disciple Mission Church",
  },
  description:
    "Christ Disciple Mission Church – Growing in faith like a mustard seed, spreading Christ’s love through worship, discipleship, and service.",
  openGraph: {
    title: "Christ Disciple Mission Church",
    description: "Growing in faith like a mustard seed.",
    images: [
      {
        url: "/open-graph/cdmc-opengraph.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overscroll-none bg-deepBlack">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${handlee.variable} ${openSans.variable} antialiased overflow-x-hidden flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
