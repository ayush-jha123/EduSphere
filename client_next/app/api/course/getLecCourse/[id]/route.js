import Course from "@/models/course";
import { connectToDB } from "@/utilis/database";

export const GET=async (req, { params })=>{
    try {
        await connectToDB();
        const {lectures}=await Course.findById(params.id);
        if(lectures)return new Response(JSON.stringify(lectures),{status:200});
        return new Response('Lectures are not found',{status:400});
    } catch (error) {
        return new Response('Server Error',{status:500});
    }
}