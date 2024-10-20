import Course from "@/models/course";
import { connectToDB } from "@/utilis/database";

export const GET=async (req)=>{
    try {
        await connectToDB();
        const result=await Course.find();
        return new Response(JSON.stringify(result),{status:200});
    } catch (error) {
        return new Response('Server Error',{status:500});
    }
}