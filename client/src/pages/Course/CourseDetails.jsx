import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import { Rating } from "@material-tailwind/react";
import { fetchCourse } from "../../api";
import ReactPlayer from "react-player";
import bookIcon from "../../assets/bookIcon.jpg";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState();
  const [currVideo, setCurrVideo] = useState();
  const [currPoster, setCurrPoster] = useState();
  // console.log(id);
  const fetchcourse = async () => {
    try {
      const response = await fetchCourse(id);
      setCourse(response?.data);
      // console.log('bhai');
      // console.log(course?.lectures[0]?.lecVedio)
      setCurrVideo(course?.lectures[0]?.lecVedio);
      setCurrPoster(course?.lectures[0]?.frontPhoto);
    } catch (error) {
      console.log(error);
    }
  };
  const handleToogle=(lec)=>{
    setCurrPoster(lec?.frontPhoto);
    setCurrVideo(lec?.lecVedio);
  }
  useEffect(() => {
    fetchcourse();
  }, []);

  console.log(course);
  return (
    <div className="mx-14 my-8 ">
      <Navbar />
      <div className="w-full bg-white p-3 flex-col flex min-h-screen">
        <div className="flex flex-row space-x-2">
          <div>
            <img
              src={bookIcon}
              alt="BookIcon"
              className="rounded size-[10rem]"
            />
          </div>
          <div className="flex flex-row justify-between w-full">
            <div>
              <h1 className="text-[2.5rem]  font-serif">
                {course?.courseName}
              </h1>
              <p className="text-slate-500 text-[1.2rem]">
                By {course?.tutorName}
              </p>
              <div className="w-full flex flex-row mb-2 h-6">
                <Rating
                  unratedColor="blue"
                  ratedColor="blue"
                  value={4}
                  className="flex flex-row"
                />
              </div>
            </div>
            <div className="flex flex-row mr-5 mt-5 space-x-3">
              <AiTwotoneLike className="size-6" />
              <AiTwotoneDislike className="size-6" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row space-x-2">
          <div className="w-[60%]">
            <video
              src={currVideo}
              controls
              poster={currPoster}
              className="ring-1 rounded-lg w-full h-[28rem] object-cover text-center"
            />
          </div>
          <div className="ring-1 w-[38%] p-2 rounded-lg">
            {course && course?.lectures.map(lec=>(
              <button className="bg-white flex flex-row p-2 justify-between w-full  rounded-lg" onClick={()=>handleToogle(lec)}>
              <div className="flex flex-row bg-slate-200 p-2 rounded-md">
                <img
                  src={lec?.frontPhoto}
                  alt="frontPhoto"
                  className=" rounded-md w-[12rem] h-[6rem]  mr-2"
                />
                <p className="font-semibold font-serif line-clamp-2">{lec?.title}</p>
              </div>
            </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
