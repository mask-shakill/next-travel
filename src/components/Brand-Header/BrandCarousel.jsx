"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

const BrandCarousel = async () => {
  const users = await getData();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-3/4 m-auto">
      <Slider {...settings}>
        {users.map((user) => (
          <div key={user.id}>
            <div className="bg-slate-400 flex flex-col h-52 w-52 items-center justify-center rounded-xl ">
              <div>
                <h1>{user.name}</h1>
              </div>
              <div>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
