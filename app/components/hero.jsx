import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Herobg from '../../public/herobg.jpg';

const Hero = () => {
    return (
        <div>
            <div className='relative w-full min-h-[690px] max-h-[900px] bg-top bg-cover content-center'>
                <Image className='relative h-[95vh] object-cover z-0 bg-cover' src={Herobg} alt="" />
                <div className='absolute max-w-[1440px] inset-0 flex flex-col items-center lg:items-start justify-center mx-auto z-2'>
                    <h1 className='text-white text-2xl md:text-4xl font-semibold mt-[120px]'>Crece tu Negocio Inmobiliario</h1>
                    <h1 className='text-white text-2xl md:text-4xl font-semibold mt-[10px]'>Con Nosotros</h1>
                    <h2 className='text-white text-lg md:text-xl font-base mt-[15px]'>lorem ipsuimdasdasda</h2>
                    <button className='mb-[150px] mt-[20px] px-4 py-2 rounded-3xl border-2 border-orange-500 bg-orange-500 hover:bg-transparent hover:border-2 hover:border-orange-500 hover:text-white transition'>Conocenos</button>
                </div>
            </div>

        </div>
    )
}

export default Hero;

