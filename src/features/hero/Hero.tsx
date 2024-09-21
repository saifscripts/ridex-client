import banner from '@/assets/banner1.jpg';
import HeroIntro from './HeroIntro';
import SearchFilters from './SearchFilters';

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center min-h-[calc(100svh-64px)] relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Content */}
      <div className="container flex flex-col md:flex-row gap-20 md:gap-8 justify-center items-center h-full relative z-10 overflow-y-auto hide-scrollbar">
        <HeroIntro />
        <SearchFilters />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
}
