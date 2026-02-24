import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, CheckCircle } from 'lucide-react';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        paymentMethod: 'card'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order processing
        setTimeout(() => {
            clearCart();
            navigate('/success');
        }, 1500);
    };

    if (cart.length === 0) return <div className="pt-48 text-center px-6"><h2 className="text-2xl font-bold mb-4">No items to checkout.</h2><Link to="/shop" className="text-accent underline">Return to Shop</Link></div>;

    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h1 className="text-4xl font-bold mb-10">Checkout</h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <section className="space-y-6">
                            <h3 className="text-xl font-bold flex items-center gap-3">
                                <Truck size={20} className="text-accent" /> Shipping Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text" required placeholder="First Name"
                                    className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-colors"
                                    value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                                <input
                                    type="text" required placeholder="Last Name"
                                    className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-colors"
                                    value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                            <input
                                type="email" required placeholder="Email Address"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-colors"
                                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <input
                                type="text" required placeholder="Street Address"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-colors"
                                value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text" required placeholder="City"
                                    className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-colors"
                                    value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                />
                                <input
                                    type="text" required placeholder="ZIP Code"
                                    className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-accent transition-colors"
                                    value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                                />
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-xl font-bold flex items-center gap-3">
                                <CreditCard size={20} className="text-accent" /> Payment Method
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                                    className={`flex items-center justify-between p-6 rounded-2xl border transition-all ${formData.paymentMethod === 'card' ? 'border-accent bg-accent/5' : 'border-white/10 bg-white/5'}`}
                                >
                                    <span className="font-bold">Credit Card</span>
                                    {formData.paymentMethod === 'card' && <CheckCircle size={20} className="text-accent" />}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
                                    className={`flex items-center justify-between p-6 rounded-2xl border transition-all ${formData.paymentMethod === 'paypal' ? 'border-accent bg-accent/5' : 'border-white/10 bg-white/5'}`}
                                >
                                    <span className="font-bold">PayPal</span>
                                    {formData.paymentMethod === 'paypal' && <CheckCircle size={20} className="text-accent" />}
                                </button>
                            </div>
                        </section>

                        <button
                            type="submit"
                            className="w-full bg-accent hover:bg-accent/80 text-white py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-accent/20"
                        >
                            Complete Purchase
                        </button>
                    </form>
                </div>

                <div className="lg:sticky lg:top-32 h-fit">
                    <div className="glass rounded-3xl p-10 space-y-8">
                        <h3 className="text-2xl font-bold">Order Summary</h3>
                        <div className="space-y-6 max-h-[300px] overflow-y-auto pr-4 scrollbar-hide">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg overflow-hidden glass">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{item.name}</h4>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-sm text-accent">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/5 pt-8 space-y-4">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Shipping</span>
                                <span className="text-green-500 uppercase text-xs font-bold tracking-widest">Free</span>
                            </div>
                            <div className="flex justify-between text-2xl font-bold pt-4">
                                <span>Total</span>
                                <span className="text-accent">${cartTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-gray-500 justify-center">
                            <ShieldCheck size={14} className="text-accent" />
                            Your data is encrypted and secure.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
