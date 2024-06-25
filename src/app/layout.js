import { Comfortaa } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata = {
  title: 'UPI Quick Code by UNRIVALLEDKING',
  description: 'random description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className + ' bg-[#404855]'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
