import { Link } from "react-router-dom";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function Projects() {
  return (
    <div className="mt-20 mb-6 mx-4 xl:mx-auto max-w-6xl grid grid-cols-1 place-items-center justify-center">
      <div className="my-12 justify-self-start  text-left text-xl md:text-5xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">Hi, my name is</span> Sara.{" "}
        <span className="font-extralight text-sm md:text-3xl">
          <br />I am a software developer based in Syracuse, NY.
        </span>
      </div>
      <div className="grid grid-cols-1 mt-2 md:mt-8 justify-center place-items-center mx-24 lg:mx-24 xl:mx-auto md:grid-cols-2 xl:grid-cols-3 gap-2">
        <div className="grid grid-cols-1 order-1 -rotate-6 bg-offwhite shadow-xl hover:z-10 justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <Link
            to="/projects/tech-tester"
            className="mb-16 border bg-mint border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"
          >
            <div className="text-3xl lg:text-4xl text-left p-3 text-white font-semibold tracking-widest  uppercase dark-mode:text-white focus:outline-none">
              <span className="font-light">Tech</span>
              <br />
              <span className="font-bold">Tester</span>
            </div>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              A utility for alarm companies.
            </p>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              Learn More <ArrowNarrowRightIcon className="inline h-4" />
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 order-2 bg-offwhite rotate-12 mb-20 hover:z-10  shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] md:mt-8 lg:p-2 items-center font-light text-lg">
          <Link
            to="/projects/aritae"
            className="mb-16 border bg-reddish border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"
          >
            <div className="text-3xl lg:text-4xl text-left p-3 text-white font-semibold tracking-widest  uppercase dark-mode:text-white focus:outline-none">
              <span className="font-bold">ARITAE</span>
            </div>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              A Self-Leadership Academy for young people.
            </p>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              Learn More <ArrowNarrowRightIcon className="inline h-4" />
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 order-4 md:order-3 mt-12 bg-offwhite hover:z-10 -rotate-4 shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-0 md:mt-8 lg:p-2 items-center font-light text-lg">
          <Link
            to="/projects/alarm-central"
            className="mb-16 border bg-beige border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"
          >
            <div className="text-3xl lg:text-4xl text-left p-3 text-white font-semibold tracking-widest  uppercase dark-mode:text-white focus:outline-none">
              <span className="font-light">Alarm</span>
              <br />
              <span className="font-bold">Central</span>
            </div>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              A mobile app for alarm-system owners.
            </p>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              Learn More <ArrowNarrowRightIcon className="inline h-4" />
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 order-3 md:order-4 -mt-32 bg-offwhite rotate-2 hover:z-10 shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <Link
            to="/projects/hello-syracuse"
            className="mb-16 border bg-orange border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"
          >
            <div className="text-3xl lg:text-4xl text-left p-2 text-white font-semibold tracking-widest  uppercase dark-mode:text-white focus:outline-none">
              <span className="font-light">Hello</span>
              <br />
              <span className="font-bold">Syracuse</span>
            </div>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              An event finder for the Syracuse community.
            </p>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              Learn More <ArrowNarrowRightIcon className="inline h-4" />
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 -mt-12 order-5 bg-offwhite -rotate-12 hover:z-10 shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <Link
            to="/projects/aurify"
            className="mb-16 border bg-lightblue border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"
          >
            <div className="text-3xl lg:text-4xl text-left p-3 text-white font-semibold tracking-widest  uppercase dark-mode:text-white focus:outline-none">
              <span className="font-bold">Aurify</span>
            </div>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              A mood-based Spotify playlist creator.
            </p>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest">
              Learn More <ArrowNarrowRightIcon className="inline h-4" />
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 order-6 -mt-24 bg-offwhite rotate-12 hover:z-10 shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border bg-reddish border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]">
            <div className="text-3xl lg:text-4xl text-left p-3 text-white font-semibold tracking-widest  uppercase dark-mode:text-white focus:outline-none">
              <span className="font-light">More Coming</span>
              <br />
              <span className="font-bold">Soon...</span>
            </div>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-lg tracking-widest"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
