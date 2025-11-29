import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RelatedProductsSection } from "@/components/RelatedProductsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ScentStorySection } from "@/components/ScentStorySection";
import { SustainabilitySection } from "@/components/SustainabilitySection";

export default function Page() {
  return (
    <>
      <Header />
      <main className="space-y-14 sm:space-y-16 lg:space-y-20">
        <HeroSection />
        <ScentStorySection />
        <SustainabilitySection />
        <ReviewsSection />
        <RelatedProductsSection />
      </main>
      <Footer />
    </>
  );
}
