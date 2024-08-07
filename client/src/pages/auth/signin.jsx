import React from 'react'
import descImg from '../../assets/description.png';

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../api';
import { signIn } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import OAuth from './OAuth';

const Signin = () => {
  const [formData,setFormData]=useState({});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e)=>{
    e.prevenDefault();
    const response=await signin(formData);
    if(response.status===200){
      dispatch(signIn(response.data));
      alert('You are authenticated Successfully')
      navigate('/');
    }else{
      console.log(response);
      alert('Some Error Occured Try Again!!');
    }
  }
  return (
    <div className='w-full min-h-screen bg-secondary  flex flex-row'>
      <div className='w-1/2 p-10'>
        <img src={descImg} alt="" />
      </div>
      <div className='bg-white w-1/2 min-h-full flex justify-center items-center '>
      <Card
      color="transparent"
      className="justify-center items-center shadow-lg rounded-md"
      style={{ width: "430px" }}
    >
      <Typography variant="h4" color="blue-gray font-semibold text-[2rem]">
        Sign In
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            name="email"
            size="lg"
            placeholder="name@mail.com"
            onChange={handleChange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 ring-1 ring-black"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            name="password"
            type="password"
            size="lg"
            placeholder="********"
            onChange={handleChange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 ring-1 ring-black"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <OAuth/>
        <Button className="mt-6 bg-black" fullWidth onClick={handleSubmit}>
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link to='/signup'>
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
      </div>
    </div>
  )
}

export default Signin;