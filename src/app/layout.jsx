import { Inter, Jost } from "next/font/google";
import "../styles/globals.scss";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import {ButtonGroup} from "@/components/Button/Button";
import ReduxProvider from "@/reduxProvider/ReduxProvider";
import {BASE_URL} from "@/config/config";
import NavBarApiCall from "@/components/Navbar/NavBarApiCall";
import ToastProvider from "@/Toast/ToastProvider";
import FAB from "@/components/Button/FAB";
import Navbar2 from "@/components/Navbar/Navbar2";
import PopUp from "@/components/Modal/PopUp";
import ogImage from "./opengraph-image.png";


const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

// export const metadata = {
//   title: "Brac Fisheries",
//   description: "The Largest Fish Seeds Producer in Bangladesh",
// };

export const metadata = {
  title: "Brac Fisheries",
  description: "The Largest Fish Seeds Producer in Bangladesh",
  metadataBase: new URL("https://bracfisheries.net/"),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="max-w-[1920px] mx-auto">
          <div className="bg-black">

            {/* pop up added */}
            <PopUp />
            <ButtonGroup />
          </div>
          <ReduxProvider>
            <ToastProvider>
              {/* <NavBarApiCall /> */}
              <Navbar2 />
              {children}
              <Footer />
            </ToastProvider>
          </ReduxProvider>
          <FAB />
        </div>
      </body>
    </html>
  );
}
