import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: 'QuickCV App',
            description:'A modern resume builder web application offering live side-by-side preview, multiple professional templates, and instant customization without requiring user login. Built with React.js, Vite for optimal performance, and styled with CSS for a clean, intuitive interface.',
            image: project1,
            link: 'https://quickcv1.netlify.app/'
        },
        {
            id: 2,
            title: 'PureClick Walls',
           description: 'Android wallpaper app offering curated high-quality collections with direct download functionality and seamless one-tap wallpaper application. Developed with React Native + TypeScript and Expo framework for robust performance and type-safe code.Currently in testing phase',
            image: project2,
            link: ''
        },
        {
            id: 3,
            title: 'CodeClarity App',
            description: 'Developed an AI-powered code analysis web application using React, TypeScript, and Tailwind CSS for the frontend, and a Node.js backend to integrate LLM APIs.The application leverages a modular, high-performance architecture with secure environment handling to generate automated code explanations and summaries.',
            image: project3,
            link: 'https://codeclarity-ai.vercel.app/'
        }

    ];

    return (
        <section id='projects' className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-20'>
            {/* Purple glow background */}
            <div className='absolute z-0 w-96 h-96 bg-[#cd3cf5] rounded-full blur-[150px] opacity-40 top-20 left-1/2 transform -translate-x-1/2'></div>

            {/* Header */}
            <div className='relative z-20 text-center mb-16' data-aos='fade-up' data-aos-delay='200'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
                    My <span className='bg-gradient-to-r from-[#c744ec] to-[#bb61c5] bg-clip-text text-transparent'>Projects</span>
                </h1>
                <p className='text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4'>
                     Explore my recent work showcasing web and mobile development projects built with modern technologies.
                </p>
            </div>

            {/* Projects Grid */}
            <div className='relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto w-full' data-aos='fade-up' data-aos-delay='400'>
                {projects.map((project, index) => (
                    <article
                        key={project.id}
                        className='group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105'
                        data-aos='fade-up'
                        data-aos-delay={200 + (index * 100)}
                    >
                        <div className='relative overflow-hidden h-48 sm:h-56 bg-gray-900 flex items-center justify-center'>
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-500'
                            />
                            {/* Overlay on hover */}
                            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300'></div>
                        </div>



                        {/* Project Info */}
                        <div className='p-6'>
                            <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300'>
                                {project.title}
                            </h3>
                            <p className='text-gray-400 text-sm mb-4'>
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                className='inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300'
                            >
                                View Project
                                <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
