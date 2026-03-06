import React from 'react';
import { motion } from 'framer-motion';
import { Clock, LayoutTemplate, Search, Smartphone, ShieldCheck, Zap } from 'lucide-react';

const features = [
    {
        title: 'Modern Technologies',
        description: 'We leverage the power of cutting-edge frameworks like React, Next.js, and Node.js to build fast, scalable digital ecosystems.',
        icon: Zap,
        accent: 'text-blue-400',
        bg: 'from-blue-500/10 to-transparent',
        border: 'group-hover:border-blue-500/50'
    },
    {
        title: 'High Performance Websites',
        description: 'Lightning speed is our priority. We optimize every millisecond to ensure zero frustration and maximum retention.',
        icon: Clock,
        accent: 'text-purple-400',
        bg: 'from-purple-500/10 to-transparent',
        border: 'group-hover:border-purple-500/50'
    },
    {
        title: 'SEO Optimized',
        description: 'Structure is everything. We build sites that search engines find and users love, straight out of the box.',
        icon: Search,
        accent: 'text-orange-400',
        bg: 'from-orange-500/10 to-transparent',
        border: 'group-hover:border-orange-500/50'
    },
    {
        title: 'Secure & Scalable',
        description: 'Enterprise-grade security and architectures that grow as your business dominates the industry.',
        icon: ShieldCheck,
        accent: 'text-blue-400',
        bg: 'from-blue-500/10 to-transparent',
        border: 'group-hover:border-blue-500/50'
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
                    >
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-slate-400 text-lg font-light"
                    >
                        We don't settle for "good enough". We build digital master-pieces designed to elevate your brand instantly.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feat, index) => {
                        const Icon = feat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-[#0a0a0a] border border-white/5 p-10 rounded-[2rem] overflow-hidden transition-all duration-500 ${feat.border}`}
                            >
                                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${feat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative z-10">
                                    <div className="mb-6 p-4 bg-white/5 rounded-2xl w-max border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                        <Icon className={`w-8 h-8 ${feat.accent}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-white transition-colors">
                                        {feat.title}
                                    </h3>
                                    <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {feat.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
