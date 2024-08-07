import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "./Navbar";
import bgimage from "../assets/bgimage.jpg";

const Home = () => {
  return (
    <div>
      <div className="mx-14 my-8 ">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-0 leading-none ">
            <h1 className="text-[35px] uppercase font-extrabold text-slate-400">
              EduSphere
            </h1>
            <h4 className="uppercase text-sm font-semibold">
              Online Education and Learning
            </h4>
          </div>

          <div className="flex flex-row gap-2">
            <div>
              <LuPhone className="size-10" />
            </div>
            <div className="font-semibold leading-5 text-lg">
              <p>Call Us:</p>
              <p>+123-456789</p>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <FaFacebookF className=" rounded-full w-9 h-9 p-2 bg-slate-200 hover:bg-slate-500 " />
            <FaInstagram className=" rounded-full w-9 h-9 p-2 bg-slate-200 hover:bg-slate-500 " />
            <FaTwitter className=" rounded-full w-9 h-9 p-2 bg-slate-200 hover:bg-slate-500 " />
          </div>
        </div>
        <Navbar />
        <div className=" flex flex-row w-full justify-between">
          <div className="mt-44 w-1/3">
            <p className="text-slate-100 font-semibold ">
              WELCOME TO EDUSPHERE
            </p>
            <p className="text-4xl font-bold my-4 text-slate-50">
              Best Online Education <br /> Expertise
            </p>
            <p className="text-lg text-slate-50">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex flex-row gap-2 mt-3">
              <button className="flex flex-row   w-2/3 bg-primary rounded-[6px] justify-between px-3 py-1 items-center">
                <div className="text-[18px] font-semibold text-white">
                  Get Started Now!
                </div>
                <div className="flex align-middle  text-slate-300 ">
                  <FaArrowRightLong />
                </div>
              </button>
              <button className="flex flex-row   w-1/3 bg-white rounded-[6px] justify-between py-3 px-3 items-center">
                <div className="text-[18px] font-semibold text-primary">
                  View Courses
                </div>
                <div className="flex align-middle text-primary">
                  <FaArrowRightLong />
                </div>
              </button>
            </div>
          </div>
          <div className="bg-inherit mt-[45px]">
            <img src={bgimage} alt=""  className="rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
