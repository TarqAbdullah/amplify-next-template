import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import "./globals.css";
import "./amplify-theme.css";
import KFUPMHeader from "@/components/KFUPMHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KFUPM Application",
  description: "King Fahd University of Petroleum & Minerals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <KFUPMHeader />
        {children}
      </body>
    </html>
  );
}
