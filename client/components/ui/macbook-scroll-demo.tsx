import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-black w-full">
      <MacbookScroll
        title={
          <span className="font-orbitron text-white">
            Crafting Digital Excellence <br /> One Project at a Time.
          </span>
        }
        badge={<DigitalAddisBadge className="h-10 w-10 transform -rotate-12" />}
        src="https://cdn.builder.io/o/assets%2F74a63898baaf47e1895475763900ba37%2F7e60ff4311824ea1b91b91c363ccbf79?alt=media&token=4648bb55-e2ad-4f43-8b55-3b694ec8e010&apiKey=74a63898baaf47e1895475763900ba37"
        showGradient={false}
      />
    </div>
  );
}

// Digital-Addis badge component
const DigitalAddisBadge = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} bg-brand-orange rounded-full flex items-center justify-center text-white font-orbitron font-bold text-xs shadow-lg border-2 border-white/20`}
    >
      DA
    </div>
  );
};
