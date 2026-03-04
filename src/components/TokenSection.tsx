import { Zap, Users, Smile, Heart } from "lucide-react";

const features = [
  { icon: Users, label: "Community Driven", color: "text-primary" },
  { icon: Smile, label: "Meme Powered", color: "text-secondary" },
  { icon: Zap, label: "Hero Inspired", color: "text-lightning-yellow" },
  { icon: Heart, label: "Built for Fun", color: "text-comic-red" },
];

const TokenSection = () => {
  return (
    <section id="token" className="py-20 px-4 bg-gradient-to-b from-background via-muted to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-pixel text-2xl sm:text-3xl text-secondary mb-8">
          ABOUT $SQUAREX
        </h2>

        <div className="comic-border rounded-lg p-8 bg-card mb-12">
          <p className="font-comic text-2xl text-foreground mb-2">$SQUAREX is the currency of the Squarex Universe.</p>
          <p className="font-comic text-xl text-muted-foreground">Not just a meme coin.</p>
          <p className="font-comic text-xl text-primary">A movement.</p>
          <p className="font-comic text-xl text-secondary">A story.</p>
          <p className="font-comic text-xl text-retro-green-light">A hero rising from the internet.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
