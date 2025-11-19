import React from 'react'
import imghero from '../assets/imghero.png'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import jsIcon from '../assets/js.png'
import reactIcon from '../assets/react.png'
import tsIcon from '../assets/typescript.png'
import tailwindIcon from '../assets/tailwindcss.png'
import javaIcon from '../assets/java.png'
import sqlIcon from '../assets/sql.png'

export default function Skills() {
    const skills = [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'React.js', icon: reactIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'Tailwind CSS', icon: tailwindIcon },
        { name: 'Java', icon: javaIcon },
        { name: 'SQL', icon: sqlIcon }
    ];

    return (
        <section id='skills' className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-20'>
            {/* Purple glow background */}
            <div className='absolute z-0 w-96 h-96 bg-[#cd3cf5] rounded-full blur-[150px] opacity-40 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
            
            {/* Left Robot */}
            <img 
                src={imghero} 
                alt="Left decoration" 
                className='absolute z-10 left-5 sm:left-16 top-32 w-24 h-24 sm:w-32 sm:h-32 opacity-70 hidden md:block'
                data-aos='fade-right'
                data-aos-delay='300'
            />
            
            {/* Right Robot */}
            <img 
                src={imghero} 
                alt="Right decoration" 
                className='absolute z-10 right-5 sm:right-16 top-32 w-24 h-24 sm:w-32 sm:h-32 opacity-70 hidden md:block'
                data-aos='fade-left'
                data-aos-delay='300'
            />

            {/* Header */}
            <div className='relative z-20 text-center mb-12' data-aos='fade-up' data-aos-delay='200'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
                    My Expertise
                </h1>
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
                    and <span className='bg-gradient-to-r from-[#c744ec] to-[#bb61c5] bg-clip-text text-transparent'>Skills</span>
                </h2>
                <p className='text-gray-400 text-sm sm:text-base max-w-3xl mx-auto mt-6'>
                   Explore my technical toolkit and the technologies I work with to build modern, scalable applications.
                </p>
            </div>

            {/* Skills Badges */}
            <div className='relative z-20 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto' data-aos='fade-up' data-aos-delay='400'>
                {skills.map((skill, index) => (
                    <div 
                        key={index}
                        className='group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-4 flex items-center gap-3 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105'
                    >
                        <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className='w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300'
                        />
                        <span className='text-white font-medium text-sm sm:text-base'>
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
