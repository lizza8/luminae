import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  StarIcon,
  ThumbsUpIcon,
  ZoomInIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { HeaderSection } from "../LandingDesktop/sections/HeaderSection";

const productImages = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop",
];

const sizes = ["XS", "S", "M", "L", "XL"];
const colors = [
  { name: "Burgundy", hex: "#8B1A1A" },
  { name: "Navy", hex: "#1E3A8A" },
  { name: "Orange", hex: "#F97316" },
  { name: "Yellow", hex: "#FBBF24" },
];

const relatedProducts = [
  {
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    title: "SHORT PRINTED DRESS",
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "-40%",
    shippingCost: "$39",
  },
  {
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop",
    title: "SHORT PRINTED DRESS",
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "-40%",
    shippingCost: "$65",
  },
  {
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop",
    title: "SHORT PRINTED DRESS",
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "-40%",
    shippingCost: "$42",
  },
  {
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    title: "SHORT PRINTED DRESS",
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "-40%",
    shippingCost: "$28",
  },
];

const shippingOptions = [
  {
    company: "AUSPOST",
    logo: "🚚",
    cost: "Free",
    delivery: "14-21 days",
    insurance: false,
  },
  {
    company: "ACE COURIERS",
    logo: "✈️",
    cost: "$15",
    delivery: "7-14 days",
    insurance: true,
  },
  {
    company: "TRANSCO CARGO",
    logo: "🚀",
    cost: "$21",
    delivery: "3-7 days",
    insurance: true,
  },
];

const reviews = [
  {
    id: 1,
    rating: 5,
    title: "Its really amazing",
    author: "by Saraandrall",
    advantages: "Color, Size",
    disadvantages: "",
    review:
      "What sets 5 Star Cloth apart from other brands is their ability to create timeless pieces that never go out of style. Their designs are sophisticated and elegant, catering to individuals who appreciate refined fashion. Whether it's a formal event or a casual outing, their clothing effortlessly elevates any ensemble.",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=200&h=200&fit=crop",
    ],
    helpful: 2,
    unhelpful: 1,
  },
  {
    id: 2,
    rating: 4,
    title: "I was satisfied but...",
    author: "by Meli rey",
    advantages: "Size, style",
    disadvantages: "The color was a little lighter than the photo",
    review:
      "The fabric used in this clothing line is of superior quality, providing a luxurious feel against the skin. It not only looks stunning but also feels incredibly comfortable to wear. The attention to detail in every stitch and seam is evident, making each piece a work of art.",
    images: ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200&h=200&fit=crop"],
    helpful: 1,
    unhelpful: 5,
  },
];

const ratingStats = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 50 },
  { stars: 3, percentage: 30 },
  { stars: 2, percentage: 90 },
  { stars: 1, percentage: 20 },
];

