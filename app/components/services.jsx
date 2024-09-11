import React from 'react'
import Image from 'next/image'
import Test from '../../public/test.jpg'

const Services = () => {
  return (
    <div className='bg-white h-[95vh] justify-center -mt-px top-0 text-black'>
    <div className='w-full justify-center mt-[150px]'>
        <h2 className='text-black md:text-4xl lg:text-5xl font-semibold text-center'>Servicios</h2>
    </div>
    <div className='md:max-w-[1440px] flex flex-col lg:flex-row justify-center items-center mt-[100px] lg:space-x-8 mx-auto'>
        {/* Card 1 */}
        <div className='max-w-[300px] md:max-w-[400px] border-2 flex-col border-orange-500 rounded-2xl min-h-[500px] max-h-[500px] mt-[50px] lg:mt-0'>
            <Image className='max-h-[250px] rounded-t-[16px] object-cover' src={Test} alt="" />
            <h3 className='text-left px-4 text-orange-500 text-2xl font-bold mt-[20px]'>Marketing Digital</h3>
            <p className='text-left text-base font-light px-4'>
            Nos encargamos de la gestión completa de tus redes sociales, asegurando una presencia activa y consistente en plataformas clave como Facebook, Instagram, LinkedIn, y más. 
            </p>
        </div>

        {/* Card 2 */}
        <div className='max-w-[300px] md:max-w-[400px] border-2 border-orange-500 rounded-2xl min-h-[500px] max-h-[500px] mt-[50px] lg:mt-0'>
            <Image className='max-h-[250px] rounded-t-[16px] object-cover' src={Test} alt="" />
            <h3 className='text-left px-4 text-orange-500 text-2xl font-bold mt-[20px]'>Desarrollo Web</h3>
            <p className='text-left text-base font-light px-4'>
            Creamos landing pages con un diseño atractivo que capturan la atención y convierten visitantes en clientes potenciales.
            </p>
        </div>

        {/* Card 3 */}
        <div className='max-w-[300px] md:max-w-[400px] border-2 border-orange-500 rounded-2xl min-h-[500px] max-h-[500px] mt-[50px] lg:mt-0'>
            <Image className='max-h-[250px] rounded-t-[16px] object-cover' src={Test} alt="" />
            <h3 className='text-left px-4 text-orange-500 text-2xl font-bold mt-[20px]'>Paid Ads</h3>
            <p className='text-left text-base font-light px-4'>
            Utilizamos análisis avanzados y pruebas A/B para asegurar que cada inversión publicitaria genere el máximo retorno.
            </p>
        </div>
    </div>
</div>
  )
}

export default Services