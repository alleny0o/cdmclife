import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ToastProvider from "@/components/ToastProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen flex flex-col">{children}</main>
      <Footer />
      <ToastProvider />
    </>
  );
}
