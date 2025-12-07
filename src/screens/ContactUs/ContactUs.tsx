import { HomeIcon, MailIcon, UserIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { HeaderSection } from "../LandingDesktop/sections/HeaderSection";

export const ContactUs = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", description: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      <div className="w-full flex items-center justify-center bg-[#f5f5f5] py-8 md:py-0">
        <div className="w-full max-w-[1316px] grid lg:grid-cols-2 gap-0">
          {/* Left Side - Form */}
          <div className="bg-[#2d2d2d] px-8 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24 flex flex-col justify-center">
            <div className="max-w-[507px] w-full">
              <div className="mb-10 md:mb-12">
                <h1 className="text-[40px] md:text-[48px] font-normal text-white mb-0 leading-[1.2]">
                  Tell us about your
                </h1>
                <h2 className="text-[40px] md:text-[48px] font-normal text-[#d4af37] leading-[1.2]">
                  Concerns
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-normal">
                    Your Name
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name here"
                      className="w-full h-[56px] pl-12 pr-4 bg-transparent border border-[#555555] rounded-lg text-white placeholder:text-[#6b6b6b] focus:border-[#d4af37] focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-normal">Email</label>
                  <div className="relative">
                    <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email here"
                      className="w-full h-[56px] pl-12 pr-4 bg-transparent border border-[#555555] rounded-lg text-white placeholder:text-[#6b6b6b] focus:border-[#d4af37] focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Description Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-normal">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your concerns"
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-[#555555] rounded-lg text-white placeholder:text-[#6b6b6b] focus:border-[#d4af37] focus:outline-none transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-[56px] bg-[#5b7cff] hover:bg-[#4a6ae6] text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all mt-4 uppercase tracking-wide"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] lg:h-[778px] bg-[#8b8b8b]">
            <img
              src="https://c.animaapp.com/mivermkpLBMRtC/img/screenshot-2025-12-07-at-12-07-37.png"
              alt="Fashion models in colorful dresses with sun hats"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
