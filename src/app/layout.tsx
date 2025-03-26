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
    "Fall in Love, Again and Again \u2764\uFE0F\u200D\uD83D\uDD25",
  openGraph: {
    title: "Christ Disciple Mission Church",
    description: "Fall in Love, Again and Again \u2764\uFE0F\u200D\uD83D\uDD25",
    images: [
      {
        url: "/open-graph/cdmc-opengraph.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Christ Disciple Mission Church",
    "CDMC",
    "church in Gaithersburg MD",
    "Christian church Maryland",
    "Bible study Gaithersburg",
    "family church in Gaithersburg",
    "non-denominational church near me",
    "Sunday worship Montgomery County",
    "Christian youth group Gaithersburg",
    "church near 20878",
    "faith community Glen Road",
    "Christian fellowship Gaithersburg",
    "church near Darnestown MD",
    "join a church in Maryland",
    "worship service Gaithersburg",
    "mission church in Maryland",
    "Bible-believing church near Potomac MD",
    "faith gathering Gaithersburg",
    "Sunday sermon near Gaithersburg",
    "churches welcoming new members"
  ],  
  robots: {
    "max-image-preview": "none",
  }
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
