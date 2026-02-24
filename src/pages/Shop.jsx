import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, Search } from 'lucide-react';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('newest');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = useMemo(() => {
        let results = products.filter(p =>
            (selectedCategory === 'All' || p.category === selectedCategory) &&
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortBy === 'price-low') {
            results.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            results.sort((a, b) => b.price - a.price);
        }

        return results;
    }, [selectedCategory, sortBy, searchQuery]);

    return (
        <div className="pt-32 pb-24 container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                <div>
                    <h1 className="text-5xl font-bold tracking-tight mb-4 text-offwhite">Explore <span className="text-accent italic">Artifacts</span></h1>
                    <p className="text-gray-400">Discover our full range of premium lifestyle pieces.</p>
                </div>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search artifacts..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 outline-none focus:border-accent transition-colors"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Filters Sidebar */}
                <div className="space-y-10">
                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Filter size={18} /> Categories
                        </h3>
                        <div className="flex flex-col gap-3">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`text-left py-2 px-4 rounded-xl transition-all ${selectedCategory === cat ? 'bg-accent text-white' : 'hover:bg-white/5 text-gray-400 hover:text-offwhite'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            Sort By
                        </h3>
                        <div className="relative group">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 outline-none appearance-none focus:border-accent cursor-pointer transition-colors"
                            >
                                <option value="newest" className="bg-charcoal text-white">Newest Arrivals</option>
                                <option value="price-low" className="bg-charcoal text-white">Price: Low to High</option>
                                <option value="price-high" className="bg-charcoal text-white">Price: High to Low</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" size={18} />
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="lg:col-span-3">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="h-96 flex flex-col items-center justify-center glass rounded-3xl space-y-4">
                            <p className="text-xl text-gray-400">No artifacts found matching your criteria.</p>
                            <button
                                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                                className="text-accent font-bold underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
