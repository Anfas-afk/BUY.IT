import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <div className="glass-card overflow-hidden aspect-[4/5] relative">
                <Link to={`/product/${product.id}`} className="block w-full h-full overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </Link>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                        onClick={() => addToCart(product)}
                        className="p-3 bg-accent text-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-accent/20"
                    >
                        <ShoppingCart size={18} />
                    </button>
                    <Link
                        to={`/product/${product.id}`}
                        className="p-3 bg-white text-charcoal rounded-full hover:scale-110 transition-transform shadow-lg"
                    >
                        <Eye size={18} />
                    </Link>
                </div>

                {/* Badge */}
                {product.stock === "Limited Stock" && (
                    <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Limited
                    </div>
                )}
            </div>

            <div className="mt-5 space-y-2">
                <div className="flex justify-between items-start">
                    <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors font-medium text-offwhite">
                        {product.name}
                    </Link>
                    <span className="font-bold text-accent">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                        <Star size={12} fill="currentColor" />
                    </div>
                    <span className="text-xs text-gray-400">{product.rating} ({product.reviews})</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
