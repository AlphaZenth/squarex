import { Twitter } from "lucide-react";

const SocialSection = () => {
  return (
    <section id="social" className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-pixel text-2xl sm:text-3xl text-secondary mb-8">
          JOIN THE HERO COMMUNITY
        </h2>

        <div className="flex flex-col gap-6 justify-center items-center">
          <a
            href="https://x.com/squarexhero"
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-xs sm:text-sm px-10 sm:px-16 py-4 sm:py-5 bg-foreground text-background rounded-lg hover:scale-110 transition-transform animate-glow-pulse flex items-center gap-3 justify-center max-w-md w-full"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            FOLLOW ON X
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
