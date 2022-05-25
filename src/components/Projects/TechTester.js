import "react-medium-image-zoom/dist/styles.css";
import tt1 from "./tt-assets/tt1.jpg";
import tt2 from "./tt-assets/tt2.jpg";
import tt3 from "./tt-assets/tt3.jpg";
import tt4 from "./tt-assets/tt4.jpg";
import tt5 from "./tt-assets/tt5.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function TechTester() {
  return (
    <div className="mt-12 md:mt-24 mb-6 mx-4 md:mx-12 lg:mx-12 xl:mx-auto max-w-6xl">
      <div className="my-2 md:my-12 text-left text-xl md:text-5xl md:mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">Tech</span> Tester{" "}
        <span className="font-extralight text-sm md:text-3xl">
          <br />
          The ultimate utility for alarm companies: Tech Tester makes your
          day-to-day security and fire system servicing easy and secure.
        </span>
        <br />
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 pt-4 md:pt-28 lg:gap-24 my-4 md:my-12 text-left text-xl md:text-4xl md:mt-4 font-semibold ">
        <div>
          <span className="font-light">The</span> Project{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="mt-4 mb-4">Time: January 2022 - Present</p>
            <a href="https://alarmtechtester.com">
              <button className="border my-2 border-black font-extralight px-3 py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg">
                Visit Tech Tester
              </button>
            </a>
            <br />
            <p className="mt-8">
              Tech Tester is a mobile and web-based utility for alarm companies
              to configure access limits, permissions, and change-logs for their
              team of technicians, while seamlessly integrating with their
              Central Station.
            </p>
            <p className="mt-4">
              We were tasked with building a mobile and web-based application
              that would include features such as work queues, in-app messaging,
              testing utilities, and reporting. The most-requested feature was
              the ability for admins and managers to be able to manage their
              technicians' access to the app. This would give them full control
              over the what the technicans are able to do in the app, what
              information they have access to and when, and even what days and
              times they are able to log in to the app.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-end bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border ttIntro border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 pt-24 lg:gap-2 my-12 text-left text-xl md:text-4xl mt-4 font-semibold text-gray-900 ">
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-start order-2 lg:order-1 bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border ttLogo border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"></div>
        </div>
        <div className="md:mt-8 order-1">
          <span className="font-light">The</span> Process{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="my-8">
              <span className="font-bold">My Role:</span> I am one half of a
              two-person team working on the front-end of this project. I also
              created the first social media posts for this project.
            </p>
            <p className="mt-8">
              The Tech Tester front-end is built using React, GatsbyJS, and
              styled with Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12 md:mt-32 text-left text-xl md:text-4xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">The</span> Result <br />
        <span className="font-extralight text-sm md:text-lg">
          The Tech Tester web and mobile applications are still in development.
          View the marketing website{" "}
          <a
            href="https://alarmtechtester.com"
            className="underline underline-offset-2 hover:font-medium"
          >
            here
          </a>
          . Click to magnify.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-16">
          <Zoom>
            <img src={tt1} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={tt5} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={tt3} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={tt2} alt="" className="border" />
          </Zoom>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <Zoom>
            <img src={tt4} alt="" className="border" />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
