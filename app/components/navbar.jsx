"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className="bg-black text-white w-full">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold">Tu Empresa</h1>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden cursor-pointer" onClick={toggleNav}>
                    {navOpen ? (
                        <AiOutlineClose size={30} />
                    ) : (
                        <AiOutlineMenu size={30} />
                    )}
                </div>

                {/* Links for large screens */}
                <ul className="hidden lg:flex space-x-8">
                    <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
                    <li><a href="#" className="hover:text-gray-400">Servicios</a></li>
                    <li><a href="#" className="hover:text-gray-400">Sobre Nosotros</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {navOpen && (
                <ul className="lg:hidden bg-black text-center space-y-4 py-4">
                    <li><a href="#" className="block hover:text-gray-400">Inicio</a></li>
                    <li><a href="#" className="block hover:text-gray-400">Servicios</a></li>
                    <li><a href="#" className="block hover:text-gray-400">Sobre Nosotros</a></li>
                    <li><a href="#" className="block hover:text-gray-400">Contacto</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;