export const ProductDetail = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const [activeTab, setActiveTab] = useState("details");
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="flex flex-col items-start w-full bg-white min-h-screen">
      <HeaderSection />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-4 md:px-8 lg:px-[90px] py-4 md:py-6 w-full border-b border-gray-100">
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
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          Clothes
        </a>
        <span className="text-gray-400">›</span>
        <span className="text-sm text-gray-900 font-medium">Zara</span>
      </div>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-[90px] py-6 md:py-8 lg:py-12 w-full max-w-[1440px] mx-auto">
        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-24 md:w-24 md:h-32 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === index
                    ? "border-gray-900 shadow-lg scale-105"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1 h-[400px] md:h-[500px] lg:h-[700px] bg-gray-50 rounded-2xl overflow-hidden group">
            <img
              src={productImages[selectedImage]}
              alt="Product"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
            <button
              className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <ZoomInIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6 w-full lg:w-[450px] xl:w-[500px]">
          {/* Title & Favorite */}
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              SHORT PRINTED DRESS
            </h1>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 rounded-full hover:bg-gray-100 transition-all"
            >
              <HeartIcon
                className={`w-6 h-6 transition-all ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>

          {/* Price */}
          <div className="text-4xl font-bold text-gray-900">$39.99</div>

          {/* Size Selection */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-900">Size</span>
              <button className="text-sm text-orange-500 hover:text-orange-600 transition-colors">
                Size guideline
              </button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[48px] h-12 px-4 rounded-lg border-2 transition-all duration-300 font-medium ${
                    selectedSize === size
                      ? "border-gray-900 bg-gray-900 text-white shadow-lg scale-105"
                      : "border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-gray-900">Color</span>
            <div className="flex gap-3">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`relative w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === index
                      ? "border-gray-900 scale-110 shadow-lg"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColor === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full shadow-md" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Shipping */}
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-gray-900">Shipping</span>
            <button className="flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-gray-400 transition-all">
              <span className="text-sm text-gray-900">
                Free Shipping to Victoria territory
              </span>
              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
            </button>
            <span className="text-xs text-gray-500">Delivery Time: 14-17 days</span>
          </div>

          {/* Quantity */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-gray-900">Quantity</span>
              <span className="text-sm text-gray-500">50 available / 104 sold</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all"
              >
                <MinusIcon className="w-5 h-5" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-20 h-12 text-center border-2 border-gray-200 rounded-lg text-lg font-medium focus:border-gray-900 focus:outline-none transition-all"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition-all"
              >
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="flex flex-col gap-3 p-5 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-900">$79.98</div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                Add shipping insurance for $9{" "}
                <span className="text-gray-400">
                  (declared value: only if the package gets lost, stolen or damaged.)
                </span>
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 h-14 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
              SHOP NOW
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-14 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-base font-semibold rounded-xl transition-all"
            >
              <ShoppingBagIcon className="w-5 h-5 mr-2" />
              ADD TO BASKET
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-[90px] py-8 md:py-12 w-full max-w-[1440px] mx-auto border-t border-gray-100">
        <div className="flex items-center gap-6 md:gap-8 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveTab("details")}
            className={`pb-4 whitespace-nowrap text-base font-bold transition-all ${
              activeTab === "details"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            PRODUCT DETAILS
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-4 whitespace-nowrap text-base font-bold transition-all ${
              activeTab === "reviews"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            REVIEWS (5)
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`pb-4 whitespace-nowrap text-base font-bold transition-all ${
              activeTab === "shipping"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            SHIPPING & PAYMENT
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "details" && (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 animate-fade-in">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Short dress with a plunging V-neckline and tie detail. Wide
                  sleeves falling below the elbow. Contrast bead details.
                  Invisible back zip fastening.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Product Specifications
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "Length | Regular",
                    "Pattern | Floral",
                    "Size | 38",
                    "Fit | Regular fit",
                    "Age group | Adult",
                    "Leg opening | Wide leg",
                    "Sleeve length | Long sleeve",
                    "Package contents | 2 pcs",
                  ].map((spec, i) => (
                    <li key={i} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Composition</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We work with monitoring programmes to ensure compliance with our
                  social, environmental and health and safety standards for our
                  products.
                </p>
                <p className="text-sm font-bold text-gray-900 mb-1">OUTER SHELL</p>
                <p className="text-gray-600">90% cotton, 10% linen</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Care Instructions
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    { icon: "🌡️", text: "Machine wash at max. 30ºC/86ºF with short spin cycle" },
                    { icon: "🔥", text: "Iron at a maximum of 110ºC/230ºF" },
                    { icon: "❌", text: "Do not dry clean" },
                    { icon: "🚫", text: "Do not tumble dry" },
                    { icon: "🔄", text: "Wash inside out" },
                    { icon: "⚠️", text: "Wash separately" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <div className="grid md:grid-cols-[300px_1fr] gap-8">
              {/* Rating Summary */}
              <div className="flex flex-col gap-6 p-6 bg-gray-50 rounded-2xl">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Total review rate
                  </h3>
                  <p className="text-sm text-gray-600">Average rating</p>
                  <p className="text-sm text-gray-600">(10 Reviews)</p>
                  <p className="text-sm text-gray-600">(6123 Ratings)</p>
                </div>

                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-gray-900">4.8</span>
                  <span className="text-gray-600">/5</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-xl"
                >
                  Write a review
                </Button>
              </div>

              {/* Rating Bars */}
              <div className="flex flex-col gap-3">
                {ratingStats.map((stat) => (
                  <div key={stat.stars} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-900 w-16">
                      {stat.stars} Stars
                    </span>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 transition-all duration-500 rounded-full"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600 w-12 text-right">
                      {stat.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="flex flex-col gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col gap-4 p-6 border-2 border-gray-100 rounded-2xl hover:border-gray-200 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {review.title}
                      </h4>
                      <p className="text-sm text-gray-500">{review.author}</p>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        <ThumbsUpIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{review.helpful}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        <ThumbsUpIcon className="w-4 h-4 rotate-180" />
                        <span className="text-sm font-medium">{review.unhelpful}</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                      <span className="text-sm font-bold text-gray-900">
                        Advantages
                      </span>
                      <span className="text-sm text-gray-600">
                        {review.advantages}
                      </span>
                    </div>
                    {review.disadvantages && (
                      <div className="flex gap-4">
                        <span className="text-sm font-bold text-gray-900">
                          Disadvantages
                        </span>
                        <span className="text-sm text-gray-600">
                          {review.disadvantages}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 leading-relaxed">{review.review}</p>

                  {review.images.length > 0 && (
                    <div className="flex gap-3 flex-wrap">
                      {review.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Review ${idx + 1}`}
                          className="w-24 h-24 object-cover rounded-lg hover:scale-110 transition-transform cursor-pointer"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shipping</h3>
              <p className="text-gray-600 mb-6">
                Calculate the shipping cost by region
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-900">
                  Shipping to
                </span>
                <button className="flex items-center justify-between px-4 py-3 w-full sm:w-[300px] border-2 border-gray-200 rounded-lg hover:border-gray-400 transition-all">
                  <span className="text-sm text-gray-900">Sydney</span>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                          Shipping Company
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                          Shipping Cost
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                          Estimated Delivery
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                          Insurance
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {shippingOptions.map((option, index) => (
                        <tr
                          key={index}
                          className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{option.logo}</span>
                              <span className="text-sm font-medium text-gray-900">
                                {option.company}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {option.cost}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {option.delivery}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={option.insurance}
                                disabled
                                className="w-4 h-4 rounded border-gray-300"
                              />
                              <span className="text-sm text-gray-600">
                                {option.insurance ? "Available" : "Unavailable"}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment</h3>
              <p className="text-gray-600 mb-6">
                Payment methods supported with our platform
              </p>

              <div className="flex items-center gap-6 flex-wrap">
                {["💳 PayPal", "💳 Mastercard", "₿ Bitcoin"].map((method, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-lg text-lg font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-[90px] py-12 w-full bg-gray-50">
        <div className="flex items-center justify-between max-w-[1440px] mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            YOU MIGHT ALSO LIKE
          </h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto w-full">
          {relatedProducts.map((product, index) => (
            <Card
              key={index}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-0"
            >
              <CardContent className="flex flex-col p-0">
                <div className="relative w-full h-[320px] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                      <HeartIcon className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-5">
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xl font-bold text-red-600">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                    <Badge className="px-2 py-1 bg-red-600 hover:bg-red-600 text-white text-xs font-bold">
                      {product.discount}
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full h-11 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg font-medium transition-all"
                  >
                    {product.shippingCost} Add to cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
