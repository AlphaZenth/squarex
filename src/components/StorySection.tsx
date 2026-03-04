import quoteImg from "@/assets/squarex-quote.jpg";
import guardianImg from "@/assets/squarex-guardian.jpg";

const StorySection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-pixel text-2xl sm:text-3xl text-secondary text-center mb-12">
          THE BEGINNING OF A NEW HERO
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="comic-border rounded-lg p-6 bg-card">
              <p className="font-retro text-foreground leading-relaxed text-sm sm:text-base">
                Welcome to the beginning of a new story: <span className="text-secondary font-bold">Squarex Hero</span>.
              </p>
              <p className="font-retro text-foreground leading-relaxed text-sm sm:text-base mt-4">
                We are creating and building a Superhero universe — a world map where our characters will live through epic stories. These stories will be published digitally under Squarex Hero.
              </p>
            </div>
            <div className="comic-border rounded-lg p-6 bg-card">
              <p className="font-retro text-foreground leading-relaxed text-sm sm:text-base">
                This is a world where superheroes and supervillains collide. Is this a classic superhero story? We don't claim that we reinvented the wheel, but we do have our own unique approach to the superhero universe.
              </p>
              <p className="font-retro text-foreground leading-relaxed text-sm sm:text-base mt-4">
                The creation of our heroes follows a different perspective from what has been explored in the industry over the past few years.
              </p>
            </div>
            <div className="comic-border rounded-lg p-6 bg-card">
              <p className="font-retro text-foreground leading-relaxed text-sm sm:text-base">
                This is our version. While we can't say it is 100% original, it blends classic elements that fans truly love.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <img src={quoteImg} alt="Academy Hero Quote" className="w-full rounded-lg comic-border hover:scale-[1.02] transition-transform" />
            <img src={guardianImg} alt="Squarex World Guardian" className="w-full rounded-lg comic-border hover:scale-[1.02] transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
