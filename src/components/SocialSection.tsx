import { Twitter } from "lucide-react";
import { Send } from "lucide-react";

const SocialSection = () => {
  return (
    <section id="social" className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-pixel text-2xl sm:text-3xl text-secondary mb-8">
          JOIN THE HERO COMMUNITY
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#"
            className="font-pixel text-sm px-10 py-5 bg-foreground text-background rounded-lg hover:scale-110 transition-transform animate-glow-pulse flex items-center gap-3 justify-center"
          >
            <Twitter className="w-6 h-6" />
            JOIN X
          </a>
          <a
            href="#"
            className="font-pixel text-sm px-10 py-5 bg-primary text-primary-foreground rounded-lg hover:scale-110 transition-transform animate-glow-pulse flex items-center gap-3 justify-center"
            style={{ animationDelay: "1s" }}
          >
            <Send className="w-6 h-6" />
            JOIN TELEGRAM
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
