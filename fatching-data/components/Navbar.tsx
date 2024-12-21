'use client'; // Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname(); // Get current path

  return (
    <nav className='my-4' aria-label="Primary Navigation">
      <ul className="md:w-[500px] bg-white text-black rounded-full mx-auto w-[90%] py-4 px-2 flex justify-evenly items-center navbar">
        <li>
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}
          className={pathname === '/' ? 'font-semibold border-b-2 border-gray-600 pb-1' : ''}>
            ClientSideData
          </Link>
        </li>
        <li>
          <Link href="/server-side" aria-current={pathname === '/server-side' ? 'page' : undefined}
           className={pathname === '/server-side' ? 'font-semibold border-b-2 border-gray-600 pb-1': ''}>
            ServerSideData
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
