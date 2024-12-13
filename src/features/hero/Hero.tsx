import banner from '@/assets/banner1.jpg';
import Container from '@/components/layout/Container';
import HeroIntro from './HeroIntro';
import SearchFilters from './SearchFilters';

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center min-h-[70svh] relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Content */}
      <Container className="flex flex-col md:flex-row gap-20 md:gap-8 justify-center items-center h-full relative z-10 overflow-y-auto hide-scrollbar">
        <HeroIntro />
        <SearchFilters />
      </Container>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-background/70"></div>
    </div>
  );
}
