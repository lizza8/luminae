import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SendIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const flashSalesData = [
  {
    hours: "12",
    minutes: "43",
    seconds: "12",
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-bag.png",
    title: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    rating: 4,
    reviews: 54,
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "- 40%",
  },
  {
    hours: "02",
    minutes: "05",
    seconds: "32",
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-bag-1.png",
    title: "Reebok",
    description: "Women's Powder sneakers",
    rating: 4,
    reviews: 54,
    price: "$112.02",
    originalPrice: "$129.99",
    discount: "- 40%",
  },
  {
    hours: "02",
    minutes: "14",
    seconds: "21",
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-bag-2.png",
    title: "Patso",
    description: "Shoulder bag-Pink-Plain",
    rating: 4,
    reviews: 54,
    price: "$69.99",
    originalPrice: "$129.99",
    discount: "- 40%",
  },
  {
    hours: "25",
    minutes: "11",
    seconds: "02",
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-bag-3.png",
    title: "Sketchers",
    description: "Sport-shoe 2102",
    rating: 4,
    reviews: 54,
    price: "$80.00",
    originalPrice: "$129.99",
    discount: "- 40%",
  },
];

const trendingData = [
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/4-org-zoom-1.png",
    badge: true,
    title: "Cool & Sexy Calvin Klein",
    description: "Dotted dress-Casual",
    price: "$89",
  },
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/4-org-zoom-1-1.png",
    badge: false,
    title: "Cool & Sexy Calvin Klein",
    description: "Dotted dress-Casual",
    price: "$89",
  },
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/4-org-zoom-1-2.png",
    badge: true,
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    price: "$102",
  },
];

const top100Data = [
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo.png",
    brand: "Mango",
    description: "Kimono & Caftan - Black - Regular fit",
    rating: 5,
    reviews: 289,
    price: "$228",
    originalPrice: "$290",
    discount: "-10%",
  },
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-1.png",
    brand: "Zara",
    description: "Midi top- Daily fit",
    rating: 5,
    reviews: 523,
    price: "$95",
    originalPrice: "$145",
    discount: "-7%",
  },
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-2.png",
    brand: "Uniqlo",
    description: "Midi atlas Slim fit - bohemian",
    rating: 5,
    reviews: 86,
    price: "$125",
    originalPrice: "$156",
    discount: "-8%",
  },
  {
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/photo-3.png",
    brand: "Mango dress",
    description: "Kimono & Caftan - Colorful - Night club fit",
    rating: 5,
    reviews: 121,
    price: "$365",
    originalPrice: "$487",
    discount: "-15%",
  },
];

const promoBannersRow1 = [
  {
    bgColor: "bg-[#bf2e3b]",
    title: "Never-Ending Summer",
    description: "Throwback Shirts & all-day dressed",
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/rectangle-1078.png",
  },
  {
    bgColor: "bg-[#1d5159]",
    title: "The most famous sport brands",
    description: "Get in gym essentials",
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/rectangle-1078-1.png",
  },
];

const promoBannersRow2 = [
  {
    bgColor: "bg-[#d01fb4]",
    title: "The Pinky Barbie Edition",
    description: "Lets play dress up",
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/rectangle-1078-2.png",
    textColor: "text-[#f2f3f0]",
  },
  {
    bgColor: "bg-[#0186c4]",
    title: "Best Sellers Everyone Love",
    description: "poolside glam include",
    image: "https://c.animaapp.com/mivermkpLBMRtC/img/rectangle-1078-3.png",
    textColor: "text-[#f2f3f0]",
  },
];

const footerLinks = {
  company: ["About Us", "Our Store", "Contact us"],
  career: ["Selling Programs", "Advertise", "Cooperation"],
  howToBuy: [
    "Making Payments",
    "Delivery Options",
    "Buyer Protection",
    "New User Guide",
  ],
  help: ["Contacts Us", "FAQ", "Privacy Policy"],
};

