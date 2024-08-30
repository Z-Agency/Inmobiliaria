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
                                    className='p-2 text-gray-700 outline-none focus:border-gray-400'
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src="" width={30} height={30} alt="logo" />
                                    ) : (
                                        <Image src="" width={30} heigh={30} alt="logo" className='focus:border-none active:border-none' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                            }`}
                        >
                            <ul className='h-screen md:h-auto items-center justify-center md:flex'>
                                <li className='pb-6 text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-orange-400 hover:bg-orange-500 md:hover:bg-transparent'>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className='pb-6 text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-orange-400 hover:bg-orange-500 md:hover:bg-transparent'>
                                    <Link href="/">
                                        Nosotros
                                    </Link>
                                </li>
                                <li className='pb-6 text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-orange-400 hover:bg-orange-500 md:hover:bg-transparent'>
                                    <Link href="/">
                                        Servicios
                                    </Link>
                                </li>
                                <li className='pb-6 text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-orange-400 hover:bg-orange-500 md:hover:bg-transparent'>
                                    <Link href="/">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar