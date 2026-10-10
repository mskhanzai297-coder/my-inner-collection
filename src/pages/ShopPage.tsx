import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Filter, SlidersHorizontal, RotateCcw, Search, Sparkles } from 'lucide-react';

interface ShopPageProps {
  initialCategory?: string;
  onOpenProductDetail: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  initialCategory = 'all',
  onOpenProductDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [priceMax, setPriceMax] = useState<number>(5000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'ladies-innerwear', label: "Ladies' Underwear" },
    { id: 'mens-innerwear', label: "Men's Underwear" },
    { id: 'lingerie-nightwear', label: 'Lingerie & Nightwear' },
    { id: 'ladies-clothing', label: "Ladies' Clothing" },
    { id: 'children-clothing', label: "Children's Clothing" },
    { id: 'personal-care', label: 'Hair Removal & Care' },
  ];

  const allAvailableSizes = ['S', 'M', 'L', 'XL', '2XL', '32B', '34B', '36B', '38C'];

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.fabricOrMaterial.toLowerCase().includes(q)
      );
    }

    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    if (priceMax < 5000) {
      result = result.filter((p) => p.price <= priceMax);
    }

    if (selectedSizeFilter !== 'all') {
      result = result.filter((p) =>
        p.sizes.some((s) => s.toLowerCase().includes(selectedSizeFilter.toLowerCase()))
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortBy, priceMax, inStockOnly, selectedSizeFilter, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSortBy('featured');
    setPriceMax(5000);
    setInStockOnly(false);
    setSelectedSizeFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Title & Breadcrumb */}
      <div className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
            Complete Online Catalogue
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
            {selectedCategory === 'all'
              ? 'All Curated Collections'
              : categories.find((c) => c.id === selectedCategory)?.label || 'Shop Collection'}
          </h1>
          <p className="text-xs text-zinc-400 mt-1 max-w-xl">
            Premium innerwear, breathable fabrics, nightwear, and sensitive personal care formulated for lasting comfort and modesty.
          </p>
        </div>

        {/* Live Search in catalog */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#141419] border border-zinc-700/80 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>
      </div>

      {/* Category Segmented Tabs (Constitutional: functional buttons with clean states) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#d4af37] text-black shadow-md'
                : 'bg-[#16161c] text-zinc-300 hover:text-white hover:bg-zinc-800/80 border border-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Controls Bar: Sort, Filters, Counter */}
      <div className="p-4 rounded-2xl bg-[#141419] border border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-4">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-[#d4af37]"
            >
              <option value="featured">Featured / Best Sellers</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Max Price Range Slider */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Max Price:</span>
            <input
              type="range"
              min="800"
              max="5000"
              step="200"
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="accent-[#d4af37] w-24 sm:w-32 cursor-pointer"
            />
            <span className="text-white font-mono tabular-nums">
              Rs. {priceMax.toLocaleString('en-PK')}
            </span>
          </div>

          {/* Size Filter Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Size:</span>
            <select
              value={selectedSizeFilter}
              onChange={(e) => setSelectedSizeFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-[#d4af37]"
            >
              <option value="all">All Sizes</option>
              {allAvailableSizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-zinc-400">
            Showing <strong className="text-white">{filteredProducts.length}</strong> items
          </span>
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Reset filters"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-20 text-center space-y-4 bg-[#141419] rounded-2xl border border-zinc-800/80">
          <SlidersHorizontal className="w-10 h-10 mx-auto text-zinc-600" />
          <h3 className="font-serif-luxury text-xl font-bold text-white">
            No Products Found Matching Your Criteria
          </h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Try adjusting your price filter or selecting another category to see more options.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-black font-semibold text-xs hover:bg-[#e4c55e] transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenProductDetail}
            />
          ))}
        </div>
      )}
    </div>
  );
};
