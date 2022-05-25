import "react-medium-image-zoom/dist/styles.css";
import aur1 from "./aur-assets/aurify.mp4";
import aur2 from "./aur-assets/aur2.jpg";
import aur3 from "./aur-assets/aur3.jpg";
import aur4 from "./aur-assets/aur4.jpg";
import Zoom from "react-medium-image-zoom";

export default function Aurify() {
  return (
    <div className="mt-12 md:mt-24 mb-6 mx-4 xl:mx-auto max-w-6xl">
      <div className="my-12 text-left text-xl md:text-5xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light"></span> Aurify{" "}
        <span className="font-extralight text-sm md:text-3xl">
          <br />
          Music for your mood
        </span>
        <br />
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 pt-2 md:pt-12 lg:pt-28 lg:gap-24 my-12 text-left text-xl md:text-4xl mt-4 font-semibold ">
        <div>
          <span className="font-light">The</span> Project{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="mt-4 mb-4">Time: April 2022 - Present</p>
            <p className="mt-8">
              Aurify is a web application that can create playlists for you
              based on how you are feeling in a given moment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-end bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border text-3xl lg:text-6xl text-left p-3 text-white font-semibold tracking-widest bg-reddish border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]">
            <span className="font-bold uppercase p-3">Aurify</span>
            <p className="font-extralight text-white p-3 pl-4 text-sm lg:text-xl tracking-widest">
              A mood-based Spotify playlist creator
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 pt-2 md:pt-12 lg:pt-24 lg:gap-2 my-12 text-left text-xl md:text-4xl mt-4 font-semibold text-gray-900 ">
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-start order-2 lg:order-1 bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border spotify border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"></div>
        </div>
        <div className="mt-8 order-1">
          <span className="font-light">The</span> Process{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="my-8">
              <span className="font-bold">My Role:</span> This is a solo project
              that is still in progress.
              <br />
              <br />I am using React for the front-end, tailwind CSS for
              styling, and the Spotify API.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12 md:mt-32 text-left text-xl md:text-4xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">The</span> Result <br />
        <span className="font-extralight text-sm md:text-lg">
          Click to magnify.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-16">
          <Zoom>
            <video width="full" autoPlay={true} loop>
              <source src={aur1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Zoom>
          <Zoom>
            <img src={aur2} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={aur3} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={aur4} alt="" className="border" />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
