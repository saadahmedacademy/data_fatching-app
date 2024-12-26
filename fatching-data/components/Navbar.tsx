'use client'; // Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Get current path

  return (
    <nav className="my-4" aria-label="Primary Navigation">
      <ul className="md:w-[500px] bg-white text-black rounded-full mx-auto w-[90%] py-4 px-2 flex justify-evenly items-center navbar">
        <li>
          <Link 
            href="/" 
            aria-current={pathname === '/' ? 'page' : undefined} 
            className={`pb-1 transition-all duration-200 ${
              pathname === '/' 
                ? 'font-semibold border-b-2 border-blue-600' 
                : 'hover:font-medium hover:border-blue-500 focus:font-medium focus:border-blue-500'
            } focus:outline-none`}>
            ClientSideData
          </Link>
        </li>
        <li>
          <Link 
            href="/server-side" 
            aria-current={pathname === '/server-side' ? 'page' : undefined} 
            className={`pb-1 transition-all duration-200 ${
              pathname === '/server-side' 
                ? 'font-semibold border-b-2 border-blue-600' 
                : 'hover:font-medium hover:border-blue-500 focus:font-medium focus:border-blue-500'
            } focus:outline-none`}>
            ServerSideData
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
