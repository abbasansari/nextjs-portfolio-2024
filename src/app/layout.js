import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Abbas Ali Abid",
  description: "Fullstack Developer MERN , React ,Nextjs , Nodejs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
