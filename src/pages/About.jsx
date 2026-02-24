import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Leaf } from 'lucide-react';

const About = () => {
    return (
        <div className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                        alt="Minimal Interior"
                        className="w-full h-full object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-charcoal/0 via-charcoal/80 to-charcoal" />
                </div>

                <div className="container mx-auto text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
                    >
                        Since 2026
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8"
                    >
                        THE <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-400">AURA</span> PHILOSOPHY.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        We don't just sell products; we curate artifacts that serve as an extension of your identity and your space.
                    </motion.p>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-4 rotate-2">
                                <img
                                    src="https://images.unsplash.com/photo-1544441893-675973e31985?w=800&q=80"
                                    alt="Minimal fabric"
                                    className="w-full h-full object-cover rounded-[2.5rem] grayscale"
                                />
                            </div>
                            <div className="absolute -bottom-12 -right-12 glass p-8 rounded-3xl backdrop-blur-3xl border-white/20 hidden md:block">
                                <div className="text-4xl font-black text-accent mb-1 italic">100%</div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Handcrafted Excellence</div>
                            </div>
                        </motion.div>

                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-bold mb-6 tracking-tight">Radical Simplicity.</h2>
                                <p className="text-gray-400 leading-relaxed text-lg font-light">
                                    AURA was born out of a desire for artifacts that transcend seasonal trends. We believe in the power of minimalism as a lifestyle choice—removing the noise to focus on the essential.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { icon: Target, title: "Precision", text: "Every detail is considered, from the weight of materials to the texture of finishes." },
                                    { icon: Leaf, title: "Nature", text: "We use sustainable, ethically sourced materials that respect our environment." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="space-y-4"
                                    >
                                        <div className="w-12 h-12 glass flex items-center justify-center rounded-2xl text-accent">
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Banner */}
            <section className="py-24 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { label: "Design", value: "Minimal" },
                            { label: "Quality", value: "Premium" },
                            { label: "Logistics", value: "Tracked" },
                            { label: "Community", value: "Bespoke" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-3 group-hover:scale-110 transition-transform">{stat.label}</div>
                                <div className="text-3xl font-black italic">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-32 px-6">
                <div className="container mx-auto text-center max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black tracking-tight mb-12 italic"
                    >
                        "Elevating your existence through artifacts of pure functional art."
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="w-12 h-[1px] bg-white/20" />
                        <span className="text-xs font-bold tracking-[0.5em] uppercase text-gray-500">The Aura Mission</span>
                        <div className="w-12 h-[1px] bg-white/20" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
