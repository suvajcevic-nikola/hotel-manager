import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Manager",
  description: "Hotel Manager Next App",
};

export default function RootLayout({
  children,
  modals,
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative m-auto flex min-h-screen max-w-[1280px] flex-col px-4 py-8 lg:px-12 lg:py-24">
          <NavBar />
          <div className="pb-12 pt-32">{children}</div>
          {modals}
        </main>
      </body>
    </html>
  );
}
