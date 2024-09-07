import React from 'react'
import Image from 'next/image';
import Aboutimg from '../../public/about.svg'

const About = () => {
    return (
        <div>
            <div className='h-[120vh] md:h-[130vh] lg:h-[95vh] bg-black flex items-center justify-center -mt-px'>
                <div className='md:max-w-[1440px] flex flex-col lg:flex-row'>
                <div className='w-full lg:w-[50%] text-center lg:text-left flex flex-col justify-center'>
                        <h2 className='text-white text-lg md:text-4xl lg:text-5xl font-semibold mt-[25px] md:mt-[100px]'>Sobre Nosotros</h2>
                        <p className='text-white text-sm lg:text-lg font-light max-w-[320px] mb-[50px] lg:mb-[250px] md:mb-[100px] md:max-w-[600px] lg:max-w-full mt-[50px] mx-auto lg:mx-0'>
                            Nos especializamos en desarrollar estrategias de marketing personalizadas para inmobiliarias, 
                            asegurando que cada una se destaque en un mercado altamente competitivo. Nuestra prioridad es resaltar lo que hace única a tu inmobiliaria, 
                            conectándola con los clientes ideales y optimizando el proceso de venta o compra.
                            Con un enfoque innovador y resultados comprobables, te ayudamos a maximizar tu visibilidad y posicionar tu marca como líder, 
                            brindando un servicio cercano y adaptado a tus necesidades.
                        </p>
                    </div>
                    <div className='w-full lg:max-w-[50%] flex justify-center lg:justify-end  mt-8 lg:mt-0'>
                        <Image className='lg:flex-end max-w-[275px] md:max-w-[400px]' src={Aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About