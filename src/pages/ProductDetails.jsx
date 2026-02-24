import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const product = products.find(p => p.id === parseInt(id));
    const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 3);

    if (!product) return <div className="pt-32 text-center text-2xl font-bold">Product not found.</div>;

    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <Link to="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent font-medium mb-12 transition-colors group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Product Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card aspect-[4/5] overflow-hidden"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Product Info */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest italic">{product.category}</span>
                        <h1 className="text-5xl font-bold tracking-tight text-offwhite">{product.name}</h1>
                        <div className="flex items-center gap-4">
                            <div className="flex text-yellow-500 items-center gap-1">
                                <Star size={16} fill="currentColor" />
                                <span className="text-offwhite font-bold ml-1">{product.rating}</span>
                            </div>
                            <span className="text-gray-500 font-medium">({product.reviews} customer reviews)</span>
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-accent">${product.price.toFixed(2)}</h2>

                    <p className="text-gray-400 text-lg leading-relaxed">{product.description}</p>

                    <div className="space-y-6">
                        <h4 className="font-bold flex items-center gap-2">Features:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center glass rounded-full p-1 h-14">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-12 h-12 flex items-center justify-center hover:text-accent transition-colors"
                            >
                                -
                            </button>
                            <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-12 h-12 flex items-center justify-center hover:text-accent transition-colors"
                            >
                                +
                            </button>
                        </div>

                        <button
                            onClick={() => addToCart(product, quantity)}
                            className="flex-1 h-14 bg-accent hover:bg-accent/80 text-white font-bold rounded-full flex items-center justify-center gap-3 transition-all shadow-xl shadow-accent/20 group"
                        >
                            <ShoppingCart size={20} />
                            Add to Cart
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
                        {[
                            { icon: ShieldCheck, text: "Authentic" },
                            { icon: Truck, text: "Shipping" },
                            { icon: RotateCcw, text: "Returnable" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 text-center">
                                <div className="text-accent"><item.icon size={24} strokeWidth={1.5} /></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-24 border-t border-white/5 pt-12">
                <div className="flex gap-12 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                    {['description', 'reviews', 'shipping'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm font-bold uppercase tracking-widest px-4 py-2 relative transition-colors ${activeTab === tab ? 'text-offwhite' : 'text-gray-500 hover:text-offwhite'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                            )}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl text-gray-400 min-h-[200px] leading-relaxed">
                    {activeTab === 'description' && (
                        <p className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            The {product.name} is a testament to AURA's commitment to quality and minimalist aesthetic. Every detail has been carefully considered to provide you with a product that not only looks stunning but performs exceptionally in your daily rituals. Designed with premium materials and ergonomic principles, it represents a perfect balance of form and function.
                        </p>
                    )}
                    {activeTab === 'reviews' && (
                        <p className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            Validated customer feedback: "This is exactly what I was looking for. The quality is unmatched and the design is truly breathtaking." - Alex J. (Verified Purchase)
                        </p>
                    )}
                    {activeTab === 'shipping' && (
                        <p className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            We offer worldwide express shipping. Orders are processed within 24 hours. Estimated delivery: 3-5 business days for domestic orders, 7-10 business days for international orders. Returns accepted within 30 days.
                        </p>
                    )}
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <div className="mt-24">
                    <h3 className="text-3xl font-bold mb-12">You Might Also <span className="text-accent italic">Like</span></h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
