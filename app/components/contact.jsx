import React from 'react'

const Contact = () => {
    return (
        <div className='justify-center h-[75vh] text-black'>
            <div className='w-full justify-center mb-10'>
                <h2 className='text-black md:text-4xl lg:text-5xl font-semibold text-center'>Contáctanos</h2>
                <p className='text-black text-base lg:text-lg font-light text-center mt-4'>
                    ¡Estamos aquí para ayudarte! Si tienes alguna pregunta o deseas más información, 
                    no dudes en contactarnos a través de WhatsApp.
                </p>
            </div>
            <div className='md:max-w-[1440px] flex flex-col lg:flex-row justify-center mx-auto items-center lg:space-x-8'>
                {/* Contact Info */}
                <div className='max-w-[300px] md:max-w-[550px] border-2 border-orange-500 rounded-2xl min-h-[300px] max-h-[300px] mt-[50px] lg:mt-0 p-8'>
                    <h3 className='text-orange-500 text-2xl font-bold mt-[20px]'>Contacto</h3>
                    <p className='text-left text-lg font-semibold mt-4'>
                        Teléfono: +54 11 5873-6169
                    </p>
                    <p className='text-left text-lg font-semibold'>
                        Correo: c.mauridiaz@gmail.com
                    </p>
                </div>

                {/* WhatsApp Button */}
                <div className='max-w-[300px] md:max-w-[550px] border-2 border-orange-500 rounded-2xl min-h-[300px] max-h-[300px] mt-[50px] lg:mt-0 p-8 flex flex-col justify-center items-center'>
                    <h3 className='text-orange-500 text-2xl font-bold mt-[20px]'>Escríbenos</h3>
                    <p className='text-left text-base font-light mt-4 mb-8'>
                        Haz clic en el botón de abajo para enviarnos un mensaje por WhatsApp.
                    </p>
                    <a 
                        href="https://wa.me/1234567890" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300'
                    >
                        Ir a WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;