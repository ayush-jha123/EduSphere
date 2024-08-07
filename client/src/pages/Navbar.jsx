import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from '../redux/user/userSlice';

const Navbar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {currentUser}=useSelector(state=>state.user);
  const [user,setUser]=useState(currentUser?.result);
  // console.log(currentUser);
  
  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(signOut());
    alert('Logged Out Successfully!!');
  }

  return (
    <div className='my-5 w-full flex relative font-[10px]  p-5 rounded-lg drop-shadow-lg bg-primary ring-1 ring-slate-200'>
      <div className='flex justify-between w-1/3 text-white'>
        <Link to='/'>Home</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/'>Pricing</Link>
        <Link to='/'>Journal</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>About</Link>
      </div>
      <div className='w-2/3'>
      {currentUser?(
        <button className='absolute right-0 mx-4 font-semibold bg-slate-300 px-7 py-1 rounded-md hover:bg-slate-500' onClick={handleLogout}>LogOut</button>
      ):(
        <Link to='/signup' className='absolute right-0 mx-4 font-semibold bg-slate-300 px-7 py-1 rounded-md hover:bg-slate-500' >LogIn</Link>
      )}
      </div>
    </div>
  )
}

export default Navbar