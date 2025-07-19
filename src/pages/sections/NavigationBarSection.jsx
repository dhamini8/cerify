import React from "react";

export const NavigationBarSection = () => {
  // Navigation items data for easy mapping
  const navItems = [
    { label: "About", width: "w-[58px]" },
    { label: "Blog", width: "w-11" },
    { label: "Help", width: "w-11" },
    { label: "Contact", width: "w-[77px]" },
  ];

  return (
    <nav className="flex w-full h-[81px] items-end justify-between px-4 md:px-[73px] py-[18px] bg-white rounded-[0px_0px_26px_26px] shadow-[0px_4px_4px_#2c00ca40] relative z-20">
      <img
        className="relative w-[120px] md:w-[157px] h-[30px] md:h-[39.98px]"
        alt="Logo"
        src="/figmaAssets/vector-8.svg"
      />

      <div className="inline-flex items-center gap-4 md:gap-[69px] relative flex-[0_0_auto]">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="relative h-[29px] mt-[-1.00px] font-sans font-medium text-[#2c00ca] text-lg md:text-xl tracking-[0] leading-[normal] whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
