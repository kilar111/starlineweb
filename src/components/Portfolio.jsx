import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'MIM Academy',
        category: 'Education & Course Portal',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
        color: 'from-blue-600/20 to-transparent'
    },
    {
        title: 'Nexus Intelligence',
        category: 'SaaS Dashboard',
        image: '/project_dashboard.png',
        color: 'from-purple-600/20 to-transparent'
    },
    {
        title: 'Lumina Haute Couture',
        category: 'E-commerce Platform',
        image: '/project_ecommerce.png',
        color: 'from-orange-600/20 to-transparent'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-light max-w-lg">
                            A quick look at some of our most impactful digital solutions.
                        </p>
                    </motion.div>

                    <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-white font-bold flex items-center gap-2 border-b border-white/20 pb-1 hover:border-white transition-all"
                    >
                        View Full Portfolio <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5 group-hover:border-white/20 transition-all duration-500 mb-6">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase shadow-2xl">
                                        View Project
                                    </div>
                                </div>
                            </div>

                            <div className="px-2">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">
                                    {project.category}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
