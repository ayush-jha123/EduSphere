import Course from "@/models/course";
import { connectToDB } from "@/utilis/database";

export const POST=async(req)=>{
    const {courseName,tutorName,description,price}=req.body;

    try {
        await connectToDB();
        const result=await Course.create({courseName,tutorName,description,price});
        return new Response(JSON.stringify(result),{status:200});

    } catch (error) {
        return new Response('some error occurred',{status:500});
    }
}