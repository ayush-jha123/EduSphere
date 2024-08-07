import React from "react";
import { Rating } from "@material-tailwind/react";
import profile from "../assets/bgimage.jpg";
import bookIcon from "../assets/bookIcon.jpg";
import blog1 from '../assets/blog1.png';

const testimonials = () => {
  return (
    <div className="bg-secondary min-h-screen w-full">
      <div className="flex flex-col w-full">
        <div className=" w-full flex justify-center px-6 pt-[70px] mt-6 flex-col">
          <p className="flex justify-center uppercase text-primary font-semibold text-base">
            Our Blog
          </p>
          <p className="flex justify-center font-semibold text-[42px] ">
            Recent from our blog
          </p>
        </div>
        <div className="mt-8  mx-24 flex flex-row gap-3 relative">
          <div className="bg-white w-[26rem] h-[28rem] gap-2 flex flex-col shadow-md rounded-lg">
            <div className="w-full h-[17rem]">
                <img src={blog1} alt=""  className="h-full"/>
            </div>
            <div className="flex flex-col gap-3 p-4">
                <h1 className="text-[1.6rem] font-semibold">Build your Dream Software & Engineering Career</h1>
                <p className="text-slate-500">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonials;
