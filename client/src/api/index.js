import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signup = async (formData) => {
  try {
    const response = await API.post('/user/signup', formData);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const signin=async(formData)=>{
  try {
    const response=await API.post('/user/signin',formData);
    return response;
  } catch (error) {
    throw(error)
  }
}

export const googleAuth=async(formData)=>{
  try {
    const response=await API.post('/user/google',formData);
    return response;
  } catch (error) {
    throw(error);
  }
}

export const fetchAllCourses=async ()=>{
  try {
    const response=await API.get('/course/getCourses');
    return response;
  } catch (error) {
    throw(error)
  }
}

export const fetchCourse=async(id)=>{
  try {
    const response=await API.get(`/course/getCourse/${id}`);
    return response;
  } catch (error) {
    throw(error)
  }
}



