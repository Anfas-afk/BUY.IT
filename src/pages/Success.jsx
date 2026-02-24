import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

const Success = () => {
    return (
        <div className="pt-48 pb-24 container mx-auto px-6 text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 200 }}
                className="mb-8 flex justify-center text-accent"
            >
                <div className="relative">
                    <CheckCircle size={100} strokeWidth={1.5} />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 0], scale: [1, 2, 2.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 bg-accent/20 rounded-full"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h1 className="text-5xl font-bold mb-6 tracking-tight">Order <span className="text-accent italic">Confirmed</span>.</h1>
                <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
                    Thank you for choosing AURA. Your premium artifacts are being prepared for shipment. You will receive a confirmation email shortly.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/shop" className="bg-accent hover:bg-accent/80 text-white px-10 py-5 rounded-full font-bold transition-all shadow-xl shadow-accent/20 flex items-center gap-3">
                        Continue Shopping
                        <ArrowRight size={20} />
                    </Link>
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                        <Package size={20} />
                        Order #AUR-92837
                    </div>
                </div>
            </motion.div>

            <div className="mt-24 glass max-w-2xl mx-auto rounded-3xl p-8 text-sm text-gray-400">
                <p>Need help with your order? Contact our concierge at support@aura.luxury</p>
            </div>
        </div>
    );
};

export default Success;
