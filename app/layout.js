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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
