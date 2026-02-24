import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="pt-48 pb-24 text-center px-6">
                <div className="mb-10 flex justify-center text-gray-700">
                    <ShoppingBag size={120} strokeWidth={0.5} />
                </div>
                <h2 className="text-4xl font-bold mb-6">Your cart is empty.</h2>
                <p className="text-gray-500 mb-10 max-w-sm mx-auto">It looks like you haven't added any premium artifacts to your collection yet.</p>
                <Link to="/shop" className="bg-accent text-white px-10 py-4 rounded-full font-bold hover:bg-accent/80 transition-colors inline-block shadow-xl shadow-accent/20">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-16 tracking-tight">Your <span className="text-accent italic">Collection</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    <AnimatePresence>
                        {cart.map(item => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="glass rounded-3xl p-6 flex flex-col sm:flex-row gap-8 items-center"
                            >
                                <div className="w-24 h-24 rounded-2xl overflow-hidden glass shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1 space-y-2 text-center sm:text-left">
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{item.category}</p>
                                    <p className="text-accent font-bold">${item.price.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center glass rounded-full p-1 h-12">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="w-10 h-10 flex items-center justify-center hover:text-accent font-bold"
                                    >
                                        -
                                    </button>
                                    <span className="w-10 text-center font-bold">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center hover:text-accent font-bold"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-3 text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Order Summary */}
                <div className="lg:sticky lg:top-32 h-fit">
                    <div className="glass rounded-3xl p-10 space-y-8">
                        <h3 className="text-2xl font-bold">Summary</h3>

                        <div className="space-y-4 border-b border-white/5 pb-8">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Shipping</span>
                                <span>Calculated at checkout</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-2xl font-bold">
                            <span>Total</span>
                            <span className="text-accent">${cartTotal.toFixed(2)}</span>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Promo Code"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 outline-none focus:border-accent transition-colors"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-accent font-bold text-sm">Apply</button>
                        </div>

                        <Link to="/checkout" className="w-full bg-accent hover:bg-accent/80 text-white py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-accent/20 group">
                            Proceed to Checkout
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
