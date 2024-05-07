import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Appbar } from "@/components/navbar/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaswat Deep",
  description: "deepshaswat.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Providers>
          <Appbar />
          {/* bg-gradient-to-t from-red-50 via-slate-200 to-neutral-400
          dark:from-slate-700 from-10% dark:via-slate-950 via-30% dark:to-black
          to-90% */}
          <div className='min-h-[calc(100vh-40vh)] '>{children}</div>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
