import React from "react";

export const ProcessStepsSection = () => {
  // Define the process steps data matching the exact image layout
  const processSteps = [
    {
      step: 1,
      title: "Upload (30 seconds)",
      description:
        "Submit your smart contract - whether it's Solidity, Vyper, or Kotlin-based",
      iconSrc: "/figmaAssets/vector-9.svg",
      rectangleSrc: "/figmaAssets/rectangle-1.svg",
      iconPosition: "top-left",
      stepPosition: "top-right",
      descriptionPosition: "bottom",
    },
    {
      step: 2,
      title: "Detect (2-5 minutes)",
      description:
        "Cerify's symbolic engine scans for 14 core vulnerabilities and currently flags 7 of them with detailed location-based insights",
      iconSrc: "/figmaAssets/vector-12.svg",
      rectangleSrc: "/figmaAssets/rectangle-2.svg",
      iconPosition: "top-right",
      stepPosition: "top-left",
      descriptionPosition: "bottom",
    },
    {
      step: 3,
      title: "Patch (Coming Q4 2025)",
      description:
        "AI-generated secure suggestions will auto-remediate common flaws — reducing dev time",
      iconSrc: "/figmaAssets/vector-11.svg",
      rectangleSrc: "/figmaAssets/rectangle-3.svg",
      iconPosition: "bottom-left",
      stepPosition: "bottom-right",
      descriptionPosition: "top",
    },
    {
      step: 4,
      title: "Certify (Instant)",
      description:
        "Each verified contract earns the Cerify Trust Badge — a public, verifiable certificate tied to security and regulatory benchmarks",
      iconSrc: "/figmaAssets/vector-6.svg",
      rectangleSrc: "/figmaAssets/rectangle-4.svg",
      iconPosition: "bottom-right",
      stepPosition: "bottom-left",
      descriptionPosition: "top",
    },
  ];

  return (
    <section className="relative w-full py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-sans font-bold text-black text-[24px] md:text-[32px] tracking-[0] leading-normal mb-4 text-center">
          FROM UPLOAD TO CERTIFICATION IN MINUTES
        </h2>
        <h3 className="font-sans font-semibold text-[#2c00ca] text-lg md:text-xl tracking-[0] leading-normal mb-12 text-center">
          How Does It Work ?
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 justify-items-center">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative w-full max-w-[380px] h-[380px]"
            >
              {/* Background rectangle */}
              <img
                className="absolute inset-0 w-full h-full object-contain"
                alt={`Step ${step.step} background`}
                src={step.rectangleSrc}
              />
              
              {/* Purple icon container */}
              <div className={`absolute w-28 h-28 lg:w-32 lg:h-32 bg-[#2c00ca] rounded-2xl flex items-center justify-center ${
                step.iconPosition === 'top-left' ? 'top-4 left-4 lg:top-8 lg:left-8' :
                step.iconPosition === 'top-right' ? 'top-4 right-4 lg:top-8 lg:right-8' :
                step.iconPosition === 'bottom-left' ? 'bottom-4 left-4 lg:bottom-8 lg:left-8' :
                'bottom-4 right-4 lg:bottom-8 lg:right-8'
              }`}>
                <img
                  className="w-16 h-16 lg:w-24 lg:h-24 object-contain"
                  alt={`Step ${step.step} icon`}
                  src={step.iconSrc}
                />
              </div>
              
              {/* Step number and label */}
              <div className={`absolute ${
                step.stepPosition === 'top-right' ? 'top-12 right-12 lg:top-16 lg:right-16' :
                step.stepPosition === 'top-left' ? 'top-12 left-12 lg:top-16 lg:left-16' :
                step.stepPosition === 'bottom-right' ? 'bottom-12 right-12 lg:bottom-16 lg:right-16' :
                'bottom-12 left-12 lg:bottom-16 lg:left-16'
              } overflow-hidden`}>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm lg:text-base font-medium text-[#2c00ca]">step</span>
                  <span className="text-4xl lg:text-6xl font-bold text-[#2c00ca]">{step.step}</span>
                </div>
              </div>

              {/* Description */}
              <div className={`absolute px-4 lg:px-8 ${
                step.descriptionPosition === 'bottom' ? 'bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12' :
                'top-8 left-8 right-8 lg:top-12 lg:left-12 lg:right-12'
              } overflow-hidden`}>
                <h4 className="font-secondary font-semibold text-[#2c00ca] text-sm lg:text-base mb-1 lg:mb-2">
                  {step.title}
                </h4>
                <p className="font-secondary font-medium text-[#2c00ca] text-xs lg:text-sm leading-tight lg:leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
