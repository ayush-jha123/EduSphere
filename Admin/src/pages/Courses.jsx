import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const fetchAllCourses = async () => {
    const result = await axios.get("http://localhost:5000/course/getCourses");
    setCourses(result?.data);
  };
  useEffect(() => {
    fetchAllCourses();
  }, []);
  
  const handledelete=async(courseId)=>{
    try {
      const res=await axios.delete(`http://localhost:5000/course/deleteCourse/${courseId}`);
      console.log(res);
      fetchAllCourses();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-4 w-full flex flex-col gap-3">
      <div className="w-full p-3 m-2">
        <p className="font-semibold text-lg">Courses</p>
        <div className="w-full flex gap-3 flex-col">
          {courses &&
            courses.map((course) => (
              <div className="flex flex-row  justify-between p-2 px-8  bg-white ring-1 rounded-lg h-16 items-center">
                <div>
                  <p className="text-lg font-serif font-semibold">{course?.courseName}</p>
                  <p class>By {course?.tutorName}</p>
                </div>
                <div className="flex flex-row w-[15rem] gap-2">
                  <Link
                    to={`/addLectures/${course._id}`}
                    className="bg-slate-100 ring-2  p-3 rounded-lg hover:bg-green-500 hover:text-white"
                  >
                    Add Lectures
                  </Link>
                  <button className="bg-slate-100 ring-2 p-3 rounded-lg hover:bg-red-600 hover:text-white w-[6rem]" onClick={()=>handledelete(course?._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-2">
        <Link
          to="/createCourses"
          className="bg-blue-400 p-2 rounded-lg font-semibold text-md hover:bg-blue-600 "
        >
          Create Courses
        </Link>
      </div>
    </div>
  );
};

export default Courses;
