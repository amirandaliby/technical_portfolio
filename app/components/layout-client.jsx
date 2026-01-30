"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "./helper/scroll-to-top";

export default function LayoutClient({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </ThemeProvider>
  );
}
