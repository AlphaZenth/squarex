import heroImg from "@/assets/squarex-hero-main.jpg";
import FloatingEffects from "./FloatingEffects";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted to-background">
      <FloatingEffects />
      
      <div className="relative z-10 flex flex-col items-center text-center px-4 gap-6">
        <h1 className="font-pixel text-4xl sm:text-5xl md:text-7xl text-secondary drop-shadow-[0_0_30px_hsl(45_100%_55%/0.5)] animate-slide-up">
          SQUAREX HERO
        </h1>
        <p className="font-comic text-2xl sm:text-3xl md:text-4xl text-primary tracking-wider animate-slide-up" style={{ animationDelay: "0.2s" }}>
          WE ARE THE GUARDIANS OF LIBERTY
        </p>

        <div className="relative my-4 animate-float">
          <img
            src={heroImg}
            alt="Squarex Hero"
            className="w-48 sm:w-64 md:w-80 rounded-lg comic-border"
          />
          <div className="absolute -inset-2 bg-primary/20 rounded-lg blur-xl -z-10" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#token"
            className="font-pixel text-sm px-8 py-4 bg-secondary text-secondary-foreground rounded-lg animate-glow-pulse hover:scale-105 transition-transform"
          >
            BUY $SQUAREX
          </a>
          <a
            href="#social"
            className="font-pixel text-sm px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform border-2 border-secondary/30"
          >
            JOIN TELEGRAM
          </a>
        </div>

        <p className="font-pixel text-xs text-muted-foreground mt-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          Enter the Squarex Universe
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
