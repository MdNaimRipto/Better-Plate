import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import StoreProvider from "./StoreProvider";
import AuthContext from "@/context/AuthContext";
import { Toaster } from "sonner";
import { mainMeta } from "@/metadata/mainMetadata";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // set a CSS variable
});

export const metadata: Metadata = mainMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} antialiased`}
      >
        <StoreProvider>
          <AuthContext>
            {children}
            <Toaster
              richColors={true}
              position="top-right"
              closeButton={true}
            />
          </AuthContext>
        </StoreProvider>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
