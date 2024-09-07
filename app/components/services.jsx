import React from 'react'

const Services = () => {
  return (
    <div className='bg-white flex justify-center -mt-px top-0 text-black'>
        <div className='w-full justify-center mt-[150px]'>
            <h2 className='text-black md:text-4xl lg:text-5xl font-semibold text-center'>Servicios</h2>
        </div>
       <div className='md:max-w-[1440px] flex-col lg:flex-row'>
                    <div className='max-w-[300px] md:max-w-[550px] border-2 border-orange-500 rounded-2xl min-h-[500px] max-h-[500px]'>
                        <h3 className='text-center text-lg font-semibold mt-[20px]'>Marketing Digital</h3>
                        <p className='text-left text-base font-light'>
                            Norem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam eu turpis molestie, dictum est a, mattis tellus. 
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
                            ut interdum tellus elit sed risus.
                        </p>
                    </div>
                    <div className='max-w-[300px] md:max-w-[550px] border-2 border-orange-500 rounded-2xl min-h-[500px] max-h-[500px] mt-[50px]'>
                        <h3 className='text-center text-lg font-semibold mt-[20px]'>Desarrollo Web</h3>
                        <p className='text-left text-base font-light'>
                            Norem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam eu turpis molestie, dictum est a, mattis tellus. 
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
                            ut interdum tellus elit sed risus.
                        </p>
                    </div>
                    <div className='max-w-[300px] md:max-w-[550px] border-2 border-orange-500 rounded-2xl min-h-[500px] max-h-[500px] mt-[50px]'>
                        <h3 className='text-center text-lg font-semibold mt-[20px]'>Paid Ads</h3>
                        <p className='text-left text-base font-light'>
                            Norem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam eu turpis molestie, dictum est a, mattis tellus. 
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, 
                            ut interdum tellus elit sed risus.
                        </p>
                    </div>
        </div>
    </div>
  )
}

export default Services