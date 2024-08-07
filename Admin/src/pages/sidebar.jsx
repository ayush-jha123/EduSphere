import React from "react";
import profile from "../assets/profile.jpg";
import {Link} from 'react-router-dom'

const sidebar = () => {
  return ( 
      <div className="bg-white w-full p-5 h-screen rounded-lg">
        <div>
          <h1 className="font-semibold text-[2rem] text-green-500 mb-7">
            EduSphere
          </h1>
          <div className="flex gap-3 px-6 items-center">
            <img src={profile} alt="" className="w-[3.5rem] rounded-full" />
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Ayush Jha</p>
              <p className="font-semibold text-lg text-slate-400">Admin</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <ul className=" w-full text-center text-lg grid grid-cols-1 gap-3">
            <Link to='/dashboard'>
            <li className="bg-slate-200 p-2 rounded-lg text-[1.3rem]">Dashboard</li>
            </Link>
            <Link to='/courses'>
            <li className="bg-slate-200 p-2 rounded-lg text-[1.3rem]">Courses</li>
            </Link>
            <Link to='/user'>
            <li className="bg-slate-200 p-2 rounded-lg text-[1.3rem]">User</li>
            </Link>
            <Link to='/activity'>
            <li className="bg-slate-200 p-2 rounded-lg text-[1.3rem]">Activity</li>
            </Link>
            <Link to='/settings'>
            <li className="bg-slate-200 p-2 rounded-lg text-[1.3rem]">Settings</li>
            </Link>
            
          </ul>
        </div>
      </div>
  );
};

export default sidebar;
