import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import Navbar from "../Navbar";
import CoursesCard from "./CoursesCard";
import { fetchAllCourses } from "../../api";

const allCourses = () => {
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    try {
      const response = await fetchAllCourses();
      console.log(response);
      if (response?.status === 200) {
        setCourses(response?.data);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
 console.log(courses);
  return (
    <div>
      <div className="p-5">
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
        <div className="bg-inherit min-h-screen w-full ring-1 rounded-md">
          <div className="flex flex-col w-full">
            <div className=" w-full flex justify-center px-6 pt-[70px] mt-6 flex-col">
              <p className="flex justify-center uppercase text-primary font-semibold text-base">
                Our Courses
              </p>
              <p className="flex justify-center font-semibold text-[42px] ">
                Explore Our Popular Online Courses
              </p>
            </div>
            {/* Correct Usage with () for Immediate Return: */}
            <div className="mt-8  mx-24 flex flex-row gap-3 relative">
              {courses.map((course) => (
                <CoursesCard {...course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default allCourses;
