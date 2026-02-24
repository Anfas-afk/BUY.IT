import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 border-t border-white/5 bg-charcoal/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-offwhite">
                            AURA<span className="text-accent underline decoration-2 underline-offset-4">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Defining modern luxury through minimalist design and premium quality artifacts for the contemporary lifestyle.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                                <a key={idx} href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-offwhite">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/shop" className="hover:text-accent transition-colors text-sm">All Products</Link></li>
                            <li><Link to="/shop?category=Electronics" className="hover:text-accent transition-colors text-sm">Electronics</Link></li>
                            <li><Link to="/shop?category=Accessories" className="hover:text-accent transition-colors text-sm">Accessories</Link></li>
                            <li><Link to="/shop?category=Lifestyle" className="hover:text-accent transition-colors text-sm">Lifestyle</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-offwhite">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-accent transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/shop" className="hover:text-accent transition-colors text-sm">Our Store</Link></li>
                            <li><Link to="/about" className="hover:text-accent transition-colors text-sm">Philosophy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-offwhite">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-6">Join our newsletter and get updates on new arrivals.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 outline-none focus:border-accent transition-colors text-sm"
                            />
                            <button className="absolute right-2 top-1.5 bg-accent hover:bg-accent/80 text-white p-2 rounded-full transition-colors">
                                <Mail size={16} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500">© 2026 AURA. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs text-gray-500 hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-gray-500 hover:text-accent transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
