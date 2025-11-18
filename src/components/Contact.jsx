import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import imghero from '../assets/imghero.png'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Your EmailJS credentials
        const serviceID = 'service_sh9lpsn';
        const templateID = 'template_4r45i8f';
        const publicKey = '0Xp9FZhfaxjSF2Sa7';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

       
        emailjs.init(publicKey);

        // Send email
        emailjs.send(serviceID, templateID, templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
                setIsSending(false);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Failed to send message. Please try again or email me directly.');
                setIsSending(false);
            });
    };

    return (
        <section id='contact' className='relative min-h-screen overflow-hidden flex items-center justify-center text-white px-4 py-20'>
            {/* Purple glow background */}
            <div className='absolute z-0 w-96 h-96 bg-[#cd3cf5] rounded-full blur-[150px] opacity-40 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>

            <div className='relative z-20 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                {/* Left Side - Robot Illustration */}
                <div className='flex justify-center lg:justify-start' data-aos='fade-right' data-aos-delay='300'>
                    <div className='relative'>
                        <div className='absolute inset-0 bg-[#cd3cf5] rounded-full blur-[100px] opacity-60 scale-150'></div>
                        <img 
                            src={imghero} 
                            alt="Contact Robot" 
                            className='relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl'
                        />
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className='relative' data-aos='fade-left' data-aos-delay='300'>
                    <header className='mb-8'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
                            Contact <span className='bg-gradient-to-r from-[#c744ec] to-[#bb61c5] bg-clip-text text-transparent'>Me</span>
                        </h1>
                    </header>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Name Input */}
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your name'
                                required
                                className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300'
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Your email'
                                required
                                className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300'
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                                Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Your message'
                                required
                                rows={5}
                                className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none'
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={isSending}
                            className='w-full py-3 px-6 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-purple-600 hover:border-purple-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
