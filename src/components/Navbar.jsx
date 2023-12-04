import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-slate-300 text-black flex items-center justify-evenly py-3">
        <div className="flex items-center ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9502/9502563.png?ga=GA1.1.945868740.1697346172&semt=ais"
            height={40}
            width={40}
            alt=""
          />

          <Link className="mx-5 font-semibold" href={"/destinations"}>
            Destinations
          </Link>
        </div>

        <ul className="flex items-center font-semibold gap-7">
          <Link href={"/"}>Home</Link>
          <Link href={"/most-favorite"}>Most Favorite</Link>

          <Link href={"/blog"}>Blog</Link>

          <Link href={"/about"}>About</Link>

          <Link href={"/contact"}>Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
