
import { Roboto } from "next/font/google";
import "./globals.css";
import { UserData } from "@/Context/UserData";


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
        
      </body>
    </html>
  );
}
