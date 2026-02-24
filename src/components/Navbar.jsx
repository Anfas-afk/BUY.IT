import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 md:pt-6">
            <motion.nav
                layout
                initial={false}
                className={`pointer-events-auto flex items-center justify-between relative
          ${isScrolled
                        ? 'glass rounded-full px-8 py-3 shadow-2xl shadow-accent/10 border-white/20 mx-4 w-auto min-w-[300px]'
                        : 'bg-transparent w-full container mx-auto px-6 py-2 border-transparent'
                    }`}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                    mass: 1
                }}
            >
                <motion.div layout className="flex items-center shrink-0">
                    <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-offwhite hover:text-accent transition-colors">
                        AURA<span className="text-accent">.</span>
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <motion.div
                    layout
                    className={`hidden md:flex items-center gap-8 ${isScrolled ? 'mx-10' : 'ml-auto mr-12'}`}
                >
                    {['Home', 'Shop', 'About'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-accent transition-colors text-gray-400 hover:text-offwhite"
                        >
                            {item}
                        </Link>
                    ))}
                </motion.div>

                <motion.div layout className="flex items-center gap-2 md:gap-5">
                    <Link to="/cart" className="relative p-2.5 hover:bg-white/5 rounded-full transition-colors group">
                        <ShoppingBag size={18} className="group-hover:text-accent transition-colors" />
                        <AnimatePresence>
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="absolute -top-1 -right-1 bg-accent text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full text-white"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>

                    <button
                        className="md:hidden p-2 hover:bg-white/5 rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-4 glass p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                        >
                            <Link to="/" className="text-sm font-bold uppercase tracking-widest">Home</Link>
                            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest">Shop</Link>
                            <Link to="/about" className="text-sm font-bold uppercase tracking-widest">About</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Navbar;
