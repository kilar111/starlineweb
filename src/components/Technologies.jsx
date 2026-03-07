import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
    { name: 'React', color: 'hover:text-cyan-400', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', color: 'hover:text-white', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Laravel', color: 'hover:text-red-500', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Node.js', color: 'hover:text-green-500', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', color: 'hover:text-blue-500', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'AWS', color: 'hover:text-orange-500', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'WordPress', color: 'hover:text-blue-500', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
];

const Technologies = () => {
    return (
        <section id="technologies" className="py-24 bg-[#020202] relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-slate-500 text-sm font-bold tracking-[0.2em] uppercase mb-12"
                >
                    Powered by Industry-Leading Technology
                </motion.p>

                {/* Marquee or Grid of Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className={`h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg ${tech.name === 'Next.js' ? 'invert' : ''}`}
                                title={tech.name}
                            />
                            <span className={`mt-4 text-sm font-medium text-slate-500 transition-colors duration-300 ${tech.color}`}>
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
