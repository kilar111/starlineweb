import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Zap, Activity, ArrowUpRight } from 'lucide-react';

const postLaunchServices = [
    {
        title: 'Bulletproof Maintenance',
        description: 'Our dev squad proactively patches vulnerabilities and updates dependencies before they become issues, ensuring 99.99% uptime.',
        icon: Settings,
        color: 'text-blue-400',
        borderColor: 'border-blue-500/10 group-hover:border-blue-500/50',
        bgGlow: 'bg-blue-500/10',
    },
    {
        title: 'Active Cyber Defense',
        description: 'Military-grade monitoring. We protect your customer data with continuous firewall optimizations and real-time malware sweeps.',
        icon: ShieldCheck,
        color: 'text-purple-400',
        borderColor: 'border-purple-500/10 group-hover:border-purple-500/50',
        bgGlow: 'bg-purple-500/10',
    },
    {
        title: 'Performance Tuning',
        description: 'As your codebase grows, speed drops. We run monthly optimization sprints on image delivery and cache rules so your site stays fast.',
        icon: Zap,
        color: 'text-orange-400',
        borderColor: 'border-orange-500/10 group-hover:border-orange-500/50',
        bgGlow: 'bg-orange-500/10',
    },
    {
        title: 'Growth & Scaling Architecture',
        description: 'When you go viral, your servers need to handle it. We implement auto-scaling solutions and provide monthly strategic data reports.',
        icon: Activity,
        color: 'text-blue-400',
        borderColor: 'border-blue-500/10 group-hover:border-blue-500/50',
        bgGlow: 'bg-blue-500/10',
    }
];

const PostLaunchServices = () => {
    return (
        <section id="post-launch" className="py-24 bg-[#050505] relative z-10 overflow-hidden border-t border-white/5">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block border border-white/10 bg-white/5 backdrop-blur-3xl rounded-full px-6 py-2 mb-6 shadow-xl"
                    >
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold uppercase tracking-widest text-sm">
                            Beyond Delivery
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
                    >
                        We protect your code. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 opacity-60">
                            We scale your growth.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                        className="text-slate-400 text-xl max-w-2xl mx-auto font-light"
                    >
                        Launching a website is just day one. We operate as your elite external tech team, ensuring absolute dominance in the market for years to come.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    {postLaunchServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`group relative bg-[#0a0a0a] backdrop-blur-sm border-2 ${service.borderColor} p-8 lg:p-10 rounded-[2.5rem] transition-all duration-300 hover:bg-[#111] hover:shadow-2xl overflow-hidden cursor-pointer`}
                            >
                                <div className={`absolute -right-10 -top-10 w-40 h-40 ${service.bgGlow} blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-[#050505] flex items-center justify-center border border-white/5 shadow-inner group-hover:-translate-y-2 transition-transform duration-300">
                                        <Icon className={`h-8 w-8 ${service.color}`} />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-45 transition-all duration-300 bg-[#050505]">
                                        <ArrowUpRight className="h-5 w-5 text-slate-400" />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 text-lg font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* A Premium CTA Box */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 relative p-[1px] rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-blue-500/20 via-purple-400/20 to-orange-500/20 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
                    <div className="relative bg-[#0a0a0a] rounded-[2.5rem] p-10 lg:px-16 lg:py-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />

                        <div className="max-w-xl z-10 mb-8 md:mb-0">
                            <h4 className="text-3xl font-black text-white mb-4 tracking-tight">Don't hire a whole IT department.</h4>
                            <p className="text-slate-400 text-lg font-light">
                                When you choose Starline Web, you instantly gain an entire squad of 5 elite developers dedicated to scaling your platform, for a fraction of the cost.
                            </p>
                        </div>
                        <a href="#contact" className="z-10 group relative px-10 py-5 bg-white text-black font-extrabold text-lg tracking-wide rounded-full overflow-hidden text-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center justify-center gap-2">
                                Secure Your Plan &rarr;
                            </span>
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default PostLaunchServices;
