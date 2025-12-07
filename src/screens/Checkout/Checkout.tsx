import { HomeIcon, MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { HeaderSection } from "../LandingDesktop/sections/HeaderSection";

interface CartItem {
  id: number;
  name: string;
  color: string;
  colorHex: string;
  price: number;
  quantity: number;
  image: string;
}

const relatedProducts = [
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/4-org-zoom-1.png",
    title: "SHORT PRINTED DRESS",
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "-40%",
    shippingCost: "$39",
  },
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/4-org-zoom-1-1.png",
    title: "SHORT PRINTED DRESS",
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "-40%",
    shippingCost: "$65",
  },
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/4-org-zoom-1-2.png",
    title: "SHORT PRINTED DRESS",
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "-40%",
    shippingCost: "$42",
  },
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo.png",
    title: "SHORT PRINTED DRESS",
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "-40%",
    shippingCost: "$28",
  },
];

export const Checkout = (): JSX.Element => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "2 Pieces Mango set- Regular fit",
      color: "Yellow",
      colorHex: "#d4af37",
      price: 25.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "3 Pieces Zara set- Casual fit",
      color: "Black",
      colorHex: "#000000",
      price: 32.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Zara Cardigan- Regular fit",
      color: "Blue",
      colorHex: "#1E3A8A",
      price: 40.25,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=200&h=200&fit=crop",
    },
  ]);

  const [packInGiftBox, setPackInGiftBox] = useState(true);
  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const tax = 0;
  const giftBoxPrice = packInGiftBox ? 10.9 : 0;
  const total = subtotal + shipping + tax + giftBoxPrice;

  return (
    <div className="flex flex-col items-start w-full bg-white min-h-screen">
      <HeaderSection />

      {/* Homepage Button */}
      <div className="w-full px-4 md:px-8 lg:px-[90px] py-4 border-b border-gray-200">
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
        >
          <HomeIcon className="w-5 h-5" />
          <span className="font-medium">Back to Homepage</span>
        </Button>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[90px] py-8 md:py-12">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Cart Items */}
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Card <span className="text-gray-400">{cartItems.length}</span>
            </h1>

            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 border border-gray-200 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div className="flex-1 flex flex-col gap-2">
                    <h3 className="text-base font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Color:</span>
                      <div
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: item.colorHex }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-lg font-semibold text-gray-900">
                      ${item.price.toFixed(2)}
                    </span>

                    <div className="flex items-center gap-2 border border-gray-300 rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <MinusIcon className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <PlusIcon className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="text-lg font-semibold text-gray-900 w-20 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                      <TrashIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="flex flex-col gap-6">
            <Card className="p-6 bg-gray-50 border-0">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-semibold text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-gray-900">
                    ${shipping.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold text-gray-900">
                    ${tax.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-gray-600">Discount Price</span>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm text-red-500 flex items-center gap-1">
                      <span className="text-red-500">⚠</span>
                      You must log in to use the discount code
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-300">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={packInGiftBox}
                      onChange={(e) => setPackInGiftBox(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-900">Pack in a Gift Box</span>
                  </label>
                  <span className="font-semibold text-gray-900">
                    ${giftBoxPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-gray-300 mb-6">
                <span className="text-lg font-bold text-gray-900">
                  Total Price
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Button className="w-full h-14 bg-gray-800 hover:bg-gray-900 text-white text-base font-semibold rounded-lg flex items-center justify-center gap-2">
                <ShoppingBagIcon className="w-5 h-5" />
                CHECKOUT
              </Button>
            </Card>

            {/* Coupon Code */}
            <Card className="p-4 border border-gray-200">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 h-12 border-gray-300 focus:border-gray-900"
                />
                <Button className="h-12 px-6 bg-gray-900 hover:bg-gray-800 text-white font-medium whitespace-nowrap">
                  Login and Apply code
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              YOU MIGHT ALSO LIKE
            </h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                ‹
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors">
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <Card
                key={index}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all border-0"
              >
                <CardContent className="flex flex-col p-0">
                  <div className="relative w-full h-[280px] bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-3 p-5">
                    <h3 className="text-base font-bold text-gray-900">
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
                      className="w-full h-10 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded font-medium transition-all"
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
    </div>
  );
};
