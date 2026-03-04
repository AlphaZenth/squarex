import newsImg from "@/assets/squarex-news.jpg";

const NewsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-pixel text-2xl sm:text-3xl text-secondary mb-12">
          SQUAREX HERO IN THE NEWS
        </h2>

        <div className="relative inline-block mb-8">
          <img src={newsImg} alt="Squarex Hero in the News" className="w-full max-w-md rounded-lg comic-border mx-auto hover:rotate-1 transition-transform" />
        </div>

        <div className="comic-border rounded-lg p-8 bg-card max-w-2xl mx-auto">
          <p className="font-comic text-xl sm:text-2xl text-foreground leading-relaxed">
            The world is starting to notice the rise of Squarex Hero.
          </p>
          <p className="font-comic text-xl text-muted-foreground mt-4">Some say it's a meme.</p>
          <p className="font-comic text-xl text-muted-foreground">Some say it's a movement.</p>
          <p className="font-comic text-xl text-secondary mt-4 font-bold">
            But one thing is certain…
          </p>
          <p className="font-pixel text-sm text-primary mt-4">
            The Squarex Universe is just getting started.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
