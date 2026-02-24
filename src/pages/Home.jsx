import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Box, Shield, Zap } from 'lucide-react';

const Home = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="pt-24 overflow-hidden">
            {/* Premium Hero Section */}
            <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] animate-pulse" />
                    <div className="absolute bottom-[5%] right-[-5%] w-[700px] h-[700px] bg-accent/15 rounded-full blur-[160px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")` }} />
                </div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 italic"
                        >
                            The 2026 Collection — Limited Edition
                        </motion.span>
                        <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-offwhite">
                            PURE <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-400 italic">ESSENCE.</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-light">
                            Elevate your existence with curated artifacts that define the boundaries of modern luxury and functional art.
                        </p>
                        <div className="flex flex-wrap gap-8 items-center">
                            <Link to="/shop" className="relative group overflow-hidden bg-accent text-white px-12 py-6 rounded-full font-bold transition-all shadow-2xl shadow-accent/40 flex items-center gap-4">
                                <span className="relative z-10">Explore Collection</span>
                                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </Link>
                            <Link to="/about" className="text-offwhite font-bold border-b-2 border-accent/30 hover:border-accent transition-all pb-1 tracking-wider text-sm">
                                OUR PHILOSOPHY
                            </Link>
                        </div>
                    </motion.div>

                    {/* Impact Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 glass rounded-[3rem] p-4 rotate-3 group hover:rotate-0 transition-all duration-700">
                            <div className="overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=90"
                                    alt="Premium Product"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                        {/* Floaing Stats */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 glass p-6 rounded-2xl shadow-2xl z-20 backdrop-blur-3xl"
                        >
                            <div className="text-accent text-2xl font-black italic">4.9/5</div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Global Rating</div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-2xl z-20 backdrop-blur-3xl"
                        >
                            <div className="text-white text-xl font-bold">Carbon Neutral</div>
                            <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Sustainable Luxury</div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Shield, title: "Premium Quality", desc: "Every artifact is meticulously inspected for excellence." },
                            { icon: Box, title: "Fast Shipping", desc: "Global delivery with fully tracked premium logistics." },
                            { icon: Zap, title: "Secure Payment", desc: "Industry-standard encryption for all transactions." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-400 text-sm max-w-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight mb-4">Featured <span className="text-accent italic">Artifacts</span></h2>
                            <p className="text-gray-400">Our latest selection of handpicked premium goods.</p>
                        </div>
                        <Link to="/shop" className="text-accent hover:text-accent/80 font-bold flex items-center gap-2 group">
                            View All
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass min-h-[600px] rounded-[4rem] overflow-hidden relative group"
                    >
                        {/* High-Impact Visual Background */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1600&q=80"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms] opacity-40 grayscale"
                                alt="Style Background"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/80 to-transparent" />
                        </div>

                        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 items-center px-12 md:px-24 py-20">
                            <div className="max-w-xl space-y-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block italic">Established 2026</span>
                                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-offwhite">
                                        DEFINE <br />
                                        YOUR <span className="text-transparent bg-clip-text bg-linear-to-b from-accent to-purple-800">AURA.</span>
                                    </h2>
                                    <p className="text-gray-400 text-xl font-light leading-relaxed max-w-sm">
                                        Not just products. A statement of existence for the modern minimalist.
                                    </p>
                                </motion.div>

                                <Link to="/shop" className="inline-flex items-center gap-6 group/btn">
                                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent transition-all duration-500">
                                        <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                    <span className="text-xl font-bold tracking-tight uppercase group-hover/btn:text-accent transition-colors">Shop the Collection</span>
                                </Link>
                            </div>

                            <div className="hidden lg:flex justify-end pr-12">
                                <motion.div
                                    animate={{
                                        rotate: [0, 5, 0],
                                        y: [0, -20, 0]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-[300px] h-[400px] glass p-3 rotate-6 rounded-[2.5rem] shadow-2xl overflow-hidden"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80"
                                        alt="Featured artifact"
                                        className="w-full h-full object-cover rounded-[2rem]"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
