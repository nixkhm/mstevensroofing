import About from "@/components/About";
import Carousel from "@/components/Carousel";
import ServicesPreview from "@/components/ServicesPreview";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Carousel />
      <About />
      <ServicesPreview />
    </div>
  );
}
