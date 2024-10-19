import Link from "next/link"; 
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full bg-black rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the Craft of Coding
        </h1>
        
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive coding courses and transform your development journey today. Whether you are a beginner or looking to refine your programming skills, join us to unlock your true coding potential.
        </p>
        <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          
          <Link href="/courses">
          <Button borderRadius="1.75rem" className="bg-black text-white border-slate-950">
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 