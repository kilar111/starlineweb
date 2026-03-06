import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'CEO, TechStart Inc.',
        content: 'Starline Web totally transformed our digital presence. The new dashboard is not only stunning but incredibly fast. Highly recommended by our entire executive team!',
        image: 'https://i.pravatar.cc/150?img=47'
    },
    {
        name: 'David Chen',
        role: 'Founder, Lumina Store',
        content: 'The e-commerce platform they built for us increased our conversion rates by 40% in just two months. Exceptional team, elite skills, and a pleasure to work with from start to finish.',
        image: 'https://i.pravatar.cc/150?img=11'
    },
    {
        name: 'Emma Williams',
        role: 'Marketing Director, Horizon',
        content: 'Professional, creative, and highly responsive. The redesign of our corporate site perfectly embodies our brand. A seamless masterpiece of a website.',
        image: 'https://i.pravatar.cc/150?img=5'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => {
        setCurrentIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
    };

    const next = () => {
        setCurrentIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
    };

    return (
        <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
                    >
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Voices</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-slate-400 text-lg font-light"
                    >
                        Don't just take our word for it. Here's what industry leaders have to say about partnering with Starline Web.
                    </motion.p>
                </div>

                {/* Custom Slider */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative py-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-16 relative shadow-2xl"
                            >
                                <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 opacity-20">
                                    <Quote className="w-24 h-24 text-gradient-to-br from-blue-500 to-purple-500" />
                                </div>

                                <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-10 text-center relative z-10">
                                    "{testimonials[currentIndex].content}"
                                </p>

                                <div className="flex flex-col items-center gap-4 relative z-10">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-20 h-20 rounded-full border-2 border-white/20 object-cover shadow-xl"
                                    />
                                    <div className="text-center">
                                        <h4 className="text-white font-bold text-xl">{testimonials[currentIndex].name}</h4>
                                        <p className="text-purple-400 text-sm tracking-wide uppercase mt-1">{testimonials[currentIndex].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Slider Controls */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <button
                            onClick={prev}
                            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <ChevronLeft className="w-6 h-6 text-slate-300 group-hover:text-white" />
                        </button>
                        <div className="flex gap-3">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-orange-500 w-8' : 'bg-white/20 hover:bg-white/40'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
