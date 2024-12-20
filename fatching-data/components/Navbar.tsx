'use client'; // Client Component

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='my-4'>
      <ul className="md:w-[500px] bg-white text-black rounded-full mx-auto w-auto py-4 px-2 flex justify-evenly items-center navbar">
        <li><Link href="/">ClientSideData</Link></li>
        <li><Link href="/about">ServerSideData</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
