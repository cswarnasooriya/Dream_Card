import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/ResponsiveNav";

const font = Poppins({ 
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
 });

export const metadata: Metadata = {
  title: "Dream Card 2024-July",
  description: "Trending currency exchange shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        <ResponsiveNav/> 

        {/*Here display any page of web aplication */}

        {children}</body>
    </html>
  );
}
