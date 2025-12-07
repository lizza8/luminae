import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const navigationLinks = [
  { label: "About us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Help & support", href: "#" },
];

const socialIcons = [
  {
    src: "https://c.animaapp.com/mivklg000xmtDs/img/instagram.png",
    alt: "Instagram",
  },
  {
    src: "https://c.animaapp.com/mivklg000xmtDs/img/icon-fb.png",
    alt: "Facebook",
  },
  {
    src: "https://c.animaapp.com/mivklg000xmtDs/img/icon-telegram.svg",
    alt: "Telegram",
  },
];

const categories = [
  { label: "Woman", active: true },
  { label: "Male", active: false },
  { label: "Mother-Child", active: false },
  { label: "Home & Furniture", active: false },
  { label: "Super market", active: false },
  { label: "Cosmetics", active: false },
  { label: "Shoe & Bag", active: false },
  { label: "Electronic", active: false },
  { label: "Sport & Outdoor", active: false },
  { label: "Best seller", active: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full bg-white">
      <div className="flex flex-col w-full bg-white pb-7">
        <div className="flex flex-wrap items-center gap-3 lg:gap-20 px-4 lg:px-[90px] py-7 bg-white">
          <div className="flex items-center gap-1.5 flex-1 min-w-[173px]">
            <img
              className="w-[49px] h-[33px]"
              alt="Logo"
              src="https://c.animaapp.com/mivklg000xmtDs/img/logo.png"
            />
            <div className="font-32-bold font-[number:var(--32-bold-font-weight)] text-black text-[length:var(--32-bold-font-size)] tracking-[var(--32-bold-letter-spacing)] leading-[var(--32-bold-line-height)] [font-style:var(--32-bold-font-style)]">
              Luminae
            </div>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 border border-[#d9d9d9] rounded">
            <div className="flex items-center gap-4 w-full lg:w-[277px]">
              <div className="flex-1 font-20-regular font-[number:var(--20-regular-font-weight)] text-[#9d9d9d] text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                SearchIcon Producs
              </div>
              <div className="flex items-center justify-end gap-1">
                <div className="font-20-regular font-[number:var(--20-regular-font-weight)] text-neutral-800 text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                  All categories
                </div>
                <img
                  className="w-6 h-6"
                  alt="Icon arrow"
                  src="https://c.animaapp.com/mivklg000xmtDs/img/icon-arrow-1.svg"
                />
              </div>
            </div>
            <img
              className="w-px h-full object-cover"
              alt="Line"
              src="https://c.animaapp.com/mivklg000xmtDs/img/line-1.svg"
            />
            <img
              className="w-5 h-5"
              alt="Icon search"
              src="https://c.animaapp.com/mivklg000xmtDs/img/icon-search.svg"
            />
          </div>

          <nav className="flex items-center gap-3">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-20-regular font-[number:var(--20-regular-font-weight)] text-[#555555] text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)] hover:text-[#ff7a00] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-[54px] flex-1 justify-end">
            <div className="flex items-center justify-center gap-3">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <img
                    className={
                      index === 0
                        ? "w-5 h-5"
                        : index === 1
                          ? "w-3 h-[18px]"
                          : "w-6 h-6"
                    }
                    alt={icon.alt}
                    src={icon.src}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 lg:gap-7 px-4 lg:px-[90px] py-2 bg-neutral-800">
          <Button
            variant="ghost"
            className="flex items-center gap-1 text-white hover:text-white hover:bg-neutral-700 h-auto p-0"
          >
            <img
              className="w-6 h-6"
              alt="Icon categories"
              src="https://c.animaapp.com/mivklg000xmtDs/img/icon-categories.svg"
            />
            <span className="font-20-bold font-[number:var(--20-bold-font-weight)] text-[length:var(--20-bold-font-size)] tracking-[var(--20-bold-letter-spacing)] leading-[var(--20-bold-line-height)] [font-style:var(--20-bold-font-style)]">
              Categories
            </span>
          </Button>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-white hover:opacity-80 transition-opacity">
              <span className="[font-family:'Lato',Helvetica] font-normal text-xs tracking-[0] leading-5">
                USD
              </span>
              <img
                className="w-4 h-4"
                alt="Icon arrow"
                src="https://c.animaapp.com/mivklg000xmtDs/img/icon-arrow.svg"
              />
            </button>
            <button className="flex items-center gap-1 text-white hover:opacity-80 transition-opacity">
              <span className="[font-family:'Lato',Helvetica] font-normal text-xs tracking-[0] leading-5">
                English
              </span>
              <img
                className="w-4 h-4"
                alt="Icon arrow"
                src="https://c.animaapp.com/mivklg000xmtDs/img/icon-arrow.svg"
              />
            </button>
          </div>

          <img
            className="flex-1 h-[62px] hidden lg:block"
            alt="Line"
            src="https://c.animaapp.com/mivklg000xmtDs/img/line-2.svg"
          />

          <div className="flex items-center gap-2.5">
            <img
              className="w-[63px] h-[62px]"
              alt="Men cosmetic"
              src="https://c.animaapp.com/mivklg000xmtDs/img/men-cosmetic.png"
            />
            <div className="flex flex-col gap-px">
              <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-white text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                Weekly Men&#39;s Toiletries Coupons.
              </div>
              <div className="font-12-regular font-[number:var(--12-regular-font-weight)] text-[#c4c4c4] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                We extend exclusive discounts to our male clientele
              </div>
            </div>
          </div>

          <img
            className="flex-1 h-[62px] hidden lg:block"
            alt="Line"
            src="https://c.animaapp.com/mivklg000xmtDs/img/line-2.svg"
          />

          <div className="flex items-center gap-5">
            <Button
              variant="ghost"
              className="flex items-center gap-1 text-white hover:text-white hover:bg-neutral-700 h-auto p-0"
            >
              <div className="w-6 h-6 relative">
                <div className="w-[64.58%] h-[35.42%] top-[55.21%] left-[17.71%] rounded-[7.75px/4.25px] absolute border-[1.5px] border-solid border-white" />
                <div className="w-[39.58%] h-[39.58%] top-[9.38%] left-[30.21%] rounded-[4.75px] absolute border-[1.5px] border-solid border-white" />
              </div>
              <span className="font-20-regular font-[number:var(--20-regular-font-weight)] text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                Sign in
              </span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-1 text-white hover:text-white hover:bg-neutral-700 h-auto p-0"
            >
              <img
                className="w-6 h-6"
                alt="Icon favorides"
                src="https://c.animaapp.com/mivklg000xmtDs/img/icon-favorides.svg"
              />
              <span className="font-20-regular font-[number:var(--20-regular-font-weight)] text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                Favorites
              </span>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-2 text-white hover:text-white hover:bg-neutral-700 h-auto p-0"
            >
              <div className="flex items-center gap-1">
                <img
                  className="w-6 h-6"
                  alt="Icon card"
                  src="https://c.animaapp.com/mivklg000xmtDs/img/icon-card.svg"
                />
                <span className="font-20-regular font-[number:var(--20-regular-font-weight)] text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                  Card
                </span>
              </div>
              <Badge className="bg-[#3dc47e] text-white rounded-[30px] px-2 py-0.5 h-auto hover:bg-[#3dc47e]">
                <span className="[font-family:'Lato',Helvetica] font-normal text-sm tracking-[0] leading-5">
                  3
                </span>
              </Badge>
            </Button>
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between px-4 lg:px-[90px] py-4 bg-white border-t">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className={`font-${category.active ? "14-bold" : "14-regular-20"} font-[number:var(--${category.active ? "14-bold" : "14-regular-20"}-font-weight)] text-[length:var(--${category.active ? "14-bold" : "14-regular-20"}-font-size)] tracking-[var(--${category.active ? "14-bold" : "14-regular-20"}-letter-spacing)] leading-[var(--${category.active ? "14-bold" : "14-regular-20"}-line-height)] [font-style:var(--${category.active ? "14-bold" : "14-regular-20"}-font-style)] ${
              category.active
                ? "text-[#ff7a00]"
                : "text-[#555555] hover:text-[#ff7a00]"
            } transition-colors whitespace-nowrap`}
          >
            {category.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
