import "react-medium-image-zoom/dist/styles.css";
import hs1 from "./hs-assets/hs1.jpg";
import hs2 from "./hs-assets/hs2.jpg";
import hs3 from "./hs-assets/hs3.jpg";
import hs4 from "./hs-assets/hs4.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function HelloSyr() {
  return (
    <div className="mt-12 md:mt-24 mb-6 mx-4 md:mx-12 lg:mx-12 xl:mx-auto max-w-6xl">
      <div className="my-12 text-left text-xl md:text-5xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">Hello</span> Syracuse{" "}
        <span className="font-extralight text-sm md:text-3xl">
          <br />
          Let's find something to do this weekend.
        </span>
        <br />
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 pt-2 md:pt-12 lg:pt-28 lg:gap-24 my-12 text-left text-xl md:text-4xl mt-4 font-semibold ">
        <div>
          <span className="font-light">The</span> Project{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="mt-4 mb-4">Time: March 2021 - August 2021</p>
            <a href="https://www.canva.com/design/DAE1Aae-UIY/UP2G6FrZrZwk4ESltMyRjg/view?utm_content=DAE1Aae-UIY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
              <button className="border my-2 border-black font-extralight px-3 py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg">
                View Presentation Deck
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=-qUJ2Taa8og&t=3805s">
              <button className="ml-1 md:ml-2 border my-2 border-black font-extralight px-3 py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg">
                View Presentation Video
              </button>
            </a>
            <br />
            <p className="mt-8">
              Hello Syracuse was my Capstone Project for Hack Upstate's Careers
              in Code bootcamp.
            </p>
            <p className="mt-4">
              I was inspired to create Hello Syracuse because I wanted to help
              answer the question, "What is there to do in Syracuse?", and I
              also wanted to shine a light on events in our community that were
              hard to find and aggregate those into one easily accessible place.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-end bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border hos border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 pt-2 md:pt-12 lg:pt-24 lg:gap-2 my-12 text-left text-xl md:text-4xl mt-4 font-semibold text-gray-900 ">
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-start order-2 lg:order-1 bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border hs-whiteboard border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"></div>
        </div>
        <div className="mt-8 order-1">
          <span className="font-light">The</span> Process{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="my-8">
              <span className="font-bold">My Role:</span> This was a solo
              project. I utilized React, Postgres, Node.js in my project, and
              Bootstrap for styling.
            </p>
            <p className="mt-8">
              My goals were to:
              <ul className="list-disc ml-8 mt-2 text-md">
                <li>Focus on local businesses, groups, and organizations.</li>
                <li>
                  Aggregate all of these events into one place by scraping the
                  web for relevant information.
                </li>
              </ul>
            </p>
            <p className="mt-8">
              I ultimately did this by creating a web-scraper using cheerio, and
              scheduling it to scrape once a day using node-cron.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12 mt-32 text-left text-xl md:text-4xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">The</span> Result <br />
        <span className="font-extralight text-sm md:text-lg">
          Click to magnify.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-16">
          <Zoom>
            <img src={hs1} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={hs2} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={hs3} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={hs4} alt="" className="border" />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
