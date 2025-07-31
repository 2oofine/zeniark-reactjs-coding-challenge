import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sherwin - Zeniark React.js Coding Challenge",
  description: "Zeniark React.js Coding Challenge",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable}`}>
        <div className="grid grid-cols-1 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[url(/bg.png)] bg-no-repeat bg-cover bg-position-[100%]">
          <main className="flex flex-col items-center">{children}</main>
        </div>
      </body>
    </html>
  );
}
