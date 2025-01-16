import Resume from "../About/assets/Dow-Resume-2022.pdf";

export default function Contact() {
  return (
    <div className="pt-10 md:pt-20 mx-6 md:mx-12 lg:mx-auto max-w-4xl">
      <div className="grid grid-cols-1">
        <div className="my-8 md:my-12 text-left text-xl md:text-5xl mt-4 font-semibold tracking-widest text-gray-900 ">
          <span className="font-light">Get in</span> Touch{" "}
          <span className="font-extralight text-sm md:text-3xl">
            <br />
            Don't hesitate to reach out, I'd love to hear from you.
          </span>
          <br />
        </div>
        <div className="text-left text-2xl">
          <ul className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 mt-2 items-start my-8">
              <div className="grid grid-cols-2 md:grid-cols-1 mt-8 md:mt-18 md:my-16 my-4 gap-4 md:gap-0 md:space-y-8 justify-center items-start">
                <a className="w-full" href="https://linkedin.com/in/sara-dow">
                  <button className="w-full md:w-1/2 border border-black px-3 font-extralight py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg">
                    LinkedIn
                  </button>
                </a>
                <a className="w-full" href="https://github.com/s-dow">
                  <button className="w-full md:w-1/2  border border-black px-3 font-extralight py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg">
                    GitHub
                  </button>
                </a>
                <a className="w-full" href="mailto:sarajanedw@gmail.com">
                  <button className="w-full md:w-1/2  border border-black px-3 font-extralight py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg">
                    Email
                  </button>
                </a>
                <a
                  className="w-full"
                  href={Resume}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button
                    className="w-full md:w-1/2  border border-black px-3 font-extralight py-1 rounded-sm hover:bg-gray-800 hover:opacity-90 hover:text-white shadow-lg"
                    trailingIcon="picture_as_pdf"
                    label="Resume"
                  >
                    Resume
                  </button>
                </a>
              </div>
              <form
                action="https://formspree.io/f/xyyolbgz"
                method="POST"
                className="w-full col-span-2 my-8 md:my-16"
              >
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="
                        w-full
                        rounded-sm
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-black
                        outline-none shadow-lg
                        "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="
                        w-full
                        rounded-sm
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-black
                        outline-none shadow-lg
                        "
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Message"
                    className="
                        w-full
                        rounded-sm
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-black
                        resize-none
                        outline-none shadow-lg
                        "
                  ></textarea>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="
                        w-full
                        text-black
                        bg-primary
                        rounded-sm
                        border border-black
                        outline-none shadow-lg
                        p-3
                        transition
                        hover:bg-gray-800 hover:opacity-90 hover:text-white
                        text-md
                        font-extralight
                        "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
