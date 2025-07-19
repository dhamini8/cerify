import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const HeroBannerSection = () => {
  // Feature cards data
  const featureCards = [
    {
      icon: "/figmaAssets/vector-4.svg",
      text: "Analyzes your code against vulnerabilities",
    },
    {
      icon: "/figmaAssets/vector-1.svg",
      text: "Detects real bugs — not just noise in less than 5 minutes",
    },
    {
      icon: "/figmaAssets/vector-2.svg",
      text: "Pinpoints them line-by-line",
    },
    {
      icon: "/figmaAssets/vector-6g.svg",
      text: "Issues a compliance-aligned certification badge",
    },
  ];

  // Statistics data
  const statistics = [
    {
      value: (
        <span>
          The <span className="text-[70px]">$7.9B</span> Problem
        </span>
      ),
      description:
        "Smart Contract Vulnerabilities are Crushing Web3. $7.9 Billion+ lost to smart contract hacks since 2021.",
      width: "w-[505px]",
      valueWidth: "w-[311px]",
      descWidth: "w-[284px]",
      descLeft: "left-[221px]",
    },
    {
      value: "83%",
      description:
        "of smart contracts contain at least one critical or high-severity vulnerability",
      width: "w-[340px]",
      valueWidth: "w-[103px]",
      descWidth: "w-[215px]",
      descLeft: "left-[121px]",
    },
    {
      value: ">60%",
      description:
        "of hacks could have been prevented with better auditing and patching tools",
      width: "w-[348px]",
      valueWidth: "w-[141px]",
      descWidth: "w-[196px]",
      descLeft: "left-[148px]",
    },
  ];

  return (
    <section className="relative w-full mx-auto">
      {/* Hero section with background image */}
      <div className="relative w-full h-[580px] md:h-[750px] -mt-[81px] pt-[81px]">
        {/* Background with 10% opacity extending under navbar */}
        <div className="absolute inset-0 bg-cover bg-[50%_50%] opacity-10 rounded-[0px_0px_26px_26px]" style={{backgroundImage: "url('/figmaAssets/main-bg.png')"}}></div>
        {/* Content layer */}
        <div className="relative z-10 w-full h-full">
          <div className="flex flex-col items-center justify-center pt-[100px] md:pt-[197px] px-4">
          <h1 className="w-full max-w-[872px] font-bold text-[#2c00ca] text-[32px] md:text-[64px] text-center leading-[40px] md:leading-[80px] font-sans">
            Deploy Smart Contracts with Confidence
          </h1>

          <div className="w-full max-w-[895px] mt-[20px] md:mt-[42px] text-center px-4">
            <p className="font-sans">
              <span className="font-semibold text-[#2c00ca] text-lg md:text-2xl leading-[22px] md:leading-[27px]">
                Cerify is AI-powered trust layer for Web3 <br />
              </span>
              <span className="font-medium text-[#2c00ca] text-sm md:text-base leading-[20px] md:leading-[27px]">
                we don&#39;t just find bugs, we locate them precisely, patch
                them, and certify your code in under
              </span>
              <span className="text-[#2c00ca] text-sm md:text-base leading-[0.1px]">
                &nbsp;
              </span>
              <span className="font-extrabold text-[#2c00ca] text-sm md:text-base leading-[20px] md:leading-[27px]">
                10 minutes.
              </span>
            </p>
          </div>

          <Button className="mt-[30px] md:mt-[40px] h-[60px] md:h-[70px] w-[240px] md:w-[280px] bg-[#3dfe90] rounded-[26px] hover:bg-[#3dfe90]/90">
            <span className="font-semibold text-black text-[18px] md:text-[24px] font-sans">
              Get Beta Access
            </span>
          </Button>
          </div>
        </div>
      </div>

      {/* Statistics section */}
      <div className="w-full min-h-[294px] bg-[#2c00ca] relative -mt-[26px]">
        <div className="flex flex-col md:flex-row justify-start items-start px-4 md:px-[77px] py-8 md:py-11 gap-8 md:gap-0">
          {statistics.map((stat, index) => (
            <div
              key={`stat-${index}`}
              className={`relative h-auto text-center md:text-left ${
                index === 0 ? 'w-full md:flex-1' : 
                index === 1 ? 'w-full md:flex-1 md:ml-[80px]' : 
                'w-full md:flex-1 md:ml-[80px]'
              }`}
            >
              <div
                className="font-sans font-semibold text-[#3dfe90] text-3xl md:text-5xl tracking-[0] leading-[normal] mb-4 md:mb-6"
              >
                {stat.value}
              </div>
              <div
                className="font-sans font-normal text-white text-sm md:text-base tracking-[0] leading-[normal] max-w-[280px] md:max-w-none mx-auto md:mx-0"
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product description and features */}
      <div className="flex flex-col md:flex-row mt-[40px] md:mt-[68px] px-4 md:px-[92px] gap-8 md:gap-[101px]">
        <div className="w-full md:w-[489px]">
          <p className="font-sans text-[20px] md:text-[26px] tracking-[0] leading-[normal]">
            <span className="font-semibold text-[#2c00ca]">Cerify</span>
            <span className="font-semibold text-[#3dfe90]">&nbsp;</span>
            <span className="font-medium text-black text-lg md:text-xl">
              is the first AI-Powered Smart Contract Verification Engine from
              4-8 week bottleneck to 10-minute automated security.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {featureCards.map((feature, index) => (
            <Card
              key={`feature-${index}`}
              className="w-full max-w-[697px] h-auto min-h-[61px] bg-[#2c00ca] rounded-[26px] border-none"
            >
              <CardContent className="flex items-center p-0">
                <div className="flex items-center gap-[15px] md:gap-[22px] px-4 md:px-[37px] py-2.5 w-full">
                  <img
                    className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <div className="flex-1 font-sans font-normal text-white text-sm md:text-xl tracking-[0] leading-[normal]">
                    {feature.text}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
