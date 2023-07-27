import Header from "@/components/Header";
import "./globals.css";
import { Sora } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/Redux/ReduxProvider";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Ecom-Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.className} container`}>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
        </ReduxProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
