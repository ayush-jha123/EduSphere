import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./pages/sidebar";
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import User from './pages/User';
import Activity from './pages/Activity'
import Settings from './pages/Settings';
import CreateCourses from "./pages/createCourses";
import AddLectures from "./pages/addLectures";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-row relative">
    <BrowserRouter>
     <div className="w-1/4">
      <Sidebar/>
     </div>
     <div className="w-3/4 overflow-y-auto ">
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/activity" element={<Activity/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/createCourses" element={<CreateCourses/>}/>
        <Route path='/addLectures/:id' element={<AddLectures/>}/>
      </Routes>
     </div>
    </BrowserRouter>
    </div>
  )
}