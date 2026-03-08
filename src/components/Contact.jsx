import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">

                    {/* Left Side: Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-between h-full"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">conversation.</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-12">
                                Have a project in mind or just want to say hi? Drop us a line and our expert team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <Mail className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm tracking-widest text-slate-500 uppercase mb-1">Email Us</h4>
                                        <a href="mailto:contact@starlineweb.com" className="text-xl text-white font-medium hover:text-blue-400 transition-colors">
                                            contact@starlineweb.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                        <PhoneCall className="w-6 h-6 text-slate-300 group-hover:text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm tracking-widest text-slate-500 uppercase mb-1">Call & WhatsApp Us</h4>
                                        <a href="https://wa.me/94787199535" target="_blank" rel="noopener noreferrer" className="text-xl text-white font-medium hover:text-purple-400 transition-colors">
                                            +94 787199535
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-slate-300 group-hover:text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm tracking-widest text-slate-500 uppercase mb-1">Visit Us</h4>
                                        <p className="text-xl text-white font-medium">
                                            Gampaha, Sri Lanka
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed Placeholder or actual iframe */}
                        <div className="w-full h-64 rounded-3xl overflow-hidden border border-white/10 shadow-lg grayscale invert hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.585859734!2d79.786164!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a70ad%3A0x2db2e1b06f0e442!2sColombo!5e0!3m2!1sen!2slk!4v1709736800000!5m2!1sen!2slk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            />
                        </div>

                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0a0a0a] border border-white/10 p-10 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                    >
                        {/* Top right gradient accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] pointer-events-none" />

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-400 tracking-wide uppercase">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b-2 border-slate-800 px-0 py-3 text-white text-lg focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-400 tracking-wide uppercase">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b-2 border-slate-800 px-0 py-3 text-white text-lg focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-400 tracking-wide uppercase">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b-2 border-slate-800 px-0 py-3 text-white text-lg focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-700"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-400 tracking-wide uppercase">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-transparent border-b-2 border-slate-800 px-0 py-3 text-white text-lg focus:outline-none focus:border-orange-500 transition-colors placeholder:text-slate-700 resize-none"
                                    placeholder="Tell us about your next big idea..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-white text-black font-extrabold text-lg tracking-widest uppercase rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden group mt-6"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                    Send Message
                                </span>
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
