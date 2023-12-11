"use client";

import Footer from "@/app/_components/Footer";
import TopMenu from "@/app/_components/TopMenu";
import { Inter } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Manus Maris - Fizioterapija i nutricionizam",
//   description: "Fizioterapija i nutricionizam",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </head>
      <body className={`${inter.className} bg-gray-100 w-screen h-screen`}>
        {pathname === "/" ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#FFF",
              boxSizing: "content-box",
              overflow: "hidden",
            }}
          >
            <Image
              src="/under_construction.jpg"
              alt="Logo"
              width={576}
              height={1024}
            />
          </div>
        ) : (
          <>
            <TopMenu />
            <div className="container max-w-screen-xl mx-auto px-4">
              {children}
            </div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
