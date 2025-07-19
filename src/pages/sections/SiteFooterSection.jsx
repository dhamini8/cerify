import React from "react";

export const SiteFooterSection = () => {
  // Social media links data
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "/figmaAssets/linkedin.svg",
      width: "23.23px",
      height: "21.78px",
    },
    {
      name: "Twitter",
      icon: "/figmaAssets/vector-10.svg",
      width: "23px",
      height: "23px",
    },
    {
      name: "Telegram",
      icon: "/figmaAssets/telegram.svg",
      width: "23px",
      height: "21px",
    },
  ];

  // About section links
  const aboutLinks = [
    { name: "Security Audits", width: "125px" },
    { name: "Compliance Reports", width: "155px" },
    { name: "API Access", width: "116px" },
    { name: "Documentation", width: "125px" },
  ];

  // Company section links
  const companyLinks = [
    { name: "About", width: "71px" },
    { name: "Careers", width: "71px" },
    { name: "Blog", width: "71px" },
    { name: "Contact", width: "71px" },
  ];

  return (
    <footer className="w-full bg-[#2c00ca] rounded-[30px_30px_0px_0px] overflow-hidden shadow-[0px_-10px_20px_4px_#00000033] py-12 md:py-28 px-4 md:px-20 relative">
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16 lg:gap-24">
        {/* Top section with logo, tagline and social links */}
        <div className="flex flex-col items-center md:items-start md:flex-1 md:max-w-[500px]">
          <img
            className="w-[280px] md:w-[399px] h-[72px] md:h-[102px]"
            alt="Cerify Logo"
            src="/figmaAssets/vector-5.svg"
          />

          <p className="w-full max-w-[416px] mt-6 md:mt-8 font-sans font-medium text-white text-lg md:text-xl text-center md:text-left">
            the first AI-Powered Smart Contract Verification engine
          </p>

          <div className="flex items-center gap-7 mt-6 md:mt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                aria-label={link.name}
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  className="w-[20px] h-[20px] md:w-[23px] md:h-[23px]"
                  alt={link.name}
                  src={link.icon}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation links section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mt-8 md:mt-0 md:flex-shrink-0">
          {/* About section */}
          <div className="flex flex-col">
            <h3 className="font-sans font-semibold text-white text-xl md:text-2xl mb-4 md:mb-5 text-center md:text-left">
              About
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-[27px]">
              {aboutLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-sans font-medium text-white text-sm md:text-base hover:underline text-center md:text-left"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company section */}
          <div className="flex flex-col">
            <h3 className="font-sans font-semibold text-white text-xl md:text-2xl mb-4 md:mb-5 text-center md:text-left">
              Company
            </h3>
            <div className="flex flex-col space-y-4 md:space-y-[27px]">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-sans font-medium text-white text-sm md:text-base hover:underline text-center md:text-left"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
