import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-nav-color text-black flex items-center justify-evenly py-3">
        <div className="flex items-center ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3278/3278959.png?ga=GA1.1.945868740.1697346172&semt=ais"
            height={30}
            width={30}
            alt=""
          />

          <Link className="mx-5" href={"/destinations"}>
            Destinations
          </Link>
        </div>

        <ul className="flex items-center gap-7">
          <Link href={"/"}>Home</Link>
          <Link href={"/most-favorite"}>Most Favorite</Link>

          <Link href={"/blog"}>Blog</Link>

          <Link href={"/about"}>About</Link>

          <Link href={"/contact"}>contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
