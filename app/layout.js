"use client";
import { Inter } from 'next/font/google';
import './css/globals.scss';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './components/helper/scroll-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Personal Portfolio - SM',
  description: 'This is the portfolio of Amir Andaliby',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
