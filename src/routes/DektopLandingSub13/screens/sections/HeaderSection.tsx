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
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const navigationLinks = [
  { label: "About us", href: "#", route: null },
  { label: "Blog", href: "#", route: null },
  { label: "Contact us", href: "/contact", route: "/contact" },
  { label: "Help & support", href: "#", route: null },
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
  const navigate = useNavigate();

  const handleNavClick = (link: typeof navigationLinks[0]) => {
    if (link.route) {
      navigate(link.route);
    }
  };

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
                Search Products
              </div>
              <div className="flex items-center justify-end gap-1">
                <div className="font-20-regular font-[number:var(--20-regular-font-weight)] text-neutral-800 text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)]">
                  All categories
                </div>
                <ChevronDownIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="w-px h-6 bg-[#d9d9d9]" />
            <SearchIcon className="w-5 h-5" />
          </div>

          <nav className="flex items-center gap-3">
            {navigationLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => handleNavClick(link)}
                className="h-auto p-0 font-20-regular font-[number:var(--20-regular-font-weight)] text-[#555555] text-[length:var(--20-regular-font-size)] tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] [font-style:var(--20-regular-font-style)] hover:bg-transparent hover:text-[#ff7a00] transition-colors cursor-pointer"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-[54px] flex-1 justify-end">
            <div className="flex items-center justify-center gap-3">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <img
                    className={
                      index === 0
                        ? "w-5 h-5"
                        : index === 1
                          ? "w-3 h-[18px]"
                          : "w-6
