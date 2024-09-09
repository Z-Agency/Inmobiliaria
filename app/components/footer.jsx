import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text-white py-8'>
            <div className='md:max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center px-4'>
                {/* Logo or Brand */}
                <div className='mb-6 lg:mb-0'>
                    <h3 className='text-2xl font-semibold'>LOGO</h3>
                </div>
                
                {/* Navigation Links */}
                <div className='flex space-x-6 mb-6 lg:mb-0'>
                    <a href="#" className='text-sm hover:underline'>Inicio</a>
                    <a href="#" className='text-sm hover:underline'>Servicios</a>
                    <a href="#" className='text-sm hover:underline'>Sobre Nosotros</a>
                    <a href="#" className='text-sm hover:underline'>Contacto</a>
                </div>

                {/* Social Media Links */}
                <div className='flex space-x-4'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'>
                        <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'>
                        <i className="fab fa-twitter"></i> {/* Twitter Icon */}
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-gray-400'>
                        <i className="fab fa-instagram"></i> {/* Instagram Icon */}
                    </a>
                </div>
            </div>
            
            {/* Copyright */}
            <div className='text-center text-sm mt-6 border-t border-gray-700 pt-4'>
                © {new Date().getFullYear()} Pinnacle Partners. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
