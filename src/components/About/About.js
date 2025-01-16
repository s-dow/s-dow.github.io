import { NavLink as Link } from "react-router-dom";
import Resume from "./assets/Dow_Resume_2024.pdf";

export default function About() {
  return (
    <div className="my-4 md:my-32 pt-12 mx-4 xl:mx-auto max-w-6xl min-h-fit">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mx-4 md:mx-12 lg:mx-24">
        <div className="grid grid-cols-1 justify-self-center lg:justify-self-start -mt-24 bg-offwhite -rotate-2 hover:z-10 shadow-xl justify-center place-items-center border border-black w-[20rem] h-[21rem] md:w-[24rem] md:h-[25rem] mt-8 lg:p-2 items-center font-light text-lg">
          <div className="mb-16 border profilePhoto border-black w-[18rem] h-[15rem] md:w-[22rem] md:h-[19rem]">
            <div className="text-3xl lg:text-6xl text-left p-3 text-white font-semibold tracking-widest  uppercase dark-mode:text-white focus:outline-none"></div>
          </div>
        </div>
        <div className="text-left text-lg mx-2 md:mx-0 mt-12">
          <div className="flex items-center text-5xl mb-4 font-semibold tracking-widest text-gray-900 ">
            <span className="font-light">About</span>
          </div>
          <p className="font-extralight">
            Hi, I'm Sara. I'm a Senior Web Production Specialist based in
            Syracuse, NY. I specialize in creating and maintaining engaging
            fundraising and event websites for the non-profit sector. With
            expertise in HTML, CSS, and content management systems, I ensure web
            content is both accessible and user-friendly.
          </p>
          <br />
          <p className="font-extralight">
            I love building user-focused solutions, sweating the details, and
            seeing beautiful ideas become reality.
          </p>
          <br />
          <a href={Resume} rel="noopener noreferrer" target="_blank">
            <button
              className="border border-black px-3 font-extralight py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg"
              trailingIcon="picture_as_pdf"
              label="Resume"
            >
              Resume
            </button>
          </a>
          <Link to="/contact">
            <button className="border border-black font-extralight ml-4 px-3 py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
