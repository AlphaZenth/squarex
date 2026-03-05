import { useState } from "react";
import { Copy, Check } from "lucide-react";
import bannerImg from "@/assets/squarex-banner.jpg";
import logoImg from "@/assets/squarex-logo.jpg";
import FloatingEffects from "./FloatingEffects";

const HeroSection = () => {
  const CA = "DHyqc1cvxRDcFtLmWMxuvG9uiQuzn8xTJc3H86YTpump";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted to-background">
      <FloatingEffects />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 gap-4 sm:gap-6 w-full max-w-5xl">
        {/* Logo */}
        <img
          src={logoImg}
          alt="Squarex Hero Logo"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl comic-border animate-float"
        />

        <h1 className="font-pixel text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-secondary drop-shadow-[0_0_30px_hsl(45_100%_55%/0.5)] animate-slide-up leading-tight">
          SQUAREX HERO
        </h1>
        <p className="font-comic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary tracking-wider animate-slide-up" style={{ animationDelay: "0.2s" }}>
          WE ARE THE GUARDIANS OF LIBERTY
        </p>

        {/* Banner */}
        <div className="relative my-2 sm:my-4 animate-slide-up w-full" style={{ animationDelay: "0.3s" }}>
          <img
            src={bannerImg}
            alt="Squarex Hero Team Banner"
            className="w-full max-w-3xl mx-auto rounded-lg comic-border"
          />
          <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-xl -z-10" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up w-full sm:w-auto" style={{ animationDelay: "0.4s" }}>
          <a
            href="#token"
            className="font-pixel text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground rounded-lg animate-glow-pulse hover:scale-105 transition-transform text-center"
          >
            BUY $SQUAREX
          </a>
        </div>

        <div className="font-pixel text-[10px] sm:text-xs text-secondary mt-2 sm:mt-4 animate-slide-up flex flex-col items-center gap-1" style={{ animationDelay: "0.6s" }}>
          <span className="text-muted-foreground">Enter the Squarex Universe</span>
          <span className="bg-card/80 border border-secondary/30 rounded-md px-4 py-2 mt-1 animate-glow-pulse">
            $SQUAREX CA : DHyqc1cvxRDcFtLmWMxuvG9uiQuzn8xTJc3H86YTpump
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
