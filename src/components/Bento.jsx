import button from "../../public/illustration-create-post.webp";
import starIcon from "../../public/illustration-five-stars.webp";
import schedule from "../../public/illustration-schedule-posts.webp";
import platforms from "../../public/illustration-multiple-platforms.webp";
import calender from "../../public/illustration-consistent-schedule.webp";
import ai from "../../public/illustration-ai-content.webp";
import audience from "../../public/illustration-audience-growth.webp";
import followers from "../../public/illustration-grow-followers.webp";

export default function Bento() {
  return (
    <div className=" container mx-auto flex  w-full items-center justify-center h-[100vh]">
      <div className="grid grid-cols-1 h-full w-full gap-9  md:grid-cols-4 grid-rows-8 rounded-lg p-10">
        <div className="col-span-1 row-span-1 md:row-span-4 bg-yellow-100 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col justify-center w-2/3">
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

        <div className="col-span-2 row-span-3 bg-purple-500 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col text-white justify-center items-center">
            <p className="text-base md:text-6xl font-DMSansRegular font-light mb-2">
              Social Media <span className="text-yellow-300">10x</span>
            </p>
            <p className="text-base md:text-6xl font-DMSansRegular font-light mb-4">
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

        <div className="col-span-1 row-span-6 bg-purple-100 rounded-lg flex items-center justify-center">
          <div className="">
            <div className=" flex flex-col overflow-hidden gap-6">
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

        <div className="col-span-1 row-span-3 bg-white rounded-lg flex items-center justify-center">
          <div className=" flex flex-col w-full h-full p-10">
            <div className=" flex flex-col gap-3">
              <img src={platforms} />
              <p className="text-base md:text-3xl font-DMSansMedium font-bold w-3/4 ">
                Manage multiple accounts and platforms.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-3 bg-yellow-500 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col w-full h-full p-10 overflow-hidden">
            <div className=" flex flex-col">
              <p className="text-base md:text-3xl font-DMSansMedium font-bold w-3/4 ">
                Maintain a consistent posting schedule
              </p>

              <img src={calender} className="mt-2 md:translate-y-8" />
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-5 bg-yellow-500 rounded-lg flex items-center justify-center">
          <div className=" flex flex-col w-full h-full p-10 overflow-hidden">
            <div className=" flex flex-col gap-3">
              <p className="text-base md:text-4xl font-DMSansRegular font-bold w-3/4">
                Write your content using AI
              </p>

              <img src={ai} className="mt-3" />
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-3 bg-white rounded-lg flex items-center justify-center">
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

        <div className="col-span-2 row-span-3 bg-purple-500 rounded-lg flex items-center justify-center">
          <div className=" ">
            <div className=" flex justify-between gap-4 p-10">
              <img src={followers} className=" w-2/6" />
              <p className=" text-white text-base md:text-5xl font-DMSansRegular w-3/6">
                Grow followers with non-stop content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
