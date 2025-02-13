'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className='relative flex justify-between items-center p-5 pb-2 shadow-sm bg-white z-50'>
      <div className='flex-shrink-0'>
        <Link href='/'>
          <Image src='/Logos/CTCCLogo.webp' alt='logo' width={150} height={150} />
        </Link>
      </div>
      <div className='flex-grow flex items-center justify-end'>
        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-7 items-center'>
          <li className='text-xl hover:text-purple-800 cursor-pointer'>
            <Link href='https://ctcc.ca'>Home</Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 text-lg'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle Menu'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-20 right-5 bg-white shadow-lg rounded-lg w-48'>
          <ul className='flex flex-col p-4'>
            <li className='text-lg hover:text-purple-800 cursor-pointer'>
              <Link href='/'>Home</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;