export const FormSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-[68px] pt-[84px] pb-0 px-0 w-full bg-white">
      <div className="flex flex-col items-start gap-12 px-[90px] py-0 w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
        <header className="flex items-center justify-between w-full">
          <h2 className="font-28-medium font-[number:var(--28-medium-font-weight)] text-black text-[length:var(--28-medium-font-size)] tracking-[var(--28-medium-letter-spacing)] leading-[var(--28-medium-line-height)] [font-style:var(--28-medium-font-style)]">
            Flash Sales
          </h2>

          <button className="flex items-center gap-1 transition-opacity hover:opacity-70">
            <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-neutral-800 text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              View all
            </span>
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-5 w-full">
          {flashSalesData.map((item, index) => (
            <Card
              key={`flash-sale-${index}`}
              className="flex flex-col min-w-[200px] h-[380px] flex-1 bg-white rounded-lg overflow-hidden shadow-[0px_0px_12px_#0000001a] opacity-0 translate-y-[-1rem] animate-fade-in transition-transform hover:scale-105"
              style={
                {
                  "--animation-delay": `${400 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col h-full p-0">
                <div className="flex flex-col h-[90px] items-center justify-around px-0 py-4">
                  <div className="flex flex-col items-start justify-around h-[77px] w-full">
                    <div className="flex flex-wrap items-center justify-center gap-[5px] px-[70px] py-4 bg-white rounded-[8px_8px_0px_0px] h-[77px] w-full">
                      <div className="font-16-extra-bold font-[number:var(--16-extra-bold-font-weight)] text-[#9d9d9d] text-[length:var(--16-extra-bold-font-size)] text-center tracking-[var(--16-extra-bold-letter-spacing)] leading-[var(--16-extra-bold-line-height)] whitespace-nowrap [font-style:var(--16-extra-bold-font-style)]">
                        Deal of the Day
                      </div>

                      <div className="flex flex-wrap w-[117px] h-[45px] items-start justify-end gap-0">
                        <div className="flex flex-wrap w-[115px] items-center gap-[6px] justify-between">
                          <span className="font-18-extra-bold font-[number:var(--18-extra-bold-font-weight)] text-neutral-800 text-[length:var(--18-extra-bold-font-size)] text-center tracking-[var(--18-extra-bold-letter-spacing)] leading-[var(--18-extra-bold-line-height)] whitespace-nowrap [font-style:var(--18-extra-bold-font-style)]">
                            {item.hours}
                          </span>

                          <img
                            className="w-3.5 h-3.5"
                            alt="Icon colon"
                            src="https://c.animaapp.com/mivermkpLBMRtC/img/icon-colon.svg"
                          />

                          <span className="font-18-extra-bold font-[number:var(--18-extra-bold-font-weight)] text-neutral-800 text-[length:var(--18-extra-bold-font-size)] text-center tracking-[var(--18-extra-bold-letter-spacing)] leading-[var(--18-extra-bold-line-height)] whitespace-nowrap [font-style:var(--18-extra-bold-font-style)]">
                            {item.minutes}
                          </span>

                          <img
                            className="w-3.5 h-3.5"
                            alt="Icon colon"
                            src="https://c.animaapp.com/mivermkpLBMRtC/img/icon-colon.svg"
                          />

                          <span className="font-18-extra-bold font-[number:var(--18-extra-bold-font-weight)] text-neutral-800 text-[length:var(--18-extra-bold-font-size)] text-center tracking-[var(--18-extra-bold-letter-spacing)] leading-[var(--18-extra-bold-line-height)] whitespace-nowrap [font-style:var(--18-extra-bold-font-style)]">
                            {item.seconds}
                          </span>
                        </div>

                        <div className="w-[117px] flex items-start justify-between">
                          <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#9d9d9d] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                            hour
                          </span>

                          <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#9d9d9d] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                            min
                          </span>

                          <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#9d9d9d] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                            sec
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-[162px] bg-white flex items-center justify-center">
                  <img
                    className="w-[241px] h-[129px]"
                    alt="Photo bag"
                    src={item.image}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-[6px_0px] px-10 py-4 flex-1 w-full bg-white">
                  <div className="font-16-extra-bold font-[number:var(--16-extra-bold-font-weight)] text-neutral-800 text-[length:var(--16-extra-bold-font-size)] tracking-[var(--16-extra-bold-letter-spacing)] leading-[var(--16-extra-bold-line-height)] [font-style:var(--16-extra-bold-font-style)] w-[151px]">
                    {item.title}
                  </div>

                  <div className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#555555] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)] w-[151px]">
                    {item.description}
                  </div>

                  <div className="flex w-[151px] items-center gap-px">
                    <div className="inline-flex items-start">
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon
                          key={`star-${i}`}
                          className="w-3 h-3 fill-current text-yellow-400"
                        />
                      ))}
                    </div>

                    <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#555555] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)] w-8">
                      ({item.reviews})
                    </span>
                  </div>

                  <div className="flex flex-wrap w-[151px] items-center justify-between gap-[9px]">
                    <span className="font-14-bold font-[number:var(--14-bold-font-weight)] text-[#ff2e00] text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] w-14">
                      {item.price}
                    </span>

                    <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#555555] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)] w-[58px]">
                      {item.originalPrice}
                    </span>

                    <Badge className="w-[33px] h-auto px-1.5 py-[3px] bg-[#ff2e00] rounded-[2.06px] hover:bg-[#ff2e00]">
                      <span className="font-8-semi-bold font-[number:var(--8-semi-bold-font-weight)] text-white text-[length:var(--8-semi-bold-font-size)] tracking-[var(--8-semi-bold-letter-spacing)] leading-[var(--8-semi-bold-line-height)] [font-style:var(--8-semi-bold-font-style)]">
                        {item.discount}
                      </span>
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[50px] px-[90px] py-0 w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:800ms]">
        <header className="flex items-center justify-between w-full">
          <h2 className="font-28-medium font-[number:var(--28-medium-font-weight)] text-black text-[length:var(--28-medium-font-size)] tracking-[var(--28-medium-letter-spacing)] leading-[var(--28-medium-line-height)] [font-style:var(--28-medium-font-style)]">
            Trending must-haves
          </h2>

          <button className="flex items-center gap-1 transition-opacity hover:opacity-70">
            <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-neutral-800 text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              View all
            </span>
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </header>

        <div className="flex flex-wrap items-start gap-5 w-full">
          {trendingData.map((item, index) => (
            <Card
              key={`trending-${index}`}
              className="flex flex-col min-w-[400px] flex-1 bg-white rounded-lg overflow-hidden shadow-none border-0 opacity-0 translate-y-[-1rem] animate-fade-in transition-transform hover:scale-105"
              style={
                {
                  "--animation-delay": `${1000 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col items-center p-0">
                <div className="relative w-full h-[344px] bg-white rounded-[8px_8px_0px_0px] overflow-hidden">
                  <img
                    className="w-full h-[270.06%] object-cover"
                    alt="Element org zoom"
                    src={item.image}
                  />

                  {item.badge && (
                    <div className="absolute top-0 left-0 inline-flex flex-col items-start gap-2.5 p-2.5">
                      <Badge className="inline-flex items-center justify-center gap-2.5 px-1.5 py-[3px] bg-[#00a95d] rounded hover:bg-[#00a95d]">
                        <div className="inline-flex items-center justify-center gap-1">
                          <img
                            className="w-4 h-4"
                            alt="Icon new arivals"
                            src="https://c.animaapp.com/mivermkpLBMRtC/img/icon-new-arivals-1.svg"
                          />

                          <span className="font-10-regular font-[number:var(--10-regular-font-weight)] text-white text-[length:var(--10-regular-font-size)] tracking-[var(--10-regular-letter-spacing)] leading-[var(--10-regular-line-height)] whitespace-nowrap [font-style:var(--10-regular-font-style)]">
                            New Arivals
                          </span>
                        </div>
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap h-[93px] items-center justify-between gap-[12px_115px] p-5 w-full bg-neutral-800 rounded-[0px_0px_8px_8px]">
                  <div className="flex flex-col h-[58px] items-start justify-between flex-1">
                    <h3 className="font-16-bold font-[number:var(--16-bold-font-weight)] text-white text-[length:var(--16-bold-font-size)] tracking-[var(--16-bold-letter-spacing)] leading-[var(--16-bold-line-height)] [font-style:var(--16-bold-font-style)]">
                      {item.title}
                    </h3>

                    <p className="opacity-85 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#c4c4c4] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]">
                      {item.description}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="h-auto inline-flex flex-col items-start justify-center gap-2.5 px-6 py-3 rounded-lg border border-solid border-[#d9d9d9] bg-transparent hover:bg-white/10 transition-colors"
                  >
                    <div className="inline-flex items-start gap-2">
                      <span className="font-14-medium-uppercase font-[number:var(--14-medium-uppercase-font-weight)] text-white text-[length:var(--14-medium-uppercase-font-size)] whitespace-nowrap tracking-[var(--14-medium-uppercase-letter-spacing)] leading-[var(--14-medium-uppercase-line-height)] [font-style:var(--14-medium-uppercase-font-style)]">
                        {item.price}
                      </span>

                      <span className="font-14-bold font-[number:var(--14-bold-font-weight)] text-white text-[length:var(--14-bold-font-size)] text-right tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] whitespace-nowrap [font-style:var(--14-bold-font-style)]">
                        Shop Now
                      </span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-12 px-[90px] py-0 w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:1300ms]">
        <header className="flex items-center justify-between w-full">
          <h2 className="font-28-medium font-[number:var(--28-medium-font-weight)] text-black text-[length:var(--28-medium-font-size)] tracking-[var(--28-medium-letter-spacing)] leading-[var(--28-medium-line-height)] [font-style:var(--28-medium-font-style)]">
            Top100
          </h2>

          <button className="flex items-center gap-1 transition-opacity hover:opacity-70">
            <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-neutral-800 text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              View all
            </span>
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-5 w-full">
          {top100Data.map((item, index) => (
            <Card
              key={`top100-${index}`}
              onClick={() => handleProductClick(`top100-${index}`)}
              className="flex flex-col min-w-[260px] h-[480px] flex-1 shadow-[0px_0px_12px_#0000001a] border-0 overflow-hidden opacity-0 translate-y-[-1rem] animate-fade-in transition-transform hover:scale-105 cursor-pointer"
              style={
                {
                  "--animation-delay": `${1500 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="flex flex-col h-full p-0">
                <img
                  className="flex-1 w-full object-cover"
                  alt="Photo"
                  src={item.image}
                />

                <div className="flex flex-col items-start gap-3 p-5 w-full bg-white">
                  <div className="flex flex-wrap h-11 items-center gap-[4px_80px] w-full">
                    <div className="flex flex-col items-start justify-center gap-1 flex-1">
                      <h3 className="font-12-bold font-[number:var(--12-bold-font-weight)] text-neutral-800 text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] whitespace-nowrap [font-style:var(--12-bold-font-style)]">
                        {item.brand}
                      </h3>

                      <p className="font-10-regular font-[number:var(--10-regular-font-weight)] text-[#555555] text-[length:var(--10-regular-font-size)] tracking-[var(--10-regular-letter-spacing)] leading-[var(--10-regular-line-height)] whitespace-nowrap [font-style:var(--10-regular-font-style)]">
                        {item.description}
                      </p>
                    </div>

                    <img
                      className="w-[21.5px] h-[19.5px]"
                      alt="Vector"
                      src="https://c.animaapp.com/mivermkpLBMRtC/img/vector.svg"
                    />
                  </div>

                  <div className="flex h-[25px] items-center gap-3 w-full">
                    <div className="inline-flex items-center">
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon
                          key={`star-${i}`}
                          className="w-6 h-6 fill-current text-yellow-400"
                        />
                      ))}
                    </div>

                    <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#555555] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                      ({item.reviews})
                    </span>
                  </div>

                  <div className="flex h-5 items-center gap-3 w-full">
                    <span className="font-14-extra-bold font-[number:var(--14-extra-bold-font-weight)] text-[#ff2e00] text-[length:var(--14-extra-bold-font-size)] whitespace-nowrap tracking-[var(--14-extra-bold-letter-spacing)] leading-[var(--14-extra-bold-line-height)] [font-style:var(--14-extra-bold-font-style)]">
                      {item.price}
                    </span>

                    <span className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#9d9d9d] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] whitespace-nowrap [font-style:var(--14-regular-20-font-style)]">
                      {item.originalPrice}
                    </span>

                    <span
                      className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#ff2e00] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-
height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]"
                    >
                      {item.discount}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 px-[90px] py-0 w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:1900ms]">
        {promoBannersRow1.map((banner, index) => (
          <div
            key={`promo-row1-${index}`}
            className="flex min-w-80 flex-1 transition-transform hover:scale-105"
          >
            <div
              className={`${banner.bgColor} flex flex-col items-start gap-[31px] px-5 py-[68px] flex-1`}
            >
              <div className="flex flex-col items-center justify-center gap-4 w-full">
                <h3 className="font-36-extrabold font-[number:var(--36-extrabold-font-weight)] text-white text-[length:var(--36-extrabold-font-size)] tracking-[var(--36-extrabold-letter-spacing)] leading-[var(--36-extrabold-line-height)] [font-style:var(--36-extrabold-font-style)]">
                  {banner.title}
                </h3>

                <p className="font-28-regular-36 font-[number:var(--28-regular-36-font-weight)] text-white text-[length:var(--28-regular-36-font-size)] tracking-[var(--28-regular-36-letter-spacing)] leading-[var(--28-regular-36-line-height)] [font-style:var(--28-regular-36-font-style)]">
                  {banner.description}
                </p>
              </div>

              <button className="[font-family:'Lato',Helvetica] font-normal text-white text-xl tracking-[0] leading-9 underline transition-opacity hover:opacity-70">
                Exlopre all category
              </button>
            </div>

            <img
              className="flex-1 object-cover"
              alt="Rectangle"
              src={banner.image}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-[70px] px-[90px] py-0 w-full bg-[#f7ddd0] opacity-0 animate-fade-in [--animation-delay:2100ms]">
        <button className="transition-transform hover:scale-110">
          <ChevronLeftIcon className="w-8 h-8" />
        </button>

        <div className="flex flex-col items-start justify-center gap-4 flex-1">
          <h3 className="font-24-bold-uppercase font-[number:var(--24-bold-uppercase-font-weight)] text-[#465d6b] text-[length:var(--24-bold-uppercase-font-size)] tracking-[var(--24-bold-uppercase-letter-spacing)] leading-[var(--24-bold-uppercase-line-height)] [font-style:var(--24-bold-uppercase-font-style)]">
            MAGSAFE
          </h3>

          <div className="flex flex-wrap items-center gap-[10px] px-0 py-px w-full">
            <p className="flex-1 font-20-medium-28 font-[number:var(--20-medium-28-font-weight)] text-[#555555] text-[length:var(--20-medium-28-font-size)] tracking-[var(--20-medium-28-letter-spacing)] leading-[var(--20-medium-28-line-height)] [font-style:var(--20-medium-28-font-style)]">
              Snap on a magnetic case, wallet, or both. And get faster wireless
              charging.
            </p>
          </div>
        </div>

        <img
          className="flex-1 h-[221px] object-contain"
          alt="Iphone"
          src="https://c.animaapp.com/mivermkpLBMRtC/img/iphone.png"
        />

        <button className="transition-transform hover:scale-110">
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-5 px-[90px] py-0 w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:2300ms]">
        {promoBannersRow2.map((banner, index) => (
          <div
            key={`promo-row2-${index}`}
            className="flex min-w-80 flex-1 transition-transform hover:scale-105"
          >
            <div
              className={`${banner.bgColor} flex flex-col items-start gap-[31px] px-5 py-[68px] flex-1`}
            >
              <div className="flex flex-col items-center justify-center gap-4 w-full">
                <h3
                  className={`font-36-extrabold font-[number:var(--36-extrabold-font-weight)] ${banner.textColor} text-[length:var(--36-extrabold-font-size)] tracking-[var(--36-extrabold-letter-spacing)] leading-[var(--36-extrabold-line-height)] [font-style:var(--36-extrabold-font-style)]`}
                >
                  {banner.title}
                </h3>

                <p
                  className={`font-28-regular-36 font-[number:var(--28-regular-36-font-weight)] ${banner.textColor} text-[length:var(--28-regular-36-font-size)] tracking-[var(--28-regular-36-letter-spacing)] leading-[var(--28-regular-36-line-height)] [font-style:var(--28-regular-36-font-style)]`}
                >
                  {banner.description}
                </p>
              </div>

              <button
                className={`[font-family:'Lato',Helvetica] font-normal ${banner.textColor} text-xl tracking-[0] leading-9 underline transition-opacity hover:opacity-70`}
              >
                Exlopre all category
              </button>
            </div>

            <img
              className="flex-1 object-cover"
              alt="Rectangle"
              src={banner.image}
            />
          </div>
        ))}
      </div>

      <footer className="flex flex-col items-center w-full bg-white">
        <div className="flex flex-col w-[571px] gap-6 px-14 py-8 z-[1] bg-[#7296ab] rounded-lg items-center opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:2500ms]">
          <div className="flex flex-col items-center justify-center gap-[23px] w-full">
            <div className="w-[207px] h-5">
              <h2 className="h-5 justify-center [font-family:'Lato',Helvetica] font-normal text-transparent text-[32px] text-right tracking-[0] leading-8 whitespace-nowrap flex items-center">
                <span className="font-[number:var(--32-bold-font-weight)] text-white leading-[var(--32-bold-line-height)] font-32-bold [font-style:var(--32-bold-font-style)] tracking-[var(--32-bold-letter-spacing)] text-[length:var(--32-bold-font-size)]">
                  Luminae
                </span>

                <span className="font-[number:var(--32-bold-font-weight)] text-neutral-800 leading-[var(--32-bold-line-height)] font-32-bold [font-style:var(--32-bold-font-style)] tracking-[var(--32-bold-letter-spacing)] text-[length:var(--32-bold-font-size)]">
                  &nbsp;
                </span>

                <span className="font-[number:var(--32-bold-font-weight)] text-[#d1e2eb] leading-[var(--32-bold-line-height)] font-32-bold [font-style:var(--32-bold-font-style)] tracking-[var(--32-bold-letter-spacing)] text-[length:var(--32-bold-font-size)]">
                  Store
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-[10px] w-full">
              <p className="flex-1 font-16-regular font-[number:var(--16-regular-font-weight)] text-white text-[length:var(--16-regular-font-size)] text-center tracking-[var(--16-regular-letter-spacing)] leading-[var(--16-regular-line-height)] [font-style:var(--16-regular-font-style)]">
                Register your email not to miss the last minutes off+ Free
                delivery
              </p>
            </div>
          </div>

          <div className="flex w-[268px] items-center gap-[127px] px-3 py-2 bg-white rounded">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-0 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#9d9d9d] text-[length:var(--14-regular-20-font-size)] text-right tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            <button className="transition-transform hover:scale-110">
              <SendIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start w-full mt-[-100px] z-0">
          <div className="flex flex-wrap items-center justify-center gap-[32px_127px] pl-[303px] pr-[248px] pt-[132px] pb-[60px] w-full bg-[#d1e2eb]">
            <div className="flex flex-wrap items-start justify-center gap-[60px_126px] flex-1">
              <nav className="flex flex-col w-[123px] items-start justify-center gap-[25px]">
                <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                  Company
                </h3>

                <ul className="flex flex-col items-start gap-[15px] w-full">
                  {footerLinks.company.map((link, index) => (
                    <li key={`company-${index}`}>
                      <a
                        href="#"
                        className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] transition-colors hover:text-neutral-800"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-[134px] items-start gap-[25px]">
                <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] w-[135px]">
                  Career Opportunities
                </h3>

                <ul className="flex flex-col items-start gap-[15px] w-full">
                  {footerLinks.career.map((link, index) => (
                    <li key={`career-${index}`}>
                      <a
                        href="#"
                        className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] transition-colors hover:text-neutral-800"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-[123px] items-start gap-[25px]">
                <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                  How to Buy
                </h3>

                <ul className="flex flex-col items-start gap-[15px] w-full">
                  {footerLinks.howToBuy.map((link, index) => (
                    <li key={`howtobuy-${index}`}>
                      <a
                        href="#"
                        className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] w-[116px] transition-colors hover:text-neutral-800"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-[123px] items-start gap-[25px]">
                <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                  Help
                </h3>

                <ul className="flex flex-col w-[116px] items-start gap-[15px]">
                  {footerLinks.help.map((link, index) => (
                    <li key={`help-${index}`}>
                      <a
                        href="#"
                        className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] transition-colors hover:text-neutral-800"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-3 px-[100px] py-6 w-full bg-white">
            <div className="flex flex-wrap items-center gap-[24px_46px] w-full">
              <img
                className="flex-1 h-[30px]"
                alt="Footer payment"
                src="https://c.animaapp.com/mivermkpLBMRtC/img/footer-payment-methods.svg"
              />

              <div className="w-[123px] flex items-start gap-5">
                <button className="flex w-[123px] items-center gap-[5px] transition-opacity hover:opacity-70">
                  <span className="flex-1 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-neutral-800 text-[length:var(--14-regular-20-font-size)] text-right tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]">
                    English
                  </span>

                  <img
                    className="w-2.5 h-2.5"
                    alt="Icon arrow"
                    src="https://c.animaapp.com/mivermkpLBMRtC/img/icon-arrow-1.svg"
                  />
                </button>
              </div>
            </div>

            <div className="w-full h-0.5 bg-[#d9d9d9]" />

            <div className="flex flex-wrap h-[69px] items-center justify-between gap-[16px_212px] w-full">
              <div className="flex flex-col items-start gap-2 flex-1">
                <address className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-neutral-800 text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] whitespace-nowrap [font-style:var(--14-regular-20-font-style)] not-italic">
                  165-179 Forster Road City of Monash, Melbourne, Australia
                </address>
              </div>

              <p className="flex-1 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#9d9d9d] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]">
                ©2023 Copyright in reserved for lumine shop
              </p>

              <div className="flex w-[120px] items-center justify-end gap-6">
                <button className="transition-transform hover:scale-110">
                  <div className="w-6 h-6 relative">
                    <div className="absolute w-[89.58%] h-[89.58%] top-[5.21%] left-[5.21%] rounded border-[1.5px] border-solid border-[#434343]" />

                    <div className="absolute w-[8.33%] h-[8.33%] top-[20.83%] left-[70.83%] bg-[#434343] rounded-[1px]" />

                    <div className="absolute w-[47.92%] h-[47.92%] top-[26.04%] left-[26.04%] rounded-[5.75px] border-[1.5px] border-solid border-[#434343]" />
                  </div>
                </button>

                <button className="transition-transform hover:scale-110">
                  <img
                    className="w-6 h-6"
                    alt="Icon social outline"
                    src="https://c.animaapp.com/mivermkpLBMRtC/img/icon-social-outline-facebook.svg"
                  />
                </button>

                <button className="transition-transform hover:scale-110">
                  <img
                    className="w-6 h-6"
                    alt="Icon social outline"
                    src="https://c.animaapp.com/mivermkpLBMRtC/img/icon-social-outline-telegram.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
