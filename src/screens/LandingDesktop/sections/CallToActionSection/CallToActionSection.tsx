import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-end w-full h-[460px] relative z-0">
      <div className="relative w-[547px] h-full bg-[url(https://c.animaapp.com/mivermkpLBMRtC/img/frm-top-left.png)] bg-cover bg-center" />

      <div className="flex flex-col items-center justify-center flex-1 h-full gap-8 [background:url(https://c.animaapp.com/mivermkpLBMRtC/img/button-top-right.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(65,114,220,1)_0%,rgba(65,114,220,1)_100%)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="font-32-bold-upper-case font-[number:var(--32-bold-upper-case-font-weight)] text-white text-[length:var(--32-bold-upper-case-font-size)] text-center tracking-[var(--32-bold-upper-case-letter-spacing)] leading-[var(--32-bold-upper-case-line-height)] [font-style:var(--32-bold-upper-case-font-style)]">
          KIMONOS, CAFTANS &amp; PAREOS
        </h2>

        <p className="[font-family:'Lato',Helvetica] font-medium text-white text-[28px] text-center tracking-[0] leading-[50px]">
          Poolside glam included From $4.99
        </p>

        <Button className="flex items-center justify-center gap-2 px-8 py-4 h-14 w-[243px] bg-[#4172dc] rounded hover:bg-[#3461cb] transition-colors">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="font-14-medium-uppercase font-[number:var(--14-medium-uppercase-font-weight)] text-[length:var(--14-medium-uppercase-font-size)] tracking-[var(--14-medium-uppercase-letter-spacing)] leading-[var(--14-medium-uppercase-line-height)] [font-style:var(--14-medium-uppercase-font-style)] text-white whitespace-nowrap">
            SHOP NOW
          </span>
        </Button>
      </div>

      <Card className="absolute top-[149px] left-[433px] w-[228px] h-[163px] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <CardContent className="flex flex-col items-center justify-around gap-2.5 px-[30px] py-9 h-[123px] bg-white">
          <div className="flex flex-col items-center justify-between w-full h-full">
            <h3 className="font-20-bold font-[number:var(--20-bold-font-weight)] text-neutral-800 text-[length:var(--20-bold-font-size)] tracking-[var(--20-bold-letter-spacing)] leading-[var(--20-bold-line-height)] [font-style:var(--20-bold-font-style)] whitespace-nowrap">
              Summer Essentials
            </h3>

            <p className="font-20-bold font-[number:var(--20-bold-font-weight)] text-[#ff2e00] text-[length:var(--20-bold-font-size)] tracking-[var(--20-bold-letter-spacing)] leading-[var(--20-bold-line-height)] [font-style:var(--20-bold-font-style)] whitespace-nowrap">
              20% off
            </p>
          </div>
        </CardContent>

        <div className="flex items-center justify-center h-10 px-[75px] py-2.5 bg-neutral-800">
          <span className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-white text-[length:var(--14-regular-20-font-size)] text-center tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] whitespace-nowrap">
            19 Jul-30 Jul
          </span>
        </div>
      </Card>
    </section>
  );
};
