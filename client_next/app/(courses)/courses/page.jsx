"use client";
import CoursesCard from "@/components/CoursesCard";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    try {
      const response = await fetch(`/api/course/getCourses`);
      const data = await response.json();
        if (response?.status === 200) {
          setCourses(data);
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
  console.log(courses)
  return (
    <div className="mx-14 my-8 ">
      <div className="bg-inherit min-h-screen w-full ring-1 rounded-md">
        <div className="flex flex-col w-full">
          <div className=" w-full flex justify-center px-6 pt-[70px] mt-6 flex-col">
            <p className="flex justify-center uppercase text-primary font-semibold text-base">
              Our Courses
            </p>
            <p className="flex justify-center font-semibold text-[42px] text-white">
              Explore Our Popular Online Courses
            </p>
          </div>
          {/* Correct Usage with () for Immediate Return: */}
          <div className="mt-8  mx-24 flex flex-row gap-3 relative">
            {courses?.map((course) => (
              <CoursesCard {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses