import { Logo } from '@/assets';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="container flex items-center justify-center mx-auto w-full p-4">
      <Image className="w-20" src={Logo} alt="UPI Quick Code" />
    </nav>
  );
}
