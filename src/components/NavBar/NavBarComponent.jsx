
'use client';

import { Navbar } from 'flowbite-react';
import IstadLogo from '../Logo/CstadLogoComponent';
import Link from 'next/link';

export default function NavBarComponent() {
  return (
    <>
    <Navbar fluid rounded className='bg-blue-700 fixed top-0 w-full z-10 rounded-none'>
      <Navbar.Brand href="https://flowbite-react.com">
        <IstadLogo/>
        <span className="tracking-[8px] self-center whitespace-nowrap text-2xl text-white font-bold dark:text-white">CSTAD</span>
      </Navbar.Brand>
      <Navbar.Collapse className='mx-[300px]'>
        <Link href="/" className='text-gray-300 hover:text-white text-lg mx-[20px]'>Home</Link>
        <Link href="/enroll" className='text-gray-300 hover:text-white text-lg mx-[20px]'>Enroll</Link>
        <Link className='text-gray-300 hover:text-white text-lg mx-[20px]' href="/course">Course</Link>
        <Link className='text-gray-300 hover:text-white text-lg mx-[20px]' href="/itnews">IT news</Link>
        <Link className='text-gray-300 hover:text-white text-lg mx-[20px]' href="/jobopportunity">Job Opportunity</Link>
        <Link className='text-gray-300 hover:text-white text-lg mx-[20px]' href="/aboutus">About Us</Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}
