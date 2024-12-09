"use client"
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
 const [isOpen, setIsOpen] = useState(true);

 return (
   <nav className=" bg-black flex items-center justify-between p-6">
     <div className="flex items-center text-white mr-6">
      LOGO
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full justify-end lg:flex  lg:items-center lg:max-w-[1440px] ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm mr-[100px]">
         <Link href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg font-semibold mr-8 hover:text-orange-500">
           Home
         </Link>
         <Link href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg font-normal mr-8 hover:text-orange-500">
           Nosotros
         </Link>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg font-normal mr-8 hover:text-orange-500">
           Services
         </a>
         <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white text-lg font-normal mr-8 hover:text-orange-500">
           Contacto
         </a>
       </div>
     </div>
   </nav>
 );
}
export default Navbar;