import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import HomeFooter from "@/components/Global/HomeFooter";
import GoogleAnalytics from "@/lib/GoogleAnalytics";
import Script from "next/script";
import WhatsappButton from "@/components/Common/WhatsappButton";
import PopupForm from "@/components/Global/PopupForm";
import Head from "next/head";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${outfit.variable}`}>
        <Navbar />
        <GoogleAnalytics />
        {children}
        {/* <Footer /> */}

        <Script
          src="https://launch-box.odoo.com/im_livechat/loader/4"
          strategy="lazyOnload"
        />

        <Script
          src="https://launch-box.odoo.com/im_livechat/assets_embed.js"
          strategy="lazyOnload"
        />

        {/* <Script
          id="tawkto"
          strategy="lazyOnload"
          src="https://embed.tawk.to/686b6c9988f6eb190d36058e/1ivhq0e5m"
          async
          charSet="UTF-8"
          crossOrigin="*"
          className="bottom-10"
        /> */}
        {/* <WhatsappButton /> */}
        <PopupForm />
        <HomeFooter />
      </body>
    </html>
  );
}
