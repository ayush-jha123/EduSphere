import Course from "@/models/course";
import { connectToDB } from "@/utilis/database";

export const POST=async (req,{params})=>{
    try {
        await connectToDB();
        const updatedCourse=await Course.findByIdAndUpdate(
            params.id,
            {
                $push:{
                    lectures:{
                        title: req.body.title,
                        frontPhoto: req.body.imgUrl,
                        lecVedio: req.body.videoUrl
                    }
                }
            },
            {new: true}
        );
        if(!updatedCourse)
        return new Response('Course not Found',{status:404});

        return new Response(JSON.stringify(updatedCourse),{status:200});
    } catch (error) {
        return new Response('Server Error',{status:500});
    }
}