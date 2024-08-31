import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Herobg from '../../public/herobg.jpg';

const Hero = () => {
    return (
        <div>
            <div className='relative w-full min-h-[690px] max-h-[1000px] bg-top bg-cover content-center'>
                <Image className='relative h-[95vh] object-cover z-0 bg-cover' src={Herobg} alt="" />
                <div className='absolute max-w-[1440px] inset-0 flex flex-col items-center md:items-start justify-center mx-auto z-2'>
                    <h1 className='text-white text-2xl md:text-4xl font-semibold'>Crece tu Negocio Inmobiliario</h1>
                    <h1 className='text-white text-2xl md:text-4xl font-semibold mt-[10px]'>Con Nosotros</h1>
                    <h2 className='text-white text-lg md:text-xl font-base '>lorem ipsuimdasdasda</h2>
                    <button className='mb-[150px] mt-[10px]'>Conocenos</button>
                </div>
            </div>

        </div>
    )
}

export default Hero;

