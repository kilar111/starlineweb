import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code2, Search, Palette, ShoppingCart, BarChart3 } from 'lucide-react';

const services = [
    {
        title: 'Web Design & Development',
        description: 'Custom, high-performing websites built with modern frameworks that scale seamlessly.',
        icon: Layout,
        accent: 'group-hover:text-blue-500',
        border: 'group-hover:border-blue-500/50',
        bg: 'bg-blue-500/5'
    },
    {
        title: 'Web Applications',
        description: 'Complex SaaS platforms and portals engineered for performance and flawless user experience.',
        icon: Code2,
        accent: 'group-hover:text-purple-500',
        border: 'group-hover:border-purple-500/50',
        bg: 'bg-purple-500/5'
    },
    {
        title: 'SEO Optimization',
        description: 'Technical audits and structured architectures maximizing organic visibility on search engines.',
        icon: Search,
        accent: 'group-hover:text-orange-500',
        border: 'group-hover:border-orange-500/50',
        bg: 'bg-orange-500/5'
    },
    {
        title: 'UI/UX Design',
        description: 'Beautiful, user-centric interfaces crafted with deep research and conversion psychology.',
        icon: Palette,
        accent: 'group-hover:text-cyan-500',
        border: 'group-hover:border-cyan-500/50',
        bg: 'bg-cyan-500/5'
    },
    {
        title: 'E-commerce Development',
        description: 'Bespoke storefronts with seamless checkouts engineered to blast past revenue goals.',
        icon: ShoppingCart,
        accent: 'group-hover:text-pink-500',
        border: 'group-hover:border-pink-500/50',
        bg: 'bg-pink-500/5'
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven funnel creation and aggressive ad management that scales traffic fast.',
        icon: BarChart3,
        accent: 'group-hover:text-emerald-500',
        border: 'group-hover:border-emerald-500/50',
        bg: 'bg-emerald-500/5'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Ambient Gradient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                            Our Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Services
                            </span>
                        </h2>
                        <p className="text-slate-400 text-xl font-light max-w-lg">
                            End-to-end solutions that transform your abstract ideas into dominant market realities.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-[#0a0a0a] backdrop-blur-xl border border-white/5 p-10 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${service.border} hover:bg-[#111] hover:shadow-2xl`}
                            >
                                {/* Subtle Hover Gradient Base */}
                                <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${service.bg}`} />

                                <div className="relative z-10">
                                    <div className="mb-8 p-4 bg-white/5 rounded-2xl w-max border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                                        <Icon className={`w-8 h-8 text-slate-300 transition-colors duration-300 ${service.accent}`} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-wide relative">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                        {service.description}
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

export default Services;
