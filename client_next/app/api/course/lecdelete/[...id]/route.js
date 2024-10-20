import Course from "@/models/course";
import { connectToDB } from "@/utilis/database";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    const { courseId, lectureId } = params.id;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).send("Course not found");
    }
    course.lectures = course.lectures.filter(
      (lecture) => lecture._id.toString() !== lectureId
    );
    await course.save();
    await Course.findByIdAndDelete(params.id);
    return new Response("Lectures deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
};
