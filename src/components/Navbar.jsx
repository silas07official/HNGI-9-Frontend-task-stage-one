import React from "react";
import share from "../assets/share.png";
import content from "../assets/Content.png";

const Navbar = () => (
  <nav className="container mt-10 flex flex-row justify-end space-x-4">
    <div className=" justify-center w-[40px] h-[40px] border-dotted border-2 border-gray-300 rounded-full hidden md:flex">
      <img src={share} alt="" className="my-2 mx-0" />
    </div>
    <div className=" flex justify-center w-[40px] h-[40px] border-dotted border-2 border-gray-300 rounded-full md:hidden">
      <img src={content} alt="" />
    </div>
  </nav>
);

export default Navbar;
