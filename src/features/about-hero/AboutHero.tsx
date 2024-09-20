import aboutHero from '@/assets/about-hero.jpg';

export default function AboutHero() {
  return (
    <section
      className="relative h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white container">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">RideX</h1>
        <p className="text-xl">
          Transforming Urban Mobility, One Ride at a Time
        </p>
      </div>
    </section>
  );
}
