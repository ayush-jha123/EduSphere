import React from "react";
import { Rating } from "@material-tailwind/react";
import profile from "../../assets/bgimage.jpg";
import bookIcon from "../../assets/bookIcon.jpg";
import CoursesCard from "./CoursesCard";

const courses = () => {
  return (
    <div className="bg-secondary min-h-screen w-full">
      <div className="flex flex-col w-full">
        <div className=" w-full flex justify-center px-6 pt-[70px] mt-6 flex-col">
          <p className="flex justify-center uppercase text-primary font-semibold text-base">
            Our Courses
          </p>
          <p className="flex justify-center font-semibold text-[42px] ">
            Explore Our Popular Online Courses
          </p>
        </div>
        <div className="mt-8  mx-24 flex flex-row gap-3 relative">
          <CoursesCard/>
        </div>
      </div>
    </div>
  );
};

export default courses;
