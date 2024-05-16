import React from "react";
import shoe_img from "../../assets/images/shoe-image.png";
import flipkar_img from "../../assets/images/flipkart.png";
import amazon_img from "../../assets/images/amazon.png";

const HeroSection = () => {
  return (
    <>
      <div className=" w-full h-screen mt-10 p-10 flex justify-center items-center gap-5">
        <div className=" text-start">
          <p className="text-black  font-extrabold py-5 text-9xl">
            YOUR FEET <br />
            DESERVE <br />
            THE BEST
          </p>
          <p className="my-10 w-[500px]  text-xl  text-[#5A5959] text-start font-bold ">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className=" py-4 gap-8">
            <button className="btn bg-[#D01C28] py-2 px-6 text-white font-semibold text-3xl ">
              Shop Now
            </button>
            <button className="btn border-2 border-black py-2 px-6 text-[#5A5959] font-semibold  text-3xl m-5">
              Category
            </button>
          </div>
          <p className="pb-5 text-gray-600 text-xl font-normal">
            Also Available On
          </p>
          <div className="flex gap-5">
            <img alt="flipkart_image" src={flipkar_img} />
            <img alt="amazon_image" src={amazon_img} />
          </div>
        </div>
        <div className="flex justify-center items-center  w-100 p-5 mt-10">
          <img alt="shoe_image" src={shoe_img} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
