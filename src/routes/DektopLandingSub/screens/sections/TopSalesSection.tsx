import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SendIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

const flashSalesProducts = [
  {
    hours: "12",
    minutes: "43",
    seconds: "12",
    image: "https://c.animaapp.com/mivklg000xmtDs/img/photo-bag.png",
    name: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    rating: 4,
    reviews: 54,
    currentPrice: "$69.99",
    originalPrice: "$129.99",
    discount: "- 40%",
  },
  {
    hours: "02",
    minutes: "05",
    seconds: "32",
    image: "https://c.animaapp.com/mivklg000xmtDs/img/photo-bag-1.png",
    name: "Reebok",
    description: "Women's Powder sneakers",
    rating: 4,
    reviews: 54,
    currentPrice: "$112.02",
    originalPrice: "$129.99",
    discount: "- 40%",
  },
  {
    hours: "02",
    minutes: "14",
    seconds: "21",
    image: "https://c.animaapp.com/mivklg000xmtDs/img/photo-bag-2.png",
    name: "Patso",
    description: "Shoulder bag-Pink-Plain",
    rating: 4,
    reviews: 54,
    currentPrice: "$69.99",
    originalPrice: "$129.99",
    discount: "- 40%",
  },
  {
    hours: "25",
    minutes: "11",
    seconds: "02",
    image: "https://c.animaapp.com/mivklg000xmtDs/img/photo-bag-3.png",
    name: "Sketchers",
    description: "Sport-shoe 2102",
    rating: 4,
    reviews: 54,
    currentPrice: "$80.00",
    originalPrice: "$129.99",
    discount: "- 40%",
  },
];

const top100Products = [
  {
    image: "https://c.animaapp.com/mivklg000xmtDs/img/photo.png",
    brand: "Mango",
    description: "Kimono & Caftan - Black - Regular fit",
    rating: 5,
    reviews: 289,
    currentPrice: "$228",
    originalPrice: "$290",
    discount: "-10%",
  },
  {
    image: "https://c.animaapp.com/mivklg000xmtDs/img/photo-1.png",
    brand: "Zara",
    description: "Midi top- Daily fit",
    rating: 5,
    reviews: 523,
    currentPrice: "$95",
    originalPrice: "$145",
    discount: "-7%",
  },
  {
    image: "https://c.animaapp.com/mivklg000xmtDs/img/photo-2.png",
    brand: "Uniqlo",
    description: "Midi atlas Slim fit - bohemian",
    rating: 5,
    reviews: 86,
    currentPrice: "$125",
    originalPrice: "$156",
    discount: "-8%",
  },
  {
    image: "https://c.animaapp.com/mivklg000xmtDs/img/photo-3.png",
    brand: "Mango dress",
    description: "Kimono & Caftan - Colorful - Night club fit",
    rating: 5,
    reviews: 121,
    currentPrice: "$365",
    originalPrice: "$487",
    discount: "-15%",
  },
];

const footerCompany = ["About Us", "Our Store", "Contact us"];
const footerCareer = ["Selling Programs", "Advertise", "Cooperation"];
const footerHowToBuy = [
  "Making Payments",
  "Delivery Options",
  "Buyer Protection",
  "New User Guide",
];
const footerHelp = ["Contacts Us", "FAQ", "Privacy Policy"];

