import React from 'react'
import Image from 'next/image';
import Aboutimg from '../../public/about.svg'

const About = () => {
    return (
        <div>
            <div className='h-[95vh] bg-black flex items-center justify-center -mt-px'>
                <div className='md:max-w-[1440px] flex-col lg:flex justify-center items-center'>
                    <div className='max-w-[300px] md:max-w-[550px] lg:w-[50%] justify-center '>
                        <h2 className='text-white text-2xl font-semibold text-center'>Sobre Nosotros</h2>
                        <p className='text-white text-base font-light text-center mt-[20px] mb-[100px]'>Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Quisquam deleniti perspiciatis maxime! Beatae quisquam debitis, 
                            dicta perferendis minima sequi nihil. Quisquam facilis qui dicta et!</p>
                    </div>
                    <div className='w-full lg:w-[50%] flex justify-center'>
                        <Image className='mx-auto max-w-[275px] md:max-w-[400px]' src={Aboutimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About