import type { Metadata } from "next";
import "./globals.css";
import { fontDelius } from "./fonts";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "AD Portfolio",
  description: "Created by Amiya Dey(AD)",
  icons: {
    icon: "/assets/images/FabIcon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${fontDelius.className} w-full h-screen bg-bodyColor text-textLight
          overflow-x-hidden overflow-y-scroll`}
      >
        <Navbar />
        <main className="px-6 py-4">{children}</main>
      </body>
    </html>
  );
}
