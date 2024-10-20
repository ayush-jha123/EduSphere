import Course from "@/models/course";
import { connectToDB } from "@/utilis/database";

export const DELETE=async (req,{params})=>{
    try {
        await connectToDB();
        await Course.findByIdAndDelete(params.id);
        return new Response('Course deleted successfully',{status:200});
    } catch (error) {
        return new Response('Server Error',{status:500});
    }
}