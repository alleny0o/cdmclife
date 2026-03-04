import { headers } from "next/headers";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ToastProvider from "@/components/ToastProvider";
import { client } from "@/sanity/lib/client";

async function getTransparentHeader(pathname: string): Promise<boolean> {
  const slug = pathname === "/" ? null : pathname.replace(/^\//, "").split("/")[0];

  if (slug === null) {
    const page = await client.fetch(
      `*[_type == "page" && isHomePage == true][0]{ transparentHeader }`,
      {},
      { next: { revalidate: 30 } }
    );
    return page?.transparentHeader ?? false;
  }

  const page = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{ transparentHeader }`,
    { slug },
    { next: { revalidate: 30 } }
  );
  return page?.transparentHeader ?? false;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  const isTransparent = await getTransparentHeader(pathname);

  return (
    <>
      <Header isTransparent={isTransparent} />
      <main className="w-full min-h-screen flex flex-col">{children}</main>
      <Footer />
      <ToastProvider />
    </>
  );
}
