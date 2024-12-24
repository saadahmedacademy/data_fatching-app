import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";


const myfont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export const metadata: Metadata = {
  title: "Saad Data Fatching App",
  description: "This app created by muhammd saad ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar /> 
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
