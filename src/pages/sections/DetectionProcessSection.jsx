import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export const DetectionProcessSection = () => {
  // Define table data for better maintainability and readability
  const features = [
    {
      name: "AI-Powered Patching",
      cerify: "✅ SMT-based (Q4 2025)",
      certik: "❌ Manual fixes",
      mythril: "❌ Detection only",
      certora: "❌ Manual fixes",
      veridise: "❌ Manual fixes",
    },
    {
      name: "Line-by-Line Precision",
      cerify: "✅ Symbolic execution",
      certik: "❌ Generic reports",
      mythril: "❌ Generic flags",
      certora: "✅ Formal verification",
      veridise: "❌ Generic reports",
    },
    {
      name: "Speed",
      cerify: "5 minutes",
      certik: "2-4 weeks",
      mythril: "Hours",
      certora: "1-2 weeks",
      veridise: "2-3 weeks",
    },
    {
      name: "Cost per audit",
      cerify: "$99/month",
      certik: "$50K-200K",
      mythril: "Open source",
      certora: "$30K-100K",
      veridise: "$40K-150K",
    },
    {
      name: "Compliance Ready",
      cerify: "✅ MiCA/FIT21",
      certik: "❌ Limited",
      mythril: "❌ None",
      certora: "❌ Limited",
      veridise: "❌ None",
    },
    {
      name: "Continuous Monitoring",
      cerify: "✅ Real-time",
      certik: "❌ One-time",
      mythril: "❌ One-time",
      certora: "❌ One-time",
      veridise: "❌ One-time",
    },
    {
      name: "Multi-Chain Support",
      cerify: "✅ Multi-chain",
      certik: "✅ Multi-chain",
      mythril: "❌ Ethereum only",
      certora: "❌ Limited",
      veridise: "❌ Limited",
    },
  ];

  return (
    <section className="relative w-full py-16 mt-16">
      {/* Background blur effect */}
      <div className="absolute w-full h-[280px] bottom-0 bg-[#aa96f1] blur-[300px] opacity-50" />

      {/* Section header */}
      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="font-bold text-[32px] text-black font-sans mb-4 text-center">
          WHAT WE DETECT ?
        </h2>

        <h3 className="font-semibold text-xl text-[#2c00ca] font-sans mb-8 text-center">
          Comprehensive Vulnerability Coverage
        </h3>

        <p className="font-semibold text-[28px] text-[#2c00ca] text-center font-sans mb-12 max-w-4xl mx-auto">
          Cerify is the only platform combining AI-powered detection, automated
          patching, and built-in compliance alignment at developer-friendly
          pricing.
        </p>

        {/* Modern Comparison Cards */}
        <div className="space-y-6">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <Card className="relative border-2 border-[#2c00ca]/20 rounded-[26px] overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#2c00ca]/5 border-b-2 border-[#2c00ca]/20">
                      <TableHead className="py-6 px-6 font-bold text-lg text-[#2c00ca] font-secondary">
                        Feature
                      </TableHead>
                      <TableHead className="py-6 px-4 font-bold text-lg text-[#2c00ca] font-secondary text-center">
                        <div className="bg-[#3dfe90] text-black px-3 py-1 rounded-full text-sm font-bold">
                          Cerify
                        </div>
                      </TableHead>
                      <TableHead className="py-6 px-4 font-bold text-base text-gray-600 font-secondary text-center">
                        CertiK
                      </TableHead>
                      <TableHead className="py-6 px-4 font-bold text-base text-gray-600 font-secondary text-center">
                        Mythril
                      </TableHead>
                      <TableHead className="py-6 px-4 font-bold text-base text-gray-600 font-secondary text-center">
                        Certora
                      </TableHead>
                      <TableHead className="py-6 px-4 font-bold text-base text-gray-600 font-secondary text-center">
                        Veridise
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {features.map((feature, index) => (
                      <TableRow key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} border-b border-gray-200/50 hover:bg-[#2c00ca]/5 transition-colors`}>
                        <TableCell className="py-5 px-6 font-semibold text-base text-[#2c00ca] font-secondary">
                          {feature.name}
                        </TableCell>
                        <TableCell className="py-5 px-4 font-semibold text-base text-center font-secondary">
                          <span className={`${feature.cerify.includes('✅') ? 'text-green-600' : feature.cerify.includes('❌') ? 'text-red-500' : 'text-[#2c00ca]'}`}>
                            {feature.cerify}
                          </span>
                        </TableCell>
                        <TableCell className="py-5 px-4 font-medium text-sm text-center font-secondary">
                          <span className={`${feature.certik.includes('✅') ? 'text-green-600' : feature.certik.includes('❌') ? 'text-red-500' : 'text-gray-600'}`}>
                            {feature.certik}
                          </span>
                        </TableCell>
                        <TableCell className="py-5 px-4 font-medium text-sm text-center font-secondary">
                          <span className={`${feature.mythril.includes('✅') ? 'text-green-600' : feature.mythril.includes('❌') ? 'text-red-500' : 'text-gray-600'}`}>
                            {feature.mythril}
                          </span>
                        </TableCell>
                        <TableCell className="py-5 px-4 font-medium text-sm text-center font-secondary">
                          <span className={`${feature.certora.includes('✅') ? 'text-green-600' : feature.certora.includes('❌') ? 'text-red-500' : 'text-gray-600'}`}>
                            {feature.certora}
                          </span>
                        </TableCell>
                        <TableCell className="py-5 px-4 font-medium text-sm text-center font-secondary">
                          <span className={`${feature.veridise.includes('✅') ? 'text-green-600' : feature.veridise.includes('❌') ? 'text-red-500' : 'text-gray-600'}`}>
                            {feature.veridise}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-[#2c00ca]/20 rounded-[20px] overflow-hidden shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-[#2c00ca] font-secondary mb-4 text-center">
                    {feature.name}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#3dfe90]/10 rounded-lg">
                      <span className="font-bold text-sm text-[#2c00ca]">Cerify</span>
                      <span className={`font-semibold text-sm ${feature.cerify.includes('✅') ? 'text-green-600' : feature.cerify.includes('❌') ? 'text-red-500' : 'text-[#2c00ca]'}`}>
                        {feature.cerify}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span className="font-medium text-xs text-gray-600">CertiK</span>
                        <span className={`font-medium text-xs ${feature.certik.includes('✅') ? 'text-green-600' : feature.certik.includes('❌') ? 'text-red-500' : 'text-gray-600'}`}>
                          {feature.certik}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span className="font-medium text-xs text-gray-600">Mythril</span>
                        <span className={`font-medium text-xs ${feature.mythril.includes('✅') ? 'text-green-600' : feature.mythril.includes('❌') ? 'text-red-500' : 'text-gray-600'}`}>
                          {feature.mythril}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span className="font-medium text-xs text-gray-600">Certora</span>
                        <span className={`font-medium text-xs ${feature.certora.includes('✅') ? 'text-green-600' : feature.certora.includes('❌') ? 'text-red-500' : 'text-gray-600'}`}>
                          {feature.certora}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                        <span className="font-medium text-xs text-gray-600">Veridise</span>
                        <span className={`font-medium text-xs ${feature.veridise.includes('✅') ? 'text-green-600' : feature.veridise.includes('❌') ? 'text-red-500' : 'text-gray-600'}`}>
                          {feature.veridise}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
