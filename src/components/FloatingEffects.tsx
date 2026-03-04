import { Zap, Star } from "lucide-react";

const FloatingEffects = () => {
  const bolts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + i * 12}%`,
    delay: `${i * 0.5}s`,
    duration: `${2 + (i % 3)}s`,
    size: 12 + (i % 3) * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bolts.map((b) => (
        <Zap
          key={b.id}
          className="absolute text-lightning-yellow animate-sparkle"
          style={{
            left: b.left,
            top: `${15 + (b.id * 17) % 70}%`,
            animationDelay: b.delay,
            animationDuration: b.duration,
            width: b.size,
            height: b.size,
          }}
        />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={`star-${i}`}
          className="absolute text-secondary animate-sparkle"
          style={{
            right: `${5 + i * 20}%`,
            top: `${10 + i * 18}%`,
            animationDelay: `${i * 0.8}s`,
            width: 8 + i * 2,
            height: 8 + i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingEffects;
