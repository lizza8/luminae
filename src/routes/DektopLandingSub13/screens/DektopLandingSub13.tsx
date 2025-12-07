import React from "react";
import { FlashSalesSection } from "./sections/FlashSalesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { SubCategorySection } from "./sections/SubCategorySection";
import { TopSalesSection } from "./sections/TopSalesSection";

export const DektopLandingSub13 = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <HeaderSection />
      <div className="flex w-full relative">
        <SubCategorySection />
        <FlashSalesSection />
      </div>
      <TopSalesSection />
    </div>
  );
};
