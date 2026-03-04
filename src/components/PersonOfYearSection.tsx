import timeImg from "@/assets/squarex-time.jpg";

const PersonOfYearSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-pixel text-2xl sm:text-3xl text-secondary mb-8">
          PERSON OF THE YEAR
        </h2>

        <div className="relative inline-block mb-8 group">
          <img
            src={timeImg}
            alt="Squarex Hero - Person of the Year"
            className="w-full max-w-sm rounded-lg comic-border mx-auto group-hover:scale-[1.02] transition-transform"
          />
          <div className="absolute -inset-3 bg-secondary/15 rounded-xl blur-2xl -z-10 group-hover:bg-secondary/25 transition-colors" />
        </div>

        <div className="space-y-2">
          <p className="font-comic text-2xl text-foreground">Squarex Hero.</p>
          <p className="font-comic text-xl text-primary">Defender of liberty.</p>
          <p className="font-comic text-xl text-retro-green-light">Protector of the pixel universe.</p>
        </div>
      </div>
    </section>
  );
};

export default PersonOfYearSection;
