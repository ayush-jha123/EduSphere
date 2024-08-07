import React from "react";
import { Rating } from "@material-tailwind/react";
import profile from "../assets/bgimage.jpg";
import bookIcon from "../assets/bookIcon.jpg";

const testimonials = () => {
  return (
    <div className="bg-secondary min-h-screen w-full">
      <div className="flex flex-col w-full">
        <div className=" w-full flex justify-center px-6 pt-[70px] mt-6 flex-col">
          <p className="flex justify-center uppercase text-primary font-semibold text-base">
            Testimonial
          </p>
          <p className="flex justify-center font-semibold text-[42px] ">
            Our Successful Students
          </p>
        </div>
        <div className="mt-8  mx-24 flex flex-row gap-3 relative">
          <div className="bg-white w-[23rem] h-[15rem] p-6 gap-4 flex flex-col shadow-md">
            <div className="flex flex-row gap-2">
                <div>
                    <img src= {profile} alt="" className="w-16 rounded-full"/>
                </div>
                <div>
                    <h1 className="uppercase font-semibold text-lg">ROGER SCOTT</h1>
                    <p className="uppercase text-primary font-semibold">marketing manager</p>
                </div>
            </div>
            <div className="p-1 mt-2">
                <p className="text-slate-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonials;
