import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const DeploySmartContractsSection = () => {
  // Benefits list data for mapping
  const betaBenefits = [
    "Free audit credits for first 100 users",
    "Priority access to auto-patching feature",
    "Direct feedback line to our engineering team",
    "Grandfathered pricing when we launch commercially",
    "Certificate of participation",
  ];

  return (
    <section className="relative w-full py-16 flex flex-col items-center">
      {/* Background glow effect */}
      <div className="absolute w-full h-[381px] top-1/2 left-0 -translate-y-1/2">
        <div className="w-full h-full bg-[#aa96f1] blur-[300px] opacity-50" />
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-[1440px] flex flex-col items-center">
        {/* Heading */}
        <h2 className="font-bold text-[#2c00ca] text-[64px] text-center font-sans">
          Ready to Deploy Fearlessly?
        </h2>

        {/* Subheading */}
        <p className="mt-7 text-[27px] text-center font-sans">
          <span className="text-[#2c00ca]">
            Beta access is limited — reserve your spot{" "}
          </span>
          <span className="font-bold text-[#2c00ca]">TODAY</span>
        </p>

        {/* Benefits card */}
        <Card className="mt-8 w-[480px] bg-white rounded-[50px] border-4 border-solid border-[#2c00ca]">
          <CardContent className="flex flex-col items-center gap-[31px] px-[27px] py-3.5">
            <h3 className="w-[266px] font-sans font-bold text-[#2c00ca] text-2xl">
              Beta Program Benefits
            </h3>

            <div className="w-[416px] font-sans font-medium text-black text-base text-center">
              {betaBenefits.map((benefit, index) => (
                <React.Fragment key={index}>
                  {benefit}
                  {index < betaBenefits.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <Button className="mt-16 px-[47px] py-8 bg-[#3dfe90] rounded-[26px] hover:bg-[#3dfe90]/90">
          <span className="font-semibold text-black text-[28px] font-sans">
            Get Beta Access
          </span>
        </Button>

        {/* Footer text */}
        <p className="mt-6 font-semibold text-black text-[27px] font-sans">
          Free for first 100 beta users
        </p>
      </div>
    </section>
  );
};
