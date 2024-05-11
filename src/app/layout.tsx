import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Appbar } from "@/components/navbar/Appbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Nunito({ subsets: ["latin"] });

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
        {/* <GoogleAnalytics /> */}
        <Providers>
          <Appbar />
          {/* bg-gradient-to-t from-red-50 via-slate-200 to-neutral-400
          dark:from-slate-700 from-10% dark:via-slate-950 via-30% dark:to-black
          to-90% */}
          <div className='min-h-[calc(100vh-6.85vh)] max-w-screen-lg lg:mx-auto '>
            {children}
            <Toaster />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
