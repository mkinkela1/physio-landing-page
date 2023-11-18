import Footer from "@/app/_components/Footer";
import TopMenu from "@/app/_components/TopMenu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manus Maris - Fizioterapija i nutricionizam",
  description: "Fizioterapija i nutricionizam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <TopMenu />
        <div className="container max-w-screen-xl mx-auto px-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
