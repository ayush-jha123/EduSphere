import React from "react";
import Home from "./pages/Home";
import Description from "./pages/description";
import Courses from "./pages/Course/courses";
import Testimonials from "./pages/testimonials";
import AllCourses from "./pages/Course/allCourses";
import Blogs from "./pages/blogs";
import Footer from "./pages/footer";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseDetails from "./pages/Course/CourseDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="*"
          element={
            <>
              <Home />
              <Description />
              <Courses />
              <Testimonials />
              <Blogs />
              <Footer />
            </>
          }
        />
        <Route path="/courses" element={<AllCourses/>}/>
        <Route path='/coursedetails/:id' element={<CourseDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
