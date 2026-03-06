import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5 border-b">

            {/* Animated Deep Gradients Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-50%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[-50%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-gradient-to-r from-transparent via-orange-500/5 to-transparent blur-3xl pointer-events-none" />

                {/* Abstract lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-[#0a0a0a]/50 backdrop-blur-2xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden"
                >
                    {/* Inner Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                        Let's Build Your Next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                            Digital Experience
                        </span>
                    </h2>

                    <p className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Ready to completely transform your online presence? Partner with Starline Web and let's craft something extraordinary together.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a
                            href="#contact"
                            className="group relative px-10 py-5 bg-white text-black font-extrabold text-lg tracking-wide rounded-full overflow-hidden w-full sm:w-auto text-center"
                        >
                            <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                Contact Us
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="group relative px-10 py-5 bg-transparent text-white border border-white/20 hover:border-white/60 font-bold text-lg tracking-wide rounded-full transition-all w-full sm:w-auto text-center"
                        >
                            Get Free Consultation
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
