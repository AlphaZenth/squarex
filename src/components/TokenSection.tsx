import { Zap, Users, Smile, Heart, Shield, Rocket } from "lucide-react";

const features = [
  { icon: Users, label: "Community Driven", color: "text-primary" },
  { icon: Smile, label: "Meme Powered", color: "text-secondary" },
  { icon: Zap, label: "Hero Inspired", color: "text-lightning-yellow" },
  { icon: Heart, label: "Built for Fun", color: "text-comic-red" },
  { icon: Shield, label: "ARC Chain Secured", color: "text-retro-green-light" },
  { icon: Rocket, label: "Fair Launch", color: "text-primary" },
];

const TokenSection = () => {
  return (
    <section id="token" className="py-20 px-4 bg-gradient-to-b from-background via-muted to-background">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-pixel text-2xl sm:text-3xl text-secondary mb-8">
          ABOUT $SQUAREX
        </h2>

        <div className="comic-border rounded-lg p-8 bg-card mb-12">
          <p className="font-comic text-2xl text-foreground mb-2">$SQUAREX — the native currency of the Squarex Universe on <span className="text-comic-red">ARC CHAIN</span>.</p>
          <p className="font-comic text-xl text-muted-foreground">Not just a meme coin.</p>
          <p className="font-comic text-xl text-primary">A movement.</p>
          <p className="font-comic text-xl text-secondary">A story.</p>
          <p className="font-comic text-xl text-retro-green-light">A hero rising from the internet, launching on ARC.</p>
        </div>

        <div className="comic-border rounded-lg p-6 sm:p-8 bg-card mb-12 border-comic-red/50">
          <p className="font-pixel text-xs sm:text-sm text-comic-red mb-4 tracking-widest">CONTRACT ADDRESS</p>
          <div className="font-pixel text-sm sm:text-base text-foreground break-all bg-muted/50 rounded-md px-4 py-4 mb-6">
            <span className="text-comic-red animate-pulse">● COMING SOON</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://radardex.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground rounded-lg animate-glow-pulse hover:scale-105 transition-transform"
            >
              BUY ON RADARDEX
            </a>
            <a
              href="https://radardex.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 bg-card border border-secondary/50 text-secondary rounded-lg animate-glow-pulse hover:scale-105 transition-transform"
            >
              VIEW CHART
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.label} className="bg-card comic-border rounded-lg p-6 hover:scale-105 transition-transform">
              <f.icon className={`w-10 h-10 mx-auto mb-3 ${f.color}`} />
              <p className="font-pixel text-[10px] sm:text-xs text-foreground">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
