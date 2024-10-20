'use client'
import React from 'react'
import { Rating } from "@material-tailwind/react";
import Link from 'next/link';
// import {Link} from 'react-router-dom';

const CoursesCard = (course) => {
  console.log(course)
  return (
    <div className=" w-[23rem] bg-white gap-2 p-4 rounded-lg shadow-md">
    <Link href={`/coursedetails/${course?._id}`}>
    <div className="flex flex-row ">
      <div className="w-1/4">
        <img src='/bookIcon.jpg' alt="BookIcon" className="rounded-full" />
      </div>
      <div className="w-3/4">
        <div>
          <h1 className="text-[1.7rem] font-semibold">
            {course?.courseName}
          </h1>
          <div className="w-full flex flex-row mb-2 h-6">
            <Rating
              unratedColor="blue"
              ratedColor="blue"
              value={4}
              className="flex flex-row"
            />
          </div>
          <div className="flex flex-row gap-2 my-2">
            <img
              src='/bgimage.jpg'
              alt="Profile"
              className="size-6 rounded-full "
            />
            <p className="font-semibold">By {course?.tutorName}</p>
          </div>
          <p className="text-primary font-semibold">
            50 lectures (190 hrs)
          </p>
        </div>
      </div>
    </div>
    </Link>  
    <div className=" mt-6 p-2 gap-2">
      <p className="bg-slate-100 p-1 rounded-md text-primary text-center py-2 font-semibold">
        $100 All Course/$15 per month
      </p>
      <button className="ring-1 w-full mt-3 p-3 font-semibold rounded-md hover:bg-primary uppercase text-sm hover:text-white">
        Enroll Now!
      </button>
    </div>
  </div>
  )
}

export default CoursesCard