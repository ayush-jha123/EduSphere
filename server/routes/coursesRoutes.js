import express from "express";
import { createCourses, getCourses,lecUpload,deleteCourse,getLectures,deleteLectures,getCourse } from "../controllers/course.controllers.js";

const router=express.Router();

router.post('/createCourses',createCourses);
router.post('/lecUpload/:id',lecUpload);
router.get('/getCourses',getCourses);
router.get('/getCourse/:id',getCourse);
router.delete('/deleteCourse/:id',deleteCourse);
router.get('/getLecCourse/:id',getLectures);
router.delete('/lecdelete/:courseId/:lectureId',deleteLectures);

export default router;