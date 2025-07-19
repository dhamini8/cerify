import React from "react";
import { Button } from "../../components/ui/button";

export const KeyFeaturesSection = () => {
  // Feature data for mapping
  const features = [
    {
      title: "14-Point Detection Engine",
      description:
        "Tracks industry-standard vulnerabilities with line-by-line precision — no generic flags, just clear location-based risk alerts",
      icon: "/figmaAssets/feature-icon-2.svg",
      position: "top",
    },
    {
      title: "Auto-Patching (Coming Q4 2025)",
      description:
        "Cerify's AI will suggest and deploy secure fixes, reducing remediation time from days to minutes.",
      icon: "/figmaAssets/feature-icon-3.svg",
      position: "top",
    },
    {
      title: "Compliance-Ready Architecture",
      description:
        "Aligned with MiCA, FIT21, CFTC, and RBI sandbox standards for institutional adoption.",
      icon: "/figmaAssets/feature-icon-4.svg",
      position: "top",
    },
    {
      title: "Instant Certification Badge",
      description:
        "Public proof that your smart contract meets top-tier security and compliance benchmarks",
      icon: "/figmaAssets/feature-icon-1.svg",
      position: "bottom",
    },
    {
      title: "Multi-Chain Support",
      description:
        "Ethereum, Polygon, Optimism, Base, Corda (Kotlin), and more chains coming soon",
      icon: "/figmaAssets/feature-icon-6.png",
      position: "bottom",
    },
    {
      title: "Continuous Monitoring",
      description:
        "Unlike one-time audits, Cerify provides ongoing security verification as your code evolves",
      icon: "/figmaAssets/feature-icon-5.svg",
      position: "bottom",
    },
  ];

  return (
    <section className="w-full py-8 md:py-16 px-4 relative">
      <h2 className="font-bold text-[28px] md:text-4xl mb-6 font-sans text-center">
        KEY FEATURES
      </h2>

      <div className="w-full bg-[#2c00ca] rounded-[26px] p-6 md:p-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img
                className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] mb-6 object-contain"
                alt={`${feature.title} icon`}
                src={feature.icon}
              />

              <h3 className="font-sans font-extrabold text-[#3dfe90] text-lg md:text-xl mb-4 text-center">
                {feature.title}
              </h3>

              <p className="font-sans font-medium text-white text-sm md:text-base text-center md:text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-16">
        <Button className="bg-[#3dfe90] text-black hover:bg-[#3dfe90]/90 rounded-[26px] h-[98px] w-full max-w-[478px] mb-5">
          <span className="font-sans font-semibold text-[28px]">
            Schedule for a Demo Now
          </span>
        </Button>

        <p className="font-sans font-medium text-[#2c00ca] text-[27px]">
          Beta access is limited
        </p>
      </div>
    </section>
  );
};
