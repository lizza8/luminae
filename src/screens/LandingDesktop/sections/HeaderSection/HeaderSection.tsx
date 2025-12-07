import {
  ChevronDownIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navigationLinks = [
  { label: "About us", href: "#", route: null },
  { label: "Blog", href: "#", route: null },
  { label: "Contact us", href: "/contact", route: "/contact" },
  { label: "Help & support", href: "#", route: null },
];

const socialIcons = [
  {
    src: "https://c.animaapp.com/mivermkpLBMRtC/img/instagram.png",
    alt: "Instagram",
    className: "w-5 h-5",
  },
  {
    src: "https://c.animaapp.com/mivermkpLBMRtC/img/icon-fb.png",
    alt: "Facebook",
    className: "w-3 h-[18px]",
  },
  {
    src: "https://c.animaapp.com/mivermkpLBMRtC/img/icon-telegram.svg",
    alt: "Telegram",
    className: "w-6 h-6",
  },
];

const categories = [
  { label: "Woman", active: true, hasMenu: true },
  { label: "Male", active: false, hasMenu: false },
  { label: "Mother-Child", active: false, hasMenu: false },
  { label: "Home & Furniture", active: false, hasMenu: false },
  { label: "Super market", active: false, hasMenu: false },
  { label: "Cosmetics", active: false, hasMenu: false },
  { label: "Shoe & Bag", active: false, hasMenu: false },
  { label: "Electronic", active: false, hasMenu: false },
  { label: "Sport & Outdoor", active: false, hasMenu: false },
  { label: "Best seller", active: false, hasMenu: false },
];

const womanMenuData = {
  columns: [
    {
      title: "SHOE & BAG",
      items: ["Casual Shoes", "Boots", "Sandals", "Slippers"]
    },
    {
      title: "HOME TEXTILE",
      items: ["Bedding", "Pillows", "Handkerchief Towels", "Curtain"]
    },
    {
      title: "PARTY SUPPLIES",
      items: ["Event & Party", "Christmas", "Artificial Decorations", "Wedding"]
    },
    {
      title: "CLOTHES",
      items: [
        "Bottoms",
        "Women's Clothing",
        "T-Shirts and Tops",
        "Dresses",
        "Outerwear",
        "Formal Wear",
        "Casual Wear",
        "Seasonal Collections",
        "Sports Bras",
        "Workout Tops",
        "Fall Wardrobe"
      ]
    },
    {
      title: "LUXURY & DESIGNER",
      items: ["Towels", "Bathroom Scales", "Bath Mats", "Shower Caps"]
    },
    {
      title: "COSMETICS",
      items: ["Shampoo and Conditioner", "Styling Products", "Hair Accessories", "Men's Grooming"]
    },
    {
      title: "SPORT & OUTDOORS",
      items: ["Team Sports", "Water Sports", "Outdoor Recreation", "Fitness Equipment"]
    }
  ],
  image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop&q=80"
};

export const HeaderSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [showWomanMenu, setShowWomanMenu] = React.useState(false);

  const handleNavClick = (link: typeof navigationLinks[0]) => {
    if (link.route) {
      navigate(link.route);
    }
  };

  return (
    <header className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full bg-white">
        <div className="flex flex-wrap h-24 items-center gap-[12px_80px] px-[90px] py-7 w-full bg-white translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex items-center gap-1.5 flex-1">
            <img
              className="w-[49px] h-[33px]"
              alt="Logo"
              src="https://c.animaapp.com/mivermkpLBMRtC/img/logo.png"
            />
            <div className="flex items-center justify-center w-[124px] mr-[-51.50px] font-32-bold font-[number:var(--32-bold-font-weight)] text-black text-[length:var(--32-bold-font-size)] tracking-[var(--32-bold-letter-spacing)] leading-[var(--32-bold-line-height)] [font-style:var(--32-bold-font-style)]">
              Luminae
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-3 px-3 py-2 rounded border border-solid border-[#d9d9d9]">
            <div className="flex w-[277px] items-center gap-4">
              <div className="flex items-center justify-center flex-1 font-20-regular font-[number:var(--20-regular-font-weight)] text-[#9d9d9d] text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                SearchIcon Producs
              </div>

              <Button
                variant="ghost"
                className="flex w-[109px] items-center justify-end gap-0 p-0 h-auto hover:bg-transparent"
              >
                <span className="flex items-center justify-center w-[85px] font-20-regular font-[number:var(--20-regular-font-weight)] text-neutral-800 text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                  All categories
                </span>
                <ChevronDownIcon className="w-6 h-6" />
              </Button>
            </div>

            <img
              className="self-stretch w-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/mivermkpLBMRtC/img/line-1.svg"
            />

            <SearchIcon className="w-5 h-5" />
          </div>

          <nav className="inline-flex items-center justify-center gap-3">
            {navigationLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => handleNavClick(link)}
                className="justify-center w-24 h-auto p-0 font-20-regular font-[number:var(--20-regular-font-weight)] text-[#555555] text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)] hover:bg-transparent hover:text-[#ff7a00] transition-colors cursor-pointer"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="flex justify-end gap-[54px] flex-1 items-center">
            <div className="flex w-[84px] items-center justify-center gap-3">
              {socialIcons.map((icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 p-0 hover:bg-transparent hover:opacity-80 transition-opacity"
                >
                  <img
                    className={icon.className}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[12px_28px] px-[90px] py-2 w-full bg-neutral-800 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <Button
            variant="ghost"
            className="flex w-[144.75px] items-center gap-1 p-0 h-auto hover:bg-transparent"
          >
            <MenuIcon className="w-6 h-6 text-white" />
            <span className="flex items-center justify-center flex-1 font-20-bold font-[number:var(--20-bold-font-weight)] text-white text-[length:var(--20-bold-font-size)] tracking-[var(--20-bold-letter-spacing)] leading-[var(--20-bold-line-height)] [font-style:var(--20-bold-font-style)]">
              Categories
            </span>
          </Button>

          <div className="inline-flex items-center justify-center gap-3">
            <Button
              variant="ghost"
              className="flex w-[66.38px] items-center p-0 h-auto hover:bg-transparent"
            >
              <span className="flex-1 [font-family:'Lato',Helvetica] font-normal text-white text-xs text-right tracking-[0] leading-5">
                USD
              </span>
              <ChevronDownIcon className="w-4 h-4 text-white" />
            </Button>

            <Button
              variant="ghost"
              className="flex w-[66.38px] items-center p-0 h-auto hover:bg-transparent"
            >
              <span className="flex items-center justify-center flex-1 [font-family:'Lato',Helvetica] font-normal text-white text-xs text-right tracking-[0] leading-5">
                English
              </span>
              <ChevronDownIcon className="w-4 h-4 text-white" />
            </Button>
          </div>

          <img
            className="flex-1 h-[62px]"
            alt="Line"
            src="https://c.animaapp.com/mivermkpLBMRtC/img/line-2.svg"
          />

          <div className="flex w-[341px] items-center gap-2.5">
            <img
              className="w-[63px] h-[62px]"
              alt="Men cosmetic"
              src="https://c.animaapp.com/mivermkpLBMRtC/img/men-cosmetic.png"
            />
            <div className="flex flex-col items-start gap-px flex-1">
              <div className="flex items-center justify-center self-stretch font-12-bold font-[number:var(--12-bold-font-weight)] text-white text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                Weekly Men&#39;s Toiletries Coupons.
              </div>
              <div className="flex items-center justify-center self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-[#c4c4c4] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                We extend exclusive discounts to our male clientele
              </div>
            </div>
          </div>

          <img
            className="flex-1 h-[62px]"
            alt="Line"
            src="https://c.animaapp.com/mivermkpLBMRtC/img/line-2.svg"
          />

          <div className="flex w-[340px] items-center gap-5">
            <Button
              variant="ghost"
              className="flex items-start gap-1 flex-1 p-0 h-auto hover:bg-transparent hover:opacity-80 transition-opacity"
            >
              <UserIcon className="w-6 h-6 text-white" />
              <span className="flex items-center justify-center flex-1 font-20-regular font-[number:var(--20-regular-font-weight)] text-white text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                Sign in
              </span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-start gap-1 flex-1 p-0 h-auto hover:bg-transparent hover:opacity-80 transition-opacity"
            >
              <HeartIcon className="w-6 h-6 text-white" />
              <span className="flex items-center justify-center flex-1 font-20-regular font-[number:var(--20-regular-font-weight)] text-white text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                Favorites
              </span>
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate("/checkout")}
              className="flex items-center justify-end gap-2 flex-1 p-0 h-auto hover:bg-transparent hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="flex w-[60px] items-center justify-end gap-1">
                <ShoppingCartIcon className="w-6 h-6 text-white" />
                <span className="flex items-center justify-center flex-1 font-20-regular font-[number:var(--20-regular-font-weight)] text-white text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                  Card
                </span>
              </div>
              <Badge className="inline-flex flex-col items-end justify-center gap-2.5 px-2 py-0.5 bg-[#3dc47e] rounded-[30px] hover:bg-[#3dc47e]">
                <span className="flex items-center justify-center w-2 h-[19px] [font-family:'Lato',Helvetica] font-normal text-white text-sm text-right tracking-[0] leading-5 whitespace-nowrap">
                  3
                </span>
              </Badge>
            </Button>
          </div>
        </div>
      </div>

      <div 
        className="relative w-full"
        onMouseLeave={() => setShowWomanMenu(false)}
      >
        <nav className="flex items-center justify-between px-[90px] py-4 w-full bg-white translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => category.hasMenu && setShowWomanMenu(true)}
            >
            <Button
              variant="ghost"
              onClick={() => {
                if (category.label === "Woman") {
                  navigate("/women");
                  setShowWomanMenu(false);
                }
              }}
              className={`h-auto p-0 font-14-${category.active ? "bold" : "regular-20"} font-[number:var(--14-${category.active ? "bold" : "regular-20"}-font-weight)] text-[length:var(--14-${category.active ? "bold" : "regular-20"}-font-size)] text-right tracking-[var(--14-${category.active ? "bold" : "regular-20"}-letter-spacing)] leading-[var(--14-${category.active ? "bold" : "regular-20"}-line-height)] [font-style:var(--14-${category.active ? "bold" : "regular-20"}-font-style)] whitespace-nowrap hover:bg-transparent transition-colors cursor-pointer ${
                category.active
                  ? "text-[#ff7a00] hover:text-[#ff7a00]"
                  : "text-[#555555] hover:text-[#ff7a00]"
              }`}
            >
              {category.label}
            </Button>
            </div>
          ))}
        </nav>

        {/* Woman Mega Menu */}
        {showWomanMenu && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-2xl z-[9999] animate-fade-in border-t border-gray-100"
          >
            <div className="max-w-[1440px] mx-auto px-[90px] py-12">
              <div className="grid grid-cols-[repeat(4,1fr)_400px] gap-12">
                {/* Column 1: SHOE & BAG & LUXURY & DESIGNER */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] uppercase">
                      SHOE & BAG
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {["Casual Shoes", "Boots", "Sandals", "Slippers"].map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] hover:text-[#ff7a00] transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] uppercase">
                      LUXURY & DESIGNER
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {["Towels", "Bathroom Scales", "Bath Mats", "Shower Caps"].map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] hover:text-[#ff7a00] transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 2: HOME TEXTILE & COSMETICS */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] uppercase">
                      HOME TEXTILE
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {["Bedding", "Pillows", "Handkerchief Towels", "Curtain"].map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] hover:text-[#ff7a00] transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] uppercase">
                      COSMETICS
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {["Shampoo and Conditioner", "Styling Products", "Hair Accessories", "Men's Grooming"].map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] hover:text-[#ff7a00] transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 3: PARTY SUPPLIES & SPORT & OUTDOORS */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] uppercase">
                      PARTY SUPPLIES
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {["Event & Party", "Christmas", "Artificial Decorations", "Wedding"].map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] hover:text-[#ff7a00] transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] uppercase">
                      SPORT & OUTDOORS
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {["Team Sports", "Water Sports", "Outdoor Recreation", "Fitness Equipment"].map((item, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] hover:text-[#ff7a00] transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 4: CLOTHES */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-14-bold font-[number:var(--14-bold-font-weight)] text-neutral-800 text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)] uppercase">
                    CLOTHES
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Bottoms",
                      "Women's Clothing",
                      "T-Shirts and Tops",
                      "Dresses",
                      "Outerwear",
                      "Formal Wear",
                      "Casual Wear",
                      "Seasonal Collections",
                      "Sports Bras",
                      "Workout Tops",
                      "Fall Wardrobe"
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] hover:text-[#ff7a00] transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 5: Image */}
                <div className="relative">
                  <img
                    src="https://c.animaapp.com/mivk4plkw2GId8/img/image.png"
                    alt="Featured category image"
                    className="w-full h-[340px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
