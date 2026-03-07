import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#020202] pt-24 pb-12 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Massive Logo / Brand Name */}
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-[12vw] leading-none font-black text-white/5 tracking-tighter mix-blend-screen select-none pointer-events-none absolute top-4 left-0 w-full whitespace-nowrap overflow-hidden">
                        STARLINE WEB
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16 relative mt-[100px]">

                    <div className="col-span-1 lg:col-span-1">
                        <a href="#" className="flex items-center gap-3 mb-8">
                            <img className="h-12 w-auto" src="/logo.png" alt="Starline Web Pvt Ltd" />
                            <span className="text-white font-extrabold text-2xl tracking-tight">Starline</span>
                        </a>
                        <p className="text-slate-500 mb-8 font-light leading-relaxed">
                            Engineering the future of digital experiences with uncompromising quality and performance.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500/20 hover:border-orange-500/50 hover:text-orange-400 text-slate-400 transition-all duration-300">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 text-slate-400 transition-all duration-300">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://wa.me/94787199535" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400 text-slate-400 transition-all duration-300">
                                <span className="sr-only">WhatsApp</span>
                                <MessageCircle className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Navigation</h3>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-slate-500 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-500 hover:text-white transition-colors">About</a></li>
                            <li><a href="#portfolio" className="text-slate-500 hover:text-white transition-colors">Work</a></li>
                            <li><a href="#services" className="text-slate-500 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#contact" className="text-slate-500 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Expertise</h3>
                        <ul className="space-y-4">
                            <li><a href="#services" className="text-slate-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">SaaS Development</a></li>
                            <li><a href="#services" className="text-slate-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">Enterprise Portals</a></li>
                            <li><a href="#services" className="text-slate-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">E-commerce Solutions</a></li>
                            <li><a href="#services" className="text-slate-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all">Digital Marketing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Stay Updated</h3>
                        <p className="text-slate-500 mb-6 font-light">
                            Join our exclusive list for cutting-edge tech insights.
                        </p>
                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/5 border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-slate-600 rounded-none bg-transparent"
                            />
                            <button className="absolute right-0 top-3 text-slate-400 hover:text-orange-400 font-medium uppercase tracking-widest text-xs transition-colors">
                                Join &rarr;
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-600 font-light">
                        &copy; {new Date().getFullYear()} Starline Web Pvt Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-slate-600 hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-slate-600 hover:text-white transition-colors">Terms</a>
                        <a href="#" className="text-slate-600 hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
