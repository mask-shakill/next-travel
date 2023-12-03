"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// fetch data from sever
async function getData() {
  const res = await fetch("http://localhost:5000/instagramStories");
  return res.json();
}
const BannerCarousel = async () => {
  const instagramStories = await getData();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mx-20 ">
      <div>
        <Slider {...settings}>
          {instagramStories.map((story) => (
            <div
              key={story.id}
              className="border-4 border-r-white  flex flex-col items-center  rounded-xl h-[450px] w-[320px] relative"
            >
              <div>
                <img className="h-[300px] w-[320px]" src={story.url} alt="" />
              </div>
              <div className="text-center ">
                <h1 className="font-bold mt-5">{story.name}</h1>
                <p className="text-sm mb-3 mt-2">{story.intro}</p>
                <p className="text-slate-900  absolute bottom-4 mx-28">
                  Adventure!
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerCarousel;
