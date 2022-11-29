import React from "react";
import saylendra from "../images/saylendra.png";

function hero(props) {
  console.log(props.dark);
  return (
    <section id="home" className="pt-36 dark:bg-darkMode">
      <div className="container ">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-basefont-semibold text-primary dark:text-white md:text-xl">
              Hello 👋, I'm
              <span className="mt-1 block text-4xl font-bold text-dark dark:text-white lg:text-5xl">
                Saylendra Yasin
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-slate-900 dark:text-white lg:text-2xl">
              Students |
              <span className="text-teal-900 dark:text-white lg:text-2xl">
                {" "}
                Programmer
              </span>
            </h2>
            <p className="mb-10 font-medium leading-relaxed text-second dark:text-white">
              I am Saylendra Yasin, a student at Klabat University who is
              interested in mobile programming, web programming, and data
              science. I come from Indonesia and have a passion to create
              applications that are useful for many people
            </p>

            <a
              href="#contact"
              className="rounded-full bg-dark py-3 px-8 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg dark:text-white"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end rounded-md px-4 lg:w-1/2 lg:pr-0">
            <div className="relative mt-10 overflow-hidden lg:right-0 lg:mt-9">
              <img
                src={saylendra}
                alt="Saylendra Yasin"
                className="my-10 mx-auto max-w-full rounded-3xl dark:shadow-xl dark:shadow-white"
              />
              <span className="absolute bottom-40 left-1/2 -z-10 -translate-x-1/2 md:scale-125">
                {props.dark ? (
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#0c4a6e"
                      d="M35.1,-45.9C45.6,-33.1,54.3,-22.1,59.8,-8C65.2,6,67.4,23.1,61.5,37.5C55.6,51.9,41.5,63.7,25.8,68.1C10.1,72.6,-7.1,69.9,-24.2,64.5C-41.3,59.2,-58.1,51.2,-69.3,37.4C-80.4,23.5,-85.9,3.7,-82.2,-14.1C-78.6,-31.8,-65.8,-47.5,-50.6,-59.5C-35.4,-71.5,-17.7,-79.8,-2.7,-76.6C12.3,-73.5,24.7,-58.8,35.1,-45.9Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                ) : (
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#0c4a6e"
                      d="M35.1,-45.9C45.6,-33.1,54.3,-22.1,59.8,-8C65.2,6,67.4,23.1,61.5,37.5C55.6,51.9,41.5,63.7,25.8,68.1C10.1,72.6,-7.1,69.9,-24.2,64.5C-41.3,59.2,-58.1,51.2,-69.3,37.4C-80.4,23.5,-85.9,3.7,-82.2,-14.1C-78.6,-31.8,-65.8,-47.5,-50.6,-59.5C-35.4,-71.5,-17.7,-79.8,-2.7,-76.6C12.3,-73.5,24.7,-58.8,35.1,-45.9Z"
                      transform="translate(100 100) scale(1.2)"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
