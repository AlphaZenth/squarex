import worldImg from "@/assets/squarex-world.jpg";

const WorldSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted to-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-pixel text-2xl sm:text-3xl text-retro-green-light mb-8">
          WELCOME TO SQUAREX WORLD
        </h2>

        <div className="relative inline-block mb-8">
          <img src={worldImg} alt="Squarex World" className="w-full max-w-xl rounded-lg comic-border mx-auto" />
          <div className="absolute -inset-4 bg-retro-green/20 rounded-xl blur-2xl -z-10" />
        </div>

        <p className="font-comic text-2xl sm:text-3xl text-foreground mb-4">
          A pixel universe where heroes, villains, citizens, and chaos collide.
        </p>
        <p className="font-pixel text-xs text-secondary animate-float">
          Every universe needs a hero.
        </p>
      </div>
    </section>
  );
};

export default WorldSection;
