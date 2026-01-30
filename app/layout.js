import { Inter } from "next/font/google";
import "./css/globals.scss";
import LayoutClient from "./components/layout-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Portfolio - SM",
  description: "This is the portfolio of Amir Andaliby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
