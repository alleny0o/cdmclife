import { Open_Sans, Geist, Geist_Mono, Handlee } from "next/font/google";
import "./globals.css";

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
