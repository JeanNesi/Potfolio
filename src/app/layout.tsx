import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { ThemeChanger } from "@/components/themeChanger";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jean Nesi",
  description: "Jean Nesi's personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="body">
            <Navbar />
            {children}
            <Footer />
            <ThemeChanger />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
