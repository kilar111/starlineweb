import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#050505]">

            {/* Background Animated Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -50, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-600/20 blur-[150px]"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[100px]" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col pt-12 md:pt-20">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-sm font-medium tracking-wide text-slate-300">Premium Web Development Agency</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] mb-8"
                        >
                            Empowering Businesses with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                                Smart Digital Solutions
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10"
                        >
                            We craft minimal, high-performance web applications and digital experiences that drive explosive growth for modern brands.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <a
                                href="#contact"
                                className="group relative px-8 py-4 bg-white text-black font-extrabold tracking-wide rounded-full overflow-hidden text-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center justify-center gap-2">
                                    Start Your Project
                                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </span>
                            </a>

                            <a
                                href="#portfolio"
                                className="px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white/60 font-medium tracking-wide rounded-full transition-all hover:bg-white/5 text-center flex items-center justify-center gap-2"
                            >
                                View Our Work
                            </a>
                        </motion.div>
                    </div>

                    {/* Stats Section on the right for desktop, bottom for mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-4 flex flex-col gap-6 lg:pl-10 lg:border-l border-white/10"
                    >
                        <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="text-5xl font-black text-white mb-2">2+</div>
                            <div className="text-slate-400 font-medium text-sm tracking-widest uppercase">Years Experience</div>
                        </div>

                        <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="text-5xl font-black text-white mb-2">15+</div>
                            <div className="text-slate-400 font-medium text-sm tracking-widest uppercase">Projects Completed</div>
                        </div>

                        <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="text-5xl font-black text-white mb-2">99%</div>
                            <div className="text-slate-400 font-medium text-sm tracking-widest uppercase">Happy Clients</div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
