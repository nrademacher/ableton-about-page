import React from 'react';
import Logo from './Logo';

const NavbarPrimary = () => (
  <nav className="flex justify-between content-center items-center py-5 px-10 mx-auto text-xl font-bold border-b-2 border-gray-100">
    <ul className="flex content-center items-center space-x-11 w-1/2">
      <li>
        <Logo className="w-16" />
      </li>
      <li className="lg:inline-block hidden">Live</li>
      <li className="lg:inline-block hidden">Push</li>
      <li className="lg:inline-block hidden">Link</li>
      <li className="lg:inline-block hidden">Shop</li>
      <li className="lg:inline-block hidden">Packs</li>
      <li className="lg:inline-block hidden">Help</li>
      <li className="lg:flex hidden items-center whitespace-nowrap">More +</li>
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
);

export default NavbarPrimary;
