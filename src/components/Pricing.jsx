import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Landing Page',
        description: 'Perfect for small businesses or new product launches.',
        price: 'Starting from Rs 50,000',
        features: [
            'Single Page Custom Design',
            'Mobile Responsive',
            'Basic SEO Setup',
            'Contact Form Integration',
            '1 Month Free Support',
            'Fast Delivery (1 Week)'
        ],
        notIncluded: ['E-commerce Functionality', 'Custom Web App Logic'],
        popular: false
    },
    {
        name: 'Business Website',
        description: 'Comprehensive corporate site to establish brand presence.',
        price: 'Starting from Rs 150,000',
        features: [
            'Up to 10 Custom Pages',
            'Premium UI/UX Design',
            'Advanced SEO Optimization',
            'CMS Integration (WordPress/Custom)',
            '3 Months Free Support',
            'Analytics Setup'
        ],
        notIncluded: ['Complex E-commerce'],
        popular: true
    },
    {
        name: 'E-Commerce / Web App',
        description: 'Full-fledged online store or custom web application.',
        price: 'Starting from Rs 350,000',
        features: [
            'Unlimited Pages & Products',
            'Custom Seamless Checkout Flow',
            'Advanced User Dashboard',
            'Payment Gateway Integration',
            '6 Months Free Support',
            'High-performance Cloud Hosting Setup'
        ],
        notIncluded: [],
        popular: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-32 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Accent glow behind pricing */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-[400px] bg-orange-600/5 blur-[150px] pointer-events-none rounded-full" />

                <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
                    >
                        <span className="text-orange-400 font-bold tracking-widest uppercase text-sm">
                            Transparent Value
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Estimated <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Investment</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center lg:items-stretch">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative bg-[#0a0a0a] backdrop-blur-xl border ${plan.popular ? 'border-orange-500' : 'border-white/5'} p-10 lg:p-12 rounded-[2.5rem] hover:border-white/20 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-purple-500" />
                            )}

                            <div className="mb-8 flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="text-slate-400 font-light mb-8 h-12">{plan.description}</div>
                                <div className="text-3xl font-black text-white mb-2">{plan.price}</div>

                                {/* Divider */}
                                <div className="w-full h-px bg-white/10 mb-8" />
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
                                        <span className="text-[15px] font-medium text-slate-200">{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <X className="h-5 w-5 text-slate-700 flex-shrink-0" />
                                        <span className="text-[15px] font-medium text-slate-600 line-through">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className={`w-full py-4 rounded-xl font-bold transition-all flex justify-center items-center ${plan.popular
                                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg shadow-orange-500/30'
                                    : 'bg-white/5 hover:bg-white/10 text-white'
                                    }`}
                            >
                                Request a Quote
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
