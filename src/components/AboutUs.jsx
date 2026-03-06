import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Rocket } from 'lucide-react';

const AboutUs = () => {
    return (
        <section id="about" className="py-32 bg-[#050505] border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">Starline Web</span>
                        </h2>

                        <p className="text-slate-400 text-lg mb-6 leading-relaxed font-light">
                            Founded in 2026, Starline Web Pvt Ltd is a passionate collective of digital creators. We are a tight-knit team of 5 elite developers dedicated to pushing the boundaries of what is possible on the web.
                        </p>

                        <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                            Our core focus is delivering modern, lightning-fast, and infinitely scalable websites. We fuse exceptional design with cutting-edge engineering to build digital experiences that rank high, load instantly, and leave a lasting impression.
                        </p>

                        <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-colors">
                            <div className="absolute top-0 right-0 p-8 transform translate-x-1/4 -translate-y-1/4 opacity-30">
                                <Rocket className="h-32 w-32 text-orange-500/20 group-hover:text-orange-500/40 transition-colors duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                                <Target className="text-purple-400 h-6 w-6" /> Our Mission
                            </h3>
                            <p className="text-slate-400 relative z-10 font-light leading-relaxed">
                                To empower startups and established businesses alike to accelerate their digital growth online with powerful, conversion-optimized web solutions.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] col-span-2 sm:col-span-1 text-center flex flex-col items-center justify-center hover:border-white/20 transition-colors group">
                            <Users className="h-10 w-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <div className="text-4xl font-extrabold text-white mb-2">5</div>
                            <div className="text-slate-400 font-light">Elite Engineers</div>
                        </div>

                        <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] col-span-2 sm:col-span-1 text-center flex flex-col items-center justify-center hover:border-white/20 transition-colors group">
                            <Zap className="h-10 w-10 text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <div className="text-4xl font-extrabold text-white mb-2">100%</div>
                            <div className="text-slate-400 font-light">Fast Performance</div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-10 rounded-[2rem] col-span-2 flex items-center justify-between text-left overflow-hidden relative shadow-2xl group">
                            <div className="absolute top-[-30%] right-[-10%] w-[50%] h-[150%] bg-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                            <div className="relative z-10 w-full">
                                <h3 className="text-3xl font-bold text-white mb-2">Ready to scale?</h3>
                                <p className="text-purple-100 mb-8 font-light max-w-sm">Let's discuss how we can transform your vision.</p>
                                <a href="#contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-black/20">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
