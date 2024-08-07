import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const createCourses = () => {
  const [course,setCourse]=useState({});
  const navigate=useNavigate();
  const handleChange = (e) => {
    setCourse({...course,[e.target.name]:e.target.value});
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const result=await axios.post('http://localhost:5000/course/createCourses',course);
    navigate('/courses');
  };
  return (
    <>
      <div className=" min-w-screen mx-2 object-contain pr-2 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="shadow object-cover">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div>
                <label
                  htmlFor="courseName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Course Name
                </label>
                <input
                  type="text"
                  name="courseName"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Course Name"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="tutorName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tutor Name
                </label>
                <input
                  type="text"
                  name="tutorName"
                  id="participants"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tutor"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="3"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Description"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="applylink"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="$ 1000"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-center bg-white">
                <button className="bg-blue-400 p-2 px-6 rounded-lg font-semibold text-md hover:bg-blue-600">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default createCourses;
