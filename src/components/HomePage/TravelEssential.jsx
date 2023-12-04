"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TravelEssential = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  }, []);

  return (
    <div className="mt-52 text-center mx-10  " data-aos="fade-up-right">
      <h1 className="text-white text-2xl">MY TRAVEL ESSENTIALS</h1>
      <p className="text-amber-500">
        We are the Next Traveler, your favorite travel assistants!
      </p>

      <div className="grid grid-cols-5 gap-4 items-center">
        {/* Use the Image component with the `src` attribute pointing to the image file */}
        <Image
          src="/images/bag.png" // Path to your image from the public folder
          alt="Travel Essentials"
          width={500} // Set the desired width
          height={500} // Set the desired height
          className="mx-auto" // Apply margin to center the image within the column
        />
        <Image
          src="/images/camera.png" // Path to your image from the public folder
          alt="Travel Essentials"
          width={500} // Set the desired width
          height={500} // Set the desired height
          className="mx-auto" // Apply margin to center the image within the column
        />
        <Image
          src="/images/sunglass.png" // Path to your image from the public folder
          alt="Travel Essentials"
          width={500} // Set the desired width
          height={500} // Set the desired height
          className="mx-auto" // Apply margin to center the image within the column
        />
        <Image
          src="/images/wallet.png" // Path to your image from the public folder
          alt="Travel Essentials"
          width={500} // Set the desired width
          height={500} // Set the desired height
          className="mx-auto" // Apply margin to center the image within the column
        />
        <Image
          src="/images/watch.png" // Path to your image from the public folder
          alt="Travel Essentials"
          width={500} // Set the desired width
          height={500} // Set the desired height
          className="mx-auto" // Apply margin to center the image within the column
        />
      </div>
    </div>
  );
};

export default TravelEssential;
