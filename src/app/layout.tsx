import { PrimeReactProvider } from 'primereact/api';
import { ReduxProvider } from "@/redux/provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Popularity View",
  description: "Search popular user repositories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <PrimeReactProvider>
            {children}
          </PrimeReactProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
