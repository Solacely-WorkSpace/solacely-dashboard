
import { Roboto } from "next/font/google";
import "./globals.css";
import { UserData } from "@/Context/UserData";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});





export const metadata = {
  title: "Solacely",
  description: "Home Away From Home",

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <UserData>
          {children}
        </UserData>
        <ToastContainer autoClose={3000} position="top-center" />
        
      </body>
    </html>
  );
}
