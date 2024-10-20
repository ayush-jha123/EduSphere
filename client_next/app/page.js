import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Description from "@/components/Description";
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <main>
      <div className=" flex flex-row w-[93%] justify-between mx-14 my-8  ">
        <div className="mt-36 w-1/3">
          <p className="text-slate-100 font-semibold ">WELCOME TO EDUSPHERE</p>
          <p className="text-4xl font-bold my-4 text-slate-50">
            Best Online Education <br /> Expertise
          </p>
          <p className="text-lg text-slate-50">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex flex-row gap-2 mt-3">
            <button className="flex flex-row   w-2/3 bg-primary rounded-[6px] justify-between px-3 py-1 items-center">
              <div className="text-[18px] font-semibold text-white">
                Get Started Now!
              </div>
              <div className="flex align-middle  text-slate-300 ">
                <FaArrowRightLong />
              </div>
            </button>
            <button className="flex flex-row   w-1/3 bg-white rounded-[6px] justify-between py-3 px-2 items-center">
              <div className="text-[18px] font-semibold text-primary">
                View Courses
              </div>
              <div className="flex align-middle text-primary">
                <FaArrowRightLong />
              </div>
            </button>
          </div>
        </div>
        <div className="bg-inherit mt-[45px]">
          <Image
            src="/bgimage.jpg"
            alt="Side Image"
            width={436}
            height={436}
            className="rounded-full"
          />
        </div>
      </div>
      <Description/>
      <Courses/>
      <Testimonials/>
      <Blog/>
    </main>
  );
}
