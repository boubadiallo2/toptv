import HeroSection from '@/components/HeroSection';
import CategoryCards from '@/components/CategoryCards';
import MediaSection from '@/components/MediaSection';
import FloatingBanner from '@/components/FloatingBanner';

export default function Home() {
  return (
    <>
      <FloatingBanner />
      <HeroSection />
      <CategoryCards />
      <MediaSection />
    </>
  );
}
