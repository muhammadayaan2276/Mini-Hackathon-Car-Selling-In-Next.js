import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/Hero";
import FeaturedCars from "./FeaturedCars/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedCars />
    </div>
  );
}
