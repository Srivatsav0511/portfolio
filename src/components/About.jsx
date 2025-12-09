import React from 'react'
import img_about2 from '../assets/img_about2.png'

export default function About() {
    return (
        <section id='about'
            className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6'>
            <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
                {/* Images Section */}
                <figure data-aos='fade-right' data-aos-delay='500'
                    className='flex flex-wrap justify-center gap-4 relative'>
                    {/* Background gradient blob */}
                    <div className='h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full'></div>

                    {/* Top left small image */}


                    {/* Center main image */}
                    <img src={img_about2} alt="about picture 2"
                        className='relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg shadow-lg' />


                </figure>

                {/* Text Section */}
                <article data-aos="fade-left" data-aos-delay="500" className='text-center lg:text-left relative'>
                    {/* Purple glow effect */}
                    <div className='absolute z-0 w-40 h-40 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10'></div>

                    <div className='relative z-10'>
                        <header>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                                About Me
                            </h1>
                        </header>
                        <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed'>
                           
                        </p> I specialize in building clean, responsive, and user-friendly web applications using HTML, CSS, JavaScript, and React. I have successfully developed several projects, focusing on creating seamless user experiences. I am actively refining my frontend portfolio and look forward to mastering backend technologies to round out my full-stack capabilities.


                        <footer>
                        
                        </footer>
                    </div>
                </article>
            </div>
        </section>
    )
}
