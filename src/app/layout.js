import { Comfortaa } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const comfortaa = Comfortaa({ subsets: ['latin'] });

export const metadata = {
  title: 'UPI Quick Code by UNRIVALLEDKING',
  description:
    'Generate UPI QR codes effortlessly with UPI Quick Code by UNRIVALLLEDKING. Quickly create, validate, and download QR codes for seamless UPI payments. Perfect for businesses and individuals.',
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
