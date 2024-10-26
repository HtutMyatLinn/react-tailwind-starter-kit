import React from "react";
import button from "../../public/illustration-create-post.webp";
import starIcon from "../../public/illustration-five-stars.webp";
import schedule from "../../public/illustration-schedule-posts.webp";
import platforms from "../../public/illustration-multiple-platforms.webp";
import calender from "../../public/illustration-consistent-schedule.webp";
import ai from "../../public/illustration-ai-content.webp";
import audience from "../../public/illustration-audience-growth.webp";
import followers from "../../public/illustration-grow-followers.webp";

const Bento2 = () => {
  return (
    <div className="container mx-auto p-4 sm:p-10">
      <div className="flex flex-col sm:grid sm:grid-cols-12 sm:grid-rows-10 gap-8 sm:h-[100vh]">
        <div className="  sm:col-span-3 sm:row-span-5 order-7 sm:order-none  bg-yellow-100 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col justify-center w-2/3 p-4 md:p-0">
            <p className="text-base md:text-4xl font-DMSansRegular font-bold text-left">
              Create and schedule
            </p>
            <p className="text-base md:text-4xl font-DMSansRegular font-bold flex flex-col text-left">
              content
              <p className=" text-base md:text-2xl font-DMSansMediumItalic text-purple-500">
                quicker
              </p>
            </p>
            <div className="">
              <div className="">
                <img src={button} className=" w-40 h-20 mt-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="  sm:col-span-3 sm:row-span-5 sm:col-start-1 sm:row-start-6 order-8 sm:order-none bg-yellow-500 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col w-full h-full p-10 overflow-hidden">
            <div className=" flex flex-col gap-3">
              <p className="text-base md:text-4xl font-DMSansRegular font-bold w-3/4">
                Write your content using AI
              </p>

              <img src={ai} className="mt-3" />
            </div>
          </div>
        </div>
        <div className="  sm:col-span-6 sm:row-span-4 sm:col-start-4 sm:row-start-1 order-1 sm:order-none  bg-purple-500 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col text-white justify-center items-center p-4">
            <p className="text-3xl  md:text-6xl font-DMSansRegular font-light mb-2">
              Social Media <span className="text-yellow-300">10x</span>
            </p>
            <p className="text-3xl md:text-6xl font-DMSansRegular font-light mb-4">
              <span className=" font-DMSansItalicVariable font-light">
                Faster
              </span>{" "}
              with AI
            </p>
            <div className="flex flex-col justify-center items-center mt-2 gap-1">
              <img src={starIcon} className="w-1/2" />
              <p className=" text-slate-300 font-DMSansRegular text-center tracking-wider">
                Over 4,000 5 star reviews
              </p>
            </div>
          </div>
        </div>
        <div className="  sm:col-span-3 sm:row-span-3 sm:col-start-4 sm:row-start-5 order-2 sm:order-none bg-white rounded-lg flex items-center justify-center">
          <div className=" flex flex-col w-full h-full p-10">
            <div className=" flex flex-col gap-3">
              <img src={platforms} className="" />
              <p className="text-base md:text-3xl font-DMSansMedium font-bold w-3/4 ">
                Manage multiple accounts and platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="  sm:col-span-3 sm:row-span-3 sm:col-start-7 sm:row-start-5 order-3 sm:order-none bg-yellow-500 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col w-full h-full p-10 overflow-hidden">
            <div className=" flex flex-col">
              <p className="text-base md:text-3xl font-DMSansMedium font-bold w-3/4 ">
                Maintain a consistent posting schedule
              </p>
              <img src={calender} className="mt-2" />
            </div>
          </div>
        </div>
        <div className="  sm:col-span-3 sm:row-span-3 sm:col-start-4 sm:row-start-8 order-6 sm:order-none bg-white rounded-lg flex items-center justify-center">
          <div className=" flex flex-col w-full h-full p-10 overflow-hidden">
            <div className=" flex flex-col gap-3">
              <p className="text-base md:text-6xl font-DMSansMedium font-bold flex gap-2">
                <span className=" flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M228,128a12,12,0,0,1-6.86,10.84l-152,72a12,12,0,0,1-10.27-21.69L188,128,58.87,66.85A12,12,0,0,1,69.14,45.16l152,72A12,12,0,0,1,228,128Z"></path>
                  </svg>
                </span>
                56%
              </p>
              <div className="">
                <p className="">faster audience growth</p>
              </div>
              <img src={audience} className="mt-3 w-2/3" />
            </div>
          </div>
        </div>
        <div className="  sm:col-span-6 sm:row-span-3 sm:col-start-7 sm:row-start-8 order-5 sm:order-none bg-purple-500 rounded-lg flex items-center justify-center">
          <div className=" flex  md:justify-between gap-4 p-10">
            <img src={followers} className=" w-2/6" />
            <p className=" text-white text-2xl md:text-5xl font-DMSansRegular w-3/6">
              Grow followers with non-stop content.
            </p>
          </div>
        </div>
        <div className="  sm:col-span-3 sm:row-span-7 sm:col-start-10 sm:row-start-1 order-4 sm:order-none bg-purple-100 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col overflow-hidden gap-6 p-4 md:p-0">
            <p className=" font-DMSansRegular text-base md:text-4xl font-bold pl-10 pr-5 w-3/4">
              Schedule to social media.
            </p>
            <img src={schedule} className=" translate-x-10" />
            <p className=" font-DMSansRegular text-base w-3/4 pl-10">
              Optimize post timings to publish content at the perfect time for
              <br />
              your audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento2;
