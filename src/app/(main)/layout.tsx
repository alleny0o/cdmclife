import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
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
        url: "/open-graph/open-graph.jpg",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
