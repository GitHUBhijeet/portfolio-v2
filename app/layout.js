import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

// Configure the font
const interFont = Inter({
  subsets: ["latin"],
  // weight: "400", // Specify the weight you need
  // style: "normal", // Specify the style you need
});

export const metadata = {
  title: "Abhijeet Gawade",
  description: "",
};

// Use a global CSS file or inline styles for server components
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: interFont.style.fontFamily }}
        className={interFont.className}
      >
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
    </html>
  );
}
