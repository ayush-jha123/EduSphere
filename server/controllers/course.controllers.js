import Course from "../models/courses.model.js";

export const createCourses=async(req,res)=>{
    const {courseName,tutorName,description,price}=req.body;
    try {
        const result=await Course.create({courseName,tutorName,description,price});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json('some error occurred');
    }
}

export const getCourses=async(req,res)=>{
    try {
        const result=await Course.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message:'some error occured'});
    }
}

export const getCourse=async(req,res)=>{
    try {
      const result=await Course.findById(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({message:"Some Error Occured"})
    }
}

export const lecUpload=async(req,res)=>{
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            {
              $push: {
                lectures: {
                  title: req.body.title,
                  frontPhoto: req.body.imgUrl,
                  lecVedio: req.body.videoUrl
                }
              }
            },
            { new: true }
          );
      
          if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
          }
      
          res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({message:'some error occured'});
    }
}

export const deleteCourse=async(req,res)=>{
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'user deletd successfully'});
  } catch (error) {
    res.status(500).json({message:'some error occured'});
  }
}

export const getLectures=async(req,res)=>{
  try {
    const {lectures}=await Course.findById(req.params.id);
    if(lectures) return res.status(200).json(lectures);
    return res.status(400).json({message:"Lectures are not found"});
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteLectures=async(req,res)=>{
  try {
    const { courseId, lectureId } = req.params;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).send('Course not found');
    }
    course.lectures = course.lectures.filter(lecture => lecture._id.toString() !== lectureId);
    await course.save();
    res.status(200).send('Lecture deleted successfully');
  } catch (error) {
    res.status(500).json(error);
  }
}