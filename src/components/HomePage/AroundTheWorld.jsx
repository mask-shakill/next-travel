"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AroundTheWorld = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
  }, []);
  return (
    <div className="flex mt-44 mx-10  items-center  justify-between">
      <div className="w-1/2" data-aos="fade-up-right">
        <h1 className="text-6xl text-white mb-3 font-mono">
          AROUND THE <br /> WORLD IN 10 DAYS
        </h1>
        <p className="text-lg text-lime-200 ">
          Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget
          diam non velit aliquam fringilla. Praesent et mi turpis. Proin in
          felis nec vitae sed urna aliquam scelerisque. Sed euismod lacus nec
          ultricies tincidunt. Vestibulum eget diam non velit aliquam fringilla.
          Praesent et mi turpis. Proin in felis nec dui efficitur.
        </p>
      </div>
      <div data-aos="fade-down-right">
        <Image width={500} height={500} src="/images/imageCollage.png"></Image>
      </div>
    </div>
  );
};

export default AroundTheWorld;
