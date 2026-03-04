import teamImg from "@/assets/squarex-hero-team.jpg";
import heroImg from "@/assets/squarex-hero-main.jpg";
import quoteImg from "@/assets/squarex-quote.jpg";
import guardianImg from "@/assets/squarex-guardian.jpg";

const heroes = [
  { name: "Squarex Hero", title: "The Guardian of Liberty", img: heroImg, color: "border-primary" },
  { name: "Academy Hero", title: "Future protector of the Squarex universe", img: quoteImg, color: "border-secondary" },
  { name: "Shadow Citizen", title: "A mysterious observer", img: guardianImg, color: "border-retro-green" },
  { name: "Crimson Rival", title: "Sometimes friend, sometimes enemy", img: teamImg, color: "border-comic-red" },
];

const HeroTeamSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-pixel text-2xl sm:text-3xl text-secondary text-center mb-4">
          MEET THE SQUAREX HEROES
        </h2>
        <div className="flex justify-center mb-12">
          <img src={teamImg} alt="Squarex Hero Team" className="w-full max-w-2xl rounded-lg comic-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroes.map((hero) => (
            <div
              key={hero.name}
              className={`bg-card rounded-lg overflow-hidden comic-border hover:scale-105 transition-transform group border-t-4 ${hero.color}`}
            >
              <div className="overflow-hidden">
                <img
                  src={hero.img}
                  alt={hero.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-pixel text-xs text-secondary mb-2">{hero.name}</h3>
                <p className="font-comic text-lg text-muted-foreground">{hero.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroTeamSection;
