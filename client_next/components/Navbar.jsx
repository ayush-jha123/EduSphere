"use client";
import React, { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom'
// import { signOut } from '../redux/user/userSlice';
import Link from "next/link";
import { useRouter } from "next/router";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  // const router=useRouter();
  //   const dispatch=useDispatch();
  //   const {currentUser}=useSelector(state=>state.user);
  //   const [user,setUser]=useState(currentUser?.result);
  // console.log(currentUser);

  const handleLogout = (e) => {
    // e.preventDefault();
    // dispatch(signOut());
    // alert('Logged Out Successfully!!');
  };

  return (
    <div className="my-5 w-full flex relative font-[10px]  p-5 rounded-lg drop-shadow-lg bg-primary ring-1 ring-slate-200">
      <div className="flex justify-between w-1/3 text-white">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/">Pricing</Link>
        <Link href="/">Journal</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
      </div>
      <div className="w-2/3 flex justify-end ">
        {/* {currentUser?(
        <button className='absolute right-0 mx-4 font-semibold bg-slate-300 px-7 py-1 rounded-md hover:bg-slate-500' onClick={handleLogout}>LogOut</button>
       ):(
        <Link to='/signup' className='absolute right-0 mx-4 font-semibold bg-slate-300 px-7 py-1 rounded-md hover:bg-slate-500' >LogIn</Link>
       )} */}
        {/* <Link
          href="/"
          className="absolute right-0 mx-4 font-semibold bg-slate-300 px-7 py-1 rounded-md hover:bg-slate-500"
        >
        </Link> */}
        <SignedOut >
          <div className="bg-slate-600 text-white px-6 py-1 rounded-md font-mono hover:ring-2 ring-sky-600">
          <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
