import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
