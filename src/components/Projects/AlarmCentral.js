import "react-medium-image-zoom/dist/styles.css";
import ac1 from "./ac-assets/ac1.png";
import ac2 from "./ac-assets/ac2.png";
import ac3 from "./ac-assets/ac3.png";
import ac4 from "./ac-assets/ac4.png";
import ac5 from "./ac-assets/ac5.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function AlarmCentral() {
  return (
    <div className="mt-24 mb-6 mx-4 md:mx-12 xl:mx-auto max-w-6xl">
      <div className="my-12 text-left text-xl md:text-5xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">Alarm</span> Central{" "}
        <span className="font-extralight text-sm md:text-3xl">
          <br />
          An app for end-users of alarm systems that are monitored by USA
          Central Station.
        </span>
        <br />
      </div>

      <div className="grid grid-cols-1 justify-around lg:grid-cols-2 pt-2 md:pt-12 lg:pt-28 lg:gap-24 my-12 text-left text-xl md:text-4xl mt-4 font-semibold ">
        <div>
          <span className="font-light">The</span> Project{" "}
          <div className="font-extralight text-sm md:text-lg">
            <p className="mt-4 mb-4">Time: November 2021 - Present</p>
            <p className="mt-8">
              Alarm Central is a mobile app for alarm system owners. It allows
              them to update their information, view signal history, and cancel
              alarms right from their device.
            </p>
            <p className="mt-4">
              The Alarm Central app had already existed for some time when I
              came on board, but I was tasked with adding new features and
              implementing bug fixes for a new version release of the app.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-end bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border acIntro border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-2 md:pt-24 lg:gap-2 my-12 text-left text-xl md:text-4xl mt-4 font-semibold text-gray-900 ">
        <div className="grid grid-cols-1  justify-self-center lg:justify-self-start order-2 lg:order-1 bg-offwhite shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border acp2 border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]"></div>
        </div>
        <div className="lg:mt-8 order-1">
          <span className="font-light">The</span> Process{" "}
          <div className="font-extralight text-sm md:text-lg">
            <div className="my-8">
              <span className="font-bold">My Role:</span> I worked on the
              Android version of the app. I implemented bug fixes and added new
              features, including but not limited to:
              <ul className="list-disc ml-8 mt-2 text-md">
                <li>
                  Added access to chat view when a new signal is received, where
                  users can chat with others on the account, and cancel alarms
                  directly from this view
                </li>
                <li>Added a 'chat history' view</li>
                <li>
                  Added color-coordinated signal indicators for the different
                  types of signals (burglary, fire, low battery, etc)
                </li>
                <li>Adding the ability to set longer test durations</li>
                <li>
                  Added ability to create, edit, and delete email addresses on
                  the accounts
                </li>
                <li>Added ability to enroll in next notifications</li>
              </ul>
            </div>
            <p className="mt-8">Alarm Central USA is built in Java.</p>
          </div>
        </div>
      </div>

      <div className="my-12 mt-16 lg:mt-32 text-left text-xl md:text-4xl mt-4 font-semibold tracking-widest text-gray-900 ">
        <span className="font-light">The</span> Result <br />
        <span className="font-extralight text-sm md:text-lg">
          Click to magnify.
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-16">
          <Zoom>
            <img src={ac1} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={ac2} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={ac3} alt="" className="border" />
          </Zoom>
          <Zoom>
            <img src={ac4} alt="" className="border" />
          </Zoom>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
          <Zoom>
            <img src={ac5} alt="" className="border" />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
