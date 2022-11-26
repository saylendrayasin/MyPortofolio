import React from "react";
import saylendra from "../images/saylendra.png";

function hero() {
  return (
    <section id="home" className="pt-36">
      <div className="container ">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello 👋, I'm
              <span className="block font-bold text-dark text-4xl lg:text-5xl mt-1">
                Saylendra Yasin
              </span>
            </h1>
            <h2 className="font-medium text-slate-900 text-lg mb-5 lg:text-2xl">
              Students |
              <span className="text-teal-900 lg:text-2xl"> Programmer</span> |
              <span className="text-dark lg:text-2xl"> Data Analysis</span>
            </h2>
            <p className="font-medium text-second mb-10 leading-relaxed">
              I'm Saylendra Yasin student of Universitas Klabat with majority
              Informatics
            </p>

            <a
              href="home"
              className="text-base font-semibold text-white bg-blue-900 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:pr-0 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src={saylendra}
                alt="Saylendra Yasin"
                className="max-w-full mx-auto rounded-md"
              />
              <span className="absolute bottom-40 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default hero;
