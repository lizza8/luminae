import React from "react";

const categories = [
  {
    sections: [
      {
        title: "SHOE & BAG",
        items: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
      },
      {
        title: "LUXURY & DESIGNER",
        items: ["Towels", "Bathroom Scales", "Bath Mats", "Shower Caps"],
      },
    ],
  },
  {
    sections: [
      {
        title: "HOME TEXTILE",
        items: ["Bedding", "Pillows", "Handkerchief Towels", "Curtain"],
      },
      {
        title: "COSMETICS",
        items: [
          "Shampoo and Conditioner",
          "Styling Products",
          "Hair Accessories",
          "Men's Grooming",
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "PARTY SUPPLIES",
        items: [
          "Event & Party",
          "Christmas",
          "Artificial Decorations",
          "Wedding",
        ],
      },
      {
        title: "SPORT & OUTDOORS",
        items: [
          "Team Sports",
          "Water Sports",
          "Outdoor Recreation",
          "Fitness Equipment",
        ],
      },
    ],
  },
  {
    sections: [
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
          "Fall Wardrobe",
        ],
      },
    ],
  },
];

export const SubCategorySection = (): JSX.Element => {
  return (
    <nav className="w-full bg-white rounded-lg p-6">
      <div className="flex flex-wrap gap-4 items-start">
        <div className="flex flex-wrap gap-12 flex-1">
          {categories.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-10 min-w-[145px]"
            >
              {column.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex flex-col gap-4">
                  <h3 className="font-14-bold-uppercase font-[number:var(--14-bold-uppercase-font-weight)] text-neutral-800 text-[length:var(--14-bold-uppercase-font-size)] tracking-[var(--14-bold-uppercase-letter-spacing)] leading-[var(--14-bold-uppercase-line-height)] [font-style:var(--14-bold-uppercase-font-style)]">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="font-14-regular-20 font-[number:var(--14-regular-20-font-weight)] text-[#555555] text-[length:var(--14-regular-20-font-size)] tracking-[var(--14-regular-20-letter-spacing)] leading-[var(--14-regular-20-line-height)] [font-style:var(--14-regular-20-font-style)] hover:text-neutral-800 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <img
          className="w-[278px] h-[340px] object-cover rounded"
          alt="Fashion model in blue floral dress"
          src="https://c.animaapp.com/mivklg000xmtDs/img/image.png"
        />
      </div>
    </nav>
  );
};
