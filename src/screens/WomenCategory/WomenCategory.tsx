import { HeartIcon, SearchIcon, StarIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { HeaderSection } from "../LandingDesktop/sections/HeaderSection";

interface Product {
  id: number;
  brand: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: string;
  isFavorite: boolean;
}

const products: Product[] = [
  {
    id: 1,
    brand: "Mango",
    title: "Kimono & Caftan - Black - Casual",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    rating: 5,
    reviews: 289,
    price: 215,
    originalPrice: 228,
    discount: "-10%",
    isFavorite: false,
  },
  {
    id: 2,
    brand: "Uniqlo",
    title: "Midi atlas Slim fit - Bohemian",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop",
    rating: 4,
    reviews: 86,
    price: 125,
    originalPrice: 156,
    discount: "-8%",
    isFavorite: true,
  },
  {
    id: 3,
    brand: "Zara",
    title: "Kimono & Caftan - Black - Bohemian",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
    rating: 5,
    reviews: 526,
    price: 398,
    originalPrice: 412,
    discount: "-3%",
    isFavorite: false,
  },
  {
    id: 4,
    brand: "Ralph Lauren",
    title: "Blazer - Minimalist",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    rating: 3,
    reviews: 54,
    price: 68,
    originalPrice: 89,
    discount: "-12%",
    isFavorite: false,
  },
  {
    id: 5,
    brand: "NBB",
    title: "Bikini & sarashi- Casual",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    rating: 5,
    reviews: 150,
    price: 300,
    originalPrice: 365,
    discount: "-15%",
    isFavorite: false,
  },
  {
    id: 6,
    brand: "Rachel Pally",
    title: "Dress - Beige - Soft - Casual",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop",
    rating: 5,
    reviews: 200,
    price: 512,
    originalPrice: 623,
    discount: "-20%",
    isFavorite: true,
  },
  {
    id: 7,
    brand: "Ralph lauren",
    title: "Shirt-oversize - Minimalist",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop",
    rating: 4,
    reviews: 300,
    price: 459,
    originalPrice: 556,
    discount: "-11%",
    isFavorite: false,
  },
  {
    id: 8,
    brand: "Zara",
    title: "Sweather - Black & White- Minimalist",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    rating: 5,
    reviews: 120,
    price: 420,
    originalPrice: 529,
    discount: "-3%",
    isFavorite: false,
  },
  {
    id: 9,
    brand: "Uniqlo",
    title: "Sweather - Casual",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop",
    rating: 5,
    reviews: 289,
    price: 228,
    originalPrice: 515,
    discount: "-10%",
    isFavorite: false,
  },
];

const modelOptions = [
  { label: "Short", count: 60 },
  { label: "Mid-length", count: 10 },
  { label: "Sweather", count: 56 },
  { label: "Party Dresses", count: 80 },
  { label: "Regular Fit", count: 100 },
];

const styleOptions = [
  { label: "Casual", checked: true },
  { label: "Business casual", checked: false },
  { label: "Bohemian", checked: true },
  { label: "Minimalist", checked: true },
  { label: "Uniqlo", checked: true },
  { label: "Zara", checked: false },
  { label: "Gucci", checked: true },
  { label: "Mango", checked: true },
  { label: "Ralph Lauren", checked: false },
  { label: "Calvin Klein", checked: false },
  { label: "Rachel Pally", checked: false },
];

const colorOptions = [
  { color: "#FF0000", name: "Red" },
  { color: "#0000FF", name: "Blue", selected: true },
  { color: "#FFA500", name: "Orange" },
  { color: "#FFFF00", name: "Yellow" },
  { color: "#00FF00", name: "Green" },
  { color: "#800080", name: "Purple" },
  { color: "#FFC0CB", name: "Pink" },
  { color: "#000000", name: "Black" },
  { color: "#A52A2A", name: "Brown" },
  { color: "#808080", name: "Gray" },
  { color: "#FFFFFF", name: "White" },
];

const sizeOptions = ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"];

export const WomenCategory = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedStyles, setSelectedStyles] = useState<string[]>(
    styleOptions.filter((s) => s.checked).map((s) => s.label)
  );
  const [selectedColor, setSelectedColor] = useState("Blue");
  const [selectedSize, setSelectedSize] = useState("M");
  const [priceRange, setPriceRange] = useState([60, 450]);
  const [searchBrand, setSearchBrand] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style)
        ? prev.filter((s) => s !== style)
        : [...prev, style]
    );
  };

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <HeaderSection />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-4 md:px-8 lg:px-[90px] py-4 bg-white border-b border-gray-100">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
        >
          Homepage
        </button>
        <span className="text-gray-400">›</span>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          Women
        </a>
        <span className="text-gray-400">›</span>
        <span className="text-sm text-gray-900 font-medium">Clothes</span>
      </div>

      {/* Header with count and sort */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-[90px] py-6 bg-gray-50">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Women</h1>
          <p className="text-sm text-gray-500 mt-1">110 items</p>
        </div>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-900 bg-white"
        >
          <option value="default">Sort by order</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <div className="flex gap-6 px-4 md:px-8 lg:px-[90px] py-8 w-full max-w-[1440px] mx-auto">
        {/* Left Sidebar - Filters */}
        <aside className="w-[245px] flex-shrink-0 bg-white border-2 border-yellow-400 rounded-lg p-6">
          {/* All Categories */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
            <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-gray-900 rounded-sm"></div>
              <div className="w-2 h-2 bg-gray-900 rounded-sm"></div>
              <div className="w-2 h-2 bg-gray-900 rounded-sm"></div>
              <div className="w-2 h-2 bg-gray-900 rounded-sm"></div>
            </div>
            <span className="font-bold text-gray-900">All Categories</span>
          </div>

          {/* Brand Search */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">BRAND</h3>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                value={searchBrand}
                onChange={(e) => setSearchBrand(e.target.value)}
                className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded"
              />
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Model Filter */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">MODEL</h3>
            <ul className="flex flex-col gap-2">
              {modelOptions.map((option) => (
                <li key={option.label} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{option.label}</span>
                  <span className="text-gray-400">{option.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Style Filter */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">STYLE</h3>
            <ul className="flex flex-col gap-2">
              {styleOptions.map((option) => (
                <li key={option.label} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedStyles.includes(option.label)}
                    onChange={() => toggleStyle(option.label)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Color Filter */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">COLOR</h3>
            <div className="grid grid-cols-6 gap-2">
              {colorOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(option.name)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === option.name
                      ? "border-gray-900 scale-110"
                      : "border-gray-300 hover:border-gray-500"
                  } ${option.color === "#FFFFFF" ? "border-gray-400" : ""}`}
                  style={{ backgroundColor: option.color }}
                  title={option.name}
                >
                  {selectedColor === option.name && option.color === "#FFFFFF" && (
                    <div className="w-2 h-2 bg-gray-900 rounded-full mx-auto" />
                  )}
                  {selectedColor === option.name && option.color !== "#FFFFFF" && (
                    <div className="w-2 h-2 bg-white rounded-full mx-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">SIZE</h3>
            <div className="grid grid-cols-4 gap-2">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 rounded border transition-all text-sm font-medium ${
                    selectedSize === size
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">PRICE</h3>
            <div className="flex items-center gap-2 mb-4">
              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-20 h-10 text-center border border-gray-300 rounded"
              />
              <span className="text-gray-500">—</span>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-20 h-10 text-center border border-gray-300 rounded"
              />
            </div>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Minimum $200</span>
              <span>Maximum $500</span>
            </div>
          </div>

          <div className="text-sm text-gray-600 font-medium">
            878 products found
          </div>
        </aside>

        {/* Right Side - Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Card
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-[320px] bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <HeartIcon
                        className={`w-5 h-5 ${
                          product.isFavorite
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{product.brand}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.title}</p>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-red-600">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                      <Badge className="px-2 py-0.5 bg-red-600 hover:bg-red-600 text-white text-xs">
                        {product.discount}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
