import React from "react";
import { FlashSalesSection } from "./sections/FlashSalesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { SubCategorySection } from "./sections/SubCategorySection";
import { TopSalesSection } from "./sections/TopSalesSection";

export const DektopLandingSub = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <HeaderSection />
      <div className="flex w-full relative">
        <SubCategorySection />
        <FlashSalesSection />
        <img
          className="absolute -top-3 left-[101px] w-5 h-6"
          alt="Cursor"
          src="https://c.animaapp.com/mivklg000xmtDs/img/cursor.svg"
        />
      </div>
      <TopSalesSection />
    </div>
  );
};
