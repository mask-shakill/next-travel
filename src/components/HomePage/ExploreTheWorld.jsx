"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreTheWorld = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 200,
    });
  }, []);

  return (
    <div className="mx-24 mt-28">
      <div className="flex items-center" data-aos="fade-up">
        <h1 className="font-semibold text-xl text-white me-2">
          Explore the world{" "}
        </h1>
        <img
          className="w-[30px]"
          src="https://cdn-icons-png.flaticon.com/128/376/376130.png?ga=GA1.1.945868740.1697346172&semt=ais"
          alt=""
        />
      </div>

      <div className="flex justify-between mt-5 h-[400px]" data-aos="fade-up">
        <div className="w-1/2">
          <h1 className="text-6xl font-semibold text-white">
            It is a Big World Out <br /> There, Go Explore{" "}
          </h1>
          <p className="mt-3 text-justify text-pink-100">
            In a world that stretches beyond our imagination, there's an
            expansive realm awaiting exploration. It is a big world out there,
            teeming with diverse cultures, breathtaking landscapes, and hidden
            wonders. Venture beyond the familiar, embrace the unknown, and let
            curiosity be your compass. Go explore, for in the vastness of this
            world, there are endless opportunities for discovery, growth, and a
            deeper understanding of the incredible tapestry of life that
            surrounds us.
          </p>
        </div>
        <img
          className="w-[400px] me-2 rounded-xl shadow-sm"
          src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/330028179_685741519958389_3737657129126614577_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=K4A1egs7o-kAX8T5knp&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBdT41c8pJa4VoY8HCclgFZlCVOO53YzKAW2usju5iUzQ&oe=6571DFB7"
          alt=""
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default ExploreTheWorld;
