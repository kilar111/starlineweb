import React from 'react';
import { motion } from 'framer-motion';

const posts = [
    {
        title: 'The Future of Web Development',
        excerpt: 'Exploring how AI and modern frameworks are redefining the digital landscape in 2026.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
        date: 'Mar 12, 2026',
        author: 'John Doe'
    },
    {
        title: 'Optimizing for Core Web Vitals',
        excerpt: 'A comprehensive guide to ensuring your next-gen web applications are lightning fast and high ranking.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
        date: 'Feb 28, 2026',
        author: 'Alex Smith'
    },
    {
        title: 'Minimalism in Modern UI/UX',
        excerpt: 'How stripping away the noise leads to extreme engagement and conversion on premium platforms.',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600',
        date: 'Feb 15, 2026',
        author: 'Jane Roe'
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Insights</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-light max-w-lg">
                            Expert articles and guides to stay ahead in the digital world.
                        </p>
                    </motion.div>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="group flex items-center gap-2 text-white font-bold tracking-wide border border-white/10 px-6 py-3 rounded-full hover:bg-white/5 transition-all duration-300"
                    >
                        View All Articles
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-xl"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                                    <span>By {post.author}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-slate-400 font-light mb-8 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 text-white font-bold tracking-widest text-xs uppercase hover:gap-4 transition-all duration-300">
                                    Read More &rarr;
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
