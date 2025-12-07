import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FormSection } from "./sections/FormSection/FormSection";
import { HeaderSection } from "./sections/HeaderSection";

export const LandingDesktop = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start relative w-full"
      data-model-id="451:23309"
    >
      <HeaderSection />
      <CallToActionSection />
      <FormSection />
    </div>
  );
};
