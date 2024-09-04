import React from 'react'

const Services = () => {
  return (
    <div className='bg-black flex justify-center -mt-px top-0 text-white'>
       <div className='md:max-w-[1440px] flex-col lg:flex justify-center items-center'>
                    <div className='max-w-[300px] md:max-w-[550px] lg:w-full justify-center '>
                        <h2 className='text-white text-2xl font-semibold text-center'>Servicios</h2>
                        <p className='text-white text-base font-light text-center mt-[20px] mb-[100px]'>Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Quisquam deleniti perspiciatis maxime! Beatae quisquam debitis, 
                            dicta perferendis minima sequi nihil. Quisquam facilis qui dicta et!</p>
                    </div>
                    <div className='max-w-[300px] md:max-w-[550px] border-2 border-orange-500 rounded-2xl min-h-[500px] max-h-[500px]'>
                        <h3 className='text-center text-lg font-semibold mt-[20px]'>Marketing Digital</h3>
                    </div>
                    <div className='max-w-[300px] md:max-w-[550px] border-2 border-orange-500 rounded-2xl min-h-[500px] max-h-[500px] mt-[50px]'>
                        <h3 className='text-center text-lg font-semibold mt-[20px]'>Desarrollo Web</h3>
                    </div>
                    <div className='max-w-[300px] md:max-w-[550px] border-2 border-orange-500 rounded-2xl min-h-[500px] max-h-[500px] mt-[50px]'>
                        <h3 className='text-center text-lg font-semibold mt-[20px]'>Paid Ads</h3>
                    </div>
        </div>
    </div>
  )
}

export default Services