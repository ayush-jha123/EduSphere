import mongoose from "mongoose";

const lectureSchema=new mongoose.Schema({
    title:{type:String},
    frontPhoto:{type:String},
    lecVedio:{type:String}
})

const courseSchema=new mongoose.Schema({
    courseName:{type:String},
    tutorName:{type:String},
    description:{type:String},
    price:{type:String},
    lectures:{
        type:[lectureSchema]
    }
},{
    timestamps:true
})

const Course=mongoose.models.course || mongoose.model('course',courseSchema);
export default Course;