import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Activity, ShoppingBag, Landmark, Plane, Building2 } from 'lucide-react';

const industries = [
    { name: 'Education', icon: GraduationCap, color: 'from-blue-500/20 to-transparent', iconColor: 'text-blue-400' },
    { name: 'Healthcare', icon: Activity, color: 'from-purple-500/20 to-transparent', iconColor: 'text-purple-400' },
    { name: 'E-commerce', icon: ShoppingBag, color: 'from-orange-500/20 to-transparent', iconColor: 'text-orange-400' },
    { name: 'Finance', icon: Landmark, color: 'from-emerald-500/20 to-transparent', iconColor: 'text-emerald-400' },
    { name: 'Travel & Hospitality', icon: Plane, color: 'from-cyan-500/20 to-transparent', iconColor: 'text-cyan-400' },
    { name: 'Real Estate', icon: Building2, color: 'from-pink-500/20 to-transparent', iconColor: 'text-pink-400' },
];

const Industries = () => {
    return (
        <section id="industries" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
                    >
                        Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">We Serve</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-slate-400 text-lg font-light"
                    >
                        We deliver tailored digital solutions across diverse sectors, ensuring industry-specific performance and user engagement.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, index) => {
                        const Icon = ind.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className={`w-8 h-8 ${ind.iconColor}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white tracking-wide">{ind.name}</h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Industries;
