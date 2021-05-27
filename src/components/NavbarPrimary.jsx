import React from 'react';
import Logo from './Logo';

const NavbarPrimary = ({menuIsOpen, toggleMenu}) => {
  return <nav className="lg:px-10 flex col-span-full justify-between content-center items-center py-5 px-5 w-full text-xl font-bold border-b-2 border-gray-100">
    <ul className="lg:space-x-11 flex content-center items-center space-x-9 w-1/2">
      <li>
        <Logo className="w-16" />
      </li>
      <li className="lg:inline-block hidden">Live</li>
      <li className="lg:inline-block hidden">Push</li>
      <li className="lg:inline-block hidden">Link</li>
      <li className="lg:inline-block hidden">Shop</li>
      <li className="lg:inline-block hidden">Packs</li>
      <li className="lg:inline-block hidden">Help</li>
      <li onClick={toggleMenu} className="lg:flex hidden items-center whitespace-nowrap">More &#x0002B;</li>
      <li className="lg:hidden flex content-center items-center whitespace-nowrap">
        Menu <span className="mt-1 ml-2 text-xs">&#9660;</span>
      </li>
    </ul>
    <ul className="lg:flex hidden content-center items-center space-x-11 w-auto">
      <li className="text-brand-blue">Try Live for free</li>
      <li className="text-[1rem] leading-[24px] text-base">
        Log in or register
      </li>
    </ul>
  </nav>
};

export default NavbarPrimary;
