
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { AnimatedGradientText } from "@/registry/magicui/animated-gradient-text"

type AnimatedGradientTextDemoProps = {
  text: string;
};

export function AnimatedGradientTextDemo({ text }: AnimatedGradientTextDemoProps) {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
      <span
        className={cn(
          "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
      <AnimatedGradientText className="text-sm font-medium">
        {text}
      </AnimatedGradientText>
      <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </div>
  )
}






const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center relative max-w-3xl mx-auto px-4">
      {/* Text Content */}
      <div className="z-10 mt-10 mb-6">
  <h1 className="text-5xl md:text-5xl font-bold leading-snug">
    Your AI Event Planner
  </h1>
  <p className="text-sm md:text-lg text-gray-500 mt-4 leading-relaxed">
    Plan. Invite. Track RSVPs — all in one place. <br />
    Powered by smart AI that understands your events.
  </p>
</div>


   <AnimatedGradientTextDemo text="Now in Beta - Join the Waitlist!" />
      {/* Hero Image - bigger and slightly overlapping */}
      <div className="-mt-60 z-0 w-[150%] max-w-none">
        <img
          src="/solar.png"
          alt="Hero"
          width={1800}
          height={1600}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
