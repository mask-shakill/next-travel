import BrandName from "@/components/Brand-Header/BrandName";
import BannerCarousel from "@/components/CarouselSlider/BannerCarousel";
import AroundTheWorld from "@/components/HomePage/AroundTheWorld";
import ExploreTheWorld from "@/components/HomePage/ExploreTheWorld";
import TravelEssential from "@/components/HomePage/TravelEssential";
import React from "react";

const Home = () => {
  return (
    <div>
      <BrandName></BrandName>
      <BannerCarousel></BannerCarousel>
      {/* explore the world section */}
      <ExploreTheWorld />
      {/* travel essentials section */}
      <TravelEssential></TravelEssential>
      <AroundTheWorld />
    </div>
  );
};

export default Home;
