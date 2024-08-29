"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
  return (
    <div>
        <nav className='w-full bg-black fixed top-0 left-0 right-0 z-10'>
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        {/*Logo*/}
                    <Link href="/">
                        <h2 className='text 2xl text-white font-bold'>LOGO</h2>
                    </Link>
                        {/*Hamburguer Button*/}
                    <div className='md:hidden'>
                        <button 
                            className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <Image src="" width={30} height={30} alt="logo" />
                            ) : ( 
                                <Image src="" width={30} heigh={30} alt="logo" className='focus:border-none active:border-none'/>
                            )}
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar