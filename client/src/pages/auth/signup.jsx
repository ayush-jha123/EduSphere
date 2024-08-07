import React, { useState } from "react";
import descImg from "../../assets/description.png";
import { signup } from "../../api";
import { signUp } from "../../redux/user/userSlice";
import {useDispatch} from 'react-redux';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "./OAuth";

const SignUp = () => {
  const [formData,setFormData]=useState({});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response=await signup(formData);
      console.log(response);
      if(response.status===200){
        dispatch(signUp(response.data));
        alert('You are authenticated Successfully')
        navigate('/');
      }else{
        console.log(response);
        alert('Some Error Occured Try Again1!!');
      }
    } catch (error) {
      console.log(error);
      alert('Some Error Occured Try Again2!!');
    }
  };
  return (
    <div className="w-full min-h-screen bg-secondary  flex flex-row">
      <div className="w-1/2 p-10">
        <img src={descImg} alt="" />
      </div>
      <div className="bg-white w-1/2 min-h-full flex justify-center items-center ">
        <Card
          color="transparent"
          className="justify-center items-center shadow-lg rounded-md"
          style={{ width: "430px" }}
        >
          <Typography
            variant="h4"
            color="blue-gray"
            className="font-semibold text-[25px]"
          >
            Sign Up
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                name="name"
                size="lg"
                placeholder="Your Name"
                className=" !border-t-blue-gray-200 
            focus:!border-t-gray-900
            ring-1 ring-black"
                onChange={handleChange}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
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

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Confirm Password
              </Typography>
              <Input
                name="confirmPassword"
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
            <Button className="mt-2 bg-black" fullWidth onClick={handleSubmit}>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account? <Link to="/signin">Sign In</Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
