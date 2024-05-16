import React from "react";
import logo_img from "../../assets/images/brand-logo.png";

const Header = () => {
  return (
    <div className="flex w-full h-20 justify-between px-20 items-center  bg-white">
      <div>
        <img alt="lodo_image" src={logo_img} />
      </div>
      <ul className="flex gap-8 uppercase font-bold text-[#2E2E2E] ">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className=" bg-[#D01C28] text-white py-1 px-5 font-medium">
        Login
      </button>
    </div>
  );
};

export default Header;
