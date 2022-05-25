import { ReactComponent as AritaeLogo } from "./assets/aritae.inline.svg";
import { ReactComponent as AritaeLetters } from "./assets/aritae-letters.inline.svg";
import Dashboard from "./assets/dashboard.png";
import Guidance1 from "./assets/guidance-1.jpg";
import Guidance2 from "./assets/guidance-2.jpg";
import Guidance3 from "./assets/guidance-3.jpg";
import mobile1 from "./assets/mobile1.jpg";
import mobile2 from "./assets/mobile2.jpg";
import mobile3 from "./assets/mobile3.jpg";
import mobile4 from "./assets/mobile4.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ar1 from "./aritae-assets/ar1.jpg";
import ar2 from "./aritae-assets/ar2.jpg";
import ar3 from "./aritae-assets/ar3.jpg";
import ar4 from "./aritae-assets/ar4.jpg";
import ar5 from "./aritae-assets/ar5.jpg";
import ar6 from "./aritae-assets/ar6.jpg";

export default function Aritae() {
  return (
    <div className="mt-12 md:mt-24 mb-6 mx-4 md:mx-12 xl:mx-auto max-w-6xl">
      <div className="my-12 text-left text-xl md:text-5xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">Aritae</span> Self-Leadership Academy{" "}
        <span className="font-extralight text-sm md:text-3xl">
          <br />
          "A community of like-hearted and like-minded individuals that guide
          young people to find the clarity, focus, and power needed to reach
          their potential."
        </span>
        <br />
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 md:pt-28 lg:gap-24 md:my-12 text-left text-xl md:text-4xl mt-4 font-semibold ">
        <div>
          <span className="font-light">The</span> Project{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="mt-4 mb-4">Time: January 2022 - Present</p>
            <a href="https://dev.aritae.com">
              <button className="border my-2 border-black font-extralight px-3 py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg">
                Visit Aritae
              </button>
            </a>
            <br />
            <p className="mt-8">
              The Aritae Self-Leadership Academy is a program for young people
              to learn to understand themselves on a deeper level and create
              plans to hit their future goals. It has previously operated as an
              on-paper and in-person experience, but our client wanted to be
              able to reach more people, and eventually, extend the reach of
              Aritae internationally.
            </p>
            <p className="mt-4">
              We were tasked with re-creating the program as digital,
              interactive experience. The client expressed their need for a
              marketing website, a web application, and a mobile application
              tailored towards their younger audience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-end bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border mountain border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]">
            <AritaeLogo
              fill={"white"}
              className={"h-16 w-auto mx-auto mt-12 md:mt-28 mb-4 items-center"}
            />
            <AritaeLetters
              fill={"white"}
              className={"h-8 w-auto mx-auto mt-10 items-center"}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 pt-24 lg:gap-2 my-12 text-left text-xl md:text-4xl mt-4 font-semibold text-gray-900 ">
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-start order-2 lg:order-1 bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border whiteboard border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"></div>
        </div>
        <div className="md:mt-8 order-1">
          <span className="font-light">The</span> Process{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="my-8">
              <span className="font-bold">My Role:</span> I am one half of a
              two-person team working on the brainstorming, wireframing, and
              creating the front-end of this project.
            </p>
            <p>
              We dedicated a lot of time to creating user flows for all the
              different features of our application, and it paid off when it
              came to wireframing every process in Figma.
            </p>
            <p className="mt-8">
              The Aritae front-end is built using React, GatsbyJS, and styled
              with Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12 mt-32 text-left text-xl md:text-4xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">Wireframes &</span> Mock Ups <br />
        <p className="text-sm font-extralight pt-2 md:text-lg">
          Click to magnify
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-16">
          <Zoom>
            <img src={Dashboard} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={Guidance1} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={Guidance2} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={Guidance3} alt="" className="border" />
          </Zoom>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
          <Zoom>
            <img src={mobile1} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={mobile2} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={mobile3} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={mobile4} alt="" className="border" />
          </Zoom>
        </div>
      </div>

      <div className="my-12 md:mt-32 text-left text-xl md:text-4xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">The</span> Result <br />
        <span className="font-extralight text-sm md:text-lg">
          The Aritae web and mobile applications are still in development. View
          their marketing website{" "}
          <a
            href="https://dev.aritae.com"
            className="underline underline-offset-2 hover:font-medium"
          >
            here
          </a>
          .
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-16">
          <Zoom>
            <img src={ar1} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={ar6} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={ar3} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={ar4} alt="" className="border" />
          </Zoom>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <Zoom>
            <img src={ar5} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={ar2} alt="" className="border" />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
