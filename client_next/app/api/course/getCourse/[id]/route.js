import Course from "@/models/course";
import { connectToDB } from "@/utilis/database";

export const GET=async (req, { params })=>{
    try {
        await connectToDB();
        const result=await Course.findById(params.id);
        return new Response(JSON.stringify(result),{status:200});
    } catch (error) {
        return new Response('Server Error',{status:500});
    }
}