export const TopSalesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[68px] pt-[84px] pb-0 px-0 w-full bg-white">
      <div className="flex flex-col items-start gap-12 px-[90px] py-0 w-full">
        <header className="flex items-center justify-between w-full">
          <h2 className="font-28-medium font-[number:var(--28-medium-font-weight)] text-black text-[length:var(--28-medium-font-size)] tracking-[var(--28-medium-letter-spacing)] leading-[var(--28-medium-line-height)] [font-style:var(--28-medium-font-style)]">
            Flash Sales
          </h2>

          <Button
            variant="ghost"
            className="h-auto flex items-center gap-1 p-0 hover:bg-transparent"
          >
            <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-neutral-800 text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              View all
            </span>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-5 w-full">
          {flashSalesProducts.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col min-w-[200px] h-[380px] flex-1 bg-white rounded-lg overflow-hidden shadow-[0px_0px_12px_#0000001a] border-0"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex flex-col h-[90px] items-center justify-around px-0 py-4">
                  <div className="flex flex-col items-start justify-around h-[77px] w-full">
                    <div className="flex flex-wrap items-center justify-center gap-[5px] px-[70px] py-4 bg-white rounded-[8px_8px_0px_0px] h-[77px] w-full">
                      <div className="font-16-extra-bold font-[number:var(--16-extra-bold-font-weight)] text-[#9d9d9d] text-[length:var(--16-extra-bold-font-size)] text-center tracking-[var(--16-extra-bold-letter-spacing)] leading-[var(--16-extra-bold-line-height)] whitespace-nowrap [font-style:var(--16-extra-bold-font-style)]">
                        Deal of the Day
                      </div>

                      <div className="flex flex-wrap w-[117px] h-[45px] items-start justify-end gap-0">
                        <div className="flex flex-wrap w-[115px] items-center gap-[6px] justify-between">
                          <span className="font-18-extra-bold font-[number:var(--18-extra-bold-font-weight)] text-neutral-800 text-[length:var(--18-extra-bold-font-size)] text-center tracking-[var(--18-extra-bold-letter-spacing)] leading-[var(--18-extra-bold-line-height)] whitespace-nowrap [font-style:var(--18-extra-bold-font-style)]">
                            {product.hours}
                          </span>

                          <img
                            className="w-3.5 h-3.5"
                            alt="Icon colon"
                            src="https://c.animaapp.com/mivklg000xmtDs/img/icon-colon.svg"
                          />

                          <span className="font-18-extra-bold font-[number:var(--18-extra-bold-font-weight)] text-neutral-800 text-[length:var(--18-extra-bold-font-size)] text-center tracking-[var(--18-extra-bold-letter-spacing)] leading-[var(--18-extra-bold-line-height)] whitespace-nowrap [font-style:var(--18-extra-bold-font-style)]">
                            {product.minutes}
                          </span>

                          <img
                            className="w-3.5 h-3.5"
                            alt="Icon colon"
                            src="https://c.animaapp.com/mivklg000xmtDs/img/icon-colon.svg"
                          />

                          <span className="font-18-extra-bold font-[number:var(--18-extra-bold-font-weight)] text-neutral-800 text-[length:var(--18-extra-bold-font-size)] text-center tracking-[var(--18-extra-bold-letter-spacing)] leading-[var(--18-extra-bold-line-height)] whitespace-nowrap [font-style:var(--18-extra-bold-font-style)]">
                            {product.seconds}
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
                    src={product.image}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-[6px_0px] px-10 py-4 flex-1 w-full bg-white">
                  <div className="w-[151px] font-16-extra-bold font-[number:var(--16-extra-bold-font-weight)] text-neutral-800 text-[length:var(--16-extra-bold-font-size)] tracking-[var(--16-extra-bold-letter-spacing)] leading-[var(--16-extra-bold-line-height)] [font-style:var(--16-extra-bold-font-style)]">
                    {product.name}
                  </div>

                  <div className="w-[151px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#555555] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                    {product.description}
                  </div>

                  <div className="flex w-[151px] items-center gap-px">
                    <div className="inline-flex items-start">
                      {[...Array(product.rating)].map((_, i) => (
                        <img
                          key={i}
                          className={`w-3 h-3 ${i > 0 ? "-ml-px" : ""}`}
                          alt="Icon interface solid"
                          src="https://c.animaapp.com/mivklg000xmtDs/img/icon-interface-solid-star.svg"
                        />
                      ))}
                    </div>

                    <span className="w-8 font-12-regular font-[number:var(--12-regular-font-weight)] text-[#555555] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex flex-wrap w-[151px] items-center justify-between gap-[9px]">
                    <span className="w-14 font-14-bold font-[number:var(--14-bold-font-weight)] text-[#ff2e00] text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                      {product.currentPrice}
                    </span>

                    <span className="w-[58px] font-12-regular font-[number:var(--12-regular-font-weight)] text-[#555555] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                      {product.originalPrice}
                    </span>

                    <Badge className="w-[33px] h-auto px-1.5 py-[3px] bg-[#ff2e00] rounded-[2.06px] hover:bg-[#ff2e00]">
                      <span className="font-8-semi-bold font-[number:var(--8-semi-bold-font-weight)] text-white text-[length:var(--8-semi-bold-font-size)] tracking-[var(--8-semi-bold-letter-spacing)] leading-[var(--8-semi-bold-line-height)] [font-style:var(--8-semi-bold-font-style)]">
                        {product.discount}
                      </span>
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-12 px-[90px] py-0 w-full">
        <header className="flex items-center justify-between w-full">
          <h2 className="font-28-medium font-[number:var(--28-medium-font-weight)] text-black text-[length:var(--28-medium-font-size)] tracking-[var(--28-medium-letter-spacing)] leading-[var(--28-medium-line-height)] [font-style:var(--28-medium-font-style)]">
            Top100
          </h2>

          <Button
            variant="ghost"
            className="h-auto flex items-center gap-1 p-0 hover:bg-transparent"
          >
            <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-neutral-800 text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
              View all
            </span>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-5 w-full">
          {top100Products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col min-w-[260px] h-[480px] flex-1 shadow-[0px_0px_12px_#0000001a] border-0 overflow-hidden"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <img
                  className="flex-1 w-full object-cover"
                  alt="Photo"
                  src={product.image}
                />

                <div className="flex flex-col items-start gap-3 p-5 bg-white">
                  <div className="flex flex-wrap h-11 items-center gap-[4px_80px] w-full">
                    <div className="flex flex-col items-start justify-center gap-1 flex-1">
                      <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-neutral-800 text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] whitespace-nowrap [font-style:var(--12-bold-font-style)]">
                        {product.brand}
                      </div>

                      <div className="font-10-regular font-[number:var(--10-regular-font-weight)] text-[#555555] text-[length:var(--10-regular-font-size)] tracking-[var(--10-regular-letter-spacing)] leading-[var(--10-regular-line-height)] whitespace-nowrap [font-style:var(--10-regular-font-style)]">
                        {product.description}
                      </div>
                    </div>

                    <img
                      className="w-[21.5px] h-[19.5px]"
                      alt="Vector"
                      src="https://c.animaapp.com/mivklg000xmtDs/img/vector.svg"
                    />
                  </div>

                  <div className="flex h-[25px] items-center gap-3 w-full">
                    <div className="inline-flex items-center">
                      {[...Array(product.rating)].map((_, i) => (
                        <img
                          key={i}
                          className="w-6 h-6"
                          alt="Icon interface solid"
                          src="https://c.animaapp.com/mivklg000xmtDs/img/icon-interface-solid-star.svg"
                        />
                      ))}
                    </div>

                    <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#555555] text-[length:var(--12-regular-font-size)] text-center tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex h-5 items-center gap-3 w-full">
                    <span className="font-14-extra-bold font-[number:var(--14-extra-bold-font-weight)] text-[#ff2e00] text-[length:var(--14-extra-bold-font-size)] tracking-[var(--14-extra-bold-letter-spacing)] leading-[var(--14-extra-bold-line-height)] whitespace-nowrap [font-style:var(--14-extra-bold-font-style)]">
                      {product.currentPrice}
                    </span>

                    <span className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#9d9d9d] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] whitespace-nowrap [font-style:var(--14-regular-20-font-style)]">
                      {product.originalPrice}
                    </span>

                    <span className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#ff2e00] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] whitespace-nowrap [font-style:var(--12-regular-font-style)]">
                      {product.discount}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-[70px] px-[90px] py-0 w-full bg-[#f7ddd0]">
        <Button
          variant="ghost"
          size="icon"
          className="h-auto w-8 p-0 hover:bg-transparent"
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </Button>

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
          className="flex-1 h-[221px]"
          alt="Iphone"
          src="https://c.animaapp.com/mivklg000xmtDs/img/iphone.png"
        />

        <Button
          variant="ghost"
          size="icon"
          className="h-auto w-8 p-0 hover:bg-transparent"
        >
          <ChevronRightIcon className="w-8 h-8" />
        </Button>
      </div>

      <div className="flex flex-col items-center w-full bg-white">
        <Card className="w-[571px] gap-6 px-14 py-8 z-[1] bg-[#7296ab] rounded-lg border-0">
          <CardContent className="p-0 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center justify-center gap-[23px] w-full">
              <div className="w-[207px] h-5">
                <h3 className="h-5 justify-center font-normal text-transparent text-[32px] text-right tracking-[0] leading-8 whitespace-nowrap flex items-center">
                  <span className="font-32-bold font-[number:var(--32-bold-font-weight)] text-white text-[length:var(--32-bold-font-size)] tracking-[var(--32-bold-letter-spacing)] leading-[var(--32-bold-line-height)] [font-style:var(--32-bold-font-style)]">
                    Luminae
                  </span>
                  <span className="font-32-bold font-[number:var(--32-bold-font-weight)] text-neutral-800 text-[length:var(--32-bold-font-size)] tracking-[var(--32-bold-letter-spacing)] leading-[var(--32-bold-line-height)] [font-style:var(--32-bold-font-style)]">
                    &nbsp;
                  </span>
                  <span className="font-32-bold font-[number:var(--32-bold-font-weight)] text-[#d1e2eb] text-[length:var(--32-bold-font-size)] tracking-[var(--32-bold-letter-spacing)] leading-[var(--32-bold-line-height)] [font-style:var(--32-bold-font-style)]">
                    Store
                  </span>
                </h3>
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
                placeholder="Enter your email"
                className="border-0 p-0 h-auto font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#9d9d9d] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
              />

              <Button
                variant="ghost"
                size="icon"
                className="h-auto w-4 p-0 hover:bg-transparent"
              >
                <SendIcon className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col items-start w-full mt-[-100px] z-0">
          <div className="flex flex-wrap items-center justify-center gap-[32px_127px] pl-[303px] pr-[248px] pt-[132px] pb-[60px] w-full bg-[#d1e2eb]">
            <div className="flex flex-wrap items-start justify-center gap-[60px_126px] flex-1">
              <nav className="flex flex-col w-[123px] items-start justify-center gap-[25px]">
                <h4 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                  Company
                </h4>

                <ul className="flex flex-col items-start gap-[15px] w-full">
                  {footerCompany.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="link"
                        className="h-auto p-0 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]"
                      >
                        {item}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-[134px] items-start gap-[25px]">
                <h4 className="w-[135px] font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                  Career Opportunities
                </h4>

                <ul className="flex flex-col items-start gap-[15px] w-full">
                  {footerCareer.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="link"
                        className="h-auto p-0 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]"
                      >
                        {item}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-[123px] items-start gap-[25px]">
                <h4
                  className="font-14-bold font-[number
:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]"
                >
                  How to Buy
                </h4>

                <ul className="flex flex-col items-start gap-[15px] w-full">
                  {footerHowToBuy.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="link"
                        className="h-auto p-0 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]"
                      >
                        {item}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-[123px] items-start gap-[25px]">
                <h4 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                  Help
                </h4>

                <ul className="flex flex-col w-[116px] items-start gap-[15px]">
                  {footerHelp.map((item, index) => (
                    <li key={index}>
                      <Button
                        variant="link"
                        className="h-auto p-0 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]"
                      >
                        {item}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <footer className="flex flex-col items-start justify-center gap-3 px-[100px] py-6 w-full bg-white">
            <div className="flex flex-wrap items-center gap-[24px_46px] w-full">
              <img
                className="flex-1 h-[30px]"
                alt="Footer payment"
                src="https://c.animaapp.com/mivklg000xmtDs/img/footer-payment-methods.svg"
              />

              <div className="w-[123px] flex items-start gap-5">
                <Button
                  variant="ghost"
                  className="h-auto flex w-[123px] items-center gap-[5px] p-0 hover:bg-transparent"
                >
                  <span className="flex-1 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-neutral-800 text-[length:var(--14-regular-20-font-size)] text-right tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]">
                    English
                  </span>

                  <img
                    className="w-2.5 h-2.5"
                    alt="Icon arrow"
                    src="https://c.animaapp.com/mivklg000xmtDs/img/icon-arrow-2.svg"
                  />
                </Button>
              </div>
            </div>

            <div className="w-full h-0.5 bg-[#d9d9d9]" />

            <div className="flex flex-wrap h-[69px] items-center justify-between gap-[16px_212px] w-full">
              <div className="flex flex-col items-start gap-2 flex-1">
                <p className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-neutral-800 text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] whitespace-nowrap [font-style:var(--14-regular-20-font-style)]">
                  165-179 Forster Road City of Monash, Melbourne, Australia
                </p>
              </div>

              <p className="flex-1 font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#9d9d9d] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)]">
                ©2023 Copyright in reserved for lumine shop
              </p>

              <div className="flex w-[120px] items-center justify-end gap-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-auto w-6 p-0 hover:bg-transparent"
                >
                  <div className="relative w-6 h-6">
                    <div className="absolute w-[89.58%] h-[89.58%] top-[5.21%] left-[5.21%] rounded border-[1.5px] border-solid border-[#434343]" />
                    <div className="absolute w-[8.33%] h-[8.33%] top-[20.83%] left-[70.83%] bg-[#434343] rounded-[1px]" />
                    <div className="absolute w-[47.92%] h-[47.92%] top-[26.04%] left-[26.04%] rounded-[5.75px] border-[1.5px] border-solid border-[#434343]" />
                  </div>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-auto w-6 p-0 hover:bg-transparent"
                >
                  <img
                    className="w-6 h-6"
                    alt="Icon social outline"
                    src="https://c.animaapp.com/mivklg000xmtDs/img/icon-social-outline-facebook.svg"
                  />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-auto w-6 p-0 hover:bg-transparent"
                >
                  <img
                    className="w-6 h-6"
                    alt="Icon social outline"
                    src="https://c.animaapp.com/mivklg000xmtDs/img/icon-social-outline-telegram.svg"
                  />
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};
