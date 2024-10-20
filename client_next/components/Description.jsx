'use client'
import React, { useState } from "react";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { PiCalendarDotsBold } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const description = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div className="bg-secondary h-[800px] w-full flex flex-row justify-between">
        <div className="relative left-[100px] top-[80px] ">
          <img src='/description.png' alt="" />
        </div>
        <div className="w-1/2 p-7 rounded-sm   bg-[#F8F8F8] shadow-md">
          <div className="mt-10 mr-8">
            <p className="font-bold text-primary text-[22px]">
              Learn Anything
            </p>
            <p className="font-semibold text-[50px]">
              Benefits About Online Learning Expertise
            </p>
          </div>
          <div className=" flex flex-col h-2/3 gap-3 mt-7">
            <div className="bg-white rounded-sm flex  h-[140px] justify-between px-4 py-3 gap-3 shadow-md hover:bg-primary">
              <div>
                <img src='/bookIcon.jpg' alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-lg">Online Courses</p>
                <p className="text-slate-500 text-base">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-sm flex  h-[140px] justify-between px-4 py-3 gap-3 shadow-md">
              <div>
                <img src='/certificateIcon.jpg' alt="" className="w-[112px]" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-lg">Earn A Certificates</p>
                <p className="text-slate-500 text-base">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-sm flex  h-[140px] justify-between px-4 py-3 gap-3 shadow-md ">
              <div>
                <img src='/sciIcon.jpg' alt="" className="w-[112px]" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-lg">Learn with Expert</p>
                <p className="text-slate-500 text-base">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter brightness-95">
        <div className="w-full bg-hero  min-h-[285px] bg-no-repeat bg-cover bg-center z-[-1]">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="w-full flex p-[82px] justify-around">
              <div className="flex text-white gap-4">
                <div className="flex items-center">
                  <PiStudentBold className=" size-14" />
                </div>
                <div>
                  <div className="text-[32px] font-bold">
                    {counterOn && (
                      <CountUp start={0} end={3000} duration={1} delay={0} />
                    )}
                  </div>
                  <p className="text-[22px] ">SUCCESS STORIES </p>
                </div>
              </div>
              <div className="flex text-white gap-4">
                <div className="flex items-center">
                  <GiTeacher className=" size-14" />
                </div>
                <div>
                  <div className="text-[32px] font-bold">
                    {counterOn && (
                      <CountUp start={0} end={320} duration={1} delay={0} />
                    )}
                  </div>
                  <p className="text-[22px] ">TRUSTED TUTORS </p>
                </div>
              </div>
              <div className="flex text-white gap-4">
                <div className="flex items-center">
                  <PiCalendarDotsBold className=" size-14" />
                </div>
                <div>
                  <div className="text-[32px] font-bold">
                    {counterOn && (
                      <CountUp start={0} end={1000} duration={1} delay={0} />
                    )}
                  </div>
                  <p className="text-[22px] ">SEDHULES </p>
                </div>
              </div>
              <div className="flex text-white gap-4">
                <div className="flex items-center">
                  <HiOutlineLightBulb className=" size-14" />
                </div>
                <div>
                  <div className="text-[32px] font-bold">
                    {counterOn && (
                      <CountUp start={0} end={587} duration={1} delay={0} />
                    )}
                  </div>
                  <p className="text-[22px] ">COURSES </p>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default description;
